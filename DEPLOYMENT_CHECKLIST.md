# Deployment Checklist for whitecoatsociety.org

## ✅ Pre-Deployment Checklist

### Backend Preparation
- [ ] Backend code is ready in `backend/backend/` folder
- [ ] `requirements.txt` is complete
- [ ] Environment variables are documented
- [ ] CORS is configured for production domain
- [ ] Health check endpoint is working

### Frontend Preparation  
- [ ] Frontend code is ready in root directory
- [ ] All environment variables are identified
- [ ] Domain is purchased and accessible
- [ ] Supabase project is configured

## 🚀 Deployment Steps

### Step 1: Deploy Backend (Railway)
- [ ] Sign up for Railway account
- [ ] Create new project
- [ ] Connect GitHub repository
- [ ] Set root directory to `backend/backend`
- [ ] Configure environment variables:
  - [ ] `SUPABASE_URL`
  - [ ] `SUPABASE_SERVICE_ROLE_KEY`
  - [ ] `SUPABASE_ANON_KEY`
- [ ] Deploy and test backend
- [ ] Save backend URL: `_________________`

### Step 2: Deploy Frontend (Vercel)
- [ ] Sign up for Vercel account
- [ ] Import project from GitHub
- [ ] Configure environment variables:
  - [ ] `NEXT_PUBLIC_SUPABASE_URL`
  - [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - [ ] `NEXT_PUBLIC_API_URL` (use Railway URL)
  - [ ] `NEXT_PUBLIC_APP_URL=https://whitecoatsociety.org`
- [ ] Deploy and test on Vercel URL
- [ ] Save Vercel URL: `_________________`

### Step 3: Configure Domain
- [ ] Add domain to Vercel project
- [ ] Configure DNS records with domain registrar:
  - [ ] A record: `@` → `76.76.19.61`
  - [ ] CNAME record: `www` → `cname.vercel-dns.com`
- [ ] Wait for DNS propagation (up to 48 hours)
- [ ] Verify SSL certificate is active

### Step 4: Update Supabase
- [ ] Add redirect URLs to Supabase:
  - [ ] `https://whitecoatsociety.org/auth/callback`
  - [ ] `https://www.whitecoatsociety.org/auth/callback`
- [ ] Update Site URL to `https://whitecoatsociety.org`
- [ ] Test authentication flow

## 🧪 Testing Checklist

### Frontend Testing
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Responsive design works on mobile
- [ ] Images and assets load properly

### Authentication Testing
- [ ] Sign up flow works
- [ ] Sign in flow works
- [ ] Sign out flow works
- [ ] Dashboard shows correct user info

### Backend Testing
- [ ] API endpoints respond correctly
- [ ] Database operations work
- [ ] Authentication is properly handled
- [ ] Error handling works

## 📊 Post-Deployment

### Performance & Monitoring
- [ ] Set up Vercel Analytics
- [ ] Monitor Railway logs
- [ ] Set up error tracking (optional)
- [ ] Configure backup strategy

### Security
- [ ] Review CORS settings
- [ ] Check environment variable security
- [ ] Ensure HTTPS is enforced
- [ ] Review Supabase security settings

## 🎯 Success Criteria

Your deployment is successful when:
- [ ] `https://whitecoatsociety.org` loads your application
- [ ] Users can sign up and sign in
- [ ] All pages and features work correctly
- [ ] Backend API calls work from production
- [ ] Mobile responsiveness is maintained

## 📞 Need Help?

If you get stuck:
1. Check the detailed `DEPLOYMENT_GUIDE.md`
2. Review logs in Vercel and Railway dashboards
3. Test API endpoints directly
4. Check browser console for errors

---

**Estimated Time**: 2-4 hours (plus DNS propagation time)
**Cost**: ~$5/month for Railway + free tiers for Vercel and Supabase 