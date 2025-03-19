import React from 'react';

interface BlogContentProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * BlogContent component for formatting blog post content with consistent styling
 */
export function BlogContent({ children, className = '' }: BlogContentProps) {
  return (
    <div className={`
      prose prose-lg max-w-none
      
      /* Base text styling */
      text-primary/80
      
      /* Headings - general */
      prose-headings:font-bold 
      prose-headings:text-primary
      prose-headings:mb-4
      
      /* H2 headings - major sections */
      prose-h2:text-2xl
      prose-h2:text-primary
      prose-h2:mt-16
      prose-h2:pt-5
      prose-h2:border-t
      prose-h2:border-gray-100
      
      /* H3 headings - subsections */
      prose-h3:text-xl
      prose-h3:text-primary/90
      prose-h3:mt-10
      prose-h3:mb-3
      
      /* H4 headings - minor subsections */
      prose-h4:text-lg
      prose-h4:text-primary/80
      prose-h4:font-semibold
      prose-h4:mt-8
      prose-h4:mb-3
      
      /* Paragraphs */
      prose-p:mb-5 
      prose-p:leading-relaxed
      
      /* Content spacing before headers to create separation */
      [&_p+h2]:mt-16
      [&_ul+h2]:mt-16
      [&_ol+h2]:mt-16
      [&_p+h3]:mt-10
      [&_ul+h3]:mt-10
      [&_ol+h3]:mt-10
      [&_p+h4]:mt-8
      [&_ul+h4]:mt-8
      [&_ol+h4]:mt-8
      
      /* First paragraph after headings */
      [&_h2+p]:mt-5
      [&_h3+p]:mt-4
      [&_h4+p]:mt-3
      
      /* Custom bullet points */
      prose-ul:my-6 
      prose-ul:pl-6 
      prose-ul:list-none
      [&_ul_li]:relative
      [&_ul_li]:pl-7
      [&_ul_li]:my-3
      [&_ul_li::before]:content-['']
      [&_ul_li::before]:absolute
      [&_ul_li::before]:left-0
      [&_ul_li::before]:top-[0.6em]
      [&_ul_li::before]:h-2
      [&_ul_li::before]:w-2
      [&_ul_li::before]:rounded-full
      [&_ul_li::before]:bg-primary
      [&_ul_li::before]:opacity-80
      
      /* Lists after headings */
      [&_h2+ul]:mt-5
      [&_h3+ul]:mt-4
      [&_h4+ul]:mt-3
      
      /* Numbered lists */
      prose-ol:my-6
      prose-ol:pl-6
      [&_ol_li]:relative
      [&_ol_li]:pl-2
      [&_ol_li]:my-3
      [&_ol_li::marker]:text-primary
      [&_ol_li::marker]:font-bold
      
      /* Lists after headings */
      [&_h2+ol]:mt-5
      [&_h3+ol]:mt-4
      [&_h4+ol]:mt-5
      
      /* Text highlights */
      prose-strong:text-primary 
      prose-strong:font-semibold
      
      /* Links */
      prose-a:text-primary
      prose-a:font-medium
      prose-a:no-underline
      prose-a:transition-colors
      prose-a:hover:text-primary/70
      
      /* Blockquotes */
      prose-blockquote:border-l-4
      prose-blockquote:border-primary/60
      prose-blockquote:pl-6
      prose-blockquote:italic
      prose-blockquote:text-primary/70
      prose-blockquote:bg-primary/5
      prose-blockquote:py-2
      prose-blockquote:px-4
      prose-blockquote:rounded-r-md
      [&_blockquote_p]:before:content-['"']
      [&_blockquote_p]:after:content-['"']
      [&_blockquote_p]:my-2
      
      /* Code blocks */
      prose-code:bg-gray-100
      prose-code:text-primary
      prose-code:px-1.5
      prose-code:py-0.5
      prose-code:rounded
      prose-code:before:content-none
      prose-code:after:content-none
      
      /* Tables */
      prose-table:w-full
      prose-table:border-collapse
      prose-thead:bg-primary/10
      prose-th:p-3
      prose-th:text-left
      prose-th:font-semibold
      prose-th:text-primary
      prose-td:p-3
      prose-td:border-b
      prose-td:border-gray-200
      
      ${className}
    `}>
      {children}
    </div>
  );
} 