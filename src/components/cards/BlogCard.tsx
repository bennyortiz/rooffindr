'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { CalendarIcon, Clock3Icon } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  date: string;
  readingTime: string;
  className?: string;
}

/**
 * Card component for displaying blog post previews
 */
export function BlogCard({
  title,
  excerpt,
  slug,
  coverImage,
  date,
  readingTime,
  className,
}: BlogCardProps) {
  // Format the date as "Month DD, YYYY"
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card 
      className={`overflow-hidden border-0 shadow-md h-full flex flex-col group ${className || ''}`}
    >
      <Link href={`/blog/${slug}`} className="block h-48 relative overflow-hidden bg-primary/5">
        <Image
          src={coverImage}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'transform 0.5s ease',
          }}
          className="group-hover:scale-105"
        />
      </Link>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <span className="flex items-center mr-4">
            <CalendarIcon className="mr-1 h-4 w-4" />
            {formattedDate}
          </span>
          <span className="flex items-center">
            <Clock3Icon className="mr-1 h-4 w-4" />
            {readingTime}
          </span>
        </div>
        
        <Link href={`/blog/${slug}`} className="group-hover:text-primary transition-colors">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
        </Link>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        
        <Link 
          href={`/blog/${slug}`} 
          className="mt-auto text-primary font-medium group-hover:underline"
        >
          Read More
        </Link>
      </div>
    </Card>
  );
} 