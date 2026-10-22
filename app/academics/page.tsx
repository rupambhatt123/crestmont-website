import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import AcademicsPageContent from '@/components/AcademicsPageContent';
import Footer from '@/components/Footer';

export default function AcademicsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header */}
      <Navbar />

      {/* 2. Reusable Page Banner (Screenshot matching "Academics") */}
      <PageBanner
        title="Academics"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics' },
        ]}
      />

      {/* 3. Detailed Academics Content */}
      <AcademicsPageContent />

      {/* 4. Footer */}
      <Footer />
    </main>
  );
}