import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import CoursesSection from '@/components/CoursesSection';
import CampusLife from '@/components/CampusLife';
import AdmissionsProcess from '@/components/AdmissionsProcess';
import Footer from '@/components/Footer';

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
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
      <Footer />
    </main>
  );
}