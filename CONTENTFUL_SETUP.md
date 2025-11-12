# Contentful CMS Setup Guide

This guide will help you set up Contentful as your blog CMS for Nummi.

## Why Contentful?

✅ **Completely FREE** (25,000 entries, 3 users)
✅ **Easy to use** - Beautiful UI, easier than WordPress
✅ **No hosting needed** - Cloud-based
✅ **Real-time collaboration** - Multiple team members can edit
✅ **Rich text editor** - WYSIWYG with markdown support
✅ **Image management** - Drag and drop uploads
✅ **No technical knowledge required**

---

## Step 1: Get Your API Keys

1. **Go to:** https://app.contentful.com/
2. **Log in** with your Contentful account
3. **Select your space** (or create a new one called "Nummi Blog")
4. **Go to:** Settings → API keys
5. **Click:** "Add API key" button
6. **Name it:** "Nummi Blog Production"
7. **Copy these values:**
   - **Space ID** (looks like: `abc123xyz`)
   - **Content Delivery API - access token** (long alphanumeric string)

---

## Step 2: Add API Keys to Vercel

1. **Go to:** https://vercel.com/dashboard
2. **Select your project:** `cosmic-conscious-guide`
3. **Go to:** Settings → Environment Variables
4. **Add these two variables:**

   ```
   VITE_CONTENTFUL_SPACE_ID = your_space_id_here
   VITE_CONTENTFUL_ACCESS_TOKEN = your_access_token_here
   ```

5. **Save** and **redeploy** your site

---

## Step 3: Create Content Model in Contentful

Now you need to set up the blog post structure in Contentful:

### 3.1 Create a new Content Type

1. **Go to:** Content model tab (top navigation)
2. **Click:** "Add content type"
3. **Name:** `Blog Post`
4. **API Identifier:** `blogPost` (it should auto-fill)
5. **Click:** Create

### 3.2 Add Fields to Your Content Type

Click "Add field" for each of the following fields:

#### Field 1: Title
- **Field type:** Text (Short text)
- **Name:** Title
- **Field ID:** `title`
- **Validation:** Required, Min: 10 characters, Max: 100 characters
- **Help text:** "The title of your blog post (50-60 characters for best SEO)"

#### Field 2: Slug
- **Field type:** Text (Short text)
- **Name:** Slug
- **Field ID:** `slug`
- **Validation:** Required, Unique, Matches pattern: `^[a-z0-9]+(?:-[a-z0-9]+)*$`
- **Help text:** "URL-friendly version (e.g., 'ai-meditation-guide')"

#### Field 3: Description
- **Field type:** Text (Long text)
- **Name:** Description
- **Field ID:** `description`
- **Validation:** Required, Max: 200 characters
- **Help text:** "150-160 character summary for SEO and social sharing"

#### Field 4: Author
- **Field type:** Text (Short text)
- **Name:** Author
- **Field ID:** `author`
- **Default value:** "Nummi Team"
- **Help text:** "Who wrote this post?"

#### Field 5: Publish Date
- **Field type:** Date and time
- **Name:** Publish Date
- **Field ID:** `publishDate`
- **Validation:** Required
- **Help text:** "When should this post be published?"

#### Field 6: Category
- **Field type:** Text (Short text, dropdown)
- **Name:** Category
- **Field ID:** `category`
- **Validation:** Required
- **Predefined values:**
  - Spiritual Technology
  - Meditation
  - AI Companions
  - Mindfulness
  - Personal Growth
  - Mental Wellness
  - Astrology
  - Horoscope
- **Help text:** "Main category for this post"

#### Field 7: Tags
- **Field type:** Text (Short text, list)
- **Name:** Tags
- **Field ID:** `tags`
- **Validation:** Required
- **Help text:** "Keywords for SEO (add 3-7 tags, press Enter after each)"

#### Field 8: Featured Image
- **Field type:** Media (Single file)
- **Name:** Featured Image
- **Field ID:** `featuredImage`
- **Validation:** Optional, Accept only images
- **Help text:** "Main image for your blog post (1200x630px recommended)"

#### Field 9: Featured
- **Field type:** Boolean
- **Name:** Featured
- **Field ID:** `featured`
- **Default value:** No
- **Help text:** "Should this post appear in the featured section?"

#### Field 10: Content
- **Field type:** Rich text
- **Name:** Content
- **Field ID:** `content`
- **Validation:** Required
- **Help text:** "Write your blog post content here"

### 3.3 Save Your Content Model

Click **"Save"** at the top right.

---

## Step 4: Create Your First Blog Post

