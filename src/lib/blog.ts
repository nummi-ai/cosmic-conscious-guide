// Import Contentful service
import * as contentful from './contentful';
// Import pre-generated blog data as fallback
import blogData from './blog-data.json';

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
  readingTime?: string;
}

// Check if Contentful is configured
function isContentfulConfigured(): boolean {
  return !!(import.meta.env.VITE_CONTENTFUL_SPACE_ID && import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN);
}

// Calculate reading time from content
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Transform Contentful post to BlogPost format
function transformContentfulToBlogPost(post: contentful.ContentfulBlogPost): BlogPost {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    author: post.author,
    date: post.publishDate,
    category: post.category,
    tags: post.tags,
    image: post.featuredImage?.url,
    featured: post.featured,
    content: post.content,
    readingTime: calculateReadingTime(post.content),
  };
}

// Get all blog posts (from Contentful or fallback to local data)
export async function getAllPosts(): Promise<BlogPost[]> {
  if (isContentfulConfigured()) {
    try {
      const posts = await contentful.getAllPosts();
      return posts.map(transformContentfulToBlogPost);
    } catch (error) {
      console.warn('Failed to fetch from Contentful, falling back to local data:', error);
      return blogData as BlogPost[];
    }
  }
  return blogData as BlogPost[];
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (isContentfulConfigured()) {
    try {
      const post = await contentful.getPostBySlug(slug);
      return post ? transformContentfulToBlogPost(post) : null;
    } catch (error) {
      console.warn('Failed to fetch from Contentful, falling back to local data:', error);
      const posts = blogData as BlogPost[];
      return posts.find(post => post.slug === slug) || null;
    }
  }
  const posts = blogData as BlogPost[];
  return posts.find(post => post.slug === slug) || null;
}

// Get featured posts
export async function getFeaturedPosts(): Promise<BlogPost[]> {
  if (isContentfulConfigured()) {
    try {
      const posts = await contentful.getFeaturedPosts();
      return posts.map(transformContentfulToBlogPost);
    } catch (error) {
      console.warn('Failed to fetch from Contentful, falling back to local data:', error);
      return (blogData as BlogPost[]).filter(post => post.featured);
    }
  }
  return (blogData as BlogPost[]).filter(post => post.featured);
}

// Get posts by category
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  if (isContentfulConfigured()) {
    try {
      const posts = await contentful.getPostsByCategory(category);
      return posts.map(transformContentfulToBlogPost);
    } catch (error) {
      console.warn('Failed to fetch from Contentful, falling back to local data:', error);
      return (blogData as BlogPost[]).filter(post => post.category === category);
    }
  }
  return (blogData as BlogPost[]).filter(post => post.category === category);
}

// Get posts by tag
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.tags.includes(tag));
}

// Get all unique categories
export async function getAllCategories(): Promise<string[]> {
  if (isContentfulConfigured()) {
    try {
      return await contentful.getAllCategories();
    } catch (error) {
      console.warn('Failed to fetch from Contentful, falling back to local data:', error);
      const posts = blogData as BlogPost[];
      const categories = posts.map(post => post.category);
      return Array.from(new Set(categories));
    }
  }
  const posts = blogData as BlogPost[];
  const categories = posts.map(post => post.category);
  return Array.from(new Set(categories));
}

// Get all unique tags
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = posts.flatMap(post => post.tags);
  return Array.from(new Set(tags));
}

// Search posts by query
export async function searchPosts(query: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  const lowerQuery = query.toLowerCase();

  return posts.filter(post =>
    post.title.toLowerCase().includes(lowerQuery) ||
    post.description.toLowerCase().includes(lowerQuery) ||
    post.content.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
