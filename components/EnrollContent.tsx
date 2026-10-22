'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, GraduationCap, Users, Building2, FileText, CheckCircle2 } from 'lucide-react';
import universityData from '@/data/universityData.json';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Users,
  Building2,
  FileText,
};

export default function EnrollContent() {
  const data = (universityData as any).categories.Education.sections.Enroll.variants.UniversityEnroll1;

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    yearOfPassing: '',
    city: '',
    state: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      program: '',
      yearOfPassing: '',
      city: '',
      state: '',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-14 bg-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="lg:col-span-6 flex flex-col gap-6 order-2 lg:order-1">
          <div>
            <div className="flex items-center gap-3 mb-2.5">
              <span className="w-8 sm:w-9 h-[2.5px] bg-[#800020]" />
              <span className="text-[11px] sm:text-[11.5px] font-black tracking-[0.24em] text-[#1c1d20] uppercase font-sans">
                {data.badge}
              </span>
            </div>

            {/* Editorial Heading */}
            <h1 className="font-serif text-[38px] sm:text-[54px] lg:text-[70px] font-bold text-[#141517] leading-[1.05] tracking-tight mb-3 select-none">
              <span className="block text-[#141517]">{data.title}</span>
              <span className="block text-[#800020]">{data.titleHighlight}</span>
            </h1>

            <p className="text-[14px] sm:text-[15.5px] text-gray-700 leading-[1.65] font-sans font-medium">
              {data.description}
            </p>
          </div>

          {/* Student Photo */}
          <div className="relative w-full h-[240px] sm:h-[320px] lg:h-[350px] rounded-none overflow-hidden bg-gray-100 shadow-sm">
            <Image
              src={data.image}
              alt={data.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Why Enroll With Us Section */}
          <div className="pt-2">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="w-7 h-[2px] bg-[#800020]" />
              <span className="text-[10.5px] font-bold tracking-[0.2em] text-gray-500 uppercase font-sans">
                KEY HIGHLIGHTS
              </span>
            </div>
            <h3 className="font-serif text-[24px] sm:text-[30px] font-bold text-[#141517] mb-4 tracking-tight">
              Why Enroll With Us
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
              {data.whyEnrollFeatures.map((feat: any, idx: number) => {
                const IconComponent = iconMap[feat.icon] || GraduationCap;
                return (
                  <div key={idx} className="flex flex-col items-center bg-[#FAF5F6] p-3 sm:p-4 border border-[#F3E5E7]">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-[#800020] mb-2 shadow-xs">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                    </div>
                    <h4 className="font-serif text-[14px] sm:text-[15px] font-bold text-[#141517] mb-1 leading-snug">
                      {feat.title}
                    </h4>
                    <p className="text-[11px] sm:text-[11.5px] text-gray-600 leading-snug font-medium">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN (STICKY & RESPONSIVE FORM CARD) ================= */}
        <div className="lg:col-span-6 lg:sticky lg:top-24 border border-gray-200/90 lg:border-2 lg:border-gray-100 bg-white p-5 sm:p-8 lg:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.06)] order-1 lg:order-2">
          {isSubmitted ? (
            /* 100% English Thank You Card */
            <div className="py-2 sm:py-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#800020]/10 flex items-center justify-center mb-4 sm:mb-5">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#800020]" />
              </div>

              <span className="text-[11px] sm:text-[11.5px] font-black tracking-[0.24em] text-[#800020] uppercase font-sans block mb-1.5">
                APPLICATION RECEIVED
              </span>

              <h3 className="font-serif text-[28px] sm:text-[36px] font-bold text-[#141517] tracking-tight leading-tight mb-2.5">
                Thank You, {formData.fullName}!
              </h3>

              <p className="text-[14px] sm:text-[15px] text-gray-700 font-sans leading-relaxed mb-5 font-medium">
                Your admission application for <strong className="text-[#800020] font-bold">{formData.program}</strong> has been successfully submitted.
              </p>

              <div className="bg-[#FAF5F6] border-l-4 border-[#800020] p-3.5 mb-6">
                <p className="text-[12.5px] sm:text-[13px] text-gray-700 font-sans leading-normal">
                  Our admissions committee will review your credentials and contact you at <strong className="text-[#141517]">{formData.email}</strong> or via phone within 2 business days.
                </p>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto bg-[#800020] hover:bg-[#660018] text-white px-6 py-3 text-[11.5px] font-bold tracking-[0.2em] uppercase transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <span>SUBMIT ANOTHER APPLICATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* Application Form */
            <>
              <div className="mb-5 sm:mb-6">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="w-7 h-[2px] bg-[#800020]" />
                  <span className="text-[10.5px] sm:text-[11px] font-black tracking-[0.24em] text-[#1c1d20] uppercase font-sans">
                    {data.formBadge}
                  </span>
                </div>
                <h2 className="font-serif text-[32px] sm:text-[42px] font-bold text-[#141517] leading-tight tracking-tight">
                  {data.formTitle} <span className="text-[#800020]">{data.formTitleHighlight}</span>
                </h2>
                <p className="mt-1 text-[12.5px] sm:text-[13.5px] text-gray-600 font-sans font-medium">
                  {data.formDescription}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-[13px] font-bold text-gray-800 mb-1 font-sans">
                    Full Name <span className="text-[#800020]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 sm:py-3 text-[13.5px] sm:text-[14px] font-medium border border-gray-200 outline-none focus:border-[#800020] text-gray-800 placeholder-gray-400 bg-[#FAFAFA] focus:bg-white transition-colors"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  <div>
                    <label className="block text-[13px] font-bold text-gray-800 mb-1 font-sans">
                      Email Address <span className="text-[#800020]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-3.5 py-2.5 sm:py-3 text-[13.5px] sm:text-[14px] font-medium border border-gray-200 outline-none focus:border-[#800020] text-gray-800 placeholder-gray-400 bg-[#FAFAFA] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-gray-800 mb-1 font-sans">
                      Phone Number <span className="text-[#800020]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-3.5 py-2.5 sm:py-3 text-[13.5px] sm:text-[14px] font-medium border border-gray-200 outline-none focus:border-[#800020] text-gray-800 placeholder-gray-400 bg-[#FAFAFA] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Program & Year */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  <div>
                    <label className="block text-[13px] font-bold text-gray-800 mb-1 font-sans">
                      Program Applying For <span className="text-[#800020]">*</span>
                    </label>
                    <select
                      name="program"
                      required
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 sm:py-3 text-[13.5px] sm:text-[14px] font-medium border border-gray-200 outline-none focus:border-[#800020] text-gray-800 bg-[#FAFAFA] focus:bg-white transition-colors"
                    >
                      <option value="">Select program</option>
                      {data.programsList.map((prog: string, idx: number) => (
                        <option key={idx} value={prog}>
                          {prog}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-gray-800 mb-1 font-sans">
                      Year of Passing <span className="text-[#800020]">*</span>
                    </label>
                    <select
                      name="yearOfPassing"
                      required
                      value={formData.yearOfPassing}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 sm:py-3 text-[13.5px] sm:text-[14px] font-medium border border-gray-200 outline-none focus:border-[#800020] text-gray-800 bg-[#FAFAFA] focus:bg-white transition-colors"
                    >
                      <option value="">Select year</option>
                      <option value="2026">2026</option>
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                    </select>
                  </div>
                </div>

                {/* City & State */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  <div>
                    <label className="block text-[13px] font-bold text-gray-800 mb-1 font-sans">
                      City <span className="text-[#800020]">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      className="w-full px-3.5 py-2.5 sm:py-3 text-[13.5px] sm:text-[14px] font-medium border border-gray-200 outline-none focus:border-[#800020] text-gray-800 placeholder-gray-400 bg-[#FAFAFA] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-gray-800 mb-1 font-sans">
                      State <span className="text-[#800020]">*</span>
                    </label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter your state"
                      className="w-full px-3.5 py-2.5 sm:py-3 text-[13.5px] sm:text-[14px] font-medium border border-gray-200 outline-none focus:border-[#800020] text-gray-800 placeholder-gray-400 bg-[#FAFAFA] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-[13px] font-bold text-gray-800 mb-1 font-sans">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-3.5 py-2.5 sm:py-3 text-[13.5px] sm:text-[14px] font-medium border border-gray-200 outline-none focus:border-[#800020] text-gray-800 placeholder-gray-400 bg-[#FAFAFA] focus:bg-white transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#800020] hover:bg-[#660018] text-white py-3.5 sm:py-4 text-[12px] sm:text-[12.5px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all shadow-md group mt-4"
                >
                  <span>SUBMIT APPLICATION</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </>
          )}
        </div>

      </div>
    </section>
  );
}