'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
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

export default function TestimonialsSection() {
  const data = (universityData as any).categories.Education.sections.TestimonialsSection.variants.UniversityTestimonials1;

  const leftBanner = data.leftBanner;
  const testimonials = data.testimonials || [];

  const mainTitlePart1 = data.title.split('');
  const mainTitlePart2 = data.titleHighlight.split('');

  // Mobile slider active index state
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (_: any, info: any) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold && currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    /* overflow-visible zaroori hai taaki sticky scroll track break na ho */
    <section className="bg-[#111315] py-10 lg:py-14 text-white overflow-visible border-b border-gray-900 relative">
      <div className="max-w-[1360px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* ================= LEFT COLUMN: STICKY CARD ================= */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 z-20 self-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-none overflow-hidden min-h-[460px] sm:min-h-[500px] p-8 sm:p-10 flex flex-col justify-between shadow-2xl bg-[#1c1d20]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={leftBanner.bgImage || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80"}
                alt="University Campus"
                fill
                priority
                className="object-cover object-center opacity-45 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#800020]/90 via-[#180206]/75 to-[#111315]/80" />
            </div>

            {/* Banner Top Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2.5px] bg-[#a81c30]" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-gray-200 uppercase font-sans">
                  {leftBanner.badge}
                </span>
              </div>

              <h3 className="font-serif text-[38px] sm:text-[48px] font-bold leading-[1.03] tracking-tight text-white mb-6">
                A Community <br />
                of Ambitious <br />
                <span className="text-[#e23b54] font-bold">Learners</span>
              </h3>

              <p className="text-[13.5px] text-gray-200 font-sans leading-[1.65] max-w-[320px]">
                {leftBanner.description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 pt-8">
              <Link
                href={leftBanner.ctaButton.path}
                className="bg-[#800020] hover:bg-[#9c0529] text-white px-6 py-3.5 text-[12px] font-bold tracking-wider uppercase inline-flex items-center gap-3 transition-all duration-300 shadow-lg group hover:translate-x-1 font-sans"
              >
                <span>{leftBanner.ctaButton.text}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ================= RIGHT COLUMN: SCROLLABLE CARDS ================= */}
        <div className="lg:col-span-8 flex flex-col w-full">
          
          {/* Header Block */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-6 h-[2px] bg-[#a81c30]" />
              <span className="text-[11px] font-bold tracking-[0.24em] text-gray-300 uppercase font-sans">
                {data.badge}
              </span>
            </div>

            <motion.h2 
              variants={titleContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif text-[36px] sm:text-[52px] font-bold tracking-tight leading-tight text-white select-none flex items-center flex-wrap gap-x-3 mb-2"
            >
              <span className="inline-block whitespace-nowrap">
                {mainTitlePart1.map((char: string, i: number) => (
                  <motion.span 
                    key={`t1-${i}`} 
                    variants={letterFlyVariants} 
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>

              <span className="inline-block whitespace-nowrap text-[#a81c30] font-bold">
                {mainTitlePart2.map((char: string, i: number) => (
                  <motion.span 
                    key={`t2-${i}`} 
                    variants={letterFlyVariants} 
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>

            <p className="text-[13.5px] text-gray-400 font-sans leading-relaxed max-w-[620px]">
              {data.subtitle || "Hear from our students about their experiences, achievements, and how our programs have helped them reach their goals."}
            </p>
          </div>

          {/* ================= MOBILE VIEW: 1 Card Front + Dots Slider ================= */}
          <div className="block md:hidden w-full overflow-hidden">
            <div className="relative min-h-[360px]">
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
                  className="flex flex-col cursor-grab active:cursor-grabbing"
                >
                  {/* Photo */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-900 mb-3.5 shadow-md">
                    <Image
                      src={testimonials[currentIndex]?.img}
                      alt={testimonials[currentIndex]?.name || ''}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  {/* Quote */}
                  <p className="text-[13px] text-gray-300 font-sans leading-[1.6] mb-3 min-h-[56px]">
                    "{testimonials[currentIndex]?.quote}"
                  </p>

                  {/* Details */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-[2.5px] h-8 bg-[#800020] shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[11px] text-gray-400 font-sans tracking-wide">
                        {testimonials[currentIndex]?.program}
                      </span>
                      <span className="text-[13.5px] font-bold text-white tracking-wide">
                        {testimonials[currentIndex]?.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center justify-center gap-2 mt-5 py-2">
              {testimonials.map((_: any, idx: number) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Slide to testimonial ${idx + 1}`}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    currentIndex === idx 
                      ? 'w-7 bg-[#a81c30]' 
                      : 'w-2 bg-gray-700 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ================= DESKTOP VIEW: 2-Column Grid ================= */}
          <div className="hidden md:grid md:grid-cols-2 gap-x-8 gap-y-8">
            {testimonials.map((item: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col group"
              >
                {/* 16:9 Landscape Wide Photo */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-900 mb-3.5 shadow-sm">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Clear Quote */}
                <p className="text-[12.5px] sm:text-[13px] text-gray-300 font-sans leading-[1.55] mb-3">
                  {item.quote}
                </p>

                {/* Red Marker + Details */}
                <div className="flex items-start gap-2.5">
                  <div className="w-[2.5px] h-8 bg-[#800020] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[11px] text-gray-400 font-sans tracking-wide">
                      {item.program}
                    </span>
                    <span className="text-[13px] font-bold text-white tracking-wide">
                      {item.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}