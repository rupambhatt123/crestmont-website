'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import universityData from '@/data/universityData.json';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerData =
    (universityData as any).categories.Education.sections.Header.variants.UniversityHeader1;

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 h-16 sm:h-24 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Logo Container - Responsively scaled so it doesn't push the right items off-screen */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative w-32 xs:w-40 sm:w-56 lg:w-72 h-10 sm:h-16">
            <Image
              src={headerData.logo || "/logo1.webp"}
              alt={headerData.brandName}
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden 2xl:flex items-center gap-5 lg:gap-6 ml-auto mr-6">
          {headerData.navLinks.map((link: any) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative py-1 text-[13px] 2xl:text-[13.5px] font-semibold transition-colors whitespace-nowrap ${
                  active ? 'text-[#800020]' : 'text-gray-700 hover:text-[#800020]'
                }`}
              >
                {link.title}
                {active && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#800020] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Hamburger */}
        <div className="flex items-center gap-1.5 xs:gap-2.5 sm:gap-3 shrink-0">
          <Link
            href={headerData.ctaButton.path}
            className="bg-[#800020] hover:bg-[#660018] text-white px-2.5 xs:px-3 sm:px-5 py-2 sm:py-2.5 text-[10px] xs:text-[11px] sm:text-[12px] font-bold tracking-wider uppercase transition-colors inline-flex items-center gap-1 sm:gap-2 shadow-sm whitespace-nowrap"
          >
            <span>{headerData.ctaButton.text}</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          </Link>

          {/* Hamburger Menu Toggle - Secured inside viewport */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="2xl:hidden p-1.5 sm:p-2 text-gray-800 hover:text-[#800020] hover:bg-gray-100 rounded-md transition-colors focus:outline-none shrink-0"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Responsive Slide Drawer */}
      {mobileMenuOpen && (
        <div className="2xl:hidden bg-white border-t border-gray-100 px-5 sm:px-6 py-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1 divide-y divide-gray-100">
            {headerData.navLinks.map((link: any) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-[14.5px] font-medium py-3 transition-colors flex items-center justify-between ${
                    active ? 'text-[#800020] font-bold' : 'text-gray-800 hover:text-[#800020]'
                  }`}
                >
                  <span>{link.title}</span>
                  <span className={active ? 'text-[#800020]' : 'text-gray-300 text-sm'}>›</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}