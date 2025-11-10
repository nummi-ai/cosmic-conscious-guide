import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  image?: string;
  article?: {
    publishedTime: string;
    author: string;
    tags: string[];
    section: string;
  };
  type?: 'website' | 'article';
}

export function SEO({
  title = 'Nummi - Your AI Spiritual Companion',
  description = 'Discover inner peace with Nummi, your AI-powered spiritual companion. Get personalized meditation guidance, spiritual insights, and conscious conversations anytime, anywhere.',
  keywords = ['spiritual AI', 'AI companion', 'meditation app', 'mindfulness', 'spiritual guidance'],
  author = 'Nummi Team',
  image = 'https://nummi.ai/og-image.jpg',
  article,
  type = 'website',
}: SEOProps) {
  const location = useLocation();
  const siteUrl = 'https://nummi.ai';
  const url = `${siteUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    updateMetaTag('author', author);

    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:url', url, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:site_name', 'Nummi', 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:site', '@NummiAI');
    updateMetaTag('twitter:creator', '@NummiAI');

    // Article-specific tags
    if (article) {
      updateMetaTag('article:published_time', article.publishedTime, 'property');
      updateMetaTag('article:author', article.author, 'property');
      updateMetaTag('article:section', article.section, 'property');

      // Add article tags
      const existingArticleTags = document.querySelectorAll('meta[property="article:tag"]');
      existingArticleTags.forEach(tag => tag.remove());

      article.tags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'article:tag');
        meta.content = tag;
        document.head.appendChild(meta);
      });
    }

    // Add canonical link
    updateCanonicalLink(url);

    // Add JSON-LD structured data
    if (type === 'article' && article) {
      updateJSONLD({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: image,
        datePublished: article.publishedTime,
        author: {
          '@type': 'Organization',
          name: article.author,
          url: siteUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Nummi',
          url: siteUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url,
        },
        keywords: keywords.join(', '),
      });
    } else {
      updateJSONLD({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Nummi',
        url: siteUrl,
        description: description,
        publisher: {
          '@type': 'Organization',
          name: 'Nummi',
          url: siteUrl,
        },
      });
    }
  }, [title, description, keywords, author, image, url, type, article]);

  return null;
}

// Helper function to update or create meta tags
function updateMetaTag(name: string, content: string, attr: string = 'name') {
  let element = document.querySelector(`meta[${attr}="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

// Helper function to update canonical link
function updateCanonicalLink(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }

  link.href = url;
}

// Helper function to update JSON-LD structured data
function updateJSONLD(data: any) {
  let script = document.querySelector('script[type="application/ld+json"]');

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

// Helper component for blog post SEO
export function BlogPostSEO({
  title,
  description,
  author,
  date,
  tags,
  category,
  image,
}: {
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  category: string;
  image?: string;
}) {
  return (
    <SEO
      title={`${title} | Nummi Blog`}
      description={description}
      keywords={tags}
      author={author}
      image={image}
      type="article"
      article={{
        publishedTime: date,
        author: author,
        tags: tags,
        section: category,
      }}
    />
  );
}
