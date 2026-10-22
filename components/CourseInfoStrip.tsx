'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface CourseInfoStripProps {
  fallIntake: {
    term: string;
    months: string;
  };
  springIntake: {
    term: string;
    months: string;
  };
  tuitionFee: string;
}

export default function CourseInfoStrip({
  fallIntake,
  springIntake,
  tuitionFee,
}: CourseInfoStripProps) {
  return (
    <section className="bg-[#800020] text-white py-6 border-y border-[#6b001b] shadow-sm">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-center">
          
          {/* Fall Intake */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-[20px] sm:text-[22px] font-bold text-white tracking-tight leading-tight">
              {fallIntake.term}
            </h4>
            <span className="text-[14px] text-white/85 font-medium block mt-0.5">
              {fallIntake.months}
            </span>
          </div>

          {/* Spring Intake with Left Divider */}
          <div className="lg:col-span-3 lg:border-l lg:border-white/20 lg:pl-8">
            <h4 className="font-sans text-[20px] sm:text-[22px] font-bold text-white tracking-tight leading-tight">
              {springIntake.term}
            </h4>
            <span className="text-[14px] text-white/85 font-medium block mt-0.5">
              {springIntake.months}
            </span>
          </div>

          {/* Tuition Fee with Left Divider */}
          <div className="lg:col-span-3 lg:border-l lg:border-white/20 lg:pl-8">
            <h4 className="font-sans text-[22px] sm:text-[25px] font-extrabold text-white tracking-tight leading-tight">
              {tuitionFee}
            </h4>
            <span className="text-[14px] text-white/85 font-medium block mt-0.5">
              Tuition Fee
            </span>
          </div>

          {/* Apply Now Button */}
          <div className="lg:col-span-3 flex justify-start lg:justify-end">
            <Link
              href="/enroll"
              className="bg-white text-[#800020] hover:bg-gray-100 font-sans font-extrabold text-[13.5px] tracking-[0.16em] uppercase px-8 py-3.5 flex items-center gap-2 shadow-md transition-all hover:scale-[1.02]"
            >
              <span>APPLY NOW</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}