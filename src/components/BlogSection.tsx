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
      image: "bg-blue-100"
    },
    {
      title: "How RPA is Transforming Financial Services",
      excerpt: "Learn how Robotic Process Automation is revolutionizing operations in the financial services industry.",
      date: "March 8, 2025",
      image: "bg-green-100"
    },
    {
      title: "5 Key Benefits of Workflow Automation",
      excerpt: "Discover the top advantages of implementing workflow automation in your organization.",
      date: "March 1, 2025",
      image: "bg-purple-100"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={blogTitle} data-speed="0.08" className="parallax text-center mb-16">
          <h2 className="text-label font-label mb-4">Latest Insights</h2>
          <p className="text-desc font-desc text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights in business automation.
          </p>
        </div>
        
        <div ref={blogCards} data-speed="0.05" className="parallax">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className={`h-48 ${post.image} flex items-center justify-center`}>
                  <div className="text-2xl font-medium">Blog Image</div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-label font-label mb-3">{post.title}</h3>
                  <p className="text-desc font-desc text-gray-600 mb-4">{post.excerpt}</p>
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
