# Vercel Deploy කරන්න - දැන්! 🚀

## ✅ GitHub Upload Complete!

දැන් Vercel එකේ deploy කරන්න:

---

## 📝 Step 1: Vercel Account හදාගන්න

1. Browser එකේ open කරන්න: **https://vercel.com**
2. **Sign Up** button click කරන්න
3. **Continue with GitHub** button click කරන්න
4. GitHub account එකෙන් authorize කරන්න

✅ Vercel account create වෙලා තියෙනවා!

---

## 📝 Step 2: Project Import කරන්න

1. Vercel dashboard එකේ:
   - **"Add New..."** button click කරන්න (top right corner)
   - **"Project"** select කරන්න

2. GitHub repository list එකේ:
   - `sltc-voting` repository හොයන්න
   - **"Import"** button click කරන්න

3. Project Settings:
   - **Root Directory**: Leave empty (හො default value එක use කරන්න)
   - **Framework Preset**: Next.js (auto detect වෙනවා)
   - **Build Command**: `npm run build` (auto fill වෙනවා)
   - **Output Directory**: `.next` (auto fill වෙනවා)

4. **"Deploy"** button click කරන්න

5. Wait කරන්න (2-3 minutes)

⚠️ **First deployment fail වෙන්න පුළුවන්** - එයා normal! Environment variables add කරන්න ඕනේ.

✅ Deployment URL එක copy කරගන්න (උදා: `https://sltc-voting-xxxxx.vercel.app`)

---

## 📝 Step 3: Environment Variables Add කරන්න (මේක ඉතාම Important!)

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
- **Environments**: ✅ All
- **Add** button click කරන්න

### Variable 3: Service Role Key
- **Key**: `SUPABASE_SERVICE_ROLE_KEY`
- **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbWx4aGVheXV6bWtsemttemtwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzczODkwOSwiZXhwIjoyMDc5MzE0OTA5fQ.eSJGhCpDWfqmf3SmSiiUfJLoYgAWxqKondB3FIunoq0`
- **Environments**: ✅ All
- **Add** button click කරන්න

### Variable 4: Site URL
- **Key**: `NEXT_PUBLIC_SITE_URL`
- **Value**: Vercel deployment complete වෙපුවට පස්සේ ඔයාට දුන්න URL එක
  - උදා: `https://sltc-voting-xxxxx.vercel.app`
  - (Vercel dashboard එකේ **Domains** section එකේ තියෙනවා)
- **Environments**: ✅ All
- **Add** button click කරන්න

✅ 4 variables add කරලා තියෙනවා!

---

## 📝 Step 4: Redeploy කරන්න

Environment variables add කරපුවට පස්සේ:

1. **Deployments** tab click කරන්න
2. Latest deployment එකේ **"..."** (three dots menu) click කරන්න
3. **"Redeploy"** select කරන්න
4. **"Redeploy"** button click කරන්න
5. Wait කරන්න (2-3 minutes)

✅ App live වෙලා තියෙනවා! 🎉

---

## 📝 Step 5: Supabase Update කරන්න

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

## ✅ All Done!

දැන් ඔයාගේ app live වෙලා තියෙනවා! 🎉

Vercel dashboard එකේ **Domains** section එකේ ඔයාගේ URL එක තියෙනවා.

---

## 🆘 Problems?

**Vercel deploy fail වෙනවා නම්:**
- Check deployment logs in Vercel
- Make sure all 4 environment variables are added
- Redeploy after adding variables

**Build error වෙනවා නම්:**
- Vercel logs check කරන්න
- Make sure `package.json` correct වෙනවා

**Password reset work නොවෙනවා නම්:**
- Supabase redirect URLs add කරලා තියෙනවාද check කරන්න
- `NEXT_PUBLIC_SITE_URL` correct ද check කරන්න

---

## 📞 Next Steps

1. Vercel එකට යන්න: https://vercel.com
2. GitHub account එකෙන් login වෙන්න
3. Project import කරන්න
4. Environment variables add කරන්න
5. Redeploy කරන්න

Good luck! 🚀

