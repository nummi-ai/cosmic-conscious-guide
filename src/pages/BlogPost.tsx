import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import { getPostBySlug, getAllPosts, type BlogPost as BlogPostType } from '@/lib/blog';
import { BlogPostSEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calendar, Clock, ArrowLeft, Share2, Check, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchPost() {
      if (!slug) return;

      setLoading(true);
      try {
        const [fetchedPost, allPosts] = await Promise.all([
          getPostBySlug(slug),
          getAllPosts(),
        ]);

        setPost(fetchedPost);

        if (fetchedPost) {
          const related = allPosts
            .filter(p => p.slug !== fetchedPost.slug && p.category === fetchedPost.category)
            .slice(0, 3);
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex items-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-3 text-lg text-muted-foreground">Loading article...</span>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.description,
          url: url,
        });
      } catch (error) {
        // User cancelled or error occurred
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        toast({
          title: 'Link copied!',
          description: 'Article link copied to clipboard',
        });
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        toast({
          title: 'Failed to copy',
          description: 'Please copy the URL manually',
          variant: 'destructive',
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <BlogPostSEO
        title={post.title}
        description={post.description}
        author={post.author}
        date={post.date}
        tags={post.tags}
        category={post.category}
        image={post.image}
      />

      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/blog')}
            size="sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleShare}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </>
            )}
          </Button>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-3xl mx-auto px-4 pt-12 pb-8">
        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
          {post.title}
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          {post.description}
        </p>

        {/* Author & Category */}
        <div className="flex items-center gap-3 pb-8 border-b">
          <span className="text-sm font-medium">{post.author}</span>
          <span>·</span>
          <Badge variant="secondary" className="font-normal">
            {post.category}
          </Badge>
        </div>
      </article>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 py-8">
        <div
          className="prose prose-lg prose-slate dark:prose-invert max-w-none
            prose-headings:scroll-mt-20 prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:mt-16 prose-h1:mb-8
            prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-6 prose-h2:border-b prose-h2:pb-3
            prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-5
            prose-h4:text-xl prose-h4:mt-10 prose-h4:mb-4
            prose-p:leading-relaxed prose-p:mb-7 prose-p:text-foreground/90 prose-p:text-[17px]
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
            prose-strong:font-semibold prose-strong:text-foreground
            prose-code:text-sm prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto prose-pre:my-8
            prose-ul:my-8 prose-ul:space-y-3 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-8 prose-ol:space-y-3 prose-ol:pl-6
            prose-li:my-2 prose-li:text-foreground/90 prose-li:leading-relaxed prose-li:pl-2
            prose-li>ul:my-4 prose-li>ol:my-4
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-blockquote:my-8
            prose-img:rounded-lg prose-img:shadow-lg prose-img:my-10
            prose-hr:my-16 prose-hr:border-border
            prose-table:my-10 prose-table:border-collapse
            prose-thead:border-b-2 prose-thead:border-border
            prose-th:px-6 prose-th:py-4 prose-th:text-left prose-th:font-semibold prose-th:bg-muted/50
            prose-td:px-6 prose-td:py-4 prose-td:border-t prose-td:border-border
            prose-tr:border-b prose-tr:border-border last:prose-tr:border-0"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
            components={{
              img: ({ src, alt }) => {
                const [hasError, setHasError] = useState(false);

                if (hasError || !src) return null;

                return (
                  <img
                    src={src}
                    alt={alt || ''}
                    onError={() => setHasError(true)}
                    className="rounded-lg my-8 w-full shadow-lg"
                  />
                );
              },
              table: ({ children }) => (
                <div className="overflow-x-auto my-8 -mx-4 px-4">
                  <table className="min-w-full divide-y divide-border border border-border rounded-lg overflow-hidden">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-muted/50">
                  {children}
                </thead>
              ),
              th: ({ children }) => (
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-6 py-4 text-sm text-foreground/90">
                  {children}
                </td>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-primary hover:underline font-medium"
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {children}
                </a>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 py-16 border-t">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map(relatedPost => (
              <Link
                key={relatedPost.slug}
                to={`/blog/${relatedPost.slug}`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3 text-xs">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {relatedPost.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {relatedPost.readingTime}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="border-t bg-gradient-cosmic">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience AI-Powered Spiritual Guidance
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Download Nummi and start your journey today
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 shadow-lg"
            asChild
          >
            <Link to="/download">Download Nummi</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
