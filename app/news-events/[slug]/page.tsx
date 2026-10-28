import { notFound } from 'next/navigation';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';
import universityData from '@/data/universityData.json';
import { Calendar, Clock, MapPin, Users, Award, Handshake } from 'lucide-react';

interface DynamicEventProps {
  params: Promise<{ slug: string }>;
}

export default async function DynamicEventPage({ params }: DynamicEventProps) {
  const { slug } = await params;

  const events = (universityData as any).categories.Education.sections.NewsEvents.variants.UniversityNewsEvents1.posts;
  const event = events.find((e: any) => e.slug === slug);

  if (!event) {
    notFound();
  }

  const halfLength = Math.ceil((event.highlights || []).length / 2);
  const highlightsCol1 = (event.highlights || []).slice(0, halfLength);
  const highlightsCol2 = (event.highlights || []).slice(halfLength);

  return (
    <main className="min-h-screen bg-white">
      {/* Reusable Page Banner */}
      <PageBanner
        title="News & Events Detail"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Events', href: '/news-events' },
          { label: event.title },
        ]}
      />

      {/* Main Content Body */}
      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Top Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#800020]" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#6b7280] uppercase">
                EVENT DETAILS
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[13px] text-[#6b7280] font-sans mb-4">
              <div className="flex items-center gap-1.5 text-[#800020]">
                <Calendar className="w-4 h-4 stroke-[1.8]" />
                <span className="text-gray-600 font-medium">{event.date}</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1.5 text-[#800020]">
                <Clock className="w-4 h-4 stroke-[1.8]" />
                <span className="text-gray-600 font-medium">{event.time}</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1.5 text-[#800020]">
                <MapPin className="w-4 h-4 stroke-[1.8]" />
                <span className="text-gray-600 font-medium">{event.location}</span>
              </div>
            </div>

            <h1 className="font-serif text-[42px] sm:text-[56px] md:text-[64px] font-normal tracking-[-0.01em] text-gray-900 leading-[1.08] mb-4">
              {event.title} {event.titleHighlight && <span className="text-[#800020]">{event.titleHighlight}</span>}
            </h1>

            <p className="text-[15px] sm:text-[16px] text-[#4b5563] font-sans leading-relaxed max-w-3xl">
              {event.subtitle || event.desc}
            </p>
          </div>

          {/* Banner Photo */}
          <div className="relative w-full h-[360px] sm:h-[460px] md:h-[500px] rounded-none overflow-hidden bg-gray-100 shadow-sm mb-16">
            <Image
              src={event.bannerImage || event.image}
              alt={event.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* About + Stats Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#800020]" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-[#6b7280] uppercase">
                  EVENT OVERVIEW
                </span>
              </div>

              <h2 className="font-serif text-[36px] sm:text-[44px] font-normal text-gray-900 leading-tight">
                About the <span className="text-[#800020]">Event</span>
              </h2>

              <p className="text-[13.5px] text-[#4b5563] leading-[1.8] font-sans">
                {event.aboutText1}
              </p>

              <p className="text-[13.5px] text-[#4b5563] leading-[1.8] font-sans">
                {event.aboutText2}
              </p>
            </div>

            {event.stats && (
              <div className="lg:col-span-4 bg-[#FDF8F8] border border-[#F5E6E8] p-8 rounded-none space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#800020] border border-[#F0D5D8] shrink-0">
                    <Users className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="block font-serif text-[28px] font-bold text-[#800020] leading-none mb-1">
                      {event.stats.stat1Number}
                    </span>
                    <span className="text-[12px] text-[#6b7280] font-sans">
                      {event.stats.stat1Label}
                    </span>
                  </div>
                </div>

                <div className="w-full h-px bg-[#F0D5D8]" />

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#800020] border border-[#F0D5D8] shrink-0">
                    <Award className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="block font-serif text-[28px] font-bold text-[#800020] leading-none mb-1">
                      {event.stats.stat2Number}
                    </span>
                    <span className="text-[12px] text-[#6b7280] font-sans">
                      {event.stats.stat2Label}
                    </span>
                  </div>
                </div>

                <div className="w-full h-px bg-[#F0D5D8]" />

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#800020] border border-[#F0D5D8] shrink-0">
                    <Handshake className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="block font-serif text-[18px] font-bold text-[#800020] leading-tight">
                      {event.stats.stat3Title}
                    </span>
                    <span className="text-[12px] text-[#6b7280] font-sans">
                      {event.stats.stat3Subtitle}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Highlights & Gallery */}
          {event.highlights && (
            <div className="border-t border-gray-100 pt-16 mb-16">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[#800020]" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-[#6b7280] uppercase">
                  KEY HIGHLIGHTS
                </span>
              </div>

              <h2 className="font-serif text-[36px] sm:text-[44px] font-normal text-gray-900 leading-tight mb-8">
                Event <span className="text-[#800020]">Highlights</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-12">
                <ul className="space-y-4">
                  {highlightsCol1.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-[13.5px] text-[#4b5563] font-sans">
                      <span className="w-4 h-[1.5px] bg-[#800020] mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <ul className="space-y-4">
                  {highlightsCol2.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-[13.5px] text-[#4b5563] font-sans">
                      <span className="w-4 h-[1.5px] bg-[#800020] mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {event.galleryImages && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {event.galleryImages.slice(0, 3).map((img: string, idx: number) => (
                      <div key={idx} className="relative h-[240px] bg-gray-100 shadow-sm">
                        <Image src={img} alt={`Highlight ${idx + 1}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>

                  {event.galleryImages[3] && (
                    <div className="relative w-full h-[320px] sm:h-[400px] bg-gray-100 shadow-sm">
                      <Image src={event.galleryImages[3]} alt="Highlight Large" fill className="object-cover" />
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* Conclusion */}
          {event.conclusionTitle && (
            <div className="bg-[#FAF8F7] p-8 sm:p-12 border-l-2 border-[#800020]">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[#800020]" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-[#6b7280] uppercase">
                  CONCLUSION
                </span>
              </div>

              <h3 className="font-serif text-[32px] sm:text-[40px] font-normal text-gray-900 leading-tight mb-4">
                {event.conclusionTitle} <span className="text-[#800020]">{event.conclusionHighlight}</span>
              </h3>

              <p className="text-[13.5px] text-[#4b5563] leading-[1.85] font-sans">
                {event.conclusionText}
              </p>
            </div>
          )}

        </div>
      </article>
    </main>
  );
}