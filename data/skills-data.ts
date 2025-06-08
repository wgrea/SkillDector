// src/data/skills-data.ts

import { Skill, SkillCategory } from '@/types';

// Mock data for skills
const skills: Skill[] = [
  {
    id: '1',
    name: 'React',
    description: 'A JavaScript library for building user interfaces with a component-based architecture and efficient DOM updates.',
    category: 'programming',
    popularityScore: 95,
    growthRate: 12,
    icon: '⚛️',
    color: '#61DAFB',
    level: 'intermediate',
    relatedSkills: ['JavaScript', 'Redux', 'TypeScript', 'Next.js'],
    source: {
      name: 'React Documentation',
      url: 'https://reactjs.org',
      description: 'Official React documentation and resources',
      lastUpdated: '2024-01-15'
    },
    demandScore: 92, // Ensure this property is present
    salaryRange: {
      min: 80000,
      max: 150000,
      currency: 'USD'
    },
    jobPostings: 15000,
    linkedInEndorsements: 500000, // Ensure this property is present
    certifications: [
      {
        name: 'Meta React Developer Certificate',
        provider: 'Meta',
        url: 'https://www.coursera.org/professional-certificates/meta-front-end-developer'
      }
    ],
    metadata: {
      industryDemand: {
        score: 92,
        source: 'LinkedIn Job Analytics',
        url: 'https://www.linkedin.com/jobs/',
        lastUpdated: '2025-05-20'
      },
      userPopularity: {
        score: 95,
        endorsements: 500000,
        surveySource: 'Developer Community Polls',
        lastUpdated: '2025-06-01'
      },
      relevanceScore: 93,
      trendTag: 'trending'
    }
  },
  {
    id: '2',
    name: 'TypeScript',
    description: 'A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    category: 'programming',
    popularityScore: 92,
    growthRate: 18,
    icon: '🔷',
    color: '#3178C6',
    level: 'intermediate',
    relatedSkills: ['JavaScript', 'React', 'Node.js', 'Angular'],
    source: {
      name: 'TypeScript Documentation',
      url: 'https://www.typescriptlang.org',
      description: 'Official TypeScript documentation and guides',
      lastUpdated: '2024-01-10'
    },
    demandScore: 88,
    salaryRange: {
      min: 85000,
      max: 160000,
      currency: 'USD'
    },
    jobPostings: 12000,
    linkedInEndorsements: 400000,
    certifications: [
      {
        name: 'TypeScript Certification',
        provider: 'Microsoft',
        url: 'https://learn.microsoft.com/en-us/training/paths/build-javascript-applications-typescript/'
      }
    ],
    metadata: {
      industryDemand: {
        score: 88,
        source: 'LinkedIn Job Analytics',
        url: 'https://www.linkedin.com/jobs/',
        lastUpdated: '2025-05-20'
      },
      userPopularity: {
        score: 92,
        endorsements: 400000,
        surveySource: 'Developer Community Polls',
        lastUpdated: '2025-06-01'
      },
      relevanceScore: 90,
      trendTag: 'trending'
    }
  },
  {
    id: '3',
    name: 'UI/UX Design',
    description: 'The process of creating user interfaces and experiences that are intuitive, accessible, and enjoyable to use.',
    category: 'design',
    popularityScore: 88,
    growthRate: 15,
    icon: '🎨',
    color: '#FF7262',
    level: 'intermediate',
    relatedSkills: ['Figma', 'Adobe XD', 'Sketch', 'User Research'],
    source: {
      name: 'Nielsen Norman Group',
      url: 'https://www.nngroup.com',
      description: 'Leading UX research and consulting firm',
      lastUpdated: '2024-01-05'
    },
    demandScore: 85,
    salaryRange: {
      min: 70000,
      max: 140000,
      currency: 'USD'
    },
    jobPostings: 8000,
    linkedInEndorsements: 300000,
    certifications: [
      {
        name: 'Google UX Design Certificate',
        provider: 'Google',
        url: 'https://www.coursera.org/professional-certificates/google-ux-design'
      }
    ],
    metadata: {
      industryDemand: {
        score: 85,
        source: 'LinkedIn Job Analytics',
        url: 'https://www.linkedin.com/jobs/',
        lastUpdated: '2025-05-20'
      },
      userPopularity: {
        score: 88,
        endorsements: 300000,
        surveySource: 'Developer Community Polls',
        lastUpdated: '2025-06-01'
      },
      relevanceScore: 87,
      trendTag: 'stable'
    }
  },
  {
    id: '4',
    name: 'Python',
    description: 'A high-level, interpreted programming language known for its readability and versatility across many domains.',
    category: 'programming',
    popularityScore: 96,
    growthRate: 10,
    icon: '🐍',
    color: '#3776AB',
    level: 'beginner',
    relatedSkills: ['Django', 'Flask', 'Data Science', 'Machine Learning'],
    source: {
      name: 'Python Documentation',
      url: 'https://www.python.org',
      description: 'Official Python documentation and resources',
      lastUpdated: '2024-01-12'
    },
    demandScore: 94,
    salaryRange: {
      min: 75000,
      max: 145000,
      currency: 'USD'
    },
    jobPostings: 20000,
    linkedInEndorsements: 600000,
    certifications: [
      {
        name: 'Python Institute PCEP',
        provider: 'Python Institute',
        url: 'https://pythoninstitute.org/pcep'
      }
    ],
    metadata: {
      industryDemand: {
        score: 94,
        source: 'LinkedIn Job Analytics',
        url: 'https://www.linkedin.com/jobs/',
        lastUpdated: '2025-05-20'
      },
      userPopularity: {
        score: 96,
        endorsements: 600000,
        surveySource: 'Developer Community Polls',
        lastUpdated: '2025-06-01'
      },
      relevanceScore: 95,
      trendTag: 'trending'
    }
  },
  {
    id: '5',
    name: 'Data Analysis',
    description: 'The process of inspecting, cleaning, transforming, and modeling data to discover useful information and support decision-making.',
    category: 'data',
    popularityScore: 90,
    growthRate: 14,
    icon: '📊',
    color: '#4CAF50',
    level: 'intermediate',
    relatedSkills: ['SQL', 'Python', 'R', 'Tableau', 'Excel'],
    source: {
      name: 'Kaggle',
      url: 'https://www.kaggle.com',
      description: 'Data science and machine learning community',
      lastUpdated: '2024-01-08'
    },
    demandScore: 89,
    salaryRange: {
      min: 70000,
      max: 130000,
      currency: 'USD'
    },
    jobPostings: 10000,
    linkedInEndorsements: 350000,
    certifications: [
      {
        name: 'Google Data Analytics Certificate',
        provider: 'Google',
        url: 'https://www.coursera.org/professional-certificates/google-data-analytics'
      }
    ],
    metadata: {
      industryDemand: {
        score: 89,
        source: 'LinkedIn Job Analytics',
        url: 'https://www.linkedin.com/jobs/',
        lastUpdated: '2025-05-20'
      },
      userPopularity: {
        score: 90,
        endorsements: 350000,
        surveySource: 'Developer Community Polls',
        lastUpdated: '2025-06-01'
      },
      relevanceScore: 89,
      trendTag: 'stable'
    }
  },
  {
    id: '6',
    name: 'Digital Marketing',
    description: 'Using digital channels to promote products and services, reaching consumers through various online platforms.',
    category: 'marketing',
    popularityScore: 85,
    growthRate: 8,
    icon: '📱',
    color: '#FF5722',
    level: 'beginner',
    relatedSkills: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
    source: {
      name: 'HubSpot Academy',
      url: 'https://academy.hubspot.com',
      description: 'Digital marketing education platform',
      lastUpdated: '2024-01-03'
    },
    demandScore: 82,
    salaryRange: {
      min: 55000,
      max: 120000,
      currency: 'USD'
    },
    jobPostings: 7000,
    linkedInEndorsements: 250000,
    certifications: [
      {
        name: 'Digital Marketing Certification',
        provider: 'HubSpot Academy',
        url: 'https://academy.hubspot.com/courses/digital-marketing'
      }
    ],
    metadata: {
      industryDemand: {
        score: 89,
        source: 'LinkedIn Job Analytics',
        url: 'https://www.linkedin.com/jobs/',
        lastUpdated: '2025-05-20'
      },
      userPopularity: {
        score: 90,
        endorsements: 350000,
        surveySource: 'Developer Community Polls',
        lastUpdated: '2025-06-01'
      },
      relevanceScore: 89,
      trendTag: 'stable'
    }
  },
  {
    id: '7',
    name: 'Machine Learning',
    description: 'A subset of AI that enables systems to learn and improve from experience without being explicitly programmed.',
    category: 'ai',
    popularityScore: 93,
    growthRate: 20,
    icon: '🤖',
    color: '#9C27B0',
    level: 'advanced',
    relatedSkills: ['Python', 'TensorFlow', 'PyTorch', 'Data Science'],
    source: {
      name: 'Machine Learning Mastery',
      url: 'https://machinelearningmastery.com',
      description: 'Comprehensive machine learning resources',
      lastUpdated: '2024-01-14'
    },
    demandScore: 91,
    salaryRange: {
      min: 90000,
      max: 180000,
      currency: 'USD'
    },
    jobPostings: 9000,
    linkedInEndorsements: 200000,
    certifications: [
      {
        name: 'TensorFlow Developer Certificate',
        provider: 'Google',
        url: 'https://www.tensorflow.org/certificate'
      }
    ],
    metadata: {
      industryDemand: {
        score: 91,
        source: 'LinkedIn Job Analytics',
        url: 'https://www.linkedin.com/jobs/',
        lastUpdated: '2025-05-20'
      },
      userPopularity: {
        score: 93,
        endorsements: 200000,
        surveySource: 'Developer Community Polls',
        lastUpdated: '2025-06-01'
      },
      relevanceScore: 92,
      trendTag: 'trending'
    }
  },
  {
    id: '8',
    name: 'Project Management',
    description: 'The practice of leading teams and projects to achieve specific goals within defined constraints.',
    category: 'business',
    popularityScore: 82,
    growthRate: 6,
    icon: '📋',
    color: '#2196F3',
    level: 'intermediate',
    relatedSkills: ['Agile', 'Scrum', 'Kanban', 'Leadership'],
    source: {
      name: 'Project Management Institute',
      url: 'https://www.pmi.org',
      description: 'Global project management organization',
      lastUpdated: '2024-01-02'
    },
    demandScore: 80,
    salaryRange: {
      min: 65000,
      max: 140000,
      currency: 'USD'
    },
    jobPostings: 6000,
    linkedInEndorsements: 400000,
    certifications: [
      {
        name: 'Project Management Professional (PMP)',
        provider: 'PMI',
        url: 'https://www.pmi.org/certifications/project-management-pmp'
      }
    ],
    metadata: {
      industryDemand: {
        score: 80,
        source: 'LinkedIn Job Analytics',
        url: 'https://www.linkedin.com/jobs/',
        lastUpdated: '2025-05-20'
      },
      userPopularity: {
        score: 82,
        endorsements: 400000,
        surveySource: 'Developer Community Polls',
        lastUpdated: '2025-06-01'
      },
      relevanceScore: 81,
      trendTag: 'stable'
    }
  },
  {
    id: '9',
    name: 'Node.js',
    description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine for building scalable network applications.',
    category: 'programming',
    popularityScore: 89,
    growthRate: 11,
    icon: '🟢',
    color: '#339933',
    level: 'intermediate',
    relatedSkills: ['JavaScript', 'Express.js', 'MongoDB', 'API Development'],
    source: {
      name: 'Node.js Documentation',
      url: 'https://nodejs.org',
      description: 'Official Node.js documentation and resources',
      lastUpdated: '2024-01-11'
    },
    demandScore: 87,
    salaryRange: {
      min: 80000,
      max: 150000,
      currency: 'USD'
    },
    jobPostings: 11000,
    linkedInEndorsements: 450000,
    certifications: [
      {
        name: 'Node.js Application Developer',
        provider: 'OpenJS Foundation',
        url: 'https://training.linuxfoundation.org/certification/jsnad/'
      }
    ],
    metadata: {
      industryDemand: {
        score: 87,
        source: 'LinkedIn Job Analytics',
        url: 'https://www.linkedin.com/jobs/',
        lastUpdated: '2025-05-20'
      },
      userPopularity: {
        score: 89,
        endorsements: 450000,
        surveySource: 'Developer Community Polls',
        lastUpdated: '2025-06-01'
      },
      relevanceScore: 88,
      trendTag: 'stable'
    }
  },
  {
    id: '10',
    name: 'Figma',
    description: 'A collaborative interface design tool that makes design accessible to everyone in the product development process.',
    category: 'design',
    popularityScore: 91,
    growthRate: 16,
    icon: '🖌️',
    color: '#F24E1E',
    level: 'beginner',
    relatedSkills: ['UI Design', 'Prototyping', 'Design Systems', 'Collaboration'],
    source: {
      name: 'Figma Help Center',
      url: 'https://help.figma.com',
      description: 'Official Figma documentation and tutorials',
      lastUpdated: '2024-01-09'
    },
    demandScore: 86,
    salaryRange: {
      min: 65000,
      max: 130000,
      currency: 'USD'
    },
    jobPostings: 5000,
    linkedInEndorsements: 200000,
    certifications: [
      {
        name: 'Figma Professional Design Certificate',
        provider: 'Figma',
        url: 'https://www.figma.com/resources/learn-design/'
      }
    ],
    metadata: {
      industryDemand: {
        score: 86,
        source: 'LinkedIn Job Analytics',
        url: 'https://www.linkedin.com/jobs/',
        lastUpdated: '2025-05-20'
      },
      userPopularity: {
        score: 91,
        endorsements: 200000,
        surveySource: 'Designer Community Polls',
        lastUpdated: '2025-06-01'
      },
      relevanceScore: 88,
      trendTag: 'trending'
    }
  },
  {
    id: '11',
    name: 'SQL',
    description: 'A domain-specific language for managing and querying relational databases.',
    category: 'data',
    popularityScore: 87,
    growthRate: 7,
    icon: '🗃️',
    color: '#E65100',
    level: 'intermediate',
    relatedSkills: ['Database Design', 'PostgreSQL', 'MySQL', 'Data Analysis'],
    source: {
      name: 'W3Schools SQL',
      url: 'https://www.w3schools.com/sql/',
      description: 'Comprehensive SQL tutorials and references',
      lastUpdated: '2024-01-07'
    },
    demandScore: 85,
    salaryRange: {
      min: 70000,
      max: 140000,
      currency: 'USD'
    },
    jobPostings: 13000,
    linkedInEndorsements: 500000,
    certifications: [
      {
        name: 'Oracle Database SQL Certified Associate',
        provider: 'Oracle',
        url: 'https://education.oracle.com/oracle-database-sql-certified-associate'
      }
    ],
    metadata: {
      industryDemand: {
        score: 85,
        source: 'LinkedIn Job Analytics',
        url: 'https://www.linkedin.com/jobs/',
        lastUpdated: '2025-05-20'
      },
      userPopularity: {
        score: 87,
        endorsements: 500000,
        surveySource: 'Developer Community Polls',
        lastUpdated: '2025-06-01'
      },
      relevanceScore: 86,
      trendTag: 'stable'
    }
  },
  {
    id: '12',
    name: 'Cloud Computing',
    description: 'The delivery of computing services over the internet, providing faster innovation and flexible resources.',
    category: 'programming',
    popularityScore: 94,
    growthRate: 15,
    icon: '☁️',
    color: '#0288D1',
    level: 'intermediate',
    relatedSkills: ['AWS', 'Azure', 'Google Cloud', 'DevOps'],
    source: {
      name: 'AWS Training',
      url: 'https://aws.amazon.com/training/',
      description: 'Cloud computing training and certification',
      lastUpdated: '2024-01-13'
    },
    demandScore: 93,
    salaryRange: {
      min: 85000,
      max: 170000,
      currency: 'USD'
    },
    jobPostings: 14000,
    linkedInEndorsements: 350000,
    certifications: [
      {
        name: 'AWS Certified Solutions Architect',
        provider: 'Amazon Web Services',
        url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/'
      }
    ],
    metadata: {
      industryDemand: {
        score: 93,
        source: 'LinkedIn Job Analytics',
        url: 'https://www.linkedin.com/jobs/',
        lastUpdated: '2025-05-20'
      },
      userPopularity: {
        score: 94,
        endorsements: 350000,
        surveySource: 'Developer Community Polls',
        lastUpdated: '2025-06-01'
      },
      relevanceScore: 93,
      trendTag: 'trending'
    }
  },
];

export function sortSkills(skills: Skill[], sortType: string): Skill[] {
  return skills.sort((a, b) => {
    if (sortType === "industry") {
      return (b.metadata?.industryDemand?.score ?? 0) - (a.metadata?.industryDemand?.score ?? 0);
    } else if (sortType === "community") {
      return (b.metadata?.userPopularity?.score ?? 0) - (a.metadata?.userPopularity?.score ?? 0);
    }
    return 0; // Default case (no sorting)
  });
}

export function getAllSkills(): Skill[] {
  return skills;
}

export function getSkillById(id: string): Skill | undefined {
  return skills.find(skill => skill.id === id);
}

export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter(skill => skill.category === category);
}

export function getAllCategories(): SkillCategory[] {
  const categories = new Set<SkillCategory>();
  skills.forEach(skill => categories.add(skill.category));
  return Array.from(categories);
}