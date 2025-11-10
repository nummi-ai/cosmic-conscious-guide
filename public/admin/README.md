# Decap CMS Admin Setup

This directory contains the Decap CMS (Content Management System) configuration for the Nummi blog.

## What is Decap CMS?

Decap CMS provides a user-friendly admin interface (like WordPress) for managing blog posts. It works directly with your GitHub repository - no separate database needed!

## Accessing the CMS

Once deployed, the CMS admin panel will be available at:
```
https://nummi.ai/admin
```

## Authentication Setup Required

**Important:** Before team members can use the CMS, you need to set up GitHub authentication.

### Option 1: Use Vercel + GitHub OAuth (Recommended)

1. **Create a GitHub OAuth App:**
   - Go to GitHub Settings → Developer settings → OAuth Apps
   - Click "New OAuth App"
   - Fill in:
     - Application name: `Nummi Blog CMS`
     - Homepage URL: `https://nummi.ai`
     - Authorization callback URL: `https://api.netlify.com/auth/done`
   - Save and copy the **Client ID** and **Client Secret**

2. **Set up Vercel Environment Variables:**
   - Go to your Vercel project settings
   - Add these environment variables:
     - `GITHUB_CLIENT_ID` = your OAuth app client ID
     - `GITHUB_CLIENT_SECRET` = your OAuth app client secret

3. **Deploy an OAuth gateway:**
   - Use https://github.com/vencax/netlify-cms-github-oauth-provider
   - Deploy to Vercel
   - Update `config.yml` with your OAuth gateway URL:
     ```yaml
     backend:
       name: github
       repo: nummi-ai/cosmic-conscious-guide
       branch: main
       base_url: https://your-oauth-gateway.vercel.app
       auth_endpoint: /auth
     ```

### Option 2: Use Netlify Identity (If Migrating to Netlify)

If you deploy to Netlify instead of Vercel:

1. **Enable Netlify Identity:**
   - Go to Netlify dashboard → Identity
   - Click "Enable Identity"

2. **Enable Git Gateway:**
   - Identity → Services → Git Gateway
   - Click "Enable Git Gateway"

3. **Invite team members:**
   - Identity → Invite users
   - Send invitations to team members

4. **Update the admin page:**
   - Uncomment the Netlify Identity script in `/public/admin/index.html`

### Option 3: Local Development Only

For testing locally without authentication:

1. **Update `config.yml`:**
   ```yaml
   local_backend: true
   ```

2. **Run the local backend:**
   ```bash
   npx decap-server
   ```

3. **Run your dev server:**
   ```bash
   npm run dev
   ```

4. **Access at:**
   ```
   http://localhost:8080/admin
   ```

## Files in This Directory

- **`index.html`** - The CMS admin page
- **`config.yml`** - CMS configuration (fields, collections, backend)
- **`README.md`** - This file

## How the CMS Works

1. **Team member logs in** at `/admin` using GitHub authentication
2. **Creates or edits a post** using the visual editor
3. **Clicks "Publish"**
4. **CMS commits changes** to GitHub repository automatically
5. **Vercel detects the commit** and rebuilds the site
6. **Post goes live** in 1-2 minutes!

## Troubleshooting

### "Config must have required property 'backend'" error

This means the CMS can't load `config.yml`. Check that:
- The file exists at `/public/admin/config.yml`
- YAML syntax is correct (no tab characters, proper indentation)
- The file is being deployed to Vercel

### "Authentication required" error

This means GitHub OAuth isn't configured. See "Authentication Setup Required" above.

### "Failed to persist entry" error

This means the CMS can't write to GitHub. Check:
- GitHub OAuth has the correct scopes (needs `repo` access)
- The repository name in `config.yml` is correct
- The user has write access to the repository

## Documentation

- Decap CMS Docs: https://decapcms.org/docs/
- GitHub Backend: https://decapcms.org/docs/github-backend/
- Configuration Options: https://decapcms.org/docs/configuration-options/

## Support

For issues or questions:
1. Check the Decap CMS documentation
2. Search for similar issues on GitHub: https://github.com/decaporg/decap-cms/issues
3. Ask the Nummi team for help
