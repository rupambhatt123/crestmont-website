import PageBanner from '@/components/PageBanner';
import NewsPageContent from '@/components/NewsPageContent';

export default function NewsEventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="News & Events"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Events' },
        ]}
      />

      <NewsPageContent />
    </main>
  );
}