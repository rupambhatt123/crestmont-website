import PageBanner from '@/components/PageBanner';
import ContactPageContent from '@/components/ContactPageContent';

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' },
        ]}
      />

      <ContactPageContent />
    </main>
  );
}