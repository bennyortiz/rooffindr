'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog';
import { Section } from '@/components/ui/containers/Section';
import { Container } from '@/components/ui/containers/Container';
import { 
  CalendarIcon, 
  Clock3Icon, 
  SearchIcon,
  TagIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { siteConfig } from '@/lib/config/site';
import { StructuredData } from '@/components/seo';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get unique tags from all blog posts
  const allTags = Array.from(
    new Set(
      blogPosts.flatMap(post => post.tags)
    )
  ).sort();
  
  // Filter blog posts based on search term and selected tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });
  
  return (
    <>
      <StructuredData
        type="ItemList"
        data={{
          itemListElement: blogPosts.map((post, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              url: `${siteConfig.url}/blog/${post.slug}`,
              datePublished: new Date(post.date).toISOString(),
              author: {
                '@type': 'Person',
                name: post.author.name,
              },
              image: post.coverImage,
            },
          })),
        }}
      />
      
      {/* Hero Section */}
      <Section bgColor="bg-primary" textColor="text-white" className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">RoofFindr Blog</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Expert advice, guides, and industry insights for Texas homeowners
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-3 text-black rounded-lg w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Blog Posts Section */}
      <Section bgColor="bg-white" className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-9">
              {/* Category Filter (Mobile) */}
              <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 lg:hidden">
                <Button
                  variant={selectedTag === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(null)}
                  className="rounded-full"
                >
                  All
                </Button>
                {allTags.map(tag => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                    className="rounded-full whitespace-nowrap"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No posts found</h3>
                  <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
                  <Button onClick={() => {
                    setSearchTerm('');
                    setSelectedTag(null);
                  }}>
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-8">
                  {filteredPosts.map((post) => (
                    <article key={post.slug} className="group">
                      <Link href={`/blog/${post.slug}`} className="block">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                          {/* Image */}
                          <div className="md:col-span-4">
                            <div className="relative h-48 md:h-full w-full rounded-lg overflow-hidden bg-muted">
                              <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                              />
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="md:col-span-8">
                            <h2 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h2>
                            <p className="text-muted-foreground mb-3 line-clamp-2">
                              {post.excerpt}
                            </p>
                            
                            {/* Meta info */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center">
                                <CalendarIcon className="mr-1 h-4 w-4" />
                                <span>
                                  {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                  })}
                                </span>
                              </div>
                              
                              <div className="flex items-center">
                                <Clock3Icon className="mr-1 h-4 w-4" />
                                <span>{post.readingTime}</span>
                              </div>
                            </div>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                              {post.tags.map(tag => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedTag(tag);
                                  }}
                                >
                                  <TagIcon className="mr-1 h-3 w-3" />
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <div className="sticky top-24 space-y-8">
                {/* Categories Section */}
                <div className="hidden lg:block">
                  <h3 className="text-lg font-bold mb-4">Categories</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedTag(null)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedTag === null 
                          ? 'bg-primary text-white' 
                          : 'hover:bg-muted/50'
                      }`}
                    >
                      All Posts
                    </button>
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                          selectedTag === tag 
                            ? 'bg-primary text-white' 
                            : 'hover:bg-muted/50'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Recent Posts */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map(post => (
                      <Link 
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex gap-3"
                      >
                        <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0 bg-muted">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Find a reliable roofing professional in your area today.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/">Find a Roofer</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
} 