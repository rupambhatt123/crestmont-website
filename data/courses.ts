export interface Course {
  slug: string;
  name: string;
  category: string;
  fallIntake: string;
  springIntake: string;
  tuitionFee: string;
  about: string;
  keyAreas: string;
  curriculum: string[];
  requirements: string[];
}

export const coursesData: Record<string, Course> = {
  'btech-computer-science': {
    slug: 'btech-computer-science',
    name: 'Computer Science',
    category: 'B. Tech in',
    fallIntake: 'Fall 2025 (Aug – Dec)',
    springIntake: 'Spring 2026 (Jan – May)',
    tuitionFee: '₹1,20,000 / Sem',
    about:
      'The B.Tech in Computer Science program is designed to equip students with strong technical foundations, problem-solving skills, and industry-relevant knowledge. The curriculum covers core computing concepts, modern technologies, and real-world applications to prepare students for impactful careers in the tech industry.',
    keyAreas:
      'Students explore a wide range of topics including programming, data structures, algorithms, artificial intelligence, cybersecurity, software engineering, and emerging technologies. The program combines theoretical knowledge with hands-on learning, industry projects, and collaborative research opportunities.',
    curriculum: [
      'Programming Fundamentals',
      'Data Structures & Algorithms',
      'Operating Systems',
      'Database Management Systems',
      'Artificial Intelligence & Machine Learning',
      'Web Technologies',
      'Cybersecurity',
      'Software Engineering',
    ],
    requirements: [
      'High School Diploma or Equivalent',
      'Minimum GPA: 3.0',
      'Mathematics (Advanced Level)',
      'Standardized Test Scores (SAT/ACT - Optional)',
      'Statement of Purpose',
      'Recommendation Letter',
    ],
  },
  'bba-business-administration': {
    slug: 'bba-business-administration',
    name: 'Business Administration',
    category: 'BBA in',
    fallIntake: 'Fall 2025 (Aug – Dec)',
    springIntake: 'Spring 2026 (Jan – May)',
    tuitionFee: '₹95,000 / Sem',
    about:
      'The BBA program prepares future business leaders with a solid foundation in finance, marketing, management, and strategic thinking.',
    keyAreas:
      'Financial Management, Organizational Behavior, Digital Marketing, Business Analytics, and Corporate Strategy.',
    curriculum: [
      'Principles of Management',
      'Marketing Strategies',
      'Financial Accounting',
      'Business Law & Ethics',
      'Corporate Finance',
      'Supply Chain Management',
    ],
    requirements: [
      'High School Diploma (Commerce/Science/Arts)',
      'Minimum GPA: 2.8',
      'English Proficiency',
      'Statement of Purpose',
    ],
  },
};