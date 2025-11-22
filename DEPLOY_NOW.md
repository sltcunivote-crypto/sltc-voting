# 🚀 Deploy Now - Step by Step Guide

මේ guide එක follow කරන්න - App එක host කරන්න!

---

## ✅ Step 1: GitHub Check (2 minutes)

### 1.1 Repository Structure
1. GitHub repository open කරන්න
2. Structure check කරන්න:

**✅ Correct Structure:**
```
repository/
  ├── app/
  ├── components/
  ├── lib/
  ├── public/
  ├── package.json
  ├── next.config.mjs
  └── vercel.json
```

**❌ Wrong Structure (Files subfolder එකේ):**
```
repository/
  └── sltcvotingsystem1 (1)/
      ├── app/
      └── package.json
```

### 1.2 Fix Structure (If Wrong)
- Files root එකට move කරන්න
- හො Vercel Root Directory set කරන්න (Step 2.2)

---

## ✅ Step 2: Vercel Setup (5 minutes)

### 2.1 Create/Login Vercel Account
1. Browser open කරන්න: **https://vercel.com**
2. **Sign Up** / **Login** කරන්න
3. **Continue with GitHub** button click කරන්න

### 2.2 Import Project
1. Vercel dashboard → **"Add New..."** → **"Project"**
2. GitHub repository select කරන්න
3. **Import** button click කරන්න

### 2.3 Configure Settings
**Project Settings:**
- **Root Directory**: 
  - Files root එකේ නම්: **Leave empty**
  - Files subfolder එකේ නම්: `sltcvotingsystem1 (1)` type කරන්න
- **Framework Preset**: Next.js (auto)
- **Build Command**: `npm run build` (auto)
- **Output Directory**: `.next` (auto)

### 2.4 Deploy
1. **"Deploy"** button click කරන්න
2. Wait කරන්න (2-3 minutes)
3. ⚠️ First deployment fail වෙන්න පුළුවන් - Normal!

---

## ✅ Step 3: Environment Variables (මේක ඉතාම Important!) (5 minutes)

### 3.1 Open Environment Variables
1. Vercel dashboard → **Your Project**
2. **Settings** tab click කරන්න
3. **Environment Variables** click කරන්න

### 3.2 Add Variables

**Variable 1:**
- **Key**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: `https://kgmlxheayuzmklzkmzkp.supabase.co`
- **Environments**: ✅ Production ✅ Preview ✅ Development
- **Add** button click කරන්න

**Variable 2:**
- **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbWx4aGVheXV6bWtsemttemtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3Mzg5MDksImV4cCI6MjA3OTMxNDkwOX0.qDK3oBPqkmlVCcLpWE9sCEup1u1-FJCIXMCgIs-g5_k`
- **Environments**: ✅ All
- **Add** button click කරන්න

**Variable 3:**
- **Key**: `SUPABASE_SERVICE_ROLE_KEY`
- **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbWx4aGVheXV6bWtsemttemtwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzczODkwOSwiZXhwIjoyMDc5MzE0OTA5fQ.eSJGhCpDWfqmf3SmSiiUfJLoYgAWxqKondB3FIunoq0`
- **Environments**: ✅ All
- **Add** button click කරන්න

**Variable 4:**
- **Key**: `NEXT_PUBLIC_SITE_URL`
- **Value**: `https://YOUR-PROJECT-NAME.vercel.app`
  - (Vercel deployment complete වෙපුවට පස්සේ ඔයාට දුන්න URL එක)
  - Vercel dashboard → **Domains** section එකේ තියෙනවා
- **Environments**: ✅ All
- **Add** button click කරන්න

✅ **4 variables add කරලා තියෙනවා!**

---

## ✅ Step 4: Redeploy (2 minutes)

1. **Deployments** tab click කරන්න
2. Latest deployment → **"..."** → **"Redeploy"**
3. **"Redeploy"** button click කරන්න
4. Wait කරන්න (2-3 minutes)
5. ✅ Build successful වෙනවා!

---

## ✅ Step 5: Supabase Update (3 minutes)

### 5.1 Open Supabase Dashboard
1. Browser open කරන්න: **https://supabase.com/dashboard**
2. Login වෙන්න
3. Project select කරන්න: `kgmlxheayuzmklzkmzkp`

### 5.2 Configure Redirect URLs
1. **Settings** → **Auth** → **URL Configuration**
2. **Redirect URLs** section එකේ add කරන්න:

```
https://YOUR-PROJECT-NAME.vercel.app/**
https://YOUR-PROJECT-NAME.vercel.app/reset-password
https://YOUR-PROJECT-NAME.vercel.app/student
https://YOUR-PROJECT-NAME.vercel.app/admin
```

(Replace `YOUR-PROJECT-NAME` with your actual Vercel project name)

3. **Save** button click කරන්න

---

## ✅ Step 6: Final Check

1. **Vercel URL** open කරන්න
2. App load වෙනවාද check කරන්න
3. Login try කරන්න
4. ✅ Everything working!

---

## 🎉 Done!

දැන් ඔයාගේ app live වෙලා තියෙනවා! 🚀

---

## 🆘 Problems?

### Build Error?
- Vercel → Deployments → Logs check කරන්න
- Environment variables add කරලා තියෙනවාද verify කරන්න
- Root Directory correct ද check කරන්න

### Login Not Working?
- Supabase redirect URLs add කරලා තියෙනවාද check කරන්න
- `NEXT_PUBLIC_SITE_URL` correct ද verify කරන්න

### Still Not Working?
- `HOSTING_ISSUE_FIX.md` file එක check කරන්න
- Vercel build logs share කරන්න

---

## 📋 Quick Checklist

- [ ] GitHub structure correct
- [ ] Vercel project imported
- [ ] Root Directory set correctly
- [ ] 4 environment variables added
- [ ] All environments selected
- [ ] Redeployed
- [ ] Supabase redirect URLs added
- [ ] App working!

**All done! 🎉**

