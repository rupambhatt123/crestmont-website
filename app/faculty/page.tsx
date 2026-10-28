import PageBanner from '@/components/PageBanner';
import FacultySection from '@/components/FacultySection';

export default function FacultyPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Faculty"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Faculty' },
        ]}
      />

      <FacultySection />
    </main>
  );
}