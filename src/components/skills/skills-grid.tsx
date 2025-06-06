// src/components/skills/skill-grid.tsx

import { useState, useEffect } from 'react';
import { Skill } from '@/types';
import { SkillCard } from '@/components/skills/skill-card';
import { EmptyState } from '@/components/ui/empty-state';

interface SkillsGridProps {
  skills: Skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  const [expandedSkillId, setExpandedSkillId] = useState<string | null>(null);
  const [columnCount, setColumnCount] = useState(1);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      const newColumnCount = width >= 1280 ? 4 : width >= 1024 ? 3 : width >= 640 ? 2 : 1;
      setColumnCount(newColumnCount);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  if (skills.length === 0) {
    return (
      <EmptyState 
        title="No skills found" 
        description="Try adjusting your filters or search query." 
      />
    );
  }

  return (
    <div className={`grid gap-4 px-6 sm:gap-6 md:gap-8 lg:gap-10`} 
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
      }}
    >
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
