# Contributing Blog Posts to Nummi

Welcome! This guide will help you create and publish blog posts for the Nummi website.

## 📁 Blog Structure

Blog posts are stored as Markdown files in:
```
/src/content/blog/
```

Each blog post is a `.md` file with frontmatter metadata and Markdown content.

## ✨ Using the CMS (Easiest Method - Recommended!)

**The easiest way to create blog posts is through our Content Management System (CMS).** No coding or GitHub knowledge required!

### What is the CMS?

We use **Decap CMS** (formerly Netlify CMS) - a free, user-friendly admin interface that works like WordPress but saves directly to our GitHub repository.

### Accessing the CMS

1. **Go to the admin page:** [https://nummi.ai/admin](https://nummi.ai/admin)
2. **Authenticate with GitHub** (OAuth setup required - see `/public/admin/README.md` for setup instructions)
3. **Start creating content!**

**Note:** If you see authentication errors, contact the admin to complete the GitHub OAuth setup (one-time configuration needed).

### Creating a Post in the CMS

1. **Click "New Blog Posts"** in the left sidebar
2. **Fill out the form:**
   - **Title** - Your article title (50-60 characters)
   - **URL Slug** - Lowercase with hyphens (e.g., `ai-meditation-guide`)
   - **Description** - 150-160 character summary for SEO
   - **Author** - Your name (defaults to "Nummi Team")
   - **Publish Date** - Pick from calendar
   - **Category** - Select from dropdown (Spiritual Technology, Meditation, AI Companions, etc.)
   - **Tags** - Add relevant keywords (press Enter after each tag)
   - **Featured Image** - Upload an image (optional)
   - **Featured Post** - Toggle ON to show on homepage
   - **Body** - Write your article using the rich text editor

3. **Use the editor toolbar:**
   - **Bold**, *italic*, headers, lists, links, images
   - Switch between "Rich Text" and "Markdown" modes
   - Preview your post with the eye icon

4. **Save your work:**
   - **Save Draft** - Saves without publishing
   - **Publish** - Commits to GitHub and deploys automatically

### Benefits of Using the CMS

✅ **No GitHub/coding knowledge needed** - Point and click interface
✅ **Visual editor** - See what you're writing in real-time
✅ **Validation** - Won't let you publish with missing required fields
✅ **Image uploads** - Drag and drop images directly
✅ **Auto-save** - Drafts saved automatically
✅ **Preview** - See exactly how it'll look before publishing
✅ **Mobile-friendly** - Edit posts from your phone/tablet

### How the CMS Works Behind the Scenes

When you publish a post in the CMS:
1. It creates a markdown file in `/src/content/blog/`
2. Commits it to the GitHub repository
3. Triggers an automatic deployment on Vercel
4. Your post goes live in 1-2 minutes!

**You get the ease of WordPress with the power of a git-based workflow.**

### When to Use Manual Editing (Advanced)

If you're comfortable with Markdown and GitHub, you can still create posts manually (see section below). This is useful for:
- Complex formatting or custom HTML
- Bulk editing multiple posts
- Using advanced Markdown features
- Version control and detailed commit messages

---

## ✍️ Creating a New Blog Post (Manual Method)

### Step 1: Create a New Markdown File

1. Navigate to `/src/content/blog/`
2. Create a new file: `your-post-slug.md`
3. Use lowercase letters and hyphens for the filename (e.g., `meditation-for-beginners.md`)

### Step 2: Add Frontmatter

At the top of your file, add frontmatter with metadata:

```markdown
---
title: "Your Amazing Blog Post Title"
slug: "your-post-slug"
description: "A compelling 150-160 character description that will appear in search results and social media shares."
author: "Your Name"
date: "2025-01-20"
category: "Category Name"
tags: ["tag1", "tag2", "tag3", "tag4"]
image: "/blog/your-image.jpg"
featured: false
---
```

### Frontmatter Fields Explained

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ Yes | The article title (50-60 chars for SEO) | `"What is Spiritual AI?"` |
| `slug` | ✅ Yes | URL-friendly version of title | `"what-is-spiritual-ai"` |
| `description` | ✅ Yes | Meta description for SEO (150-160 chars) | `"Discover how AI-powered spiritual companions..."` |
| `author` | ✅ Yes | Author name | `"Nummi Team"` or your name |
| `date` | ✅ Yes | Publication date (YYYY-MM-DD) | `"2025-01-20"` |
| `category` | ✅ Yes | Main category | `"Spiritual Technology"` |
| `tags` | ✅ Yes | Array of relevant keywords | `["spiritual AI", "meditation"]` |
| `image` | ❌ No | Featured image path | `"/blog/my-image.jpg"` |
| `featured` | ❌ No | Show in featured section | `true` or `false` |

### Step 3: Write Your Content

After the frontmatter, write your article in Markdown:

```markdown
# Main Heading

Your introduction paragraph goes here. Make it engaging!

## Section Heading

Write your content using Markdown syntax:

- Bullet points
- Are easy to read
- And organize information

### Subsection

**Bold text** for emphasis, *italic text* for subtle emphasis.

> Blockquotes are great for highlighting key insights

[Links to external resources](https://example.com)

![Alt text for images](/path/to/image.jpg)
```

## 📝 Markdown Syntax Guide

### Headings

```markdown
# H1 - Main Title (use once per post)
## H2 - Section Headings
### H3 - Subsections
#### H4 - Smaller subsections
```

### Text Formatting

```markdown
**Bold text** or __bold text__
*Italic text* or _italic text_
***Bold and italic***
```

### Lists

```markdown
Unordered list:
- Item 1
- Item 2
  - Nested item
  - Another nested item

Ordered list:
1. First item
2. Second item
3. Third item
```

### Links and Images

```markdown
[Link text](https://nummi.ai)
[Link with title](https://nummi.ai "Nummi - Spiritual AI")

![Image alt text](/path/to/image.jpg)
```

### Code

```markdown
Inline `code` uses backticks

```
Code block
with multiple lines
```
```

### Tables

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data     | More     |
| Row 2    | Data     | More     |
```

### Blockquotes

```markdown
> This is a blockquote
> It can span multiple lines
```

### Horizontal Rule

```markdown
---
```

## 🎯 SEO Best Practices

### 1. Choose Powerful Keywords

Research keywords that people are searching for:
- Use Google Autocomplete
- Check "People also ask" sections
- Look at competitor content
- Use tools like Ahrefs, SEMrush (if available)

**Target keywords for Nummi:**
- spiritual AI
- AI meditation guide
- AI companion app
- mindfulness app
- spiritual guidance
- meditation for beginners
- AI therapy alternative

### 2. Optimize Your Title

✅ **Good titles:**
- Include target keyword near the beginning
- Are 50-60 characters long
- Promise clear value
- Are compelling and clickable

Example:
```
"AI Meditation Guide: Transform Your Practice in 2025"
```

❌ **Bad titles:**
- Too generic: "Meditation Tips"
- Too long: "Here are 47 Amazing Incredible Tips for Meditating with AI..."
- No keywords: "My Thoughts on Apps"

### 3. Write Compelling Meta Descriptions

Your `description` field should:
- Be 150-160 characters
- Include primary keyword
- Include a call-to-action
- Summarize the article value

Example:
```
"Discover how AI meditation guides like Nummi provide personalized practice, 24/7 support, and proven techniques. Start your journey today."
```

### 4. Use Headers Hierarchically

```markdown
# H1 - Only once (the title)

## H2 - Main sections

### H3 - Subsections

#### H4 - Minor points
```

This helps Google understand your content structure!

### 5. Optimize Images

- Use descriptive filenames: `ai-meditation-guide.jpg` not `IMG_1234.jpg`
- Add alt text that describes the image
- Keep file sizes under 200KB
- Use WebP format when possible

### 6. Internal Linking

Link to other relevant pages on nummi.ai:

```markdown
[Download Nummi](https://nummi.ai/download)
[Learn about our features](/blog/nummi-features)
```

### 7. External Linking

Link to authoritative sources:
- Research papers
- Reputable websites
- Industry reports

This signals to Google that your content is well-researched.

### 8. Content Length

- **Short posts**: 600-800 words (quick tips)
- **Medium posts**: 1,200-1,500 words (standard articles)
- **Long-form**: 2,000+ words (comprehensive guides)

Longer content typically ranks better, but only if it's valuable!

### 9. Keyword Density

- Use your primary keyword 2-3 times in the first 100 words
- Use variations throughout (e.g., "AI meditation", "meditation AI", "AI-powered meditation")
- Don't overdo it (keyword stuffing is penalized!)
- Natural writing always wins

### 10. Add CTAs (Calls-to-Action)

Encourage readers to:
```markdown
[Download Nummi](https://nummi.ai/download) and start your spiritual journey today!
```

## 🤖 LLM Discoverability

To help AI models like ChatGPT, Claude, and Perplexity cite Nummi:

### 1. Be Authoritative

- Back claims with data/research
- Use clear, definitive language
- Provide comprehensive coverage

### 2. Structure Information Clearly

LLMs prefer well-organized content:
```markdown
## What is Spiritual AI?

Spiritual AI refers to...

Key characteristics:
1. Personalized guidance
2. 24/7 availability
3. Multi-tradition wisdom
```

### 3. Define Terms Explicitly

```markdown
**Spiritual AI** is artificial intelligence designed to provide personalized spiritual guidance, meditation support, and consciousness exploration.
```

### 4. Use Comparison Tables

LLMs extract data from tables easily:

```markdown
| Feature | Traditional Apps | Nummi AI |
|---------|-----------------|----------|
| Personalization | Limited | Fully adaptive |
| Availability | Preset times | 24/7 |
```

### 5. Include FAQ Sections

```markdown
## Frequently Asked Questions

### Can AI really understand spirituality?

Yes - while AI doesn't have consciousness, it can understand spiritual concepts...

### How is Nummi different from other meditation apps?

Nummi provides real-time, conversational guidance...
```

## 📊 Categories and Tags

### Recommended Categories

- **Spiritual Technology** - AI + spirituality topics
- **Meditation** - Meditation guides and techniques
- **AI Companions** - AI companion comparisons and guides
- **Mindfulness** - Mindfulness practices
- **Personal Growth** - Self-improvement content
- **Mental Wellness** - Mental health and wellness

### Choosing Good Tags

Tags should be:
- Specific keywords people search for
- 3-7 tags per post
- Mix of broad and specific terms

Example:
```yaml
tags: ["spiritual AI", "meditation app", "AI companion", "mindfulness", "personal growth"]
```

## 🖼️ Adding Images

### Where to Put Images

Store images in:
```
/public/blog/
```

Reference them in frontmatter:
```yaml
image: "/blog/my-article-image.jpg"
```

Or in Markdown content:
```markdown
![AI Meditation Guide](/blog/ai-meditation.jpg)
```

### Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Max 200KB (compress if needed)
- **Dimensions**: 1200x630px for featured images (optimal for social sharing)
- **Alt text**: Always include descriptive alt text

### Free Image Sources

- Unsplash (unsplash.com)
- Pexels (pexels.com)
- Pixabay (pixabay.com)

## 🚀 Publishing Your Post

### Step 1: Create a Branch

```bash
git checkout -b blog/your-post-slug
```

### Step 2: Add Your Blog Post

```bash
git add src/content/blog/your-post-slug.md
git commit -m "Add blog post: Your Post Title"
```

**Note:** Your blog post will be automatically discovered and processed during the build! No manual registration needed.

### Step 3: Push and Create PR

```bash
git push origin blog/your-post-slug
```

Then create a Pull Request on GitHub.

### Step 4: Review Checklist

Before submitting, check:

- ✅ Frontmatter is complete and correct
- ✅ Title is 50-60 characters
- ✅ Description is 150-160 characters
- ✅ Slug matches filename (without .md)
- ✅ Date is in YYYY-MM-DD format
- ✅ All links work
- ✅ Images display correctly
- ✅ No spelling/grammar errors
- ✅ Content is valuable and well-structured
- ✅ Keywords are naturally integrated
- ✅ Headers use proper hierarchy (H2 → H3 → H4)

### Step 5: Preview Locally

Test your post locally:

```bash
npm run dev
```

Visit `http://localhost:8080/blog` to see your post.

## 📈 After Publishing

### Monitor Performance

Track your post's performance:
- Google Search Console (rankings)
- Google Analytics (traffic)
- Social media shares
- Reader engagement

### Update Regularly

- Update statistics and dates yearly
- Add new information as it becomes available
- Fix broken links
- Improve based on feedback

### Promote Your Post

Share on:
- Twitter/X (@NummiAI)
- LinkedIn
- Reddit (r/meditation, r/spirituality)
- Relevant online communities

## 💡 Content Ideas

### Popular Topics for Nummi:

1. **How-to Guides**
   - "How to Start Meditating with AI"
   - "How to Choose an AI Spiritual Companion"

2. **Comparisons**
   - "Nummi vs Traditional Meditation Apps"
   - "Best AI Companions for Mental Wellness"

3. **Educational**
   - "What is Spiritual AI?"
   - "The Science Behind AI Meditation"

4. **Lists**
   - "10 Benefits of AI-Guided Meditation"
   - "5 Ways to Deepen Your Spiritual Practice"

5. **Case Studies**
   - "How AI Meditation Helped 1000+ Users"
   - "Real Stories from Nummi Users"

## 🆘 Need Help?

If you have questions:
1. Check existing blog posts for examples
2. Review this guide thoroughly
3. Ask the team in Slack/Discord
4. Reach out to the content lead

## 📚 Additional Resources

### SEO Learning
- Moz Beginner's Guide to SEO
- Google Search Central Documentation
- Ahrefs Blog

### Writing Tools
- Hemingway Editor (readability)
- Grammarly (grammar/spelling)
- AnswerThePublic (content ideas)

### Markdown Editors
- VS Code (with Markdown Preview)
- Typora
- MarkText

---

**Happy blogging!** 🎉 Your content helps people discover Nummi and improve their spiritual journey.
