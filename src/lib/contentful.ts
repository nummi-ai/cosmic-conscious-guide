import { createClient, Entry } from 'contentful';

// Contentful client configuration
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || '',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '',
});

// Blog post interface matching Contentful content model
export interface ContentfulBlogPost {
  title: string;
  slug: string;
  description: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  featuredImage?: {
    url: string;
    title: string;
    description?: string;
  };
  featured: boolean;
  content: string;
}

// Transform Contentful entry to BlogPost format
function transformContentfulPost(entry: Entry<any>): ContentfulBlogPost {
  const fields = entry.fields;

  return {
    title: fields.title || '',
    slug: fields.slug || '',
    description: fields.description || '',
    author: fields.author || 'Nummi Team',
    publishDate: fields.publishDate || entry.sys.createdAt,
    category: fields.category || 'Uncategorized',
    tags: fields.tags || [],
    featuredImage: fields.featuredImage?.fields?.file ? {
      url: `https:${fields.featuredImage.fields.file.url}`,
      title: fields.featuredImage.fields.title || '',
      description: fields.featuredImage.fields.description || '',
    } : undefined,
    featured: fields.featured || false,
    content: fields.content || '',
  };
}

// Fetch all blog posts from Contentful
export async function getAllPosts(): Promise<ContentfulBlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishDate'],
      limit: 100,
    });

    return response.items.map(transformContentfulPost);
  } catch (error) {
    console.error('Error fetching posts from Contentful:', error);
    return [];
  }
}

// Fetch a single blog post by slug
export async function getPostBySlug(slug: string): Promise<ContentfulBlogPost | null> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });

    if (response.items.length === 0) {
      return null;
    }

    return transformContentfulPost(response.items[0]);
  } catch (error) {
    console.error('Error fetching post from Contentful:', error);
    return null;
  }
}

// Fetch featured posts
export async function getFeaturedPosts(): Promise<ContentfulBlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.featured': true,
      order: ['-fields.publishDate'],
      limit: 3,
    });

    return response.items.map(transformContentfulPost);
  } catch (error) {
    console.error('Error fetching featured posts from Contentful:', error);
    return [];
  }
}

// Fetch posts by category
export async function getPostsByCategory(category: string): Promise<ContentfulBlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.category': category,
      order: ['-fields.publishDate'],
      limit: 50,
    });

    return response.items.map(transformContentfulPost);
  } catch (error) {
    console.error('Error fetching posts by category from Contentful:', error);
    return [];
  }
}

// Get all unique categories
export async function getAllCategories(): Promise<string[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      select: ['fields.category'],
      limit: 1000,
    });

    const categories = new Set<string>();
    response.items.forEach((item: Entry<any>) => {
      if (item.fields.category) {
        categories.add(item.fields.category);
      }
    });

    return Array.from(categories).sort();
  } catch (error) {
    console.error('Error fetching categories from Contentful:', error);
    return [];
  }
}
