'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';
import universityData from '@/data/universityData.json';

export default function HeroBanner() {
  const heroData =
    (universityData as any).categories.Education.sections.HeroBanner.variants.UniversityHero1;

  return (
    <section className="relative bg-white overflow-hidden py-10 sm:py-14 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Student Image - Desktop */}
          <div className="lg:col-span-3 hidden lg:block relative">
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
          </div>

          {/* Center Column: Text & CTA */}
          <div className="lg:col-span-6 flex flex-col items-center text-center px-2 sm:px-4">
            
            {/* Centered Badge */}
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <GraduationCap className="w-4 h-4 text-[#800020]" />
              <span className="text-[10.5px] sm:text-[12px] font-black tracking-[0.2em] text-[#1c1d20] uppercase font-sans">
                {heroData.badge}
              </span>
              <span className="w-6 sm:w-8 h-[2px] bg-[#800020]" />
            </div>

            {/* Heading */}
            <h1 className="font-serif text-[42px] sm:text-[62px] lg:text-[76px] font-bold text-[#141517] leading-[1.04] tracking-tight mb-4 select-none">
              <span className="block text-[#141517]">{heroData.title}</span>
              <span className="block text-[#800020]">{heroData.titleHighlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-[16px] text-gray-700 font-sans leading-relaxed max-w-lg mx-auto mb-7 font-medium px-2">
              {heroData.description}
            </p>

            {/* Action Button */}
            <div className="flex justify-center mb-8 lg:mb-0">
              <Link
                href={heroData.ctaButton.path}
                className="bg-[#800020] hover:bg-[#660018] text-white px-7 sm:px-8 py-3.5 text-[11.5px] sm:text-[12px] font-bold tracking-[0.18em] uppercase transition-all shadow-md inline-flex items-center gap-2.5 group"
              >
                <span>{heroData.ctaButton.text}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile-Only Images Display (Button ke neeche 2 clean cards) */}
            <div className="grid grid-cols-2 gap-3.5 w-full max-w-md lg:hidden mt-2">
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
            </div>

          </div>

          {/* Right Tower Image - Desktop */}
          <div className="lg:col-span-3 hidden lg:block relative">
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
          </div>

        </div>
      </div>
    </section>
  );
}