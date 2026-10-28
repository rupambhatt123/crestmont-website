'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import universityData from '@/data/universityData.json';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerData =
    (universityData as any).categories.Education.sections.Header.variants.UniversityHeader1;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-20 sm:h-24 flex items-center justify-between gap-4">
        
        {/* Logo Container */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative w-44 sm:w-56 lg:w-72 h-12 sm:h-16">
            <Image
              src={headerData.logo || "/logo1.webp"}
              alt={headerData.brandName}
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Nav Links (Only on wide screens to prevent 2-line breaking) */}
        <nav className="hidden 2xl:flex items-center gap-5 lg:gap-6 ml-auto mr-6">
          {headerData.navLinks.map((link: any) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-[13px] 2xl:text-[13.5px] font-semibold text-gray-700 hover:text-[#800020] transition-colors whitespace-nowrap"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Right CTA Button & Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href={headerData.ctaButton.path}
            className="bg-[#800020] hover:bg-[#660018] text-white px-4 sm:px-5 py-2.5 text-[11px] sm:text-[12px] font-bold tracking-wider uppercase transition-colors inline-flex items-center gap-1.5 sm:gap-2 shadow-sm whitespace-nowrap"
          >
            <span>{headerData.ctaButton.text}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Hamburger Menu Toggle for Laptops / Tablets / Phones */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="2xl:hidden p-2 text-gray-800 hover:text-[#800020] hover:bg-gray-100 rounded-md transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Responsive Slide Drawer */}
      {mobileMenuOpen && (
        <div className="2xl:hidden bg-white border-t border-gray-100 px-5 sm:px-6 py-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1 divide-y divide-gray-100">
            {headerData.navLinks.map((link: any) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[14.5px] font-medium text-gray-800 hover:text-[#800020] py-3 transition-colors flex items-center justify-between"
              >
                <span>{link.title}</span>
                <span className="text-gray-300 text-sm">›</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}