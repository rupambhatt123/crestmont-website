'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, GraduationCap } from 'lucide-react';
import universityData from '@/data/universityData.json';

const titleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      damping: 14,
      stiffness: 120,
    },
  },
};

export default function HeroBanner() {
  const heroData =
    (universityData as any).categories.Education.sections.HeroBanner.variants.UniversityHero1;

  const line1 = heroData.title.split('');
  const line2 = heroData.titleHighlight.split('');

  return (
    <section className="relative bg-white overflow-hidden py-10 sm:py-14 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Student Image - Desktop (Smooth Slide-in) */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 hidden lg:block relative"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden shadow-sm">
              <Image
                src={heroData.leftImage}
                alt={heroData.leftImageAlt}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -left-3 top-8 bottom-8 w-[2px] bg-[#800020]" />
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-[6px] h-20 bg-[#800020]" />
          </motion.div>

          {/* Center Column: Text & CTA */}
          <div className="lg:col-span-6 flex flex-col items-center text-center px-2 sm:px-4">
            
            {/* Badge Animation */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 mb-3 sm:mb-4"
            >
              <GraduationCap className="w-4 h-4 text-[#800020]" />
              <span className="text-[10.5px] sm:text-[12px] font-black tracking-[0.2em] text-[#1c1d20] uppercase font-sans">
                {heroData.badge}
              </span>
              <span className="w-6 sm:w-8 h-[2px] bg-[#800020]" />
            </motion.div>

            {/* Title with Staggered Flying Letters */}
            <motion.h1 
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="font-serif text-[42px] sm:text-[62px] lg:text-[76px] font-bold text-[#141517] leading-[1.04] tracking-tight mb-4 select-none"
            >
              <span className="block text-[#141517]">
                {line1.map((char: string, i: number) => (
                  <motion.span key={`h1-${i}`} variants={letterVariants} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
              <span className="block text-[#800020]">
                {line2.map((char: string, i: number) => (
                  <motion.span key={`h2-${i}`} variants={letterVariants} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Subtitle Fade-up */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[14px] sm:text-[16px] text-gray-700 font-sans leading-relaxed max-w-lg mx-auto mb-7 font-medium px-2"
            >
              {heroData.description}
            </motion.p>

            {/* Action Button */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex justify-center mb-8 lg:mb-0"
            >
              <Link
                href={heroData.ctaButton.path}
                className="bg-[#800020] hover:bg-[#660018] text-white px-7 sm:px-8 py-3.5 text-[11.5px] sm:text-[12px] font-bold tracking-[0.18em] uppercase transition-all shadow-md inline-flex items-center gap-2.5 group"
              >
                <span>{heroData.ctaButton.text}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Mobile-Only Images Display with Fade-in */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-3.5 w-full max-w-md lg:hidden mt-2"
            >
              <div className="relative aspect-[3/4] overflow-hidden shadow-sm border-l-2 border-[#800020]">
                <Image
                  src={heroData.leftImage}
                  alt={heroData.leftImageAlt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden shadow-sm border-r-2 border-[#800020]">
                <Image
                  src={heroData.rightImage}
                  alt={heroData.rightImageAlt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>

          </div>

          {/* Right Tower Image - Desktop (Smooth Slide-in) */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 hidden lg:block relative"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden shadow-sm">
              <Image
                src={heroData.rightImage}
                alt={heroData.rightImageAlt}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#800020]" />
            <div className="absolute -right-3 top-1/3 w-[6px] h-16 bg-[#800020]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}