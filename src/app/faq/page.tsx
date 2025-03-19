'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/containers/Section';
import { Container } from '@/components/ui/containers/Container';
import { Faq } from '@/components/sections/Faq';
import { StructuredData } from '@/components/seo';
import { siteConfig } from '@/lib/config/site';
import { faqItems } from '@/data/home-page';
import { SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Additional FAQ items for the dedicated FAQ page
const additionalFaqItems = [
  {
    question: 'Can I request multiple quotes from different roofers?',
    answer: 'Yes, you can receive quotes from multiple roofing professionals through RoofFindr. This allows you to compare pricing, timelines, and approaches before making your decision.',
  },
  {
    question: 'Do I need to be present for a roofing inspection?',
    answer: 'While it\'s not always required, it\'s beneficial to be present during the initial inspection. This gives you an opportunity to discuss your concerns directly with the professional and get immediate feedback about your roof\'s condition.',
  },
  {
    question: 'How long does a typical roof replacement take?',
    answer: 'Most residential roof replacements take 1-3 days to complete, depending on the size and complexity of your roof, the materials being used, and weather conditions. Your roofing professional will provide you with a more specific timeline for your project.',
  },
  {
    question: 'What should I do to prepare for a roof repair or replacement?',
    answer: 'Before work begins, you should remove loose items from your yard, move vehicles away from the work area, and secure or cover items in your attic. It\'s also a good idea to make arrangements for children and pets, as roofing work can be noisy and disruptive.',
  },
  {
    question: 'Does RoofFindr offer any guarantees on the work completed?',
    answer: 'While RoofFindr connects you with roofing professionals, the warranties and guarantees are provided by the contractors themselves. Most reputable roofers offer workmanship warranties in addition to manufacturer warranties on materials.',
  },
  {
    question: 'How can I verify a roofer\'s credentials?',
    answer: 'All roofers on RoofFindr have undergone initial verification, but we encourage homeowners to further verify credentials. You can ask the roofer directly for their license number and insurance information, then verify this information with your local licensing board and insurance provider.',
  },
];

// Combine original and additional FAQ items
const allFaqItems = [...faqItems, ...additionalFaqItems];

// Group FAQ items by category
const faqCategories = [
  {
    title: 'General Questions',
    items: allFaqItems.slice(0, 6),
  },
  {
    title: 'Working with Roofers',
    items: allFaqItems.slice(6, 12),
  },
];

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(allFaqItems);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      setFilteredItems(allFaqItems);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const results = allFaqItems.filter(
      item => 
        item.question.toLowerCase().includes(query) || 
        item.answer.toLowerCase().includes(query)
    );
    
    setFilteredItems(results);
  };

  return (
    <>
      <StructuredData
        type="FAQPage"
        data={{
          mainEntity: allFaqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }}
      />

      {/* Hero Section */}
      <Section bgColor="bg-primary" textColor="text-white" className="py-16 md:py-20">
        <Container className="text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg opacity-90 mb-8">
              Find answers to common questions about RoofFindr and our services. 
              Can't find what you're looking for? Contact our support team.
            </p>
            
            <form onSubmit={handleSearch} className="relative max-w-lg mx-auto">
              <Input
                type="search"
                placeholder="Search for a question..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
              <Button 
                type="submit" 
                size="sm" 
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-white text-primary hover:bg-white/90"
              >
                Search
              </Button>
            </form>
          </div>
        </Container>
      </Section>

      {/* FAQ Content */}
      <Section bgColor="bg-muted/30" className="py-12 md:py-16">
        <Container>
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">No results found</h2>
              <p className="text-muted-foreground mb-6">
                We couldn't find any questions matching your search. Try different keywords or browse all our FAQs below.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('');
                  setFilteredItems(allFaqItems);
                }}
                className="border-primary text-primary hover:bg-primary/5"
              >
                Clear Search
              </Button>
            </div>
          ) : searchQuery ? (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Search Results</h2>
              <Faq
                title=""
                items={filteredItems}
                bgColor="transparent"
                pill=""
              />
              <div className="text-center mt-8">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setFilteredItems(allFaqItems);
                  }}
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  Clear Search
                </Button>
              </div>
            </div>
          ) : (
            <>
              {faqCategories.map((category, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-semibold mb-6 border-b pb-3">{category.title}</h2>
                  <Faq
                    title=""
                    items={category.items}
                    bgColor="transparent"
                    pill=""
                  />
                </div>
              ))}
            </>
          )}
        </Container>
      </Section>

      {/* Contact CTA Section */}
      <Section bgColor="bg-white" className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is here to help you with any questions you may have about our services.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
} 