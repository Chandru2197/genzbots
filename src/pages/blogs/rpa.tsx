import React from 'react';
import Link from 'next/link';

export default function RpaBlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f6fd] to-[#e3e8ff] flex flex-col items-center py-12 px-4">
      <div className="max-w-3xl w-full bg-white/80 rounded-3xl shadow-2xl p-8 border border-[#e0e7ff] relative">
        <h1 className="text-4xl font-extrabold text-[#ff5c2b] mb-2 tracking-tight text-center drop-shadow-lg">RPA: Automation Made Simple</h1>
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-gradient-to-r from-[#ff5c2b] to-[#1e90ff] text-white px-4 py-1 rounded-full text-xs font-semibold shadow">Robotic Process Automation</span>
        </div>
        <div className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          <p>
            <b>Coming Soon:</b> Explore how RPA is transforming businesses by automating repetitive tasks, boosting productivity, and reducing errors. Stay tuned for in-depth guides, use cases, and expert insights!
          </p>
        </div>
        <div className="flex justify-center">
          <Link href="/blog">
            <span className="inline-block px-6 py-2 bg-[#1e90ff] text-white rounded-xl font-semibold shadow hover:bg-[#ff5c2b] transition-colors duration-300">Back to Blogs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
