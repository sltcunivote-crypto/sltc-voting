# 🔍 Database Connection Check කරන්න - How to Verify

## ✅ Method 1: Browser Console Check (Easiest)

### Step 1: App Open කරන්න
1. Browser එකේ app open කරන්න
2. **F12** press කරන්න (Developer Tools open වෙනවා)
3. **Console** tab click කරන්න

### Step 2: Check Logs
Console එකේ මේ message එක දකින්න ඕනේ:
```
[v0] Initializing Supabase Client with URL: https://kgmlxheayuzmklzkmzkp.supabase.co
```

**✅ If you see this:** Database connection working!

**❌ If you see error:**
- `Missing Supabase environment variables` → Environment variables add කරන්න
- `Failed to fetch` → Network issue හො Supabase URL wrong

---

## ✅ Method 2: Supabase Dashboard Check

### Step 1: Supabase Dashboard Open කරන්න
1. Browser open කරන්න: **https://supabase.com/dashboard**
2. Login වෙන්න
3. Project select කරන්න: `kgmlxheayuzmklzkmzkp`

### Step 2: Check Database Status
1. **Project Overview** page එකේ:
   - ✅ **Database** status check කරන්න
   - ✅ **API** status check කරන්න
   - ✅ **Auth** status check කරන්න

2. **Database** → **Tables** click කරන්න:
   - Tables list වෙනවාද check කරන්න
   - උදා: `profiles`, `candidates`, `elections`, `votes`

**✅ If tables visible:** Database working!

---

## ✅ Method 3: Test Registration/Login

### Test Registration:
1. App එකේ **Register** button click කරන්න
2. Form fill කරන්න
3. **Register** button click කරන්න

**✅ If registration successful:**
- Database connection working!
- Data save වෙනවා

**❌ If error:**
- Check error message
- Console check කරන්න

### Test Login:
1. **Login** button click කරන්න
2. Credentials enter කරන්න
3. **Login** button click කරන්න

**✅ If login successful:**
- Database connection working!
- Authentication working!

---

## ✅ Method 4: Check Environment Variables

### Local Development:
1. **Project folder** එකේ `.env.local` file check කරන්න
2. මේ variables තියෙනවාද verify කරන්න:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://kgmlxheayuzmklzkmzkp.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

### Vercel (Production):
1. **Vercel dashboard** → **Settings** → **Environment Variables**
2. 4 variables තියෙනවාද check කරන්න:
   - ✅ `NEXT_PUBLIC_SUPABASE_URL`
   - ✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - ✅ `SUPABASE_SERVICE_ROLE_KEY`
   - ✅ `NEXT_PUBLIC_SITE_URL`

---

## ✅ Method 5: Create Test Page (Advanced)

### Create Test Page:
Create a test page to check database connection:

**File:** `app/test-db/page.tsx`

```tsx
"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

export default function TestDBPage() {
  const [status, setStatus] = useState("Checking...")
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const testConnection = async () => {
      try {
        const supabase = createClient()
        
        // Test query
        const { data, error } = await supabase
          .from("profiles")
          .select("count")
          .limit(1)

        if (error) {
          setStatus(`❌ Error: ${error.message}`)
        } else {
          setStatus("✅ Database Connected!")
          setData(data)
        }
      } catch (err) {
        setStatus(`❌ Connection Failed: ${err}`)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Database Connection Test</h1>
      <p className="text-lg">{status}</p>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}
```

**Then visit:** `http://localhost:3000/test-db` (හො your Vercel URL + `/test-db`)

---

## 🔍 Quick Checklist:

### Connection Working If:
- [ ] Browser console shows Supabase URL
- [ ] No "Missing environment variables" error
- [ ] Registration works
- [ ] Login works
- [ ] Supabase dashboard shows tables
- [ ] Environment variables set correctly

### Connection NOT Working If:
- [ ] "Missing Supabase environment variables" error
- [ ] Registration fails
- [ ] Login fails
- [ ] Console shows connection errors
- [ ] Environment variables missing

---

## 🆘 Common Issues:

### Issue 1: "Missing Supabase environment variables"
**Solution:**
- Local: Check `.env.local` file
- Vercel: Add environment variables in Vercel dashboard

### Issue 2: "Failed to fetch"
**Solution:**
- Check Supabase URL correct ද
- Check network connection
- Check Supabase project active ද

### Issue 3: "Invalid API key"
**Solution:**
- Check API key correct ද
- Check key not expired
- Regenerate key if needed

---

## ✅ Summary:

1. **Browser Console Check** - Easiest method
2. **Supabase Dashboard** - Verify project status
3. **Test Registration/Login** - Real-world test
4. **Environment Variables** - Verify configuration
5. **Test Page** - Advanced debugging

**මේ methods use කරලා database connection verify කරන්න පුළුවන්!** 🚀

