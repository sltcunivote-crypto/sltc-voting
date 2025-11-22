# Vercel Root Directory Fix - Detailed Steps

## ❌ Still Getting Error?

Error එක තවමත් තියෙනවා නම්, මේ steps follow කරන්න:

---

## 🔍 Step 1: GitHub Repository Structure Check කරන්න

1. Browser එකේ open කරන්න: **https://github.com/sltcunivote-crypto/sltc-voting**
2. Repository structure check කරන්න
3. `app` folder එක කොහේද තියෙන්නේ?

**Expected Structure:**
```
sltc-voting/
  └── sltcvotingsystem1 (1)/
      ├── app/
      ├── components/
      ├── package.json
      └── ...
```

**හො:**
```
sltc-voting/
  ├── app/
  ├── components/
  ├── package.json
  └── ...
```

---

## ✅ Step 2: Vercel Root Directory Set කරන්න

### Option A: Folder එක ඇතුලේ නම්

1. Vercel dashboard → Project → **Settings** → **General**
2. **Root Directory** section එක හොයන්න
3. **Edit** button click කරන්න
4. **Root Directory** field එකේ type කරන්න:

   **Try මේ options:**
   
   **Option 1:**
   ```
   sltcvotingsystem1 (1)
   ```
   
   **Option 2 (URL encoded):**
   ```
   sltcvotingsystem1%20(1)
   ```
   
   **Option 3 (with quotes):**
   ```
   "sltcvotingsystem1 (1)"
   ```

5. **Save** button click කරන්න

### Option B: Root එකේ නම්

1. **Root Directory** field එක **empty** කරන්න (හො `/` type කරන්න)
2. **Save** button click කරන්න

---

## 🔍 Step 3: Verify Root Directory

Root Directory set කරපුවට පස්සේ:

1. **Deployments** tab click කරන්න
2. **"..."** → **"Redeploy"**
3. Build logs check කරන්න

**Success indicators:**
- ✅ `Detected Next.js version: 15.5.4`
- ✅ `Creating an optimized production build...`
- ✅ `Build completed`

**Still failing?**
- Check build logs for exact path
- Try different Root Directory values

---

## 🆘 Alternative Solution: Move Files to Root

Root Directory work නොවෙනවා නම්, GitHub එකේ files root එකට move කරන්න:

### Method 1: GitHub Web Interface

1. GitHub repository එක open කරන්න
2. `sltcvotingsystem1 (1)` folder එක ඇතුලේ files select කරන්න
3. **"Move"** button click කරන්න
4. Root directory එකට move කරන්න
5. Commit කරන්න

### Method 2: Git Commands

```powershell
cd "C:\Users\Cybernetic\Desktop\nnnnn\sltcvotingsystem1 (1)"
git mv app ../app
git mv components ../components
git mv lib ../lib
git mv public ../public
git mv package.json ../package.json
git mv next.config.mjs ../next.config.mjs
git mv tsconfig.json ../tsconfig.json
git mv vercel.json ../vercel.json
git commit -m "Move files to root"
git push
```

**Then in Vercel:**
- Root Directory: Leave **empty**

---

## ✅ Recommended: Check GitHub First

1. **GitHub repository open කරන්න**
2. **Folder structure check කරන්න**
3. **`app` folder එක කොහේද තියෙන්නේ?**
4. **එහෙම Root Directory set කරන්න**

---

## 📞 Still Not Working?

1. GitHub repository URL share කරන්න
2. Vercel build logs full output share කරන්න
3. Root Directory value එක share කරන්න

මට help කරන්න පුළුවන්!

