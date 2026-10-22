'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import universityData from '@/data/universityData.json';

export default function Footer() {
  const common = (universityData as any).common;
  const footerData = (universityData as any).categories.Education.sections.Footer.variants.UniversityFooter1;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#1a0508] text-white overflow-hidden border-t border-[#380b12]">
      {/* Right Background Architectural Watermark */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-full sm:w-[55%] pointer-events-none opacity-15 sm:opacity-20 mix-blend-screen bg-right bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('${footerData.bgImage}')`,
          maskImage: 'linear-gradient(to left, black 30%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, black 30%, transparent 100%)'
        }}
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-5 sm:px-6 pt-10 sm:pt-14 pb-8 sm:pb-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 items-start md:items-center pb-10 sm:pb-14">
          
          {/* Logo Section */}
          <div className="md:col-span-5 lg:col-span-6 flex items-center justify-start">
            <Link href="/" className="inline-block relative">
              <Image
                src={footerData.logo}
                alt={common.siteName}
                width={480}
                height={120}
                priority
                className="h-auto w-full max-w-[240px] sm:max-w-[340px] lg:max-w-[420px] object-contain drop-shadow-md"
              />
            </Link>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-4 lg:col-span-3 md:border-l md:border-white/15 md:pl-8 lg:pl-10">
            <h4 className="font-serif text-[20px] sm:text-[24px] lg:text-[26px] font-bold text-white mb-3.5 sm:mb-5 tracking-tight">
              {footerData.quickLinksTitle}
            </h4>
            <ul className="flex flex-col gap-2.5 sm:gap-3.5">
              {footerData.quickLinks.map((link: { title: string; path: string }, idx: number) => (
                <li key={idx}>
                  <Link
                    href={link.path}
                    className="text-[14px] sm:text-[15.5px] font-medium text-gray-200 hover:text-white transition-colors font-sans tracking-wide inline-block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us / Social Links Section */}
          <div className="md:col-span-3 lg:col-span-3 md:border-l md:border-white/15 md:pl-8 lg:pl-10">
            <h4 className="font-serif text-[20px] sm:text-[24px] lg:text-[26px] font-bold text-white mb-3.5 sm:mb-5 tracking-tight">
              {footerData.followUsTitle}
            </h4>
            <div className="flex items-center gap-3 sm:gap-3.5">
              {/* Facebook Icon */}
              <a
                href={common.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#800020] bg-transparent hover:bg-[#800020] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href={common.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#800020] bg-transparent hover:bg-[#800020] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a
                href={common.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#800020] bg-transparent hover:bg-[#800020] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 sm:pt-7 border-t border-white/15 flex flex-col-reverse sm:flex-row items-center justify-between gap-5 sm:gap-4">
          <p className="text-[12.5px] sm:text-[14px] font-normal text-gray-300 font-sans tracking-wide text-center sm:text-left">
            {footerData.copyright}
          </p>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block w-[1.5px] h-6 bg-white/20" />
            
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none"
            >
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-gray-200 group-hover:text-white transition-colors">
                {footerData.backToTopText}
              </span>
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#800020] bg-transparent group-hover:bg-[#800020] flex items-center justify-center text-white transition-all duration-300 group-hover:-translate-y-1 shadow-sm">
                <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}