# Deploying to Vercel

This guide will help you deploy the proposal landing page to Vercel.

## Prerequisites

- GitHub repository with the latest code (already pushed)
- Vercel account (free tier works perfectly)

## Deployment Steps

### Option 1: Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `stalincrabi/propuestahotel`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `proposal-landing`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - Your site will be live at `https://[your-project-name].vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to project directory
cd "c:\Users\BarushGaming\Documents\Crabi Brokers\Studio Code Claude\Pagina de reservas\proposal-landing"

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? proposal-landing
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

## Post-Deployment

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Environment Variables (If Needed)

If you need to add environment variables:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy for changes to take effect

## Automatic Deployments

Every push to the `main` branch will automatically trigger a new deployment on Vercel.

## Monitoring

- **Analytics**: Available in Vercel dashboard
- **Logs**: Check deployment logs for any issues
- **Performance**: Vercel provides automatic performance insights

## Repository

GitHub: [https://github.com/stalincrabi/propuestahotel](https://github.com/stalincrabi/propuestahotel)

## Support

If you encounter any issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
