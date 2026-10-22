'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import universityData from '@/data/universityData.json';

export default function ContactPageContent() {
  const contactData = (universityData as any).categories.Education.sections.Contact.variants.UniversityContact1;
  const campuses = contactData.campuses;

  const [activeCampus, setActiveCampus] = useState<'main' | 'city' | 'regional'>('main');
  const current = campuses[activeCampus];

  // Thank You state
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* 1. Top Section: Campus Info & Addresses */}
      <section className="pt-6 sm:pt-10 lg:pt-12 pb-6 sm:pb-8 max-w-[1360px] mx-auto px-4 sm:px-6">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
            <span className="w-8 sm:w-9 h-[2px] sm:h-[2.5px] bg-[#800020]" />
            <span className="text-[10.5px] sm:text-[11.5px] font-black tracking-[0.2em] sm:tracking-[0.24em] text-[#1c1d20] uppercase font-sans">
              {contactData.badge}
            </span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[52px] lg:text-[74px] font-bold text-[#141517] leading-[1.04] sm:leading-[1.02] tracking-tight mb-2.5 sm:mb-3 select-none">
            {contactData.title} <br className="hidden sm:inline" />
            <span className="text-[#800020]">{contactData.titleHighlight}</span>
          </h1>

          <p className="text-[13px] sm:text-[15px] text-gray-600 font-sans max-w-2xl leading-relaxed">
            {contactData.description}
          </p>
        </div>

        {/* Campus Tabs + 3 Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-5 items-stretch">
          
          {/* Campus Selector Buttons (Phone view: horizontal segmented buttons, Desktop: vertical) */}
          <div className="md:col-span-3 grid grid-cols-3 md:flex md:flex-col border border-gray-200 bg-white shadow-sm overflow-hidden">
            <button
              type="button"
              onClick={() => setActiveCampus('main')}
              className={`py-3 sm:py-4 px-2 sm:px-6 text-center md:text-left text-[10px] sm:text-[11.5px] font-bold tracking-wider sm:tracking-[0.2em] transition-colors uppercase ${
                activeCampus === 'main'
                  ? 'bg-[#800020] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {campuses.main.label}
            </button>
            <button
              type="button"
              onClick={() => setActiveCampus('city')}
              className={`py-3 sm:py-4 px-2 sm:px-6 text-center md:text-left text-[10px] sm:text-[11.5px] font-bold tracking-wider sm:tracking-[0.2em] transition-colors uppercase border-l md:border-l-0 md:border-t border-gray-200 ${
                activeCampus === 'city'
                  ? 'bg-[#800020] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {campuses.city.label}
            </button>
            <button
              type="button"
              onClick={() => setActiveCampus('regional')}
              className={`py-3 sm:py-4 px-2 sm:px-6 text-center md:text-left text-[10px] sm:text-[11.5px] font-bold tracking-wider sm:tracking-[0.2em] transition-colors uppercase border-l md:border-l-0 md:border-t border-gray-200 ${
                activeCampus === 'regional'
                  ? 'bg-[#800020] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {campuses.regional.label}
            </button>
          </div>

          {/* Card 1: Phone Support */}
          <div className="md:col-span-3 bg-[#FCF8F8] border border-[#F3E5E7] p-4.5 sm:p-6 lg:p-7 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.18em] sm:tracking-[0.2em] text-[#6b7280] uppercase block mb-1.5 sm:mb-2.5">
                PHONE SUPPORT
              </span>
              <h3 className="font-serif text-[20px] sm:text-[24px] lg:text-[27px] font-bold text-[#141517] leading-tight tracking-tight">
                {current.phone}
              </h3>
              <div className="w-7 sm:w-8 h-[2px] bg-[#800020] mt-2 sm:mt-3" />
            </div>
            <p className="text-[11.5px] sm:text-[12.5px] text-[#6b7280] font-sans mt-3">
              {current.timing}
            </p>
          </div>

          {/* Card 2: Email Address */}
          <div className="md:col-span-3 bg-[#FCF8F8] border border-[#F3E5E7] p-4.5 sm:p-6 lg:p-7 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.18em] sm:tracking-[0.2em] text-[#6b7280] uppercase block mb-1.5 sm:mb-2.5">
                EMAIL ADDRESS
              </span>
              <h3 className="font-serif text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-[#141517] leading-snug break-words">
                {current.email}
              </h3>
              <div className="w-7 sm:w-8 h-[2px] bg-[#800020] mt-2 sm:mt-3 mb-2.5 sm:mb-4" />
            </div>
            <p className="text-[11.5px] sm:text-[12.5px] text-[#6b7280] font-sans">
              {current.emailNote}
            </p>
          </div>

          {/* Card 3: Office Address */}
          <div className="md:col-span-3 bg-[#FCF8F8] border border-[#F3E5E7] p-4.5 sm:p-6 lg:p-7 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.18em] sm:tracking-[0.2em] text-[#6b7280] uppercase block mb-1.5 sm:mb-2.5">
                OFFICE ADDRESS
              </span>
              <h3 className="font-serif text-[16px] sm:text-[18px] lg:text-[21px] font-bold text-[#141517] leading-snug whitespace-pre-line tracking-tight">
                {current.address}
              </h3>
              <div className="w-7 sm:w-8 h-[2px] bg-[#800020] mt-2 sm:mt-3 mb-2.5 sm:mb-4" />
            </div>
            <p className="text-[11.5px] sm:text-[12.5px] text-[#6b7280] font-sans">
              {current.country}
            </p>
          </div>

        </div>
      </section>

      {/* 2. Bottom Section: Form / Thank You + Live Map */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#FAFAFA] border-t border-gray-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Form / Thank You Container */}
          <div className="lg:col-span-6 w-full">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
              <span className="w-8 sm:w-9 h-[2px] sm:h-[2.5px] bg-[#800020]" />
              <span className="text-[10.5px] sm:text-[11.5px] font-black tracking-[0.2em] sm:tracking-[0.24em] text-[#1c1d20] uppercase font-sans">
                {contactData.form.badge}
              </span>
            </div>

            <h2 className="font-serif text-[32px] sm:text-[44px] lg:text-[56px] font-bold text-[#141517] leading-[1.05] tracking-tight mb-2 sm:mb-3">
              {contactData.form.title} <br className="hidden sm:inline" />
              <span className="text-[#800020]">{contactData.form.titleHighlight}</span>
            </h2>

            <p className="text-[13px] sm:text-[14.5px] text-[#4b5563] font-sans mb-5 sm:mb-6">
              {contactData.form.description}
            </p>

            {isSubmitted ? (
              /* Thank You Card */
              <div className="bg-white border-2 border-[#800020] p-6 sm:p-10 shadow-md">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#800020]/10 flex items-center justify-center mb-4 sm:mb-5">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#800020]" />
                </div>

                <span className="text-[10.5px] sm:text-[11.5px] font-black tracking-[0.2em] text-[#800020] uppercase font-sans block mb-1.5 sm:mb-2">
                  MESSAGE RECEIVED
                </span>

                <h3 className="font-serif text-[24px] sm:text-[34px] font-bold text-[#141517] tracking-tight leading-tight mb-2 sm:mb-3">
                  Thank You for Reaching Out!
                </h3>

                <p className="text-[13.5px] sm:text-[15px] text-gray-600 font-sans leading-relaxed mb-5 sm:mb-6">
                  Your inquiry has been delivered directly to our admissions & advisory team. We review all incoming communications carefully and will respond to your provided email within 24 business hours.
                </p>

                <div className="bg-[#FAF5F6] border-l-4 border-[#800020] p-3.5 sm:p-4 mb-6 sm:mb-8">
                  <p className="text-[12.5px] sm:text-[13px] text-gray-700 font-sans font-medium">
                    Immediate assistance needed? Call our direct campus helpdesk at{' '}
                    <span className="font-bold text-[#800020]">{current.phone}</span>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#800020] hover:bg-[#660018] text-white px-6 sm:px-7 py-3 text-[11px] sm:text-[11.5px] font-bold tracking-[0.18em] uppercase transition-colors inline-flex items-center gap-2 shadow-sm font-sans"
                >
                  <span>SEND ANOTHER MESSAGE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 text-[13px] sm:text-[13.5px] outline-none focus:border-[#800020] placeholder-gray-400 font-sans"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 text-[13px] sm:text-[13.5px] outline-none focus:border-[#800020] placeholder-gray-400 font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 text-[13px] sm:text-[13.5px] outline-none focus:border-[#800020] placeholder-gray-400 font-sans"
                  />
                  <select
                    required
                    defaultValue=""
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 text-[13px] sm:text-[13.5px] outline-none focus:border-[#800020] text-gray-600 font-sans"
                  >
                    <option value="" disabled>Select Subject *</option>
                    <option value="admissions">Admissions Enquiry</option>
                    <option value="academics">Academic Programs</option>
                    <option value="campus">Campus Visit</option>
                    <option value="general">General Support</option>
                  </select>
                </div>

                <textarea
                  rows={4}
                  required
                  placeholder="Write your message here..."
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 text-[13px] sm:text-[13.5px] outline-none focus:border-[#800020] placeholder-gray-400 font-sans"
                />

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#800020] hover:bg-[#660018] text-white px-7 sm:px-8 py-3 sm:py-3.5 text-[11.5px] sm:text-[12px] font-bold tracking-[0.18em] uppercase transition-colors inline-flex items-center justify-center gap-2 shadow-sm font-sans"
                >
                  SUBMIT NOW ↗
                </button>
              </form>
            )}
          </div>

          {/* Google Map Container */}
          <div className="lg:col-span-6 w-full h-[260px] sm:h-[380px] lg:h-[480px] bg-gray-100 border border-gray-200 overflow-hidden shadow-sm">
            <iframe
              title={contactData.mapLocation.label}
              src={contactData.mapLocation.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>
    </div>
  );
}