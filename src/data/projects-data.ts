// src/data/projects-data.ts
import { Project, CompleteProject, LearningPath, LearningStep, AcademicConnections } from '@/types';
import { Skill } from '@/types'; // Add this import
import { getSkillById } from './skills-data';
import { validateProject } from '@/lib/data-validation';

// id: 1, React
// id: 2, TypeScript
// id: 3, GraphQL
// id: 4, Node.js
// id: 5, API Design
// id: 6, Software Architecture
// id: 7, System Optimization
// id: 8, API Integration
// id: 9, Zod Validation 
// id: 10, Cloud Computing
// id: 11, DevOps & CI/CD
// id: 12, Testing & Validation
// id: 13, Web Performance & Scalability Optimization
// id: 14, Cybersecurity
// id: 15, API Security & Authentication
// id: 16, Data Analysis
// id: 17, SQL
// id: 18, Data Engineering
// id: 19, Database Management 
// id: 20, Data Visualization
// id: 21, Python
// id: 22, Embedded Systems Programming
// id: 23, Machine Learning
// id: 24, Prompt Engineering
// id: 25, Natural Language Processing (NLP)
// id: 26, UI/UX Design
// id: 27, Figma
// id: 28, Project Management


// Mock data for projects
// Keep the comments for the required skills
const projects: Project[] = [
  {
    id: '1',
    title: 'Personal Portfolio Website',
    description: 'Create a modern, responsive portfolio website to showcase your skills and projects to potential employers.',
    difficulty: 'easy',
    estimatedHours: 10,
    requiredSkills: [
      getSkillById('1')!, // (React) – Frontend framework
      getSkillById('26')!, // (UI/UX Design) – Design principles for portfolios
      getSkillById('20')!, // (Data Visualization) – Showcasing projects visually
      getSkillById('27')!, // (Figma) – Optional for mockups
    ],
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    resourceLinks: [
      { title: 'React Portfolio Templates', url: 'https://github.com/topics/portfolio-template' },
      { title: 'Portfolio Design Inspiration', url: 'https://www.behance.net/search/projects?tracking_source=typeahead_search_direct&search=portfolio%20website' },
    ],
  },
  // Remaining ids sort of repeat but different texts
  {
    id: '2',
    title: 'E-commerce Dashboard',
    description: 'Build an interactive dashboard for e-commerce analytics with real-time data visualization and reporting features.',
    difficulty: 'hard',
    estimatedHours: 35,
    requiredSkills: [
      getSkillById('1')!,   // React
      getSkillById('2')!,   // TypeScript
      getSkillById('4')!,   // Node.js
      getSkillById('15')!,  // API Security
      getSkillById('17')!,  // SQL
      getSkillById('20')!,  // Data Visualization
    ],
    imageUrl: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    resourceLinks: [
      { title: 'Dashboard Design Patterns', url: 'https://uxplanet.org/dashboard-design-patterns-2c58e8f8de6a' },
      { title: 'Recharts - React Charts Library', url: 'https://recharts.org/en-US/' },
    ],
  },
  {
    id: '3',
    title: 'Machine Learning Image Classifier',
    description: 'Develop an image classification system using machine learning to identify and categorize objects in photos.',
    difficulty: 'expert',
    estimatedHours: 45,
    requiredSkills: [
      getSkillById('21')!,  // Python
      getSkillById('23')!,  // Machine Learning
      getSkillById('18')!,  // Data Engineering
      getSkillById('25')!,  // (NLP) – Optional for text-based classification
    ],
    imageUrl: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    resourceLinks: [
      { title: 'TensorFlow Image Classification Tutorial', url: 'https://www.tensorflow.org/tutorials/images/classification' },
      { title: 'Dataset Resources for Image Classification', url: 'https://paperswithcode.com/datasets?task=image-classification' },
    ],
  },
  {
    id: '4',
    title: 'Social Media Content Calendar',
    description: 'Create a content planning and scheduling tool for social media managers to organize and automate posts.',
    difficulty: 'medium',
    estimatedHours: 25,
    requiredSkills: [
      getSkillById('1')!,  // React
      getSkillById('4')!,  // Node.js
      getSkillById('8')!,  // API Integration
      getSkillById('19')!, // Database Management
    ],
    imageUrl: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    resourceLinks: [
      { title: 'Content Calendar Templates', url: 'https://buffer.com/library/content-calendar-template/' },
      { title: 'Social Media API Documentation', url: 'https://developers.facebook.com/docs/' },
    ],
  },
  {
    id: '5',
    title: 'Project Management Tool',
    description: 'Build a collaborative project management application with task tracking, team communication, and progress visualization.',
    difficulty: 'hard',
    estimatedHours: 40,
    requiredSkills: [
      getSkillById('1')!,   // React
      getSkillById('2')!,   // TypeScript
      getSkillById('4')!,   // Node.js
      getSkillById('28')!,  // Project Management
      getSkillById('6')!,   // Software Architecture
    ],
    imageUrl: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    resourceLinks: [
      { title: 'Project Management Methodologies', url: 'https://www.wrike.com/project-management-guide/methodologies/' },
      { title: 'React DnD for Drag-and-Drop Interfaces', url: 'https://react-dnd.github.io/react-dnd/about' },
    ],
  },
  {
    id: '6',
    title: 'Database Design for Inventory System',
    description: 'Design and implement a relational database system for tracking inventory, orders, and customer information.',
    difficulty: 'medium',
    estimatedHours: 20,
    requiredSkills: [
      getSkillById('17')!,  // SQL
      getSkillById('19')!,  // Database Management
      getSkillById('10')!,  // Cloud Computing
    ],
    imageUrl: 'https://images.pexels.com/photos/4968633/pexels-photo-4968633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    resourceLinks: [
      { title: 'Database Schema Design Best Practices', url: 'https://www.sqlshack.com/database-design-best-practices/' },
      { title: 'Entity-Relationship Diagram Tutorial', url: 'https://www.lucidchart.com/pages/er-diagrams' },
    ],
  },
  {
    id: '7',
    title: 'AI-Powered Resume Reviewer',
    description: 'Build a tool that analyzes resumes using AI, providing feedback and suggestions for improvements.',
    difficulty: 'medium',
    estimatedHours: 25,
    requiredSkills: [
      getSkillById('2')!,   // TypeScript
      getSkillById('9')!,   // Zod Validation
      getSkillById('23')!,  // (Machine Learning) – Optional for scoring
      getSkillById('25')!,  // NLP
    ],
    imageUrl: 'https://images.pexels.com/photos/3182762/pexels-photo-3182762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    resourceLinks: [
      { title: 'Building Resume Scoring Models with AI', url: 'https://towardsdatascience.com/building-ai-models-to-score-resumes-123456' },
      { title: 'Natural Language Processing for Resume Analysis', url: 'https://www.analyticsvidhya.com/blog/2021/07/nlp-techniques-for-resume-screening/' },
    ],
  },
  {
    id: '8',
    title: 'Game Inventory System',
    description: 'Develop a specialized inventory tracker for game development, optimizing file handling and storage management.',
    difficulty: 'medium',
    estimatedHours: 30,
    requiredSkills: [
      getSkillById('16')!,  // Data Analysis
      getSkillById('10')!,  // Cloud Computing
      getSkillById('20')!,  // Data Visualization
      getSkillById('22')!,  // (Embedded Systems) – Optional for performance
    ],
    imageUrl: 'https://images.pexels.com/photos/159407/gaming-console-video-game-gamer-159407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    resourceLinks: [
      { title: 'Optimizing Inventory Systems in Game Development', url: 'https://www.gamasutra.com/blogs/Inventory-Systems-Best-Practices' },
      { title: 'File Handling Techniques for Game Development', url: 'https://www.redblobgames.com/articles/data-storage/' },
    ],
  },
  {
    id: '9',
    title: 'API-First Application',
    description: 'Develop a backend-focused application with an API-first approach, ensuring scalable, high-performance service design.',
    difficulty: 'medium',
    estimatedHours: 35,
    requiredSkills: [
      getSkillById('5')!,   // API Design (core)
      getSkillById('4')!,   // Node.js (backend)
      getSkillById('6')!,   // Software Architecture
      getSkillById('15')!,  // API Security
    ],
    imageUrl: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    resourceLinks: [
      { title: 'API-First Development: Why It Matters', url: 'https://blog.postman.com/api-first-development/' },
      { title: 'Building Scalable Backend Systems', url: 'https://www.infoq.com/articles/scalable-backend-architecture/' },
    ],
  },
  {
    id: '10',
    title: 'Data-Driven Investment Dashboard',
    description: 'Develop a financial dashboard integrating real-time stock data APIs for investment analysis and trend forecasting.',
    difficulty: 'medium',
    estimatedHours: 40,
    requiredSkills: [
      getSkillById('16')!,  // Data Analysis
      getSkillById('17')!,  // SQL
      getSkillById('20')!,  // Data Visualization
      getSkillById('10')!,  // Cloud Computing
    ],
    imageUrl: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    resourceLinks: [
      { title: 'Best Financial Data APIs in 2025', url: 'https://www.10xsheets.com/blog/financial-data-apis/' },
      { title: 'Stock Market API by Polygon.io', url: 'https://polygon.io/' },
    ],
  },
  {
    id: '11',
    title: 'IoT Smart Home Dashboard',
    description: 'Develop a React-based dashboard that connects to IoT sensors and smart home controls for real-time monitoring and automation.',
    difficulty: 'medium',
    estimatedHours: 45,
    requiredSkills: [
      getSkillById('1')!,   // React (dashboard UI)
      getSkillById('22')!,  // Embedded Systems (IoT)
      getSkillById('8')!,   // API Integration (device APIs)
      getSkillById('14')!,  // Cybersecurity (critical for IoT)
    ],
    imageUrl: 'https://images.pexels.com/photos/4792718/pexels-photo-4792718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    resourceLinks: [
      { title: 'Building IoT Dashboards with React', url: 'https://codesandbox.io/s/react-smart-home-dashboard-z9tih' },
      { title: 'Smart Home Automation with IoT', url: 'https://github.com/jbittcodes/smart-home-automation-dashboard' },
    ],
  },
    {
    id: '12',
    title: 'GraphQL-powered API Gateway',
    description: 'Develop a high-performance API gateway using GraphQL and TypeScript to streamline data access across multiple microservices.',
    difficulty: 'medium',
    estimatedHours: 20,
    requiredSkills: [
      getSkillById('3')!,   // GraphQL
      getSkillById('2')!,   // TypeScript
      getSkillById('6')!,   // Software Architecture
      getSkillById('15')!,  // API Security
    ],
    imageUrl: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg',
    resourceLinks: [
      { title: 'GraphQL API Design Guide', url: 'https://graphql.org/learn/' },
      { title: 'Microservices Architecture', url: 'https://martinfowler.com/articles/microservices.html' },
    ],
  },
  {
    id: '13',
    title: 'Cloud-based CI/CD Pipeline',
    description: 'Implement a scalable CI/CD pipeline using AWS, Kubernetes, and GitHub Actions to automate deployment workflows.',
    difficulty: 'hard',
    estimatedHours: 30,
    requiredSkills: [
      getSkillById('10')!,  // Cloud Computing
      getSkillById('11')!,  // DevOps & CI/CD
      getSkillById('12')!,  // Testing & Validation
    ],
    imageUrl: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
    resourceLinks: [
      { title: 'Kubernetes CI/CD Best Practices', url: 'https://kubernetes.io/docs/concepts/cluster-administration/cicd/' },
      { title: 'AWS DevOps Automation', url: 'https://aws.amazon.com/devops/' },
    ],
  },
  {
    id: '14',
    title: 'AI-powered Code Review Assistant',
    description: 'Develop a code review assistant using machine learning to automatically detect common bugs and security vulnerabilities.',
    difficulty: 'hard',
    estimatedHours: 35,
    requiredSkills: [
      getSkillById('21')!,  // Python
      getSkillById('23')!,  // Machine Learning
      getSkillById('14')!,  // Cybersecurity
      getSkillById('12')!,  // Testing & Validation
    ],
    imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
    resourceLinks: [
      { title: 'ML-Based Code Analysis', url: 'https://towardsdatascience.com/ai-code-analysis-101-a1a8bb9e781b' },
      { title: 'Secure Code Review Techniques', url: 'https://owasp.org/www-community/activities/secure-code-review' },
    ],
  },
  {
    id: '15',
    title: 'High-Performance SQL Query Optimizer',
    description: 'Design a SQL query optimization tool to improve database efficiency and response times.',
    difficulty: 'medium',
    estimatedHours: 25,
    requiredSkills: [
      getSkillById('17')!,  // SQL
      getSkillById('7')!,   // System Optimization
      getSkillById('19')!,  // Database Management
    ],
    imageUrl: 'https://images.pexels.com/photos/1591066/pexels-photo-1591066.jpeg',
    resourceLinks: [
      { title: 'SQL Query Optimization Guide', url: 'https://use-the-index-luke.com/' },
      { title: 'Database Performance Tuning', url: 'https://www.oracle.com/database/technologies/performance-tuning.html' },
    ],
  },
];

