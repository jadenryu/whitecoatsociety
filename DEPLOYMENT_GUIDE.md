# White Coats Society Deployment Guide

## 🚀 Deploying to whitecoatsociety.org

This guide will help you deploy your full-stack application to your domain `whitecoatsociety.org`.

## Architecture Overview

- **Frontend**: Next.js app deployed to Vercel
- **Backend**: FastAPI app deployed to Railway
- **Database**: Supabase (already configured)
- **Domain**: whitecoatsociety.org pointing to Vercel

## Step 1: Deploy Backend to Railway

### 1.1 Sign up for Railway
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub (recommended)
3. Create a new project

### 1.2 Deploy Backend
1. Click "Deploy from GitHub repo"
2. Select your repository
3. Choose the `backend/backend` folder as the root directory
4. Railway will automatically detect it's a Python project

### 1.3 Set Environment Variables in Railway
Add these environment variables in Railway dashboard:
```
SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 1.4 Get Backend URL
- After deployment, Railway will give you a URL like: `https://your-app-name.railway.app`
- Save this URL - you'll need it for the frontend

## Step 2: Deploy Frontend to Vercel

### 2.1 Sign up for Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your project

### 2.2 Configure Environment Variables
In Vercel dashboard, add these environment variables:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app
NEXT_PUBLIC_APP_URL=https://whitecoatsociety.org
```

### 2.3 Deploy
- Vercel will automatically deploy your app
- You'll get a temporary URL like: `https://your-app.vercel.app`

## Step 3: Configure Custom Domain

### 3.1 Add Domain to Vercel
1. In Vercel dashboard, go to your project
2. Go to "Settings" → "Domains"
3. Add `whitecoatsociety.org` and `www.whitecoatsociety.org`

### 3.2 Configure DNS
In your domain registrar (where you bought whitecoatsociety.org):

**For the root domain (whitecoatsociety.org):**
- Type: `A`
- Name: `@`
- Value: `76.76.19.61` (Vercel's IP)

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**Alternative (easier) method:**
- Type: `CNAME`
- Name: `@`
- Value: `cname.vercel-dns.com`

## Step 4: Update Supabase Configuration

### 4.1 Update Supabase Auth Settings
1. Go to Supabase dashboard
2. Go to "Authentication" → "URL Configuration"
3. Add these URLs to "Redirect URLs":
   - `https://whitecoatsociety.org/auth/callback`
   - `https://www.whitecoatsociety.org/auth/callback`

### 4.2 Update Site URL
Set the Site URL to: `https://whitecoatsociety.org`

## Step 5: Test Your Deployment

1. Visit `https://whitecoatsociety.org`
2. Test sign up/login functionality
3. Test backend API calls
4. Check that all features work

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure your backend allows your domain in CORS settings
2. **Environment Variables**: Double-check all environment variables are set correctly
3. **DNS Propagation**: DNS changes can take 24-48 hours to propagate globally
4. **SSL Certificate**: Vercel automatically provides SSL certificates

### Debug Steps:

1. Check browser console for errors
2. Check Vercel function logs
3. Check Railway application logs
4. Test API endpoints directly

## Next Steps After Deployment

1. **Monitor Performance**: Use Vercel Analytics
2. **Set up Monitoring**: Consider adding error tracking (Sentry)
3. **Backup Strategy**: Ensure Supabase backups are configured
4. **CDN**: Vercel automatically provides CDN
5. **Security**: Review and update security settings

## Estimated Costs

- **Vercel**: Free tier should be sufficient for moderate traffic
- **Railway**: $5/month for basic plan
- **Supabase**: Free tier for development, paid plans for production scale
- **Domain**: Already owned

## Support

If you encounter issues:
1. Check deployment logs in Vercel and Railway
2. Review this guide step by step
3. Check documentation for each service
4. Consider using Vercel's support if needed

---

**Ready to deploy?** Follow the steps above in order, and you'll have your app running on whitecoatsociety.org! 