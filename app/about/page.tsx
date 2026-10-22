import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import CampusLife from '@/components/CampusLife';
import AdmissionsProcess from '@/components/AdmissionsProcess';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Reusable Page Banner */}
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
      />

      {/* Sections from screenshots */}
      <AboutSection />
      <StatsSection />
      <CampusLife />
      <AdmissionsProcess />
      
      <Footer />
    </main>
  );
}