// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const blogs = [
//   {
//     title: 'RPA: Automation Made Simple',
//     href: '/blogs/rpa',
//     tag: 'RPA',
//     color: 'from-[#ff5c2b] to-[#1e90ff]'
//   },
//   {
//     title: 'AI: The Future is Now',
//     href: '/blogs/ai',
//     tag: 'AI',
//     color: 'from-[#1e90ff] to-[#ff5c2b]'
//   }
// ];

// export default function BlogPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f7f6fd] to-[#e3e8ff] flex flex-col items-center py-12 px-4">
//       <div className="flex flex-col items-center mb-8">
//         <Image src="/assets/svgs/GenZBotLogo.svg" alt="GenZBot Logo" width={180} height={60} className="mb-2" />
//         <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5c2b] via-[#1e90ff] to-[#1e90ff] drop-shadow-lg mb-2 tracking-tight text-center">GenZBots Blog</h1>
//         <p className="text-lg text-[#1e90ff] font-semibold tracking-widest mb-1">Automation Made Simple</p>
//         <div className="w-24 h-1 bg-gradient-to-r from-[#ff5c2b] to-[#1e90ff] rounded-full mb-4" />
//       </div>
//       <div className="w-full max-w-3xl bg-white/80 rounded-3xl shadow-2xl p-8 border border-[#e0e7ff]">
//         <h2 className="text-2xl font-bold text-[#ff5c2b] mb-6 text-center tracking-wide">Recent Blogs</h2>
//         <ul className="space-y-6">
//           {blogs.map((blog, idx) => (
//             <li key={blog.title} className="group">
//               <Link href={blog.href}>
//                 <div className={`flex items-center justify-between p-6 rounded-2xl shadow transition-all duration-300 bg-gradient-to-r ${blog.color} hover:scale-105 cursor-pointer`}>
//                   <div>
//                     <span className="inline-block bg-white/80 text-[#ff5c2b] font-bold text-xs px-3 py-1 rounded-full mb-2 shadow">{blog.tag}</span>
//                     <h3 className="text-xl font-bold text-white drop-shadow-lg group-hover:underline">{blog.title}</h3>
//                   </div>
//                   <span className="ml-4 text-white text-2xl font-black group-hover:translate-x-2 transition-transform">→</span>
//                 </div>
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <div className="mt-10 text-center text-gray-400 text-sm">More blogs will be uploaded shortly. Stay tuned!</div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  Search,
  Filter,
  BookOpen,
  TrendingUp,
  Sparkles,
  Bot,
  Brain,
  Zap
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
}

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const categoryColors = {
    RPA: "from-blue-500 to-cyan-500",
    AI: "from-purple-500 to-indigo-500",
    Automation: "from-green-500 to-emerald-500",
    Technology: "from-orange-500 to-red-500"
  };

  const categoryIcons = {
    RPA: Bot,
    AI: Brain,
    Automation: Zap,
    Technology: TrendingUp
  };

  const colorGradient = categoryColors[post.category as keyof typeof categoryColors] || "from-gray-500 to-gray-600";
  const IconComponent = categoryIcons[post.category as keyof typeof categoryIcons] || BookOpen;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <div
        className={`relative h-full group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
          isHovered ? 'rotate-y-2' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glowing background */}
        <div className={`absolute inset-0 bg-gradient-to-r ${colorGradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-105`}></div>
        
        {/* Main card */}
        <div className="relative h-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Category badge */}
            <div className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${colorGradient} text-white rounded-full flex items-center space-x-2 shadow-lg`}>
              <IconComponent size={16} />
              <span className="text-sm font-semibold">{post.category}</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8">
            {/* Meta info */}
            <div className="flex items-center space-x-4 text-blue-200 text-sm mb-4">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
              {post.title}
            </h3>
            
            {/* Excerpt */}
            <p className="text-blue-200 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
              {post.excerpt}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors duration-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            {/* Author */}
            <div className="flex items-center justify-between">
              <span className="text-blue-200 text-sm">By {post.author}</span>
              
              {/* Read more link */}
              <Link
                href={`/${post.slug}`}
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${colorGradient} text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="relative flex items-center">
                  Read More
                  <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BlogListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true });

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "RPA: Automation Made Simple",
      excerpt: "Discover how Robotic Process Automation is transforming businesses by automating repetitive tasks, reducing errors, and freeing up human resources for more strategic work.",
      content: "Full content here...",
      author: "John Smith",
      date: "July 10, 2025",
      readTime: "5 min read",
      category: "RPA",
      tags: ["automation", "efficiency", "business-process"],
      image: "/assets/images/robotic-process-automation.png",
      slug: "/blogs/rpa"
    },
    {
      id: "2",
      title: "AI: The Future is Now",
      excerpt: "Explore how Artificial Intelligence is reshaping industries, from predictive analytics to natural language processing, and learn how to leverage AI for competitive advantage.",
      content: "Full content here...",
      author: "Sarah Johnson",
      date: "July 8, 2025",
      readTime: "7 min read",
      category: "AI",
      tags: ["artificial-intelligence", "machine-learning", "innovation"],
      image: "/assets/images/artificial-intelligence.jpg",
      slug: "blogs/ai"
    }
  ];

  const categories = ["All", "RPA", "AI", "Automation", "Technology"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-float pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <Sparkles className="w-6 h-6 text-cyan-400" />
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="pt-20 pb-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white mb-8 shadow-lg">
              <BookOpen className="w-6 h-6 mr-3" />
              <span className="font-semibold text-lg">Our Blog</span>
              <Sparkles className="w-5 h-5 ml-3" />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Insights{" "}
              </span>
              <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                &{" "}
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with our latest insights on automation, AI, and digital transformation.
            </p>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="text-blue-300 w-5 h-5" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                        : 'bg-white/10 text-blue-200 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-blue-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No posts found</h3>
              <p className="text-blue-200">Try adjusting your search or filter criteria.</p>
            </div>
          )}

          {/* Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
              <TrendingUp className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">More Content Coming Soon!</h3>
              <p className="text-blue-200 text-lg mb-6 max-w-2xl mx-auto">
                We're constantly creating new content to help you stay ahead in the world of automation and AI. Stay tuned for more insights!
              </p>
              <div className="flex items-center justify-center space-x-2 text-cyan-300">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">New posts every week</span>
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BlogListing;
