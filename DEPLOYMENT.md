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

## 3. Supabase (Google login and API)

So login and API work on **https://thryft.life**:

1. Open [Supabase Dashboard](https://supabase.com/dashboard) → your project.
2. **Authentication → URL Configuration**
   - **Site URL**: `https://thryft.life`
   - **Redirect URLs**: add:
     - `https://thryft.life/**`
     - `https://www.thryft.life/**`
3. **Authentication → Providers → Google**  
   - In the Google Cloud Console, add to **Authorized redirect URIs**:
     - `https://kvymfacvbpbrblxqyvmb.supabase.co/auth/v1/callback`  
   (Use your actual Supabase project URL if different.)

Redeploy or refresh the site after changing Supabase settings.

---

## 4. Checklist

- [ ] App deployed (Vercel / Netlify / Lovable / other).
- [ ] DNS for **thryft.life** points to that host (CNAME or A record).
- [ ] Custom domain **thryft.life** added and verified in the host dashboard.
- [ ] Supabase **Site URL** and **Redirect URLs** include `https://thryft.life` and `https://www.thryft.life`.
- [ ] After DNS propagates, open **https://thryft.life** (use `https://`).

If the browser still says "This site can't be reached", the cause is almost always DNS (step 2) not finished or not correct. Double-check the CNAME/A value and wait a bit longer for propagation.
