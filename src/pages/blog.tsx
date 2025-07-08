import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blogs = [
  {
    title: 'RPA: Automation Made Simple',
    href: '/blogs/rpa',
    tag: 'RPA',
    color: 'from-[#ff5c2b] to-[#1e90ff]'
  },
  {
    title: 'AI: The Future is Now',
    href: '/blogs/ai',
    tag: 'AI',
    color: 'from-[#1e90ff] to-[#ff5c2b]'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f6fd] to-[#e3e8ff] flex flex-col items-center py-12 px-4">
      <div className="flex flex-col items-center mb-8">
        <Image src="/assets/svgs/GenZBotLogo.svg" alt="GenZBot Logo" width={180} height={60} className="mb-2" />
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5c2b] via-[#1e90ff] to-[#1e90ff] drop-shadow-lg mb-2 tracking-tight text-center">GenZBots Blog</h1>
        <p className="text-lg text-[#1e90ff] font-semibold tracking-widest mb-1">Automation Made Simple</p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#ff5c2b] to-[#1e90ff] rounded-full mb-4" />
      </div>
      <div className="w-full max-w-3xl bg-white/80 rounded-3xl shadow-2xl p-8 border border-[#e0e7ff]">
        <h2 className="text-2xl font-bold text-[#ff5c2b] mb-6 text-center tracking-wide">Recent Blogs</h2>
        <ul className="space-y-6">
          {blogs.map((blog, idx) => (
            <li key={blog.title} className="group">
              <Link href={blog.href}>
                <div className={`flex items-center justify-between p-6 rounded-2xl shadow transition-all duration-300 bg-gradient-to-r ${blog.color} hover:scale-105 cursor-pointer`}>
                  <div>
                    <span className="inline-block bg-white/80 text-[#ff5c2b] font-bold text-xs px-3 py-1 rounded-full mb-2 shadow">{blog.tag}</span>
                    <h3 className="text-xl font-bold text-white drop-shadow-lg group-hover:underline">{blog.title}</h3>
                  </div>
                  <span className="ml-4 text-white text-2xl font-black group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center text-gray-400 text-sm">More blogs will be uploaded shortly. Stay tuned!</div>
      </div>
    </div>
  );
}
