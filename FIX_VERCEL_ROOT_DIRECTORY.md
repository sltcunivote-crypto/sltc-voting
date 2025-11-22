# Vercel Build Error Fix - Root Directory

## ❌ Error:
```
[Error: > Couldn't find any `pages` or `app` directory. Please create one under the project root]
```

## 🔍 Problem:
Vercel එක project root එකේ `app` directory එක හොයනවා, නමුත් ඔයාගේ code එක `sltcvotingsystem1 (1)` folder එකේ තියෙනවා.

## ✅ Solution: Root Directory Set කරන්න

### Step 1: Vercel Project Settings එකට යන්න

1. Vercel dashboard එකේ project එක click කරන්න
2. **Settings** tab click කරන්න
3. **General** section එකේ scroll down කරන්න

### Step 2: Root Directory Set කරන්න

1. **Root Directory** section එක හොයන්න
2. **Edit** button click කරන්න
3. **Root Directory** field එකේ type කරන්න:
   ```
   sltcvotingsystem1 (1)
   ```
   (හො folder name එක exactly copy කරන්න)

4. **Save** button click කරන්න

### Step 3: Redeploy කරන්න

1. **Deployments** tab click කරන්න
2. Latest deployment එකේ **"..."** (three dots menu) click කරන්න
3. **"Redeploy"** select කරන්න
4. **"Redeploy"** button click කරන්න
5. Wait කරන්න (2-3 minutes)

✅ දැන් build successful වෙනවා!

---

## 📸 Visual Guide:

**Vercel Settings → General → Root Directory:**
```
Root Directory: [sltcvotingsystem1 (1)]  ← මේක type කරන්න
```

---

## 🆘 Still Not Working?

**Root Directory correct ද check කරන්න:**
- Folder name exactly match වෙනවාද?
- Spaces, brackets correct ද?

**Alternative:**
- Root Directory: `sltcvotingsystem1 (1)` (with space and brackets)
- හො try: `sltcvotingsystem1%20(1)` (URL encoded)

**Check GitHub Repository:**
- GitHub එකේ repository එක open කරන්න
- Folder structure check කරන්න
- `app` folder එක `sltcvotingsystem1 (1)` folder එක ඇතුලේ තියෙනවාද?

---

## ✅ After Fix:

Root Directory set කරපුවට පස්සේ:
1. Redeploy කරන්න
2. Build successful වෙනවා
3. App live වෙනවා! 🎉

