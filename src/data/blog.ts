export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readingTime: string;
  author: {
    name: string;
    avatar?: string;
  };
  tags: string[];
}

/**
 * Blog posts data
 */
export const blogPosts: BlogPost[] = [
  {
    title: 'The Ultimate Guide to Roofing in Texas',
    slug: 'roofing-guide',
    excerpt: 'Everything Texas homeowners need to know about roofing materials, maintenance, and finding the right professional for your roofing project.',
    coverImage: 'https://images.unsplash.com/photo-1632759145351-1d76663d14df?q=80&w=2070&auto=format&fit=crop',
    date: '2023-10-15',
    readingTime: '8 min read',
    author: {
      name: 'Michael Rodriguez',
    },
    tags: ['Guide', 'Maintenance', 'Materials', 'Texas'],
  },
  {
    title: 'Roofing Glossary: Essential Terms Every Texas Homeowner Should Know',
    slug: 'roofing-glossary',
    excerpt: 'A comprehensive reference guide to roofing terminology to help Texas homeowners understand the language used by roofing professionals.',
    coverImage: 'https://images.unsplash.com/photo-1516900557549-41557d405adf?q=80&w=2070&auto=format&fit=crop',
    date: '2023-11-12',
    readingTime: '7 min read',
    author: {
      name: 'Sarah Johnson',
    },
    tags: ['Glossary', 'Education', 'Reference', 'Texas'],
  },
  // More blog posts can be added here
]; 