// src/components/skills/skill-grid.tsx

import { useState } from 'react';
import { Skill } from '@/types';
import { SkillCard } from '@/components/skills/skill-card';
import { EmptyState } from '@/components/ui/empty-state';
import { AutoSizer, Grid } from 'react-virtualized';

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
  
  const columnCount = window.innerWidth >= 1280 ? 4 : window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  const columnWidth = window.innerWidth >= 640 ? Math.floor((window.innerWidth - 96) / columnCount) : window.innerWidth - 32;
  const rowCount = Math.ceil(skills.length / columnCount);
  
  const cellRenderer = ({ columnIndex, key, rowIndex, style }: any) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= skills.length) return null;
    
    const skill = skills[index];
    return (
      <div key={key} style={style} className="p-3">
        <SkillCard
          skill={skill}
          isExpanded={skill.id === expandedSkillId}
          onToggleExpand={() => 
            setExpandedSkillId(
              skill.id === expandedSkillId ? null : skill.id
            )
          }
        />
      </div>
    );
  };
  
  return (
    <div className="h-[calc(100vh-200px)]">
      <AutoSizer>
        {({ height, width }) => (
          <Grid
            cellRenderer={cellRenderer}
            columnCount={columnCount}
            columnWidth={columnWidth}
            height={height}
            rowCount={rowCount}
            rowHeight={320}
            width={width}
            overscanRowCount={2}
          />
        )}
      </AutoSizer>
    </div>
  );
}