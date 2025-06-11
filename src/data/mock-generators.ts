// src/data/mock-generators.ts

import { Skill, Project } from '@/types';

export const generateSkill = (overrides: Partial<Skill> = {}): Skill => ({
  id: `skill-${crypto.randomUUID()}`,
  name: 'New Skill',
  description: '',
  category: 'frontend',
  popularityScore: 50,
  growthRate: 0,
  icon: '✨',
  color: '#000000',
  level: 'beginner',
  relatedSkills: [],
  source: {
    name: '',
    url: '',
    description: '',
    lastUpdated: new Date().toISOString()
  },
  demandScore: 50,
  salaryRange: { min: 50000, max: 100000, currency: 'USD' },
  jobPostings: 0,
  linkedInEndorsements: 0,
  certifications: [],
  ...overrides
});

export const generateProject = (overrides: Partial<Project> = {}): Project => ({
  id: `project-${crypto.randomUUID()}`,
  title: 'New Project',
  description: '',
  difficulty: 'medium',
  estimatedHours: 10,
  requiredSkills: [],
  imageUrl: '',
  resourceLinks: [],
  learningPath: { steps: [] },
  academicConnections: { subjects: [], concepts: [] },
  ...overrides
});