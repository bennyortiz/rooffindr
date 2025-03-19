'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/containers/Container';

export default function ButtonDemo() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-bold mb-8">Button Variants with Dynamic Text Contrast</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Standard Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">Color Variants with Automatic Text Contrast</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="red">Red Button</Button>
            <Button variant="green">Green Button</Button>
            <Button variant="blue">Blue Button</Button>
            <Button variant="amber">Amber Button</Button>
            <Button variant="gray">Gray Button</Button>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">Size Variants</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="default" size="sm">Small</Button>
            <Button variant="default" size="default">Default</Button>
            <Button variant="default" size="lg">Large</Button>
            <Button variant="default" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 7-7 7 7"></path>
                <path d="M12 19V5"></path>
              </svg>
            </Button>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">Disabled State</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" disabled>Disabled Default</Button>
            <Button variant="red" disabled>Disabled Red</Button>
            <Button variant="outline" disabled>Disabled Outline</Button>
          </div>
        </section>
      </div>
    </Container>
  );
} 