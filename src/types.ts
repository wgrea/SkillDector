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
}