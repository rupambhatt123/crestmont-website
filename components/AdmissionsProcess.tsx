'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
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
    scale: 0.88,
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

export default function AdmissionsProcess() {
  const data = (universityData as any).categories.Education.sections.AdmissionsProcess.variants.UniversityAdmissionsProcess1;
  const steps = data.steps;

  const titlePart1 = data.title.split('');
  const titlePart2 = data.titleHighlight.split('');

  return (
    <section className="bg-white py-12 lg:py-16 border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6">
        
        {/* Header Block: Left Large Title + Right Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
          
          {/* Left Title */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="w-10 h-[2.5px] bg-[#800020]" />
              <span className="text-[12px] font-extrabold tracking-[0.24em] text-[#1c1d20] uppercase font-sans">
                {data.badge}
              </span>
            </motion.div>

            <motion.h2 
              variants={titleContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif text-[52px] sm:text-[66px] lg:text-[78px] font-bold tracking-tight leading-[1.03] text-[#141517] select-none"
            >
              <span className="block">
                {titlePart1.map((char: string, i: number) => (
                  <motion.span key={`apt1-${i}`} variants={letterFlyVariants} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>

              <span className="block text-[#800020] font-bold">
                {titlePart2.map((char: string, i: number) => (
                  <motion.span key={`apt2-${i}`} variants={letterFlyVariants} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>
          </div>

          {/* Right Description with Red Left Border */}
          <div className="lg:col-span-4 lg:border-l-2 lg:border-[#800020] lg:pl-6 pb-2">
            <p className="text-[14.5px] sm:text-[15.5px] text-gray-700 font-sans leading-[1.65]">
              {data.description}
            </p>
          </div>

        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          
          {/* Card 1: Create an Account */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-[#6e0719] text-white p-7 sm:p-9 rounded-none flex flex-col justify-between min-h-[300px] sm:min-h-[320px] shadow-sm group hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Top Row: Extra Large Custom Icon + Big Outline Number */}
            <div className="flex items-start justify-between">
              {/* Detailed Big Document Icon */}
              <svg className="w-16 h-16 sm:w-[70px] sm:h-[70px] text-white stroke-[1.8]" viewBox="0 0 48 48" fill="none" stroke="currentColor">
                <path d="M10 8C10 5.79086 11.7909 4 14 4H30L38 12V40C38 42.2091 36.2091 44 34 44H14C11.7909 44 10 42.2091 10 40V8Z" />
                <path d="M28 4V12H38" />
                <circle cx="21" cy="20" r="4.5" />
                <path d="M14 33C14 29.134 17.134 26 21 26C24.866 26 28 29.134 28 33" />
                <circle cx="33" cy="33" r="5.5" />
                <path d="M33 30V36M30 33H36" />
              </svg>

              {/* Big Hollow Outlined 01 */}
              <span 
                className="font-sans text-[62px] sm:text-[74px] font-extrabold leading-none select-none text-transparent"
                style={{
                  WebkitTextStroke: '1.8px rgba(255, 255, 255, 0.5)',
                }}
              >
                01
              </span>
            </div>

            {/* Bottom Content: Bada aur Bold Text */}
            <div className="pt-8">
              <h3 className="font-serif text-[26px] sm:text-[30px] lg:text-[32px] font-bold text-white mb-2.5 tracking-tight leading-[1.15]">
                {steps[0].title}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-gray-200 font-sans leading-[1.6]">
                {steps[0].description}
              </p>
            </div>
          </motion.div>

          {/* Card 2: Online Application (Image Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-none overflow-hidden text-white p-7 sm:p-9 flex flex-col justify-between min-h-[300px] sm:min-h-[320px] shadow-sm group hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Background Image */}
            <Image
              src={steps[1].image}
              alt={steps[1].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/35" />

            {/* Top Row: Extra Large Icon + Big Outline Number */}
            <div className="relative z-10 flex items-start justify-between">
              {/* Detailed Big Document Lines Icon */}
              <svg className="w-16 h-16 sm:w-[70px] sm:h-[70px] text-white stroke-[1.8]" viewBox="0 0 48 48" fill="none" stroke="currentColor">
                <rect x="8" y="6" width="32" height="36" rx="2" />
                <line x1="14" y1="16" x2="34" y2="16" />
                <line x1="14" y1="24" x2="34" y2="24" />
                <line x1="14" y1="32" x2="26" y2="32" />
                <path d="M12 40L16 44H32L36 40" />
              </svg>

              {/* Big Hollow Outlined 02 */}
              <span 
                className="font-sans text-[62px] sm:text-[74px] font-extrabold leading-none select-none text-transparent"
                style={{
                  WebkitTextStroke: '1.8px rgba(255, 255, 255, 0.5)',
                }}
              >
                02
              </span>
            </div>

            {/* Bottom Content with Accent Bar */}
            <div className="relative z-10 pt-8">
              <h3 className="font-serif text-[26px] sm:text-[30px] lg:text-[32px] font-bold text-white mb-2 tracking-tight leading-[1.15]">
                {steps[1].title}
              </h3>
              
              <div className="w-10 h-[2.5px] bg-[#800020] mb-3" />

              <p className="text-[14px] sm:text-[15px] text-gray-200 font-sans leading-[1.6]">
                {steps[1].description}
              </p>
            </div>
          </motion.div>

          {/* Card 3: Programs & Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-[#6e0719] text-white p-7 sm:p-9 rounded-none flex flex-col justify-between min-h-[300px] sm:min-h-[320px] shadow-sm group hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Top Row: Extra Large Custom Check Icon + Big Outline Number */}
            <div className="flex items-start justify-between">
              {/* Detailed Big Document Check Icon */}
              <svg className="w-16 h-16 sm:w-[70px] sm:h-[70px] text-white stroke-[1.8]" viewBox="0 0 48 48" fill="none" stroke="currentColor">
                <path d="M12 6C12 4.89543 12.8954 4 14 4H30L38 12V40C38 41.1046 37.1046 42 36 42H14C12.8954 42 12 41.1046 12 40V6Z" />
                <path d="M28 4V12H38" />
                <line x1="18" y1="20" x2="30" y2="20" />
                <line x1="18" y1="26" x2="30" y2="26" />
                <circle cx="34" cy="34" r="6.5" />
                <path d="M31 34L33 36L37 32" strokeWidth="2" />
              </svg>

              {/* Big Hollow Outlined 03 */}
              <span 
                className="font-sans text-[62px] sm:text-[74px] font-extrabold leading-none select-none text-transparent"
                style={{
                  WebkitTextStroke: '1.8px rgba(255, 255, 255, 0.5)',
                }}
              >
                03
              </span>
            </div>

            {/* Bottom Content: Bada aur Bold Text */}
            <div className="pt-8">
              <h3 className="font-serif text-[26px] sm:text-[30px] lg:text-[32px] font-bold text-white mb-2.5 tracking-tight leading-[1.15]">
                {steps[2].title}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-gray-200 font-sans leading-[1.6]">
                {steps[2].description}
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}