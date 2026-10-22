import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import FacultySection from '@/components/FacultySection';
import Footer from '@/components/Footer';

export default function FacultyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Reusable Page Banner */}
      <PageBanner
        title="Faculty"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Faculty' },
        ]}
      />

      {/* 3. 3x3 Faculty Grid Section */}
      <FacultySection />

      {/* 4. Global Footer */}
      <Footer />
    </main>
  );
}