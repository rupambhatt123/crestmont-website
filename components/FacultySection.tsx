'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants, AnimatePresence } from 'framer-motion';
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

export default function FacultySection() {
  const data = (universityData as any).categories.Education.sections.Faculty.variants.UniversityFaculty1;
  const members = data.members;

  const titlePart1 = data.title.split('');
  const titlePart2 = data.titleHighlight.split('');

  // Mobile view slide index state
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (_: any, info: any) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold && currentIndex < members.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        
        {/* Header Block: Left Title + Right Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-end mb-8 sm:mb-12">
          
          {/* Left Title */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3.5"
            >
              <div className="w-8 sm:w-10 h-[2px] sm:h-[2.5px] bg-[#800020]" />
              <span className="text-[10.5px] sm:text-[12px] font-extrabold tracking-[0.2em] sm:tracking-[0.24em] text-[#1c1d20] uppercase font-sans">
                {data.badge}
              </span>
            </motion.div>

            {/* Responsive Editorial Serif Title */}
            <motion.h2 
              variants={titleContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif text-[38px] sm:text-[60px] lg:text-[84px] font-bold tracking-tight leading-[1.0] sm:leading-[0.98] text-[#141517] select-none"
            >
              <span className="block text-[#141517]">
                {titlePart1.map((char: string, i: number) => (
                  <motion.span key={`ft1-${i}`} variants={letterFlyVariants} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>

              <span className="block text-[#800020]">
                {titlePart2.map((char: string, i: number) => (
                  <motion.span key={`ft2-${i}`} variants={letterFlyVariants} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>
          </div>

          {/* Right Description with Maroon Left Border */}
          <div className="lg:col-span-5 border-l-2 border-[#800020] pl-4 lg:pl-8 pb-1 sm:pb-2">
            <p className="text-[13.5px] sm:text-[15px] lg:text-[16px] text-gray-700 font-sans leading-relaxed font-normal">
              {data.description}
            </p>
          </div>

        </div>

        {/* ================= MOBILE VIEW: 1 Card Front + Dots Slider ================= */}
        <div className="block sm:hidden w-full">
          <div className="relative overflow-hidden min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="flex flex-col cursor-grab active:cursor-grabbing bg-white"
              >
                {/* Faculty Image */}
                <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden shadow-sm mb-4">
                  <Image
                    src={members[currentIndex].image}
                    alt={members[currentIndex].name}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Faculty Name */}
                <h3 className="font-serif text-[24px] font-bold text-[#141517] tracking-tight leading-snug mb-1">
                  {members[currentIndex].name}
                </h3>

                {/* Maroon Underline Accent */}
                <div className="w-8 h-[2px] bg-[#800020] mb-2.5" />

                {/* Professor Designation */}
                <p className="font-sans text-[13px] font-bold text-[#800020] uppercase tracking-wider mb-1.5">
                  {members[currentIndex].designation}
                </p>

                {/* Professor Bio */}
                <p className="font-sans text-[13.5px] text-gray-600 leading-relaxed">
                  {members[currentIndex].bio}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4 py-2">
            {members.map((_: any, idx: number) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Slide to faculty ${idx + 1}`}
                className={`h-2 transition-all duration-300 rounded-full ${
                  currentIndex === idx 
                    ? 'w-6 bg-[#800020]' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= DESKTOP & TABLET VIEW: Grid Layout ================= */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          {members.map((member: any, idx: number) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="group flex flex-col"
            >
              {/* Faculty Image */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden shadow-sm mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Faculty Name */}
              <h3 className="font-serif text-[26px] sm:text-[28px] font-bold text-[#141517] tracking-tight leading-snug mb-1.5">
                {member.name}
              </h3>

              {/* Maroon Underline Accent */}
              <div className="w-10 h-[2px] bg-[#800020] mb-3" />

              {/* Professor Designation */}
              <p className="font-sans text-[14.5px] font-bold text-[#800020] uppercase tracking-wider mb-2">
                {member.designation}
              </p>

              {/* Professor Bio */}
              <p className="font-sans text-[14px] text-gray-600 leading-[1.6]">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}