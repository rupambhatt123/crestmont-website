import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import ContactPageContent from '@/components/ContactPageContent';
import Footer from '@/components/Footer';

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Reusable Page Banner (Screenshot matching "Contact Us") */}
      <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' },
        ]}
      />

      {/* 3. Contact Form & Campus Information Body */}
      <ContactPageContent />

      {/* 4. Global Footer */}
      <Footer />
    </main>
  );
}