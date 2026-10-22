import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import CampusLifePageContent from '@/components/CampusLifePageContent';
import Footer from '@/components/Footer';

export default function CampusLifePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header */}
      <Navbar />

      {/* 2. Reusable Page Banner (Screenshot ke anusaar "Campus") */}
      <PageBanner
        title="Campus"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Campus' },
        ]}
      />

      {/* 3. Detailed Campus Life Content Sections */}
      <CampusLifePageContent />

      {/* 4. Footer */}
      <Footer />
    </main>
  );
}