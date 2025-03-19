'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/containers/Container';
import { cn } from '@/lib/utils';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LegalContent } from '@/components/ui/legal-content';

interface Section {
  id: string;
  title: string;
  level: number;
}

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  lastUpdated?: string;
  className?: string;
}

export function LegalPageLayout({
  title,
  subtitle,
  children,
  lastUpdated,
  className,
}: LegalPageLayoutProps) {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Extract headings from the content
  useEffect(() => {
    const headings = document.querySelectorAll<HTMLHeadingElement>('[data-toc-heading]');
    
    const extractedSections: Section[] = Array.from(headings).map((heading) => ({
      id: heading.id,
      title: heading.textContent || '',
      level: parseInt(heading.tagName.substring(1)),
    }));
    
    setSections(extractedSections);
    
    if (extractedSections.length > 0 && !activeSection) {
      setActiveSection(extractedSections[0].id);
    }
  }, [children, activeSection]);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll<HTMLHeadingElement>('[data-toc-heading]');
      
      if (headings.length === 0) return;
      
      // Find the heading that's currently in view
      const scrollPosition = window.scrollY + 100; // Add offset
      
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading.offsetTop <= scrollPosition) {
          setActiveSection(heading.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  // Scroll to section when clicking on TOC item
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Account for header
        behavior: 'smooth',
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className={cn('bg-white py-8 md:py-12', className)}>
      <Container narrow>
        <div className="mb-6 md:mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{title}</h1>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          {lastUpdated && (
            <p className="text-xs text-muted-foreground mt-2">Last updated: {lastUpdated}</p>
          )}
        </div>

        {/* Mobile TOC Toggle */}
        <div className="md:hidden flex justify-between items-center mb-6 border-y py-3">
          <p className="font-medium">Table of Contents</p>
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-1 h-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Table of Contents - Mobile Drawer */}
          <div
            className={cn(
              'md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur transition-transform duration-300 ease-in-out',
              mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            )}
          >
            <div className="h-full overflow-auto pt-20 pb-6 px-6">
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      'block w-full text-left px-3 py-2 rounded-md text-sm transition-colors',
                      activeSection === section.id
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'hover:bg-muted',
                      section.level === 2 ? 'font-medium' : 'pl-6'
                    )}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Table of Contents - Desktop Sidebar */}
          <div className="hidden md:block md:w-64 lg:w-72 shrink-0">
            <div className="sticky top-24">
              <h3 className="font-medium mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                On this page
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      'block w-full text-left px-3 py-2 rounded-md text-sm transition-colors',
                      activeSection === section.id
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'hover:bg-muted',
                      section.level === 2 ? 'font-medium' : 'pl-6'
                    )}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <LegalContent>
              {children}
            </LegalContent>
          </div>
        </div>
      </Container>
    </div>
  );
} 