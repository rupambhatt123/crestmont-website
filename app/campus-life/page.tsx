import PageBanner from '@/components/PageBanner';
import CampusLifePageContent from '@/components/CampusLifePageContent';

export default function CampusLifePage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Campus"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Campus' },
        ]}
      />

      <CampusLifePageContent />
    </main>
  );
}