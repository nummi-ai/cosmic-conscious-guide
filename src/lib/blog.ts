import matter from 'gray-matter';

// Import markdown files directly
import whatIsSpiritualAI from '../content/blog/what-is-spiritual-ai.md?raw';
import aiMeditationGuide from '../content/blog/ai-meditation-guide.md?raw';
import bestAICompanionApps from '../content/blog/best-ai-companion-apps.md?raw';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
  featured: boolean;
  content: string;
  readingTime: string;
}

// List of all blog post markdown content
const blogPostsRaw = [
  whatIsSpiritualAI,
  aiMeditationGuide,
  bestAICompanionApps,
];

// Calculate reading time (simple estimation: 200 words per minute)
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Parse blog posts from markdown files
export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const rawContent of blogPostsRaw) {
    const { data, content: markdownContent } = matter(rawContent);

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
      content: markdownContent,
      readingTime: calculateReadingTime(markdownContent),
    });
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
}

// Get featured posts
export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter(post => post.featured);
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(post => post.category === category);
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post => post.tags.includes(tag));
}

// Get all unique categories
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = posts.map(post => post.category);
  return Array.from(new Set(categories));
}

// Get all unique tags
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = posts.flatMap(post => post.tags);
  return Array.from(new Set(tags));
}

// Search posts by query
export function searchPosts(query: string): BlogPost[] {
  const posts = getAllPosts();
  const lowerQuery = query.toLowerCase();

  return posts.filter(post =>
    post.title.toLowerCase().includes(lowerQuery) ||
    post.description.toLowerCase().includes(lowerQuery) ||
    post.content.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
