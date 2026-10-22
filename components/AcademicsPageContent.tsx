'use client';

import React from 'react';
import Image from 'next/image';
import universityData from '@/data/universityData.json';

export default function AcademicsPageContent() {
  const academicsData =
    (universityData as any).categories.Education.sections.Academics.variants.UniversityAcademics1;

  const {
    undergraduate,
    graduate,
    lifelongLearning,
    professionalDevelopment,
  } = academicsData;

  return (
    <div className="bg-white text-[#141517]">
      {/* 1. Academic Excellence Hero Section */}
      <section className="pt-6 sm:pt-10 lg:pt-14 pb-0">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
          
          {/* Header Row: Left Big Title + Right Paragraph */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-end mb-6 sm:mb-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                <span className="w-8 sm:w-10 h-[2px] sm:h-[2.5px] bg-[#800020]" />
                <span className="text-[10.5px] sm:text-[12px] font-black tracking-[0.2em] sm:tracking-[0.24em] text-[#1c1d20] uppercase font-sans">
                  {academicsData.badge}
                </span>
              </div>
              
              <h1 className="font-serif text-[36px] sm:text-[54px] lg:text-[80px] font-bold text-[#141517] leading-[1.04] sm:leading-[1.0] tracking-tight select-none">
                <span className="block text-[#141517]">{academicsData.title}</span>
                <span className="block text-[#800020]">{academicsData.titleHighlight}</span>
              </h1>
            </div>

            <div className="lg:col-span-5 border-l-2 border-[#800020] pl-4 lg:pl-8 pb-1">
              <p className="text-[13.5px] sm:text-[15px] lg:text-[16px] text-gray-700 leading-relaxed font-sans font-medium">
                {academicsData.description}
              </p>
            </div>
          </div>

          {/* Hero Banner Photo */}
          <div className="relative w-full h-[200px] sm:h-[320px] lg:h-[480px] rounded-none overflow-hidden bg-gray-100 shadow-sm">
            <Image
              src={academicsData.heroImage}
              alt={academicsData.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* 2. Attached Maroon Stats Strip (Compact 3-column on mobile) */}
          <div className="bg-[#800020] text-white py-4 sm:py-6 lg:py-8 px-3 sm:px-6 shadow-md">
            <div className="grid grid-cols-3 divide-x divide-white/20 text-center">
              {academicsData.stats.map((stat: { value: string; label: string }, idx: number) => (
                <div key={idx} className="py-1 px-1.5 sm:px-4">
                  <h3 className="font-serif text-[22px] sm:text-[38px] lg:text-[60px] font-bold leading-none tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="text-[10px] sm:text-[12.5px] lg:text-[14.5px] font-medium sm:font-semibold text-white/90 mt-1.5 tracking-wide font-sans line-clamp-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Alternating Sections: 4 Compact Editorial Blocks */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 flex flex-col gap-10 sm:gap-16 lg:gap-20">
        
        {/* 1. Undergraduate Education */}
        {undergraduate && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-none overflow-hidden bg-gray-100 shadow-sm">
                <Image
                  src={undergraduate.image}
                  alt={undergraduate.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <h2 className="font-serif text-[26px] sm:text-[36px] lg:text-[48px] font-bold text-[#141517] leading-tight tracking-tight mb-2 sm:mb-3">
                {undergraduate.title}{' '}
                <span className="text-[#800020]">{undergraduate.titleHighlight}</span>
              </h2>

              <p className="text-[13px] sm:text-[14.5px] lg:text-[15.5px] text-gray-700 leading-relaxed font-sans font-medium mb-4 sm:mb-6">
                {undergraduate.description}
              </p>

              <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
                {undergraduate.programs.map((course: { name: string; degree: string }, idx: number) => (
                  <li key={idx} className="py-2.5 sm:py-3 flex items-center justify-between text-[13.5px] sm:text-[15px] font-sans">
                    <span className="text-[#141517] font-bold">{course.name}</span>
                    <span className="text-[#800020] font-semibold text-[12.5px] sm:text-[14px]">{course.degree}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 2. Graduate Education */}
        {graduate && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-14 items-center">
            {/* Mobile pe Image upar, desktop pe right */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-none overflow-hidden bg-gray-100 shadow-sm">
                <Image
                  src={graduate.image}
                  alt={graduate.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-2 lg:order-1">
              <h2 className="font-serif text-[26px] sm:text-[36px] lg:text-[48px] font-bold text-[#141517] leading-tight tracking-tight mb-2 sm:mb-3">
                {graduate.title}{' '}
                <span className="text-[#800020]">{graduate.titleHighlight}</span>
              </h2>

              <p className="text-[13px] sm:text-[14.5px] lg:text-[15.5px] text-gray-700 leading-relaxed font-sans font-medium mb-4 sm:mb-6">
                {graduate.description}
              </p>

              <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
                {graduate.programs.map((course: { name: string; degree: string }, idx: number) => (
                  <li key={idx} className="py-2.5 sm:py-3 flex items-center justify-between text-[13.5px] sm:text-[15px] font-sans">
                    <span className="text-[#141517] font-bold">{course.name}</span>
                    <span className="text-[#800020] font-semibold text-[12.5px] sm:text-[14px]">{course.degree}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 3. Lifelong Learning */}
        {lifelongLearning && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-none overflow-hidden bg-gray-100 shadow-sm">
                <Image
                  src={lifelongLearning.image}
                  alt={lifelongLearning.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <h2 className="font-serif text-[26px] sm:text-[36px] lg:text-[48px] font-bold text-[#141517] leading-tight tracking-tight mb-2 sm:mb-3">
                {lifelongLearning.title}{' '}
                <span className="text-[#800020]">{lifelongLearning.titleHighlight}</span>
              </h2>

              <p className="text-[13px] sm:text-[14.5px] lg:text-[15.5px] text-gray-700 leading-relaxed font-sans font-medium mb-4 sm:mb-6">
                {lifelongLearning.description}
              </p>

              <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
                {lifelongLearning.items.map((item: string, idx: number) => (
                  <li key={idx} className="py-2.5 sm:py-3 text-[13.5px] sm:text-[15px] font-sans font-bold text-[#141517] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#800020] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 4. Professional Development */}
        {professionalDevelopment && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-14 items-center">
            {/* Mobile pe Image upar, desktop pe right */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-none overflow-hidden bg-gray-100 shadow-sm">
                <Image
                  src={professionalDevelopment.image}
                  alt={professionalDevelopment.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-2 lg:order-1">
              <h2 className="font-serif text-[26px] sm:text-[36px] lg:text-[48px] font-bold text-[#141517] leading-tight tracking-tight mb-2 sm:mb-3">
                {professionalDevelopment.title}{' '}
                <span className="text-[#800020]">{professionalDevelopment.titleHighlight}</span>
              </h2>

              <p className="text-[13px] sm:text-[14.5px] lg:text-[15.5px] text-gray-700 leading-relaxed font-sans font-medium mb-4 sm:mb-6">
                {professionalDevelopment.description}
              </p>

              <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
                {professionalDevelopment.items.map((item: string, idx: number) => (
                  <li key={idx} className="py-2.5 sm:py-3 text-[13.5px] sm:text-[15px] font-sans font-bold text-[#141517] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#800020] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

      </div>
    </div>
  );
}