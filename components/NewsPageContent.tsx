'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import universityData from '@/data/universityData.json';

export default function NewsPageContent() {
  const data = (universityData as any).categories.Education.sections.NewsEvents.variants.UniversityNewsEvents1;
  const posts = data.posts;

  // Mobile slider active index state
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDragEnd = (_: any, info: any) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold && activeIndex < posts.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (info.offset.x > swipeThreshold && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const currentEvent = posts[activeIndex];

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        
        {/* Top Centered Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-14">
          <span className="text-[10.5px] sm:text-[11.5px] font-black tracking-[0.22em] sm:tracking-[0.26em] text-[#1c1d20] uppercase font-sans block mb-2 sm:mb-3">
            {data.badge}
          </span>

          <h1 className="font-serif text-[36px] sm:text-[56px] lg:text-[74px] font-black tracking-tight leading-[1.04] sm:leading-[1.03] mb-3 sm:mb-4 select-none">
            <span className="block text-[#141517]">{data.title}</span>
            <span className="block text-[#800020] font-black">
              {data.titleHighlight} {data.titleEnd}
            </span>
          </h1>

          <p className="text-[13px] sm:text-[15px] lg:text-[16px] text-gray-600 font-sans leading-relaxed max-w-2xl mx-auto px-2">
            {data.description}
          </p>
        </div>

        {/* ================= MOBILE VIEW: 1 Card Front + Dots Slider ================= */}
        <div className="block sm:hidden w-full">
          <div className="relative overflow-hidden min-h-[440px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-white border border-gray-200/90 flex flex-col justify-between shadow-sm cursor-grab active:cursor-grabbing"
              >
                {/* Event Image */}
                <Link
                  href={`/news-events/${currentEvent.slug}`}
                  className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden block"
                >
                  <Image
                    src={currentEvent.image}
                    alt={currentEvent.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </Link>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Date & Time Metadata Row */}
                    <div className="flex items-center gap-3 text-[12.5px] font-medium text-gray-600 mb-2.5 pb-2.5 border-b border-gray-100">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#800020] shrink-0" />
                        <span>{currentEvent.date}</span>
                      </div>
                      <span className="text-gray-300">|</span>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#800020] shrink-0" />
                        <span>{currentEvent.time}</span>
                      </div>
                    </div>

                    {/* Big & Bold Serif Title */}
                    <Link href={`/news-events/${currentEvent.slug}`} className="block">
                      <h3 className="font-serif text-[20px] font-bold text-[#141517] tracking-tight leading-[1.25] mb-2">
                        {currentEvent.title}
                      </h3>
                    </Link>

                    {/* Short Description */}
                    <p className="text-[12.5px] text-gray-600 font-sans leading-relaxed line-clamp-2 mb-3">
                      {currentEvent.description}
                    </p>
                  </div>

                  {/* Location Row */}
                  <div className="flex items-center gap-1.5 text-[12.5px] font-medium text-gray-500 pt-2 border-t border-gray-50">
                    <MapPin className="w-3.5 h-3.5 text-[#800020] shrink-0" />
                    <span>{currentEvent.location}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Navigation Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4 py-2">
            {posts.map((_: any, idx: number) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Slide to event ${idx + 1}`}
                className={`h-2 transition-all duration-300 rounded-full ${
                  activeIndex === idx 
                    ? 'w-6 bg-[#800020]' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= DESKTOP & TABLET VIEW: Compact Grid ================= */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {posts.map((event: any) => (
            <div
              key={event.id}
              className="bg-white border border-gray-200/90 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              {/* Event Image */}
              <Link
                href={`/news-events/${event.slug}`}
                className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden block"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </Link>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Date & Time Metadata Row */}
                  <div className="flex items-center gap-4 text-[13px] font-medium text-gray-600 mb-3 pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#800020] shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#800020] shrink-0" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Big & Bold Serif Title */}
                  <Link href={`/news-events/${event.slug}`} className="block">
                    <h3 className="font-serif text-[23px] sm:text-[25px] font-bold text-[#141517] tracking-tight leading-[1.2] hover:text-[#800020] transition-colors mb-2">
                      {event.title}
                    </h3>
                  </Link>

                  {/* Short Description */}
                  <p className="text-[13.5px] text-gray-600 font-sans leading-relaxed line-clamp-2 mb-4">
                    {event.description}
                  </p>
                </div>

                {/* Location Row */}
                <div className="flex items-center gap-2 text-[13.5px] font-medium text-gray-500 pt-2 border-t border-gray-50">
                  <MapPin className="w-4 h-4 text-[#800020] shrink-0" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}