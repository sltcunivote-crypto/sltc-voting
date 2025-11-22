# SLTC Voting System

A modern voting system built with Next.js 15, React 19, and Supabase.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm
- Supabase account

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sltcvotingsystem1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Fill in your Supabase credentials

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000`

## 📦 Deployment to Vercel

### Step 1: Push to GitHub
Make sure your code is pushed to GitHub.

### Step 2: Import to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Configure settings:
   - **Root Directory**: Leave empty (if files are in root)
   - **Framework**: Next.js (auto-detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### Step 3: Add Environment Variables
In Vercel Dashboard → Settings → Environment Variables, add:

```
NEXT_PUBLIC_SUPABASE_URL=https://kgmlxheayuzmklzkmzkp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbWx4aGVheXV6bWtsemttemtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3Mzg5MDksImV4cCI6MjA3OTMxNDkwOX0.qDK3oBPqkmlVCcLpWE9sCEup1u1-FJCIXMCgIs-g5_k
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbWx4aGVheXV6bWtsemttemtwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzczODkwOSwiZXhwIjoyMDc5MzE0OTA5fQ.eSJGhCpDWfqmf3SmSiiUfJLoYgAWxqKondB3FIunoq0
NEXT_PUBLIC_SITE_URL=https://your-project-name.vercel.app
```

**Important:** Select all environments (Production, Preview, Development)

### Step 4: Deploy
1. Click **"Deploy"**
2. Wait for build to complete
3. Copy your deployment URL

### Step 5: Update Supabase
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to **Settings** → **Auth** → **URL Configuration**
4. Add redirect URLs:
   ```
   https://your-project-name.vercel.app/**
   https://your-project-name.vercel.app/reset-password
   https://your-project-name.vercel.app/student
   https://your-project-name.vercel.app/admin
   ```

### Step 6: Update Site URL
1. Go back to Vercel → Environment Variables
2. Update `NEXT_PUBLIC_SITE_URL` with your actual Vercel URL
3. Redeploy

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4
- **React**: 19.1.0
- **Database**: Supabase
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/                 # Next.js app directory
│   ├── admin/          # Admin pages
│   ├── student/        # Student pages
│   └── ...
├── components/         # React components
│   └── ui/            # UI component library
├── lib/               # Utilities and helpers
│   ├── actions/       # Server actions
│   └── supabase/     # Supabase clients
├── public/            # Static assets
└── scripts/           # SQL scripts
```

## 🔧 Configuration

### Vercel Configuration
The project includes `vercel.json` with optimized settings:
- Build command: `npm run build`
- Framework: Next.js
- Region: Singapore (sin1)

### Next.js Configuration
- TypeScript errors ignored during build
- ESLint errors ignored during build
- Images unoptimized (for compatibility)

## 🐛 Troubleshooting

### Build Fails
- Check environment variables are set correctly
- Verify Root Directory in Vercel settings
- Check build logs in Vercel dashboard

### Login Not Working
- Verify Supabase redirect URLs are configured
- Check `NEXT_PUBLIC_SITE_URL` matches your Vercel URL
- Ensure all environment variables are set

### Module Not Found
- Verify GitHub repository structure
- Check Root Directory in Vercel matches your folder structure

## 📝 License

Private project - All rights reserved

## 👥 Support

For deployment issues, refer to:
- `HOSTING_ISSUE_FIX.md` - Quick fixes
- `HOSTING_FIX_COMPLETE.md` - Complete guide
- `QUICK_HOSTING_CHECKLIST.md` - Step-by-step checklist

