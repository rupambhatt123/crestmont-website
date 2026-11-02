'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CourseDetailContentProps {
  course: {
    category: string;
    title: string;
    titleHighlight: string;
    about: string;
    keyAreas: string;
    teachingMethodsImage: string;
    teachingMethods: { label: string; text: string }[];
    curriculum: string[];
    requirements: string[];
  };
}

function getSafeImageUrl(src?: string): string {
  const fallback = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80';
  if (!src || typeof src !== 'string' || src.trim() === '') {
    return fallback;
  }
  const clean = src.trim();
  if (clean.startsWith('http://') || clean.startsWith('https://') || clean.startsWith('/')) {
    return clean;
  }
  return `/${clean}`;
}

export default function CourseDetailContent({ course }: CourseDetailContentProps) {
  const safeImageSrc = getSafeImageUrl(course?.teachingMethodsImage);

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16 overflow-visible relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Course Content */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Main Header Block */}
            <div>
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3.5">
                <div className="w-8 sm:w-10 h-[2px] sm:h-[2.5px] bg-[#800020]" />
                <span className="text-[10.5px] sm:text-[12px] font-extrabold tracking-[0.18em] sm:tracking-[0.24em] text-[#1c1d20] uppercase font-sans whitespace-nowrap">
                  ABOUT THE PROGRAM
                </span>
              </div>

              <h1 className="font-serif text-[30px] sm:text-[46px] lg:text-[68px] font-bold tracking-tight leading-[1.12] sm:leading-[1.05] text-[#141517] select-none">
                <span className="block text-[#141517]">
                  {course.category}
                </span>
                <span className="block text-[#800020]">
                  {course.titleHighlight}
                </span>
              </h1>

              <p className="mt-5 sm:mt-6 text-[15px] sm:text-[17px] text-gray-700 font-sans leading-[1.7] sm:leading-[1.75] font-normal">
                {course.about}
              </p>
            </div>

            {/* Core Focus / Key Areas Section */}
            <div className="bg-[#faf5f6] border-l-4 border-[#800020] p-6 sm:p-9 shadow-sm">
              <h3 className="font-serif text-[22px] sm:text-[27px] font-bold text-[#141517] mb-2 sm:mb-2.5 tracking-tight">
                Core Specializations & Study Areas
              </h3>
              <p className="text-[14px] sm:text-[15.5px] text-gray-700 font-sans leading-[1.65] sm:leading-[1.7]">
                {course.keyAreas}
              </p>
            </div>

            {/* Learning Pedagogy with Image */}
            <div>
              <h3 className="font-serif text-[24px] sm:text-[34px] font-bold text-[#141517] mb-4 sm:mb-5 tracking-tight">
                Teaching Methodology & Labs
              </h3>

              <div className="relative w-full h-[240px] sm:h-[380px] mb-6 overflow-hidden shadow-sm bg-gray-100">
                <img
                  src={safeImageSrc}
                  alt={course.title || 'Course Teaching Methodology'}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {course.teachingMethods?.map((method, idx) => (
                  <div key={idx} className="bg-[#F7F7F8] p-5 sm:p-6 border-t-2 border-[#800020]">
                    <h4 className="font-serif text-[17px] sm:text-[19px] font-bold text-[#141517] mb-1.5 leading-snug">
                      {method.label}
                    </h4>
                    <p className="text-[13px] sm:text-[13.5px] text-gray-600 font-sans leading-[1.6]">
                      {method.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission Requirements */}
            <div>
              <h3 className="font-serif text-[24px] sm:text-[34px] font-bold text-[#141517] mb-4 sm:mb-5 tracking-tight">
                Eligibility & Entry Criteria
              </h3>
              <ul className="flex flex-col gap-3.5">
                {course.requirements?.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 sm:gap-3.5 bg-[#F9FAFB] p-3.5 sm:p-4 border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-[#800020] shrink-0 mt-0.5" />
                    <span className="text-[14px] sm:text-[15px] text-gray-700 font-sans font-medium leading-relaxed">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: "Curriculum Highlights" Card (Guaranteed Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start h-fit w-full z-20">
            <div className="bg-white border-2 border-gray-100 p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              
              {/* Header inside card */}
              <div className="mb-6">
                <div className="w-8 sm:w-10 h-[2.5px] bg-[#800020] mb-3" />
                <h3 className="font-serif text-[22px] sm:text-[27px] font-bold text-[#141517] tracking-tight">
                  Curriculum Highlights
                </h3>
              </div>

              {/* Items List */}
              <ul className="divide-y divide-gray-100">
                {course.curriculum?.map((item, idx) => (
                  <li key={idx} className="py-3.5 sm:py-4 first:pt-0 last:pb-0">
                    <div className="flex items-start gap-3">
                      <span className="font-serif text-[16px] sm:text-[17px] font-bold text-[#800020]">
                        0{idx + 1}.
                      </span>
                      <span className="text-[14px] sm:text-[15.5px] font-medium text-gray-800 font-sans leading-snug">
                        {item}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Card Action Link */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link
                  href="/enroll"
                  className="w-full py-3.5 bg-[#800020] hover:bg-[#68001a] text-white font-sans font-bold text-[13.5px] uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Apply For This Course</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}