'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import universityData from '@/data/universityData.json';

export default function NewsEventsSection() {
  const data =
    (universityData as any).categories.Education.sections.NewsEvents.variants.UniversityNewsEvents1;

  const { badge, title, titleHighlight, titleEnd, featuredPost, posts } = data;

  return (
    <section className="bg-white py-12 lg:py-16 border-b border-gray-100">
      <div className="max-w-[1360px] mx-auto px-6">
        
        {/* Top Header */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="w-10 h-[2.5px] bg-[#800020]" />
            <span className="text-[11.5px] font-black tracking-[0.24em] text-[#1c1d20] uppercase font-sans">
              {badge}
            </span>
          </div>

          <h2 className="font-serif text-[46px] sm:text-[60px] lg:text-[72px] font-bold text-[#141517] leading-none tracking-tight select-none">
            <span>{title} </span>
            <span className="text-[#800020]">{titleHighlight} </span>
            <span>{titleEnd}</span>
          </h2>
        </div>

        {/* 2-Column Split: Left Big Featured Card + Right List Items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* ================= LEFT FEATURED CARD ================= */}
          <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] overflow-hidden shadow-sm group">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Dark Maroon to Black Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#4a0013]/95 via-[#4a0013]/70 to-transparent" />

            {/* Content pinned to bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white z-10">
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/90 font-sans">
                  {featuredPost.category}
                </span>
                <span className="w-7 h-[1.5px] bg-[#800020]" />
              </div>

              <h3 className="font-serif text-[24px] sm:text-[28px] lg:text-[30px] font-bold leading-snug mb-3">
                {featuredPost.title}
              </h3>

              <p className="text-[13.5px] sm:text-[14px] text-white/85 leading-relaxed font-sans mb-5 max-w-xl">
                {featuredPost.description}
              </p>

              <Link
                href={featuredPost.link}
                className="inline-flex items-center gap-2 text-[13px] font-bold tracking-wide uppercase hover:underline text-white font-sans border-b border-white pb-0.5"
              >
                <span>{featuredPost.linkText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ================= RIGHT LIST ITEMS ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between divide-y divide-gray-200">
            {posts.map((post: any) => (
              <div
                key={post.id}
                className="py-5 sm:py-6 first:pt-0 last:pb-0 flex items-center gap-5 sm:gap-6 group"
              >
                {/* Date Box: Grey background with top maroon line */}
                <div className="w-[68px] sm:w-[76px] h-[76px] sm:h-[84px] bg-[#F6F6F6] shrink-0 flex flex-col items-center justify-center relative">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#800020]" />
                  <span className="font-serif text-[26px] sm:text-[30px] font-bold text-[#141517] leading-none mb-1">
                    {post.day}
                  </span>
                  <span className="text-[11.5px] font-bold text-gray-500 uppercase tracking-wider font-sans">
                    {post.month}
                  </span>
                </div>

                {/* Middle Content: Title + Description */}
                <div className="flex-1 pr-2">
                  <Link href={`/news-events/${post.slug}`}>
                    <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#141517] hover:text-[#800020] transition-colors leading-snug mb-1.5">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-[13px] sm:text-[13.5px] text-gray-600 font-sans leading-relaxed line-clamp-2">
                    {post.desc}
                  </p>
                </div>

                {/* Right Circular Maroon Arrow */}
                <Link
                  href={`/news-events/${post.slug}`}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#800020] hover:bg-[#660018] text-white flex items-center justify-center shrink-0 transition-colors shadow-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}