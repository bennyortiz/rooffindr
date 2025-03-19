'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Roofer } from '@/types';

interface RooferCardProps {
  roofer: Roofer;
  className?: string;
}

/**
 * Card component for displaying roofer information
 *
 * @param roofer - Roofer data to display
 * @param className - Additional CSS classes
 */
export function RooferCard({ roofer, className }: RooferCardProps) {
  const profileLink = roofer.slug ? `/roofers/${roofer.slug}` : `/roofers/${roofer.id}`;

  return (
    <Card
      className={`overflow-hidden border-0 shadow-md h-full flex flex-col group w-full ${className || ''}`}
    >
      <div className="h-40 sm:h-48 relative overflow-hidden bg-muted">
        <Image
          src={roofer.image}
          alt={roofer.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            transform: 'scale(1.05)',
            transition: 'transform 0.5s ease',
          }}
          className="group-hover:scale-110"
        />
      </div>
      <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{roofer.name}</h3>
        <div className="flex items-center mb-2 sm:mb-3">
          <RatingStars rating={roofer.rating} />
          <span className="ml-2 text-xs sm:text-sm font-medium">
            {roofer.rating} ({roofer.reviews} reviews)
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {roofer.services.map((service) => (
            <span
              key={service}
              className="px-1.5 sm:px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full"
            >
              {service}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <Button
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary/10 h-9 sm:h-10 text-sm sm:text-base"
            asChild
          >
            <Link href={profileLink}>View Profile</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Star rating component
 *
 * @param rating - Rating value (0-5)
 */
function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-4 h-4 ${i < Math.floor(rating) ? 'opacity-100' : 'opacity-30'}`}
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
}
