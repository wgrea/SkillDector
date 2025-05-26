import { useState } from 'react';
import { Skill } from '@/types';
import { SkillCard } from '@/components/skills/skill-card';
import { EmptyState } from '@/components/ui/empty-state';

interface SkillsGridProps {
  skills: Skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  const [expandedSkillId, setExpandedSkillId] = useState<string | null>(null);
  
  if (skills.length === 0) {
    return (
      <EmptyState 
        title="No skills found" 
        description="Try adjusting your filters or search query." 
      />
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <SkillCard 
          key={skill.id}
          skill={skill}
          isExpanded={skill.id === expandedSkillId}
          onToggleExpand={() => 
            setExpandedSkillId(skill.id === expandedSkillId ? null : skill.id)
          }
        />
      ))}
    </div>
  );
}