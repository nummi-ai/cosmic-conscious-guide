import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts, getAllCategories, type BlogPost } from '@/lib/blog';
import { SEO } from '@/components/SEO';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Calendar, Clock, ArrowRight, Loader2 } from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts and categories on mount
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [posts, cats] = await Promise.all([
          getAllPosts(),
          getAllCategories(),
        ]);
        setAllPosts(posts);
        setCategories(cats);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchesSearch = searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = !selectedCategory || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [allPosts, searchQuery, selectedCategory]);

  const featuredPosts = filteredPosts.filter(post => post.featured).slice(0, 2);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog - Spiritual Insights & AI Meditation Guides | Nummi"
        description="Explore articles about spiritual AI, meditation techniques, mindfulness practices, and personal growth. Learn how AI-powered spiritual companions can enhance your journey."
        keywords={['spiritual blog', 'AI meditation', 'mindfulness articles', 'spiritual growth', 'meditation guides', 'AI companion blog']}
      />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Insights on spiritual growth, AI meditation, and conscious living
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-background sticky top-0 z-40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Button
              variant={selectedCategory === null ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="shrink-0"
            >
              All Articles
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="shrink-0"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-3 text-lg text-muted-foreground">Loading articles...</span>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No articles found. Try adjusting your search or filters.
            </p>
          </div>
        ) : (
          <>
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">Featured</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredPosts.map(post => (
                    <Link
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="group"
                    >
                      <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-primary/10 hover:border-primary/30">
                        <CardContent className="p-8">
                          <Badge variant="default" className="mb-4">
                            {post.category}
                          </Badge>
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {post.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" />
                              {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </span>
                            <span>·</span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" />
                              {post.readingTime}
                            </span>
                          </div>
                          <div className="mt-6 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                            Read article
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts */}
            <div>
              {featuredPosts.length > 0 && (
                <h2 className="text-2xl font-bold mb-8">All Articles</h2>
              )}
              <div className="space-y-8">
                {regularPosts.map(post => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <article className="border-b pb-8 hover:bg-muted/30 -mx-4 px-4 py-4 rounded-lg transition-all">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge variant="outline" className="text-xs font-normal">
                              {post.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readingTime}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {post.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{post.author}</span>
                            <span>·</span>
                            <span>
                              {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </section>

      {/* CTA Section */}
      <section className="border-t bg-gradient-cosmic">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Spiritual Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Download Nummi and experience AI-powered spiritual guidance
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
