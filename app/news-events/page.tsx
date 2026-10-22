import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import NewsPageContent from '@/components/NewsPageContent';
import Footer from '@/components/Footer';

export default function NewsEventsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header */}
      <Navbar />

      {/* 2. Reusable Page Banner (Screenshot matching "News & Events") */}
      <PageBanner
        title="News & Events"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Events' },
        ]}
      />

      {/* 3. News & Events 6 Cards Grid */}
      <NewsPageContent />

      {/* 4. Footer */}
      <Footer />
    </main>
  );
}