// Utility functions
function completeLearningPath(path?: Partial<LearningPath>): LearningPath {
  return {
    steps: path?.steps?.map(completeLearningStep) ?? [],
    estimatedCompletionTime: path?.estimatedCompletionTime ?? 0,
    prerequisites: path?.prerequisites ?? []
  };
}

function completeLearningStep(step: Partial<LearningStep>): LearningStep {
  return {
    title: step.title ?? '',
    description: step.description ?? '',
    resources: step.resources ?? [],
    order: step.order ?? 0,
    completed: step.completed ?? false
  };
}

function completeAcademicConnections(academic?: Partial<AcademicConnections>): AcademicConnections {
  return {
    subjects: academic?.subjects ?? [],
    concepts: academic?.concepts ?? [],
    creditRecommendation: academic?.creditRecommendation ?? ''
  };
}

// Add the missing completeProject function
function completeProject(project: Partial<Project> & { id: string; title: string }): CompleteProject {
  return {
    ...project,
    description: project.description ?? '',
    difficulty: project.difficulty ?? 'medium',
    // ... all other required fields with defaults
    learningPath: completeLearningPath(project.learningPath),
    academicConnections: completeAcademicConnections(project.academicConnections)
  } as CompleteProject;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getValidatedProjectById(id: string): CompleteProject | null {
  const project = getProjectById(id);
  if (!project || !validateProject(project)) return null;
  return completeProject(project);
}

export function getAllProjects(): Project[] {
  return [...projects];
}

export function getProjectsByEstimatedTime(maxHours: number): Project[] {
  return projects.filter(p => p.estimatedHours <= maxHours);
}

export function getProjectsWithLearningPaths(): Project[] {
  return projects.filter(p => (p.learningPath?.steps?.length ?? 0) > 0);
}

export function getProjectsByAcademicSubject(subject: string): Project[] {
  return projects.filter(p => 
    p.academicConnections?.subjects?.includes(subject)
  );
}

export function getProjectSkillGap(projectId: string, knownSkillIds: string[]): Skill[] {
  const project = getProjectById(projectId);
  if (!project) return [];
  
  return project.requiredSkills.filter(
    skill => !knownSkillIds.includes(skill.id)
  );
}

export function getProjectsByDifficulty(difficulty: Project['difficulty']): Project[] {
  return projects.filter(project => project.difficulty === difficulty);
}

export function getProjectsByRequiredSkill(skillId: string): Project[] {
  return projects.filter(project => 
    project.requiredSkills.some(skill => skill.id === skillId)
  );
}