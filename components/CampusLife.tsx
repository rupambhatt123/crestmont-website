'use client';

import React from 'react';
import Image from 'next/image';
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
    y: 20,
    scale: 0.9,
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

export default function CampusLife() {
  const data = (universityData as any).categories.Education.sections.CampusLifeSection?.variants?.UniversityCampusLifeSection1 
    || (universityData as any).categories.Education.sections.CampusLife?.variants?.UniversityCampusLife1;

  const line1 = (data?.title || 'Life Beyond').split('');
  const line2 = (data?.titleHighlight || 'Classrooms').split('');
  const cards = data?.cards || [];

  return (
    <section className="bg-white py-8 sm:py-10 lg:py-14 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
        
        {/* Left Column */}
        <div className="lg:col-span-5 relative pl-4 sm:pl-6 lg:pl-8 flex flex-col justify-between h-auto lg:h-full lg:min-h-[480px]">
          
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ originY: 0 }}
            className="absolute left-0 top-1 bottom-4 sm:bottom-10 w-[2.5px] sm:w-[3px] bg-[#800020] rounded-full"
          />

          <div>
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3"
            >
              <span className="text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.2em] sm:tracking-[0.24em] text-[#1c1d20] uppercase font-sans">
                {data?.badge || 'CAMPUS LIFE'}
              </span>
              <div className="w-8 sm:w-10 h-[2px] sm:h-[2.5px] bg-[#800020]" />
            </motion.div>

            {/* Editorial Serif Heading - Mobile Compact */}
            <motion.h2 
              variants={titleContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif text-[38px] sm:text-[56px] lg:text-[84px] font-black tracking-tight leading-[1.02] text-[#141517] select-none flex flex-col gap-0.5 sm:gap-1 mb-3 sm:mb-5"
            >
              <div className="block whitespace-nowrap">
                {line1.map((char: string, i: number) => (
                  <motion.span 
                    key={`l1-${i}`} 
                    variants={letterFlyVariants} 
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </div>

              <div className="block whitespace-nowrap text-[#800020] font-black">
                {line2.map((char: string, i: number) => (
                  <motion.span 
                    key={`l2-${i}`} 
                    variants={letterFlyVariants} 
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </div>
            </motion.h2>

            {/* Subtitle Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[13.5px] sm:text-[15px] text-[#4b5563] font-sans leading-relaxed max-w-[440px]"
            >
              {data?.description}
            </motion.p>
          </div>

          {/* Curved Maroon Arrow - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="pt-4 pl-2 hidden lg:block"
          >
            <svg 
              className="w-40 h-40 text-[#800020]" 
              viewBox="0 0 140 140" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M 25,12 C 15,75 50,105 118,105" />
              <path d="M 94,88 L 118,105 L 94,122" />
            </svg>
          </motion.div>

        </div>

        {/* Right Column: 3 Compact Cards */}
        <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4 w-full">
          
          {cards[0] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden min-h-[150px] sm:h-[190px] shadow-sm group"
            >
              <Image
                src={cards[0].image || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"}
                alt={cards[0].title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />

              <div className="relative z-10 h-full p-4 sm:p-7 flex items-center justify-between gap-4">
                <div className="max-w-[420px]">
                  <h3 className="font-serif text-[22px] sm:text-[32px] font-bold text-white leading-tight mb-1.5">
                    {cards[0].title}
                  </h3>
                  <div className="w-7 sm:w-8 h-[2px] bg-white mb-2" />
                  <p className="text-[12px] sm:text-[13.5px] text-gray-200 leading-relaxed font-sans line-clamp-2">
                    {cards[0].description}
                  </p>
                </div>

                <Link
                  href={cards[0].link || '/campus-life'}
                  aria-label={cards[0].title}
                  className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-white/60 bg-white/10 hover:bg-white hover:text-[#800020] text-white flex items-center justify-center shrink-0 transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </motion.div>
          )}

          {cards[1] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-gray-200 bg-white p-4 sm:p-7 flex items-center justify-between gap-4 hover:border-[#800020]/40 transition-colors group shadow-sm"
            >
              <div className="max-w-[450px]">
                <h3 className="font-serif text-[22px] sm:text-[30px] font-bold text-[#141517] leading-tight mb-1.5">
                  {cards[1].title}
                </h3>
                <div className="w-7 sm:w-8 h-[2px] bg-[#800020] mb-2" />
                <p className="text-[12px] sm:text-[13.5px] text-[#4b5563] leading-relaxed font-sans line-clamp-2 sm:line-clamp-none">
                  {cards[1].description}
                </p>
              </div>

              <Link
                href={cards[1].link || '/campus-life'}
                aria-label={cards[1].title}
                className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-gray-300 hover:border-[#800020] hover:bg-[#800020] hover:text-white text-gray-800 flex items-center justify-center shrink-0 transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          )}

          {cards[2] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-gray-200 bg-white p-4 sm:p-7 flex items-center justify-between gap-4 hover:border-[#800020]/40 transition-colors group shadow-sm"
            >
              <div className="max-w-[450px]">
                <h3 className="font-serif text-[22px] sm:text-[30px] font-bold text-[#141517] leading-tight mb-1.5">
                  {cards[2].title}
                </h3>
                <div className="w-7 sm:w-8 h-[2px] bg-[#800020] mb-2" />
                <p className="text-[12px] sm:text-[13.5px] text-[#4b5563] leading-relaxed font-sans line-clamp-2 sm:line-clamp-none">
                  {cards[2].description}
                </p>
              </div>

              <Link
                href={cards[2].link || '/campus-life'}
                aria-label={cards[2].title}
                className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-gray-300 hover:border-[#800020] hover:bg-[#800020] hover:text-white text-gray-800 flex items-center justify-center shrink-0 transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}