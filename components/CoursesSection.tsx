'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import universityData from '@/data/universityData.json';

const titleContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.1,
    },
  },
};

const letterFlyVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.85,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 130,
    },
  },
};

export default function CoursesSection() {
  // 100% Direct JSON Access
  const data = (universityData as any).categories.Education.sections.CoursesSection.variants.UniversityCourses1;

  const line1 = data.title.split('');
  const line2 = data.titleHighlight.split('');
  const leftCard = data.leftCard;
  const centerLinks = data.centerLinks;
  const rightCard = data.rightCard;

  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12 border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header Block: Badge & Bold Heading */}
        <div className="text-center flex flex-col items-center mb-6 sm:mb-8">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 sm:gap-3 mb-2"
          >
            <div className="w-6 sm:w-8 h-[1.8px] bg-[#800020]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#1c1d20] uppercase font-sans">
              {data.badge}
            </span>
            <div className="w-6 sm:w-8 h-[1.8px] bg-[#800020]" />
          </motion.div>

          <motion.h2 
            variants={titleContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-serif text-[34px] sm:text-[50px] lg:text-[64px] font-extrabold tracking-tight leading-tight text-[#141517] select-none flex items-center justify-center flex-wrap gap-x-2.5 gap-y-1"
          >
            <div className="inline-block whitespace-nowrap">
              {line1.map((char: string, i: number) => (
                <motion.span 
                  key={`c1-${i}`} 
                  variants={letterFlyVariants} 
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>

            <div className="inline-block whitespace-nowrap text-[#800020] font-extrabold">
              {line2.map((char: string, i: number) => (
                <motion.span 
                  key={`c2-${i}`} 
                  variants={letterFlyVariants} 
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>
          </motion.h2>
        </div>

        {/* 3-Column Banner Block - Mobile Stacked & Compact */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 shadow-sm rounded-none overflow-hidden gap-y-4 lg:gap-y-0"
        >
          {/* Left Card: Undergraduate */}
          <div className="lg:col-span-4 bg-[#F8F8F8] p-6 sm:p-10 flex flex-col items-center text-center justify-between min-h-[260px] sm:min-h-[340px]">
            <div>
              <div className="flex flex-col items-center mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.22em] text-[#555] uppercase font-sans">
                  {leftCard.tag}
                </span>
                <div className="w-7 sm:w-8 h-[1.5px] bg-[#800020] mt-1" />
              </div>

              <h3 className="font-serif text-[24px] sm:text-[34px] font-bold text-[#141517] tracking-tight leading-snug mb-2 sm:mb-3">
                {leftCard.title}
              </h3>

              <p className="text-[12.5px] sm:text-[13.5px] text-[#555] font-sans leading-[1.6] max-w-[280px] mx-auto">
                {leftCard.description}
              </p>
            </div>

            <Link
              href={leftCard.ctaPath}
              className="mt-5 sm:mt-6 text-[12.5px] sm:text-[13px] font-semibold text-[#800020] hover:text-[#660018] flex items-center gap-1.5 border-b border-[#800020] pb-0.5 group transition-colors font-sans"
            >
              <span>{leftCard.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Center Column: Maroon Box with Links */}
          <div className="lg:col-span-4 bg-[#800020] p-5 sm:p-8 flex flex-col justify-center gap-2.5 sm:gap-3.5 min-h-[220px] sm:min-h-[340px]">
            {centerLinks.map((item: { title: string; path: string }, idx: number) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.01, x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.path}
                  className="border border-white/25 hover:border-white/70 bg-white/5 hover:bg-white/10 px-4 sm:px-5 py-3 sm:py-3.5 flex items-center justify-between text-white transition-all group"
                >
                  <span className="font-serif text-[14.5px] sm:text-[16.5px] tracking-wide text-white/95 group-hover:text-white">
                    {item.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Card: Postgraduate */}
          <div className="lg:col-span-4 bg-[#F8F8F8] p-6 sm:p-10 flex flex-col items-center text-center justify-between min-h-[260px] sm:min-h-[340px]">
            <div>
              <div className="flex flex-col items-center mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.22em] text-[#555] uppercase font-sans">
                  {rightCard.tag}
                </span>
                <div className="w-7 sm:w-8 h-[1.5px] bg-[#800020] mt-1" />
              </div>

              <h3 className="font-serif text-[24px] sm:text-[34px] font-bold text-[#141517] tracking-tight leading-snug mb-2 sm:mb-3">
                {rightCard.title}
              </h3>

              <p className="text-[12.5px] sm:text-[13.5px] text-[#555] font-sans leading-[1.6] max-w-[280px] mx-auto">
                {rightCard.description}
              </p>
            </div>

            <Link
              href={rightCard.ctaPath}
              className="mt-5 sm:mt-6 text-[12.5px] sm:text-[13px] font-semibold text-[#800020] hover:text-[#660018] flex items-center gap-1.5 border-b border-[#800020] pb-0.5 group transition-colors font-sans"
            >
              <span>{rightCard.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}