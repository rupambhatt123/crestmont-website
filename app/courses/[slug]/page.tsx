import PageBanner from '@/components/PageBanner';
import CourseInfoStrip from '@/components/CourseInfoStrip';
import CourseDetailContent from '@/components/CourseDetailContent';
import universityData from '@/data/universityData.json';
import { notFound } from 'next/navigation';

export default async function DynamicCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const courses = (universityData as any).categories.Education.sections.Courses.variants.UniversityCourses1.programs;
  
  const course = courses.find((c: any) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const fullCourseName = `${course.category || ''} ${course.title || ''}`.trim();

  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title={course.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Courses', href: '/courses' },
          { label: fullCourseName },
        ]}
      />

      <CourseInfoStrip
        fallIntake={course.fallIntake as any}
        springIntake={course.springIntake as any}
        tuitionFee={course.tuitionFee}
      />

      {/* Dynamic Content */}
      <CourseDetailContent course={course as any} />
    </main>
  );
}