// src/types.ts

// ======================
// Base Types (unchanged)
// ======================
export type SkillCategory = 
  | 'programming' 
  | 'design' 
  | 'data' 
  | 'marketing' 
  | 'business'
  | 'ai';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';
export type ProjectDifficulty = 'easy' | 'medium' | 'hard' | 'expert';
export type Currency = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CAD';
export type TrendTag = 'trending' | 'stable' | 'declining' | 'high-demand' | 'emerging';
export type ResourceType = 'video' | 'article' | 'tutorial' | 'documentation' | 'course';

// ======================
// Interface Definitions
// ======================
export interface SkillSource {
  name: string;
  url: string;
  description: string;
  lastUpdated: string;
  reliabilityScore?: number;
}

export interface SkillMetadata {
  industryDemand: {
    score: number;
    source: string;
    url: string;
    lastUpdated: string;
    region?: string;
  };
  userPopularity: {
    score: number;
    endorsements: number;
    surveySource: string;
    lastUpdated: string;
  };
  relevanceScore: number;
  trendTag: TrendTag;
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
    currency: Currency;
  };
  jobPostings: number;
  linkedInEndorsements: number;
  certifications: {
    name: string;
    provider: string;
    url: string;
  }[];
  metadata?: SkillMetadata;
}

export interface LearningStep {
  title: string;
  description: string;
  resources: {
    type: ResourceType;
    title: string;
    url: string;
    durationMinutes?: number;
  }[];
  completed?: boolean;
  order: number;
}

export interface AcademicConnections {
  subjects: string[];
  concepts: string[];
  creditRecommendation?: string;
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
  learningPath?: LearningPath;
  academicConnections?: AcademicConnections;
}

export interface LearningPath {
  steps: LearningStep[];
  estimatedCompletionTime?: number;
  prerequisites?: string[];
}

export interface UserProgress {
  userId: string;
  skillId: string;
  progress: number;
  lastUpdated: string;
  linkedInVerified: boolean;
  completedProjects: string[];
}

// ======================
// Utility Types
// ======================
export type CompleteSkill = Required<Skill> & { 
  metadata: Required<SkillMetadata> 
};

export type CompleteProject = Required<Project> & {
  learningPath: Required<LearningPath>;
  academicConnections: Required<AcademicConnections>;
};