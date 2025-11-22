# 🔧 Build Error Fix - Environment Variables Missing

## ❌ Error:
```
Error: @supabase/ssr: Your project's URL and API key are required to create a Supabase client!
```

## ✅ Solution: Environment Variables Add කරන්න

Build fail වෙනවා because environment variables add කරලා නැහැ!

---

## 📝 Step 1: Vercel Dashboard Open කරන්න

1. **Vercel dashboard** open කරන්න:
   **https://vercel.com/dashboard**

2. **Your project** click කරන්න (`sltc-voting`)

---

## 📝 Step 2: Environment Variables Add කරන්න

1. **Settings** tab click කරන්න

2. **Environment Variables** click කරන්න (left sidebar)

3. **මේ 4 variables add කරන්න:**

### Variable 1: Supabase URL
- **Key:** `NEXT_PUBLIC_SUPABASE_URL`
- **Value:** `https://kgmlxheayuzmklzkmzkp.supabase.co`
- **Environments:** 
  - ✅ Production
  - ✅ Preview
  - ✅ Development
- **Add** button click කරන්න

### Variable 2: Supabase Anon Key
- **Key:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbWx4aGVheXV6bWtsemttemtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3Mzg5MDksImV4cCI6MjA3OTMxNDkwOX0.qDK3oBPqkmlVCcLpWE9sCEup1u1-FJCIXMCgIs-g5_k`
- **Environments:** 
  - ✅ Production
  - ✅ Preview
  - ✅ Development
- **Add** button click කරන්න

### Variable 3: Service Role Key
- **Key:** `SUPABASE_SERVICE_ROLE_KEY`
- **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbWx4aGVheXV6bWtsemttemtwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzczODkwOSwiZXhwIjoyMDc5MzE0OTA5fQ.eSJGhCpDWfqmf3SmSiiUfJLoYgAWxqKondB3FIunoq0`
- **Environments:** 
  - ✅ Production
  - ✅ Preview
  - ✅ Development
- **Add** button click කරන්න

### Variable 4: Site URL
- **Key:** `NEXT_PUBLIC_SITE_URL`
- **Value:** ඔයාගේ Vercel URL එක
  - උදා: `https://sltc-voting-xxxxx.vercel.app`
  - Vercel dashboard → **Domains** section එකේ තියෙනවා
- **Environments:** 
  - ✅ Production
  - ✅ Preview
  - ✅ Development
- **Add** button click කරන්න

---

## 📝 Step 3: Redeploy කරන්න

Environment variables add කරපුවට පස්සේ:

1. **Deployments** tab click කරන්න

2. **Latest deployment** click කරන්න

3. **"..."** (three dots menu) click කරන්න

4. **"Redeploy"** select කරන්න

5. **"Redeploy"** button click කරන්න

6. **Wait කරන්න** (2-3 minutes)

✅ **Build successful වෙනවා!**

---

## ⚠️ Important Notes:

1. **All 3 environments select කරන්න:**
   - Production
   - Preview
   - Development

2. **Variable names exact වෙනවා:**
   - `NEXT_PUBLIC_SUPABASE_URL` (exact spelling)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (exact spelling)
   - `SUPABASE_SERVICE_ROLE_KEY` (exact spelling)
   - `NEXT_PUBLIC_SITE_URL` (exact spelling)

3. **Values copy කරන්න:**
   - No spaces
   - No extra characters
   - Exact values only

---

## ✅ After Fix:

1. ✅ Environment variables add කරලා තියෙනවා
2. ✅ All environments select කරලා තියෙනවා
3. ✅ Redeploy කරලා තියෙනවා
4. ✅ Build successful වෙනවා
5. ✅ App live වෙනවා!

---

## 🆘 Still Not Working?

1. **Check variable names:**
   - Exact spelling check කරන්න
   - No typos

2. **Check environments:**
   - All 3 environments select කරලා තියෙනවාද?

3. **Check values:**
   - No extra spaces
   - Complete values

4. **Redeploy:**
   - Always redeploy after adding variables

**මේ steps follow කරන්න - Build successful වෙනවා!** 🚀

