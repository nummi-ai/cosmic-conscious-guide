import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const OUTPUT_FILE = path.join(__dirname, '../src/lib/blog-data.json');

// Calculate reading time
function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Process all markdown files
function processBlogPosts() {
  const files = fs.readdirSync(BLOG_DIR);
  const posts = [];

  files.forEach(file => {
    if (!file.endsWith('.md')) return;

    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    posts.push({
      slug: data.slug,
      title: data.title,
      description: data.description,
      author: data.author || 'Nummi Team',
      date: data.date,
      category: data.category,
      tags: data.tags || [],
      image: data.image,
      featured: data.featured || false,
      content: content,
      readingTime: calculateReadingTime(content),
    });
  });

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

// Generate the blog data JSON
function generateBlogData() {
  const posts = processBlogPosts();
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
  console.log(`✅ Generated blog data: ${posts.length} posts`);
}

generateBlogData();
