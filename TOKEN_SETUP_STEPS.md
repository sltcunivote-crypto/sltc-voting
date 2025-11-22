# 🔐 Token Setup - Step by Step

## ✅ Current Status:
You're on the GitHub Personal Access Token page - Perfect! 

---

## 📝 Step 1: Fill Token Details

### Note Field:
Type this in the **"Note"** field:
```
Git Push Token - SLTC Voting System
```

### Expiration:
✅ **90 days (Feb 20, 2026)** - This is perfect! (You can keep it or change to "No expiration" if you want)

### Scopes:
✅ **repo** is checked - This is correct! This gives full control of repositories.

**Sub-scopes (all checked):**
- ✅ repo:status
- ✅ repo_deployment  
- ✅ public_repo
- ✅ repo:invite
- ✅ security_events

**All good!** You don't need to check anything else.

---

## 📝 Step 2: Generate Token

1. Scroll down to bottom of the page
2. Click **"Generate token"** button (green button)
3. ⚠️ **IMPORTANT:** Copy the token immediately!
   - It will look like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - This is the ONLY time you'll see it!
   - Save it somewhere safe

---

## 📝 Step 3: Use Token to Push Files

After you copy the token, come back here and I'll help you push the files!

**Or use these commands:**

Open PowerShell and run:

```powershell
cd "c:\Users\Cybernetic\Desktop\nnnnn\sltcvotingsystem1 (1)"

# Replace YOUR_TOKEN with the token you just copied
git remote set-url origin https://YOUR_TOKEN@github.com/sltcunivote-crypto/sltc-voting.git

# Push files
git push origin main
```

**Example:**
```powershell
git remote set-url origin https://ghp_abc123xyz456@github.com/sltcunivote-crypto/sltc-voting.git
git push origin main
```

---

## ✅ Summary:

1. ✅ Note: `Git Push Token - SLTC Voting System`
2. ✅ Expiration: 90 days (or No expiration)
3. ✅ Scopes: repo (already checked)
4. ✅ Click "Generate token"
5. ✅ Copy token
6. ✅ Use token in git commands

**Ready to push!** 🚀

