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
  },
];

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