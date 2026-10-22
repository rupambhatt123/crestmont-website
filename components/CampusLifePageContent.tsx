'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import universityData from '@/data/universityData.json';

// Number Counter Helper Component
function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    if (value.includes(':')) {
      const parts = value.split(':');
      const targetLeft = parseInt(parts[0], 10) || 0;
      let start = 0;
      const duration = 1200;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = targetLeft / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetLeft) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(`${Math.floor(start)}:${parts[1]}`);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }

    const numericMatch = value.replace(/,/g, '').match(/\d+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(numericMatch[0], 10);
    const suffix = value.replace(/[\d,]/g, '');
    let start = 0;
    const duration = 1500;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        const formatted = Math.floor(start).toLocaleString();
        setDisplayValue(`${formatted}${suffix}`);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

// Mobile Slider for Section Items
function MobileSectionSlider({ items }: { items: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDragEnd = (_: any, info: any) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold && activeIndex < items.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (info.offset.x > swipeThreshold && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const currentItem = items[activeIndex];

  return (
    <div className="block sm:hidden w-full">
      <div className="relative overflow-hidden min-h-[300px]">
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
            className="bg-white border border-gray-200 flex flex-col justify-between shadow-sm cursor-grab active:cursor-grabbing"
          >
            {/* Card Image */}
            <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-4 flex flex-col flex-1">
              <div className="w-7 h-[2px] bg-[#800020] mb-2" />
              <h3 className="font-serif text-[20px] font-black text-[#141517] tracking-tight leading-snug mb-1">
                {currentItem.title}
              </h3>
              <p className="text-[12.5px] font-medium text-gray-600 font-sans leading-[1.5]">
                {currentItem.desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Navigation Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-3 py-1">
        {items.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`Slide to item ${idx + 1}`}
            className={`h-2 transition-all duration-300 rounded-full ${
              activeIndex === idx 
                ? 'w-6 bg-[#800020]' 
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function CampusLifePageContent() {
  const data = (universityData as any).categories.Education.sections.CampusLife.variants.UniversityCampusLife1;

  return (
    <div className="bg-white text-[#141517]">
      {/* 1. Hero & Intro Block */}
      <section className="pt-6 sm:pt-8 pb-0">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
          
          {/* Centered Heading Block */}
          <div className="text-center max-w-3xl mx-auto mb-4">
            <div className="w-8 h-[2.5px] bg-[#800020] mx-auto mb-2" />
            
            <span className="text-[10.5px] sm:text-[11px] font-black tracking-[0.22em] sm:tracking-[0.25em] text-[#1c1d20] uppercase font-sans block mb-1.5">
              {data.badge}
            </span>

            <h1 className="font-serif text-[36px] sm:text-[56px] lg:text-[68px] font-black tracking-tight leading-[1.04] sm:leading-[1.02] mb-2 select-none">
              <span className="block text-[#141517]">{data.title}</span>
              <span className="block text-[#800020] font-black">{data.titleHighlight}</span>
            </h1>

            <p className="text-[13px] sm:text-[15px] font-medium text-gray-600 font-sans leading-relaxed max-w-2xl mx-auto px-2">
              {data.description}
            </p>
          </div>

          {/* Hero Wide Campus Image */}
          <div className="relative w-full h-[190px] sm:h-[320px] lg:h-[380px] overflow-hidden shadow-sm">
            <Image
              src={data.heroImage}
              alt={data.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* 2. Attached Maroon Stats Strip */}
          <div className="bg-[#800020] text-white py-3.5 sm:py-4 px-3 sm:px-6 shadow-sm">
            <div className="grid grid-cols-3 divide-x divide-white/20 text-center">
              {data.stats.map((stat: { value: string; label: string }, idx: number) => (
                <div key={idx} className="py-1 px-1 sm:px-4">
                  <h3 className="font-serif text-[22px] sm:text-[42px] lg:text-[48px] font-black leading-none tracking-tight">
                    <AnimatedCounter value={stat.value} />
                  </h3>
                  <p className="text-[10.5px] sm:text-[14px] font-bold text-white/95 mt-1 tracking-wide line-clamp-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Category Sections */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-7 sm:gap-8">
        {data.sections.map((sec: any, secIdx: number) => (
          <section key={secIdx} className="border-b border-gray-100 last:border-b-0 pb-7 sm:pb-8 last:pb-0">
            
            {/* Section Header */}
            <div className="mb-4">
              <div className="w-8 h-[2.5px] bg-[#800020] mb-1.5" />
              <h2 className="font-serif text-[26px] sm:text-[38px] lg:text-[44px] font-black text-[#141517] tracking-tight leading-tight mb-1">
                {sec.title}
              </h2>
              <p className="text-[13px] sm:text-[14.5px] font-medium text-gray-600 font-sans max-w-3xl leading-relaxed">
                {sec.description}
              </p>
            </div>

            {/* Mobile View: 1 Card + Dots Slide */}
            <MobileSectionSlider items={sec.items} />

            {/* Desktop & Tablet: Standard Grid Layout */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
              {sec.items.map((item: any, itemIdx: number) => (
                <div
                  key={itemIdx}
                  className="bg-white border border-gray-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  <div className="p-3.5 sm:p-4 flex flex-col flex-1">
                    <div className="w-7 h-[2px] bg-[#800020] mb-2" />
                    <h3 className="font-serif text-[20px] sm:text-[22px] font-black text-[#141517] tracking-tight leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[12.5px] sm:text-[13px] font-medium text-gray-600 font-sans leading-[1.45]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </section>
        ))}
      </div>
    </div>
  );
}