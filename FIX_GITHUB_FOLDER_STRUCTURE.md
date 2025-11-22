# GitHub Folder Structure Fix කරන්න

## ❌ Problem:
Files root එකේ upload වෙලා තියෙනවා. Folders ඇතුලේ නැහැ!

**Current (Wrong):**
```
sltc-voting/
  ├── page.tsx
  ├── layout.tsx
  ├── login-modal.tsx
  ├── components files...
  └── ...
```

**Should Be (Correct):**
```
sltc-voting/
  ├── app/
  │   ├── page.tsx
  │   ├── layout.tsx
  │   └── ...
  ├── components/
  │   ├── login-modal.tsx
  │   └── ...
  ├── lib/
  ├── public/
  └── ...
```

---

## ✅ Solution: Files Move කරන්න

### Method 1: GitHub Web Interface (Easiest)

#### Step 1: Create Folders

1. GitHub repository එකේ **"Add file"** → **"Create new file"**
2. File name: `app/.gitkeep` type කරන්න
3. **"Commit new file"** button click කරන්න
4. Repeat කරන්න:
   - `components/.gitkeep`
   - `lib/.gitkeep`
   - `public/.gitkeep`
   - `hooks/.gitkeep`
   - `styles/.gitkeep`

#### Step 2: Move Files to Correct Folders

**Move `app/` files:**
1. `page.tsx` file click කරන්න
2. **"..."** (three dots) → **"Move"**
3. New file path: `app/page.tsx` type කරන්න
4. **"Move file"** button click කරන්න
5. Repeat for:
   - `layout.tsx` → `app/layout.tsx`
   - `globals.css` → `app/globals.css`
   - `reset-password/page.tsx` → `app/reset-password/page.tsx`
   - `admin/page.tsx` → `app/admin/page.tsx`
   - `student/page.tsx` → `app/student/page.tsx`

**Move `components/` files:**
1. `login-modal.tsx` → `components/login-modal.tsx`
2. `register-modal.tsx` → `components/register-modal.tsx`
3. `admin-dashboard.tsx` → `components/admin-dashboard.tsx`
4. All other component files...

**Move `lib/` files:**
1. `utils.ts` → `lib/utils.ts`
2. `email-validation.ts` → `lib/email-validation.ts`
3. All other lib files...

**Move `public/` files:**
1. `icon.svg` → `public/icon.svg`
2. `sltc-logo.jpg` → `public/sltc-logo.jpg`
3. All image files...

---

### Method 2: Delete & Re-upload (Faster)

#### Step 1: Delete All Files

1. GitHub repository එකේ **"Go to file"** search bar use කරන්න
2. Each file click කරන්න
3. **"..."** → **"Delete"**
4. **"Commit changes"**

**හො:**
1. **"Code"** → **"Download ZIP"**
2. Files backup කරගන්න
3. GitHub එකේ files delete කරන්න

#### Step 2: Re-upload with Correct Structure

1. **"Add file"** → **"Upload files"**
2. Windows Explorer open කරන්න
3. `C:\Users\Cybernetic\Desktop\nnnnn\sltcvotingsystem1 (1)` folder එක open කරන්න
4. **Folders** select කරන්න (files නොවේ!):
   - `app/` folder
   - `components/` folder
   - `lib/` folder
   - `public/` folder
   - `hooks/` folder
   - `styles/` folder
5. Drag & drop කරන්න
6. **"Commit changes"**

---

## 🎯 Recommended: Method 2 (Delete & Re-upload)

මේක ඉතාම fast සහ easy!

### Quick Steps:

1. **GitHub repository එකේ:**
   - All files delete කරන්න (හො leave them, re-upload will overwrite)

2. **"Add file"** → **"Upload files"**

3. **Windows Explorer:**
   - `C:\Users\Cybernetic\Desktop\nnnnn\sltcvotingsystem1 (1)` folder එක open කරන්න
   - **Folders** select කරන්න:
     - `app/`
     - `components/`
     - `lib/`
     - `public/`
     - `hooks/`
     - `styles/`
   - Drag & drop කරන්න

4. **"Commit changes"**

5. **GitHub refresh කරන්න**
   - Folders visible වෙනවාද check කරන්න

6. **Vercel redeploy කරන්න**

---

## ✅ After Fix:

1. GitHub repository structure check කරන්න:
   - ✅ `app/` folder තියෙනවා
   - ✅ `components/` folder තියෙනවා
   - ✅ `lib/` folder තියෙනවා
   - ✅ `public/` folder තියෙනවා

2. Vercel redeploy කරන්න
3. Build successful! 🎉

---

## 🆘 Still Not Working?

GitHub repository screenshot share කරන්න (folder structure එක).

Folder structure correct වෙපුවට පස්සේ Vercel build successful වෙනවා!

