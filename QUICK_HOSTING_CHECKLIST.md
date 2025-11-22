# Quick Hosting Checklist - Fast Fix! ⚡

## 🚀 මේක follow කරන්න - Step by Step

### ✅ Step 1: GitHub Check (2 minutes)

1. **GitHub repository open කරන්න**
   - URL: `https://github.com/YOUR_USERNAME/sltc-voting`

2. **Structure check කරන්න:**
   - [ ] `app/` folder root එකේ තියෙනවාද?
   - [ ] `package.json` root එකේ තියෙනවාද?
   - [ ] `next.config.mjs` root එකේ තියෙනවාද?

**❌ නැති නම්:** Files root එකට move කරන්න (හො `HOSTING_FIX_COMPLETE.md` file එක check කරන්න)

---

### ✅ Step 2: Vercel Project Setup (5 minutes)

1. **Vercel dashboard open කරන්න**
   - URL: `https://vercel.com/dashboard`

2. **Project import කරන්න:**
   - [ ] GitHub repository select කරලා තියෙනවාද?
   - [ ] **Root Directory** correct ද?
     - Files root එකේ නම්: **Empty** (හො `/`)
     - Files subfolder එකේ නම්: Folder name (උදා: `sltcvotingsystem1 (1)`)
   - [ ] **Deploy** button click කරලා තියෙනවාද?

3. **First deployment wait කරන්න** (2-3 minutes)
   - ⚠️ Fail වෙන්න පුළුවන් - Normal!

---

### ✅ Step 3: Environment Variables (5 minutes) - **මේක ඉතාම Important!**

1. **Vercel dashboard → Project → Settings → Environment Variables**

2. **4 Variables add කරන්න:**

   **Variable 1:**
   - Key: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: `https://kgmlxheayuzmklzkmzkp.supabase.co`
   - Environments: ✅ All (Production, Preview, Development)
   - [ ] Added?

   **Variable 2:**
   - Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbWx4aGVheXV6bWtsemttemtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3Mzg5MDksImV4cCI6MjA3OTMxNDkwOX0.qDK3oBPqkmlVCcLpWE9sCEup1u1-FJCIXMCgIs-g5_k`
   - Environments: ✅ All
   - [ ] Added?

   **Variable 3:**
   - Key: `SUPABASE_SERVICE_ROLE_KEY`
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbWx4aGVheXV6bWtsemttemtwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzczODkwOSwiZXhwIjoyMDc5MzE0OTA5fQ.eSJGhCpDWfqmf3SmSiiUfJLoYgAWxqKondB3FIunoq0`
   - Environments: ✅ All
   - [ ] Added?

   **Variable 4:**
   - Key: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://YOUR-PROJECT-NAME.vercel.app` (Vercel එකෙන් දුන්න URL එක)
   - Environments: ✅ All
   - [ ] Added?

---

### ✅ Step 4: Redeploy (2 minutes)

1. **Vercel dashboard → Deployments**
2. **Latest deployment → "..." → "Redeploy"**
3. **Wait කරන්න** (2-3 minutes)
4. [ ] Build successful වෙනවාද?

---

### ✅ Step 5: Supabase Update (3 minutes)

1. **Supabase dashboard open කරන්න**
   - URL: `https://supabase.com/dashboard`

2. **Project select කරන්න:**
   - Project: `kgmlxheayuzmklzkmzkp`

3. **Settings → Auth → URL Configuration**

4. **Redirect URLs add කරන්න:**
   ```
   https://YOUR-PROJECT-NAME.vercel.app/**
   https://YOUR-PROJECT-NAME.vercel.app/reset-password
   https://YOUR-PROJECT-NAME.vercel.app/student
   https://YOUR-PROJECT-NAME.vercel.app/admin
   ```
   - [ ] Added?

5. **Save** button click කරන්න
   - [ ] Saved?

---

## 🎉 Done!

දැන් ඔයාගේ app live වෙලා තියෙනවා!

**Check කරන්න:**
- [ ] Vercel URL එක open කරන්න
- [ ] App load වෙනවාද?
- [ ] Login work වෙනවාද?

---

## 🆘 Still Not Working?

### Error Messages Check කරන්න:

**1. Build Error:**
- Vercel → Deployments → Logs
- Error message copy කරගන්න
- `HOSTING_FIX_COMPLETE.md` file එකේ "Common Problems" section එක check කරන්න

**2. Runtime Error:**
- Browser → F12 → Console
- Error messages check කරන්න

**3. Login Not Working:**
- Supabase redirect URLs check කරන්න
- `NEXT_PUBLIC_SITE_URL` correct ද check කරන්න

---

## 📞 Help Needed?

1. Vercel build logs share කරන්න
2. Browser console errors share කරන්න
3. GitHub repository URL share කරන්න

**මට help කරන්න පුළුවන්!** 🚀

