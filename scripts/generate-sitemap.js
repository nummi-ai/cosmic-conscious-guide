import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://nummi.ai';

// Static pages
const staticPages = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/download', priority: 0.9, changefreq: 'weekly' },
  { url: '/blog', priority: 0.9, changefreq: 'daily' },
];

// Get all blog posts
function getBlogPosts() {
  const blogDir = path.join(__dirname, '../src/content/blog');
  const files = fs.readdirSync(blogDir);

  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
      const { data } = matter(content);
      return {
        url: `/blog/${data.slug}`,
        priority: 0.8,
        changefreq: 'monthly',
        lastmod: data.date,
      };
    });
}

// Generate sitemap XML
function generateSitemap() {
  const blogPosts = getBlogPosts();
  const allPages = [...staticPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
}

// Write sitemap to public directory
function writeSitemap() {
  const sitemap = generateSitemap();
  const publicDir = path.join(__dirname, '../public');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
}

// Run the script
writeSitemap();
