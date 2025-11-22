# Hosting Issue Fix - Complete Guide 🚀

## ❌ Problem: Host කරන්න එපා වෙනවා

මේ guide එකෙන් step-by-step hosting issue fix කරන්න පුළුවන්!

---

## 🔍 Step 1: GitHub Repository Check කරන්න

### 1.1 Repository Structure Check කරන්න

1. Browser එකේ open කරන්න: **https://github.com/YOUR_USERNAME/sltc-voting**
   (Replace `YOUR_USERNAME` with your actual GitHub username)

2. Repository structure check කරන්න:

**✅ Correct Structure (මේ වගේ විය යුතුයි):**
```
sltc-voting/
  ├── app/
  │   ├── page.tsx
  │   ├── layout.tsx
  │   └── ...
  ├── components/
  ├── lib/
  ├── public/
  ├── package.json
  ├── next.config.mjs
  ├── vercel.json
  └── tsconfig.json
```

**❌ Wrong Structure (මේ වගේ නම් fix කරන්න):**
```
sltc-voting/
  └── sltcvotingsystem1 (1)/
      ├── app/
      ├── components/
      └── ...
```

### 1.2 Files Root එකේ නැති නම්

**Option A: GitHub Web Interface (Easy)**
1. GitHub repository එක open කරන්න
2. `sltcvotingsystem1 (1)` folder එක ඇතුලේ files select කරන්න
3. Each file click කරන්න → **"..."** → **"Move"**
4. Root directory එකට move කරන්න
5. Commit කරන්න

**Option B: Re-upload (Faster)**
1. GitHub එකේ all files delete කරන්න
2. **"Add file"** → **"Upload files"**
3. Local folder එකේ `app/`, `components/`, `lib/`, `public/` folders drag & drop කරන්න
4. `package.json`, `next.config.mjs`, `vercel.json` files drag & drop කරන්න
5. Commit කරන්න

---

## 📝 Step 2: Vercel Project Setup

### 2.1 Vercel Account හදාගන්න

1. Browser එකේ open කරන්න: **https://vercel.com**
2. **Sign Up** button click කරන්න
3. **Continue with GitHub** button click කරන්න
4. GitHub account එකෙන් authorize කරන්න

✅ Vercel account create වෙලා තියෙනවා!

### 2.2 Project Import කරන්න

1. Vercel dashboard එකේ:
   - **"Add New..."** button click කරන්න (top right corner)
   - **"Project"** select කරන්න

2. GitHub repository list එකේ:
   - `sltc-voting` repository හොයන්න
   - **"Import"** button click කරන්න

3. **Project Settings:**
   - **Root Directory**: 
     - Files root එකේ නම්: **Leave empty** (හො `/` type කරන්න)
     - Files `sltcvotingsystem1 (1)` folder එක ඇතුලේ නම්: `sltcvotingsystem1 (1)` type කරන්න
   - **Framework Preset**: Next.js (auto detect වෙනවා)
   - **Build Command**: `npm run build` (auto fill වෙනවා)
   - **Output Directory**: `.next` (auto fill වෙනවා)

4. **"Deploy"** button click කරන්න

5. Wait කරන්න (2-3 minutes)

⚠️ **First deployment fail වෙන්න පුළුවන්** - එයා normal! Environment variables add කරන්න ඕනේ.

✅ Deployment URL එක copy කරගන්න (උදා: `https://sltc-voting-xxxxx.vercel.app`)

---

## 🔑 Step 3: Environment Variables Add කරන්න (මේක ඉතාම Important!)

Deployment complete වෙපුවට පස්සේ (හො fail වුනත්):

1. Vercel dashboard එකේ project එක click කරන්න
2. **Settings** tab click කරන්න
3. Left sidebar එකේ **Environment Variables** click කරන්න

### Variable 1: Supabase URL
- **Key**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: `https://kgmlxheayuzmklzkmzkp.supabase.co`
- **Environments**: ✅ Production ✅ Preview ✅ Development (සියල්ල select කරන්න)
- **Add** button click කරන්න

### Variable 2: Supabase Anon Key
- **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbWx4aGVheXV6bWtsemttemtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3Mzg5MDksImV4cCI6MjA3OTMxNDkwOX0.qDK3oBPqkmlVCcLpWE9sCEup1u1-FJCIXMCgIs-g5_k`
- **Environments**: ✅ Production ✅ Preview ✅ Development
- **Add** button click කරන්න

### Variable 3: Service Role Key
- **Key**: `SUPABASE_SERVICE_ROLE_KEY`
- **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbWx4aGVheXV6bWtsemttemtwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzczODkwOSwiZXhwIjoyMDc5MzE0OTA5fQ.eSJGhCpDWfqmf3SmSiiUfJLoYgAWxqKondB3FIunoq0`
- **Environments**: ✅ Production ✅ Preview ✅ Development
- **Add** button click කරන්න

