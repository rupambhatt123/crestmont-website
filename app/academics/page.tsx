import PageBanner from '@/components/PageBanner';
import AcademicsPageContent from '@/components/AcademicsPageContent';

export default function AcademicsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Reusable Page Banner (Screenshot matching "Academics") */}
      <PageBanner
        title="Academics"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics' },
        ]}
      />

      {/* 2. Detailed Academics Content */}
      <AcademicsPageContent />
    </main>
  );
}