'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import universityData from '@/data/universityData.json';

const titleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.1,
    },
  },
};

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 120,
    },
  },
};

export default function AboutSection() {
  const pathname = usePathname();
  const aboutData =
    (universityData as any).categories.Education.sections.About.variants.UniversityAbout1;

  const isAboutPage = pathname === '/about' || pathname.startsWith('/about/');
  const line1 = aboutData.title.split('');
  const line2 = aboutData.titleHighlight.split('');

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-5 relative pl-3 sm:pl-0">
            {/* Left Maroon Border Line with vertical scaling */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ originY: 0 }}
              className="absolute left-0 sm:-left-6 top-1 bottom-1 w-[2.5px] sm:w-[3px] bg-[#800020]" 
            />

            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3"
            >
              <span className="text-[10.5px] sm:text-[11.5px] font-black tracking-[0.2em] sm:tracking-[0.24em] text-[#1c1d20] uppercase font-sans">
                {aboutData.badge}
              </span>
              <span className="w-6 sm:w-8 h-[2px] bg-[#800020]" />
            </motion.div>

            {/* Animated Title */}
            <motion.h2 
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif text-[34px] sm:text-[50px] lg:text-[68px] font-bold text-[#141517] leading-[1.06] sm:leading-[1.03] tracking-tight mb-3 sm:mb-4 select-none"
            >
              <span className="block text-[#141517]">
                {line1.map((char: string, i: number) => (
                  <motion.span key={`ab1-${i}`} variants={letterVariants} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
              <span className="block text-[#800020]">
                {line2.map((char: string, i: number) => (
                  <motion.span key={`ab2-${i}`} variants={letterVariants} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[13.5px] sm:text-[15.5px] text-gray-700 font-sans leading-relaxed mb-5 sm:mb-6 font-medium"
            >
              {aboutData.description}
            </motion.p>

            {/* Read More Button */}
            {!isAboutPage && aboutData.ctaButton && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="pt-1"
              >
                <Link
                  href={aboutData.ctaButton.path}
                  className="bg-[#800020] hover:bg-[#660018] text-white px-6 sm:px-7 py-3 sm:py-3.5 text-[11px] sm:text-[12px] font-bold tracking-[0.16em] uppercase transition-all shadow-md inline-flex items-center gap-2 group font-sans"
                >
                  <span>{aboutData.ctaButton.text}</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )}
          </div>

          {/* Right Column: Building Campus Image with Zoom/Reveal Effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 w-full"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden shadow-sm bg-gray-100">
              <Image
                src={aboutData.image}
                alt={aboutData.title}
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}