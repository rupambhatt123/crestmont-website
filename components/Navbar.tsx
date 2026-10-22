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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-36 sm:w-44 h-12">
            <Image
              src="/logo2.png"
              alt={headerData.brandName}
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {headerData.navLinks.map((link: any) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-[14px] font-semibold text-gray-700 hover:text-[#800020] transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href={headerData.ctaButton.path}
            className="bg-[#800020] hover:bg-[#660018] text-white px-5 sm:px-6 py-2.5 text-[12px] sm:text-[13px] font-bold tracking-wide uppercase transition-colors inline-flex items-center gap-2"
          >
            <span>{headerData.ctaButton.text}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Hamburger Button for Mobile & Tablets */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-gray-800 hover:text-[#800020] transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {headerData.navLinks.map((link: any) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-medium text-gray-800 hover:text-[#800020] py-1 border-b border-gray-50 transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}