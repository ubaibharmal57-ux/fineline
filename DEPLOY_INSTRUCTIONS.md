# Deployment Instructions for Vercel

The Next.js app is located in the `my-next-app` subdirectory. The `vercel.json` file in the root directory tells Vercel where to find it.

## Steps to Deploy

### Option 1: Using Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. **IMPORTANT**: In the project settings, set the **Root Directory** to `my-next-app`
5. Click "Deploy"

### Option 2: Using Vercel CLI
1. Make sure you're in the root directory (`fineline_website`)
2. Run:
   ```bash
   vercel
   ```
3. If prompted, confirm the settings

### Option 3: Deploy from Subdirectory
If the above doesn't work, navigate to the subdirectory:
```bash
cd my-next-app
vercel
```

## Troubleshooting

If you still see `404: NOT_FOUND`:
1. Check that you've set the **Root Directory** to `my-next-app` in Vercel dashboard
2. Try redeploying from the Vercel dashboard
3. Or use CLI:
   ```bash
   vercel --prod
   ```
