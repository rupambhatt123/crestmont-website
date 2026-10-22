import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import EnrollContent from '@/components/EnrollContent';
import Footer from '@/components/Footer';

export default function EnrollPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header */}
      <Navbar />

      {/* 2. Reusable Page Banner (Screenshot ke anusaar "Enroll Now") */}
      <PageBanner
        title="Enroll Now"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Enroll Now' },
        ]}
      />

      {/* 3. Form & Why Enroll Section */}
      <EnrollContent />

      {/* 4. Footer */}
      <Footer />
    </main>
  );
}