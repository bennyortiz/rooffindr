'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/ui/containers/Section';
import { Container } from '@/components/ui/containers/Container';
import { 
  CalendarIcon, 
  Clock3Icon, 
  UserIcon,
  TagIcon,
  ArrowLeftIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogContent } from '@/components/ui/blog-content';

interface BlogLayoutProps {
  title: string;
  description?: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
  };
  readingTime: string;
  tags?: string[];
  children: React.ReactNode;
}

/**
 * Blog post layout component with consistent styling
 */
export function BlogLayout({
  title,
  description,
  coverImage,
  date,
  author,
  readingTime,
  tags = [],
  children,
}: BlogLayoutProps) {
  // Format the date as "Month DD, YYYY"
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <>
      {/* Hero Section */}
      <Section bgColor="bg-primary" textColor="text-white" className="py-16 md:py-20">
        <Container>
          <Button
            variant="ghost"
            size="sm"
            className="mb-6 text-white/80 hover:text-white hover:bg-white/10"
            asChild
          >
            <Link href="/blog">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">{title}</h1>
            {description && (
              <p className="text-lg md:text-xl opacity-90 mb-8">{description}</p>
            )}
            
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8 text-sm md:text-base">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 overflow-hidden mr-2 flex-shrink-0">
                  {author.avatar ? (
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  ) : (
                    <UserIcon className="w-5 h-5 m-1.5 text-white" />
                  )}
                </div>
                <span>{author.name}</span>
              </div>
              
              <div className="flex items-center">
                <CalendarIcon className="mr-2 h-4 w-4 opacity-80" />
                <span>{formattedDate}</span>
              </div>
              
              <div className="flex items-center">
                <Clock3Icon className="mr-2 h-4 w-4 opacity-80" />
                <span>{readingTime}</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Cover Image */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] -mt-6 mb-10">
        <Image
          src={coverImage}
          alt={title}
          fill
          priority
          className="object-cover bg-muted"
        />
      </div>
      
      {/* Content Section */}
      <Section bgColor="bg-white" className="py-10 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <BlogContent>
                {children}
              </BlogContent>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-muted/20 p-6 rounded-lg sticky top-24">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">About the Author</h3>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 overflow-hidden mr-3 flex-shrink-0">
                      {author.avatar ? (
                        <Image
                          src={author.avatar}
                          alt={author.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      ) : (
                        <UserIcon className="w-6 h-6 m-2 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{author.name}</p>
                      <p className="text-sm text-muted-foreground">Roofing Expert</p>
                    </div>
                  </div>
                </div>
                
                {tags.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <div
                          key={tag}
                          className="flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          <TagIcon className="mr-1 h-3 w-3" />
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* CTA Section */}
      <Section bgColor="bg-primary/5" className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Your Roof?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with reliable roofing professionals in your area today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/">Find a Roofer</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
} 