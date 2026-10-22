'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import universityData from '@/data/universityData.json';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export default function PageBanner({
  title,
  breadcrumbs,
  bgImage,
}: PageBannerProps) {
  const defaultBg = (universityData as any).categories.Education.sections.PageBanner.variants.UniversityPageBanner1.backgroundImage;
  const imageSource = bgImage || defaultBg || '/pagebanner.jpg';

  return (
    <section className="relative w-full h-[280px] md:h-[340px] lg:h-[380px] bg-[#0c0d10] overflow-hidden flex items-center justify-center">
      {/* Background Image - Clean & Visible */}
      <Image
        src={imageSource}
        alt={title}
        fill
        priority
        className="object-cover opacity-75 select-none"
      />

      {/* Light subtle dark gradient overlay (shadow kam kar diya gaya hai) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/45 pointer-events-none" />

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Banner Title */}
        <h1 className="font-serif text-[56px] sm:text-[70px] md:text-[84px] lg:text-[92px] font-normal tracking-[-0.01em] text-white leading-none drop-shadow-md select-none">
          {title}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mt-6 flex items-center justify-center gap-3 text-[13px] md:text-[14px] text-white tracking-wide drop-shadow-sm"
        >
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <React.Fragment key={index}>
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="font-bold text-white hover:text-gray-200 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-normal text-gray-200">{item.label}</span>
                )}
                {!isLast && (
                  <span className="text-gray-300 font-light mx-1">|</span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </section>
  );
}