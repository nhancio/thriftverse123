import { useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { upsertUser } from "@/lib/supabase-products";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

/** Parse auth error from URL (Supabase redirects here with ?error=... or #error=...) */
function getAuthErrorFromUrl(): string | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams((window.location.hash || "").replace(/^#/, ""));
  const error = params.get("error") || hashParams.get("error");
  const desc = params.get("error_description") || hashParams.get("error_description");
  if (error) return desc ? `${error}: ${decodeURIComponent(desc)}` : error;
  return null;
}

/** Remove auth error query params and hash from URL without reload */
function clearAuthErrorFromUrl() {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  url.searchParams.delete("error");
  url.searchParams.delete("error_code");
  url.searchParams.delete("error_description");
  url.hash = "";
  window.history.replaceState({}, "", url.pathname + url.search);
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(!!SUPABASE_URL);
  const [authError, setAuthError] = useState<string | null>(null);

  // Detect auth callback errors in URL and clear them so the app stays usable
  useEffect(() => {
    const message = getAuthErrorFromUrl();
    if (message) {
      setAuthError(message);
      clearAuthErrorFromUrl();
      toast.error("Sign-in failed. Please try again.");
      // Clear error after 8s so user can try again without stale message
      const t = setTimeout(() => setAuthError(null), 8000);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (!SUPABASE_URL) {
      setLoading(false);
      return;
    }
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setUser(s?.user ?? null);
      if (s?.user) syncUser(s.user);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setUser(s?.user ?? null);
      if (s?.user) syncUser(s.user);
    });

    return () => subscription.unsubscribe();
  }, []);

  /** Sync auth user to our public.users table */
  const syncUser = (authUser: User) => {
    const meta = authUser.user_metadata;
    upsertUser({
      id: authUser.id,
      name: meta?.full_name ?? meta?.name ?? authUser.email ?? "User",
      email: authUser.email ?? "",
      avatar: meta?.avatar_url ?? "",
      location: "", // filled later via LocationPrompt
    });
  };

  const signInWithGoogle = async () => {
    if (!SUPABASE_URL) {
      console.warn("Thryft: VITE_SUPABASE_URL is not set; login is disabled.");
      return;
    }
    // Redirect back to current origin after login (localhost in dev, thryft.life in production)
    const redirectTo = typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname || "/"}`
      : undefined;
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: redirectTo ? { redirectTo } : undefined,
    });
  };

  const signOut = async () => {
    if (!SUPABASE_URL) return;
    await supabase.auth.signOut();
  };

  return { user, session, loading, signInWithGoogle, signOut, authError };
}
