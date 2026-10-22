import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import CampusLife from '@/components/CampusLife';
import CoursesSection from '@/components/CoursesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsEventsSection from '@/components/NewsEventsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <StatsSection />
      <CampusLife />
      <CoursesSection />
      <TestimonialsSection />
      <NewsEventsSection />
      <Footer />
    </main>
  );
}