import PageBanner from '@/components/PageBanner';
import CoursesSection from '@/components/CoursesSection';
import CampusLife from '@/components/CampusLife';
import AdmissionsProcess from '@/components/AdmissionsProcess';

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Courses"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Courses' }
        ]}
      />

      <CoursesSection />
      <CampusLife />
      <AdmissionsProcess />
    </main>
  );
}