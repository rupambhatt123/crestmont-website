'use client';

import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import universityData from '@/data/universityData.json';

// Animated Slow Counter Sub-component
function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  // Separate numbers and suffixes
  const numericMatch = value.replace(/,/g, '').match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/[\d,]/g, '');
  const hasComma = value.includes(',');

  const motionVal = useMotionValue(0);

  // Dheemi (slow & smooth) animation ke liye damping ko 55 aur stiffness ko 25 rakha hai
  const springVal = useSpring(motionVal, {
    damping: 55,
    stiffness: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (isInView) {
      motionVal.set(targetNumber);
    }
  }, [isInView, motionVal, targetNumber]);

  useEffect(() => {
    return springVal.on('change', (latest) => {
      if (ref.current) {
        const rounded = Math.floor(latest);
        const formatted = hasComma ? rounded.toLocaleString('en-US') : rounded.toString();
        ref.current.textContent = `${formatted}${suffix}`;
      }
    });
  }, [springVal, suffix, hasComma]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export default function StatsSection() {
  const data = (universityData as any).categories.Education.sections.StatsSection.variants.UniversityStats1;

  return (
    <section className="bg-white py-6 lg:py-8 border-b border-gray-100">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center">
          {data.stats.map((stat: { value: string; label: string }, idx: number) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center px-3 py-1 relative ${
                idx !== data.stats.length - 1 ? 'lg:border-r border-gray-200' : ''
              } ${idx % 2 === 0 ? 'border-r border-gray-200 lg:border-r' : ''}`}
            >
              {/* Extra Bold Large Editorial Serif Number */}
              <div className="font-serif text-[56px] sm:text-[72px] lg:text-[88px] font-extrabold text-[#800020] leading-none tracking-tight mb-1 select-none">
                <AnimatedCounter value={stat.value} />
              </div>

              {/* Compact Stat Description */}
              <p className="text-[13.5px] sm:text-[14.5px] font-semibold text-[#1f242e] max-w-[210px] leading-[1.35] font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}