1. **Go to:** Content tab (top navigation)
2. **Click:** "Add entry" → Select "Blog Post"
3. **Fill out the form:**
   - **Title:** Your article title
   - **Slug:** url-friendly-slug
   - **Description:** SEO description
   - **Author:** Your name or "Nummi Team"
   - **Publish Date:** Pick a date
   - **Category:** Select from dropdown
   - **Tags:** Add keywords (spiritual AI, meditation, etc.)
   - **Featured Image:** Upload an image (optional)
   - **Featured:** Toggle ON if you want it on homepage
   - **Content:** Write your article using the rich text editor

4. **Click:** "Publish" (top right)

---

## Step 5: Deploy and Test

1. **Redeploy your Vercel site** (it should auto-deploy when you push changes)
2. **Go to:** https://nummi.ai/blog
3. **Your Contentful posts should appear!**

---

## Using Contentful (Daily Workflow)

### Creating a New Post:

1. Log into Contentful: https://app.contentful.com/
2. Go to Content tab
3. Click "Add entry" → "Blog Post"
4. Fill out the form
5. Click "Publish"
6. Wait 1-2 minutes for your site to rebuild
7. Post is live at nummi.ai/blog!

### Editing a Post:

1. Go to Content tab
2. Find your post
3. Click to edit
4. Make changes
5. Click "Publish" again
6. Changes go live in 1-2 minutes

### Using the Rich Text Editor:

The Content field supports:
- **Bold**, *italic*, headings
- Bullet lists and numbered lists
- Links to external sites
- Embedded images
- Blockquotes
- Code blocks
- Tables

Just use the toolbar or markdown shortcuts!

---

## Inviting Team Members

1. **Go to:** Settings → Users & roles
2. **Click:** "Invite users"
3. **Enter their email**
4. **Set role:** Content editor
5. **Send invitation**

They'll get an email to join and can start creating posts immediately!

---

## SEO Best Practices

When writing posts in Contentful:

### 1. Title (50-60 characters)
✅ Good: "AI Meditation Guide: Transform Your Practice in 2025"
❌ Bad: "Meditation Tips"

### 2. Description (150-160 characters)
✅ Good: "Discover how AI meditation guides like Nummi provide personalized practice, 24/7 support, and proven techniques. Start your journey today."
❌ Bad: "Learn about meditation"

### 3. Slug
✅ Good: `ai-meditation-guide`
❌ Bad: `post-123` or `blog1`

### 4. Tags (3-7 keywords)
Use specific, searchable terms:
- spiritual AI
- AI companion
- meditation app
- mindfulness
- AI astrology
- daily horoscope

### 5. Content Length
- Quick tips: 600-800 words
- Standard articles: 1,200-1,500 words
- Comprehensive guides: 2,000+ words

### 6. Use Headers
Structure your content with H2 and H3 headers for better SEO and readability.

### 7. Add Images
Include relevant images with descriptive alt text.

### 8. Internal Links
Link to other Nummi pages:
- [Download Nummi](https://nummi.ai/download)
- Link to other blog posts

---

## Troubleshooting

### "No posts appearing on the blog"

**Check:**
1. Are your environment variables set in Vercel?
2. Did you create the `blogPost` content type with the exact field names?
3. Did you publish your posts (not just save as draft)?
4. Did you redeploy after adding environment variables?

### "Featured image not showing"

**Check:**
1. Is the image uploaded in Contentful?
2. Is the field name exactly `featuredImage`?
3. Try re-uploading the image

### "Content not updating"

**Wait:**
- Contentful changes can take 1-2 minutes to propagate
- Vercel rebuild takes 1-2 minutes
- Total time: 2-4 minutes from publish to live

---

## Migration from Markdown (Optional)

If you want to keep your existing markdown blog posts while adding Contentful:

1. The app will first check Contentful for posts
2. If Contentful is not configured, it falls back to markdown files
3. You can have both systems running simultaneously
4. Gradually migrate old posts to Contentful

---

## Support

### Contentful Resources:
- Docs: https://www.contentful.com/developers/docs/
- Help Center: https://www.contentful.com/help/
- Community: https://www.contentful.com/community/

### Nummi Team:
- Questions? Ask in the team Slack/Discord
- Issues? Check the GitHub repo

---

## Costs

**Contentful Free Tier includes:**
- 25,000 records (blog posts, images, etc.)
- 3 users
- 50 locales
- Unlimited API calls
- Community support

**This is MORE than enough for Nummi's blog!**

You'd need to write 68+ blog posts per day to hit the limit. You're good! 🚀

---

## Next Steps

1. ✅ Get API keys from Contentful
2. ✅ Add them to Vercel environment variables
3. ✅ Create the content model in Contentful
4. ✅ Write your first blog post
5. ✅ Publish and watch it appear on nummi.ai/blog
6. 🎉 Invite your team and start creating amazing content!

---

**Happy blogging!** Your team will love how easy Contentful makes content creation.
