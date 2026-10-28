import PageBanner from '@/components/PageBanner';
import EnrollContent from '@/components/EnrollContent';

export default function EnrollPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Enroll Now"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Enroll Now' },
        ]}
      />

      <EnrollContent />
    </main>
  );
}