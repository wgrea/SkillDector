// src/data/projects-data.ts

import { Project } from '@/types';
import { getSkillById } from '@/data/skills-data';

// Mock data for projects
const projects: Project[] = [
  {
    id: '1',
    title: 'Personal Portfolio Website',
    description: 'Create a modern, responsive portfolio website to showcase your skills and projects to potential employers.',
    difficulty: 'easy',
    estimatedHours: 10,
    requiredSkills: [
      getSkillById('1')!, // React
      getSkillById('3')!, // UI/UX Design
      getSkillById('10')!, // Figma
    ],
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    resourceLinks: [
      { title: 'React Portfolio Templates', url: 'https://github.com/topics/portfolio-template' },
      { title: 'Portfolio Design Inspiration', url: 'https://www.behance.net/search/projects?tracking_source=typeahead_search_direct&search=portfolio%20website' },
    ],
  },
  {
    id: '2',
    title: 'E-commerce Dashboard',
    description: 'Build an interactive dashboard for e-commerce analytics with real-time data visualization and reporting features.',
    difficulty: 'hard',
    estimatedHours: 35,
    requiredSkills: [
      getSkillById('1')!, // React
      getSkillById('2')!, // TypeScript
      getSkillById('5')!, // Data Analysis
      getSkillById('9')!, // Node.js
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
      getSkillById('4')!, // Python
      getSkillById('7')!, // Machine Learning
      getSkillById('5')!, // Data Analysis
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
      getSkillById('1')!, // React
      getSkillById('6')!, // Digital Marketing
      getSkillById('9')!, // Node.js
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
      getSkillById('1')!, // React
      getSkillById('2')!, // TypeScript
      getSkillById('8')!, // Project Management
      getSkillById('9')!, // Node.js
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
      getSkillById('11')!, // SQL
      getSkillById('5')!, // Data Analysis
      getSkillById('12')!, // Cloud Computing
    ],
    imageUrl: 'https://images.pexels.com/photos/4968633/pexels-photo-4968633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    resourceLinks: [
      { title: 'Database Schema Design Best Practices', url: 'https://www.sqlshack.com/database-design-best-practices/' },
      { title: 'Entity-Relationship Diagram Tutorial', url: 'https://www.lucidchart.com/pages/er-diagrams' },
    ],
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByDifficulty(difficulty: Project['difficulty']): Project[] {
  return projects.filter(project => project.difficulty === difficulty);
}

export function getProjectsByRequiredSkill(skillId: string): Project[] {
  return projects.filter(project => 
    project.requiredSkills.some(skill => skill.id === skillId)
  );
}