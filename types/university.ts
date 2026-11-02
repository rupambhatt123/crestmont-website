
export interface NavLink {
  title: string;
  path: string;
}

export interface HeaderCTA {
  text: string;
  path: string;
}

export interface UniversityHeader {
  brandName: string;
  logo: string;
  navLinks: NavLink[];
  ctaButton: HeaderCTA;
}

// ==========================================
// 2. News & Events Section Types
// ==========================================
export interface FeaturedPost {
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
}

export interface NewsPostItem {
  id: string | number;
  slug: string;
  day: string | number;
  month: string;
  title: string;
  desc: string;
}

export interface UniversityNewsEvents {
  badge: string;
  title: string;
  titleHighlight: string;
  titleEnd: string;
  description?: string;
  featuredPost: FeaturedPost;
  posts: NewsPostItem[];
}

export interface AdmissionStep {
  stepNumber: string;
  title: string;
  description: string;
  type?: 'card' | 'image';
  icon?: string;
  image?: string;
}

export interface UniversityAdmissionsProcess {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  steps: AdmissionStep[];
}


export interface TeachingMethod {
  label: string;
  text: string;
}

export interface CourseDetail {
  slug?: string;
  category: string;
  title: string;
  titleHighlight: string;
  about: string;
  keyAreas: string;
  teachingMethodsImage: string;
  teachingMethods: TeachingMethod[];
  curriculum: string[];
  requirements: string[];
}


export interface TestimonialBannerCTA {
  text: string;
  path: string;
}

export interface TestimonialsLeftBanner {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  bgImage?: string;
  ctaButton: TestimonialBannerCTA;
}

export interface TestimonialItem {
  name: string;
  program: string;
  quote: string;
  img: string;
}

export interface UniversityTestimonials {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle?: string;
  description?: string;
  leftBanner: TestimonialsLeftBanner;
  testimonials: TestimonialItem[];
}


export interface CampusDetails {
  label: string;
  phone: string;
  timing?: string;
  email: string;
  emailNote: string;
  address: string;
  country: string;
}

export interface ContactCampuses {
  main: CampusDetails;
  city: CampusDetails;
  regional: CampusDetails;
}

export interface ContactFormConfig {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export interface ContactMapLocation {
  label: string;
  embedUrl: string;
}

export interface UniversityContact {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  campuses: ContactCampuses;
  form: ContactFormConfig;
  mapLocation: ContactMapLocation;
}

// ==========================================
// 7. Full University Data Root Schema
// ==========================================
export interface UniversityDataSchema {
  categories: {
    Education: {
      sections: {
        Header: {
          variants: {
            UniversityHeader1: UniversityHeader;
          };
        };
        NewsEvents: {
          variants: {
            UniversityNewsEvents1: UniversityNewsEvents;
          };
        };
        AdmissionsProcess: {
          variants: {
            UniversityAdmissionsProcess1: UniversityAdmissionsProcess;
          };
        };
        TestimonialsSection: {
          variants: {
            UniversityTestimonials1: UniversityTestimonials;
          };
        };
        Contact: {
          variants: {
            UniversityContact1: UniversityContact;
          };
        };
        Courses?: {
          variants: {
            UniversityCourses1: {
              courses: CourseDetail[];
            };
          };
        };
      };
    };
  };
}