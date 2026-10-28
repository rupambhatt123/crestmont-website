import PageBanner from '@/components/PageBanner';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import CampusLife from '@/components/CampusLife';
import AdmissionsProcess from '@/components/AdmissionsProcess';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]}
      />

      <AboutSection />
      <StatsSection />
      <CampusLife />
      <AdmissionsProcess />
    </main>
  );
}