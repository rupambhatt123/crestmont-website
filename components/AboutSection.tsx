'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import universityData from '@/data/universityData.json';

export default function AboutSection() {
  const pathname = usePathname();
  const aboutData =
    (universityData as any).categories.Education.sections.About.variants.UniversityAbout1;

  // Agar user about page par hai toh button hide rahega
  const isAboutPage = pathname === '/about' || pathname.startsWith('/about/');

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-5 relative pl-3 sm:pl-0">
            {/* Left Maroon Border Line (Mobile pe bhi visible) */}
            <div className="absolute left-0 sm:-left-6 top-1 bottom-1 w-[2.5px] sm:w-[3px] bg-[#800020]" />

            <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
              <span className="text-[10.5px] sm:text-[11.5px] font-black tracking-[0.2em] sm:tracking-[0.24em] text-[#1c1d20] uppercase font-sans">
                {aboutData.badge}
              </span>
              <span className="w-6 sm:w-8 h-[2px] bg-[#800020]" />
            </div>

            <h2 className="font-serif text-[34px] sm:text-[50px] lg:text-[68px] font-bold text-[#141517] leading-[1.06] sm:leading-[1.03] tracking-tight mb-3 sm:mb-4 select-none">
              <span className="block text-[#141517]">{aboutData.title}</span>
              <span className="block text-[#800020]">{aboutData.titleHighlight}</span>
            </h2>

            <p className="text-[13.5px] sm:text-[15.5px] text-gray-700 font-sans leading-relaxed mb-5 sm:mb-6 font-medium">
              {aboutData.description}
            </p>

            {/* Read More Button: Sirf home ya other pages par dikhega, /about par hide rahega */}
            {!isAboutPage && aboutData.ctaButton && (
              <div className="pt-1">
                <Link
                  href={aboutData.ctaButton.path}
                  className="bg-[#800020] hover:bg-[#660018] text-white px-6 sm:px-7 py-3 sm:py-3.5 text-[11px] sm:text-[12px] font-bold tracking-[0.16em] uppercase transition-all shadow-md inline-flex items-center gap-2 group font-sans"
                >
                  <span>{aboutData.ctaButton.text}</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Building Campus Image */}
          <div className="lg:col-span-7 w-full">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden shadow-sm bg-gray-100">
              <Image
                src={aboutData.image}
                alt={aboutData.title}
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}