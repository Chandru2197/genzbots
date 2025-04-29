import { useRef, useEffect } from 'react';
import Link from 'next/link';

interface BlogSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export default function BlogSection({ addToRefs }: BlogSectionProps) {
  const blogTitle = useRef<HTMLDivElement>(null);
  const blogCards = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (blogTitle.current) addToRefs(blogTitle.current);
    if (blogCards.current) addToRefs(blogCards.current);
  }, [addToRefs]);

  const blogPosts: BlogPost[] = [
    {
      title: "The Future of Business Process Automation",
      excerpt: "Explore emerging trends in automation technology and how they're shaping the future of business operations.",
      date: "March 15, 2025",
      image: "from-blue-500/10 to-blue-500/20"
    },
    {
      title: "How RPA is Transforming Financial Services",
      excerpt: "Learn how Robotic Process Automation is revolutionizing operations in the financial services industry.",
      date: "March 8, 2025",
      image: "from-green-500/10 to-green-500/20"
    },
    {
      title: "5 Key Benefits of Workflow Automation",
      excerpt: "Discover the top advantages of implementing workflow automation in your organization.",
      date: "March 1, 2025",
      image: "from-purple-500/10 to-purple-500/20"
    }
  ];

  return (
    <section id="blog" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={blogTitle} data-speed="0.08" className="parallax text-center mb-16">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent">
              Latest Insights
            </h2>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5722]/20 via-[#FF8A65]/20 to-[#FF5722]/20 blur-lg -z-10 rounded-lg opacity-75"></div>
          </div>
          <p className="text-desc font-desc text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights in business automation.
          </p>
        </div>
        
        <div ref={blogCards} data-speed="0.05" className="parallax">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={index} 
                className="rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 backdrop-blur-lg bg-white/10 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
              >
                <div className={`h-48 bg-gradient-to-br ${post.image} flex items-center justify-center backdrop-blur-sm`}>
                  <div className="text-2xl font-medium text-white/80">Blog Image</div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-2">{post.date}</p>
                  <h3 className="text-label font-label mb-3 text-white">{post.title}</h3>
                  <p className="text-desc font-desc text-gray-300 mb-4">{post.excerpt}</p>
                  <Link href="#" className="text-btn font-btn text-[var(--color-secondary)] hover:text-[var(--color-secondary-hover)] transition-colors">
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
