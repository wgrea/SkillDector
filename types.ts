// src/types.ts

export type SkillCategory = 
  | 'programming' 
  | 'design' 
  | 'data' 
  | 'marketing' 
  | 'business'
  | 'ai';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export type ProjectDifficulty = 'easy' | 'medium' | 'hard' | 'expert';

export interface SkillSource {
  name: string;
  url: string;
  description: string;
  lastUpdated: string;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  category: SkillCategory;
  popularityScore: number;
  growthRate: number;
  icon: string;
  color: string;
  level: SkillLevel;
  relatedSkills: string[];
  source: SkillSource;
  demandScore: number;
  salaryRange: {
    min: number;
    max: number;
    currency: string;
  };
  jobPostings: number;
  linkedInEndorsements: number;
  certifications: {
    name: string;
    provider: string;
    url: string;
  }[];
  metadata?: {
    industryDemand: {
      score: number;
      source: string;
      url: string;
      lastUpdated: string;
    };
    userPopularity: {
      score: number;
      endorsements: number;
      surveySource: string;
      lastUpdated: string;
    };
    relevanceScore: number;
    trendTag: 'trending' | 'stable' | 'declining' | 'high-demand';
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: ProjectDifficulty;
  estimatedHours: number;
  requiredSkills: Skill[];
  imageUrl: string;
  resourceLinks: {
    title: string;
    url: string;
  }[];
  learningPath: {
    steps: {
      title: string;
      description: string;
      resources: {
        type: 'video' | 'article' | 'tutorial';
        title: string;
        url: string;
      }[];
    }[];
  };
  academicConnections: {
    subjects: string[];
    concepts: string[];
  };
}

export interface UserProgress {
  userId: string;
  skillId: string;
  progress: number;
  lastUpdated: string;
  linkedInVerified: boolean;
  completedProjects: string[];
}