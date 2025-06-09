// src/lib/data-validation.ts
import { Skill, Project, CompleteSkill, CompleteProject } from '@/types';

export function validateSkill(skill: Skill): skill is CompleteSkill {
  const requiredFields: Array<keyof CompleteSkill> = [
    'id', 'name', 'description', 'category', 'popularityScore',
    'level', 'source', 'demandScore', 'salaryRange'
  ];
  
  return requiredFields.every(field => {
    const val = skill[field];
    return val !== undefined && val !== null && val !== '';
  });
}

export function validateProject(project: Project): project is CompleteProject {
  if (!project.requiredSkills?.length) return false;
  if (!project.learningPath?.steps?.length) return false;
  return true;
}

export function validateSalaryRange(range: Skill['salaryRange']) {
  return range.min > 0 && range.max >= range.min;
}