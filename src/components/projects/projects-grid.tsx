import { useState } from 'react';
import { Project } from '@/types';
import { ProjectCard } from '@/components/projects/project-card';
import { EmptyState } from '@/components/ui/empty-state';

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  
  if (projects.length === 0) {
    return (
      <EmptyState 
        title="No projects found" 
        description="Try adjusting your filters or search query." 
      />
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id}
          project={project}
          isExpanded={project.id === expandedProjectId}
          onToggleExpand={() => 
            setExpandedProjectId(
              project.id === expandedProjectId ? null : project.id
            )
          }
        />
      ))}
    </div>
  );
}