### Variable 4: Site URL
- **Key**: `NEXT_PUBLIC_SITE_URL`
- **Value**: Vercel deployment complete වෙපුවට පස්සේ ඔයාට දුන්න URL එක
  - උදා: `https://sltc-voting-xxxxx.vercel.app`
  - (Vercel dashboard එකේ **Domains** section එකේ තියෙනවා)
- **Environments**: ✅ Production ✅ Preview ✅ Development
- **Add** button click කරන්න

✅ **4 variables add කරලා තියෙනවා!**

---

## 🔄 Step 4: Redeploy කරන්න

Environment variables add කරපුවට පස්සේ:

1. **Deployments** tab click කරන්න
2. Latest deployment එකේ **"..."** (three dots menu) click කරන්න
3. **"Redeploy"** select කරන්න
4. **"Redeploy"** button click කරන්න
5. Wait කරන්න (2-3 minutes)

✅ App live වෙලා තියෙනවා! 🎉

---

## 🔧 Step 5: Supabase Redirect URLs Update කරන්න

1. Browser එකේ open කරන්න: **https://supabase.com/dashboard**
2. Login වෙන්න
3. Project: `kgmlxheayuzmklzkmzkp` select කරන්න
4. **Settings** → **Auth** → **URL Configuration**
5. **Redirect URLs** section එකේ add කරන්න:

```
https://your-project-name.vercel.app/**
https://your-project-name.vercel.app/reset-password
https://your-project-name.vercel.app/student
https://your-project-name.vercel.app/admin
```

(Replace `your-project-name` with your actual Vercel project name)

6. **Save** button click කරන්න

✅ Done!

---

## 🆘 Common Problems & Solutions

### Problem 1: Build Error - "Cannot find module"

**Solution:**
1. Vercel dashboard → **Settings** → **General**
2. **Root Directory** check කරන්න
3. Files root එකේ නම්: Leave empty
4. Files subfolder එකේ නම්: Folder name type කරන්න
5. **Save** → **Redeploy**

### Problem 2: Build Error - "Missing Supabase environment variables"

**Solution:**
1. Vercel dashboard → **Settings** → **Environment Variables**
2. All 4 variables add කරලා තියෙනවාද check කරන්න:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_SITE_URL`
3. All environments (Production, Preview, Development) select කරලා තියෙනවාද check කරන්න
4. **Redeploy** කරන්න

### Problem 3: Build Error - "Root Directory not found"

**Solution:**
1. GitHub repository structure check කරන්න
2. Files root එකේ නම්: Vercel **Root Directory** empty කරන්න
3. Files subfolder එකේ නම්: Vercel **Root Directory** එකේ folder name type කරන්න
4. **Save** → **Redeploy**

### Problem 4: App Deploy වෙනවා, But Login Work නොවෙනවා

**Solution:**
1. Supabase dashboard → **Settings** → **Auth** → **URL Configuration**
2. **Redirect URLs** එකේ Vercel URL add කරලා තියෙනවාද check කරන්න
3. `NEXT_PUBLIC_SITE_URL` environment variable correct ද check කරන්න
4. **Redeploy** කරන්න

### Problem 5: Build Successful, But Page Blank/Error

**Solution:**
1. Vercel dashboard → **Deployments** → Latest deployment click කරන්න
2. **Logs** tab click කරන්න
3. Error messages check කරන්න
4. Common issues:
   - Missing environment variables → Add them
   - Build errors → Check logs
   - Runtime errors → Check browser console

---

## ✅ Checklist - All Steps Complete?

- [ ] GitHub repository structure correct වෙනවා
- [ ] Vercel account create වෙලා තියෙනවා
- [ ] Vercel project import කරලා තියෙනවා
- [ ] Root Directory correct set කරලා තියෙනවා
- [ ] All 4 environment variables add කරලා තියෙනවා
- [ ] All environments (Production, Preview, Development) select කරලා තියෙනවා
- [ ] Redeploy කරලා තියෙනවා
- [ ] Supabase redirect URLs add කරලා තියෙනවා
- [ ] Build successful වෙනවා
- [ ] App live වෙලා තියෙනවා

---

## 📞 Still Not Working?

1. **Vercel Build Logs Share කරන්න:**
   - Vercel dashboard → **Deployments** → Latest deployment → **Logs**
   - Full error message copy කරගෙන share කරන්න

2. **GitHub Repository URL Share කරන්න:**
   - Repository URL share කරන්න

3. **Vercel Project Settings Screenshot:**
   - Root Directory value
   - Environment Variables list

4. **Browser Console Errors:**
   - Browser එකේ F12 press කරන්න
   - Console tab එකේ errors check කරන්න
   - Errors share කරන්න

මට help කරන්න පුළුවන්! 🚀

---

## 🎯 Quick Fix Summary

1. ✅ GitHub structure check කරන්න
2. ✅ Vercel project import කරන්න
3. ✅ Root Directory set කරන්න
4. ✅ Environment variables add කරන්න (4 variables)
5. ✅ Redeploy කරන්න
6. ✅ Supabase redirect URLs update කරන්න

**Done! App live වෙනවා! 🎉**

