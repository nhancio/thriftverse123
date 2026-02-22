# Deploying Thryft at thryft.life

To fix **"This site can't be reached"** / **DNS_PROBE_FINISHED_NXDOMAIN**, the domain must point to your hosting. Follow these steps.

---

## 1. Deploy the app to a host

Deploy this repo to one of:

- **Vercel** – Connect the repo, build command: `npm run build`, output: `dist`
- **Netlify** – Connect the repo, build: `npm run build`, publish: `dist`
- **Lovable** – Project → Share → Publish, then add custom domain in Settings → Domains

Your host will give you a **default URL** (e.g. `your-app.vercel.app`) and a way to add a **custom domain**.

---

## 2. Point thryft.life to your host (DNS)

Where you bought **thryft.life** (GoDaddy, Namecheap, Google Domains, etc.):

1. Open **DNS settings** for `thryft.life`.
2. Add one of the following (your host’s docs will say which):

   **Option A – CNAME (recommended for Vercel/Netlify)**  
   - Type: `CNAME`  
   - Name: `@` (or leave blank for root)  
   - Value: the host’s target, e.g.:
     - Vercel: `cname.vercel-dns.com`
     - Netlify: `apex-loadbalancer.netlify.com`  
   - Some hosts only allow CNAME on `www`. If so, add:
     - Name: `www` → Value: `your-app.vercel.app` (or your Netlify/Vercel URL)

   **Option B – A record**  
   - Type: `A`  
   - Name: `@`  
   - Value: the **IP** your host gives you for custom domains.

3. Save and wait **5–60 minutes** for DNS to update.  
   Check with: [https://dnschecker.org](https://dnschecker.org) for `thryft.life`.

4. In your **hosting dashboard**, add the custom domain **thryft.life** (and optionally **www.thryft.life**). The host will verify DNS and enable HTTPS.

---

## 3. Login redirect (localhost vs production)

The app is set up so that **after Google login**, users are sent back to the same origin they started from:

- **Local dev** (`npm run dev` → http://localhost:8080): redirects back to **http://localhost:8080** (and the same path they were on).
- **Production** (https://thryft.life): redirects back to **https://thryft.life** (and the same path).

So you don’t get sent to a different URL (e.g. thryft1.netlify.app) after login. For this to work, **Supabase Redirect URLs** must include every origin you use (see below).

---

## 4. Supabase (Google login and API)

1. Open [Supabase Dashboard](https://supabase.com/dashboard) → your project.
2. Go to **Authentication → URL Configuration**.
   - **Site URL** (default after login): set to your main production URL, e.g. `https://thryft.life`.
   - **Redirect URLs** (allowed origins after login): add **every** URL where the app runs (one per line). Supabase will only redirect to these.
     - Local dev: `http://localhost:8080`
     - Production: `https://thryft.life/**` and `https://www.thryft.life/**`
     - If you use a staging URL (e.g. Netlify): `https://thryft1.netlify.app/**`
     - Use `/**` so all paths (e.g. `/product/123`) are allowed.

   Example list:
   ```
   http://localhost:8080
   https://thryft.life/**
   https://www.thryft.life/**
   https://thryft1.netlify.app/**
   ```

3. Save. Redeploy or refresh the app after changing these.

---

## 5. Google Cloud Console (GCP) – OAuth client

Google only needs to know about **Supabase’s callback URL**, not your app’s URLs. The “redirect back to your app” is handled by Supabase (using the Redirect URLs above).

1. Open [Google Cloud Console](https://console.cloud.google.com/) → your project → **APIs & Services** → **Credentials**.
2. Open the **OAuth 2.0 Client ID** you use for Thryft (e.g. “Web client”).
3. Under **Authorized redirect URIs** add **only** the Supabase auth callback (no localhost or thryft.life here):
   - `https://<YOUR_SUPABASE_PROJECT_REF>.supabase.co/auth/v1/callback`
   - Example: `https://kvymfacvbpbrblxqyvmb.supabase.co/auth/v1/callback`
4. **Authorized JavaScript origins** (if required): add the origins where the app runs, e.g.:
   - `http://localhost:8080`
   - `https://thryft.life`
   - `https://www.thryft.life`
   - `https://thryft1.netlify.app`
5. Save.

After this, login from localhost returns to localhost; login from thryft.life returns to thryft.life.

---

## 6. Checklist

- [ ] App deployed (Vercel / Netlify / Lovable / other).
- [ ] DNS for **thryft.life** points to that host (CNAME or A record).
- [ ] Custom domain **thryft.life** added and verified in the host dashboard.
- [ ] Supabase **Site URL** and **Redirect URLs** include `https://thryft.life` and `https://www.thryft.life`.
- [ ] After DNS propagates, open **https://thryft.life** (use `https://`).

If the browser still says "This site can't be reached", the cause is almost always DNS (step 2) not finished or not correct. Double-check the CNAME/A value and wait a bit longer for propagation.
