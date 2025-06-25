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
    <div style={{ overflowY: 'auto', maxHeight: '80vh', padding: '0 6px' }}>
      <div
        className={`grid gap-4 sm:gap-6 md:gap-8 lg:gap-10`}
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
    </div>
  );
}

/* Non-working version
// src/components/skills/skill-grid.tsx
import { useState, useEffect, useCallback } from 'react';
import { Skill } from '@/types';
import { SkillCard } from '@/components/skills/skill-card';
import { EmptyState } from '@/components/ui/empty-state';
import { AutoSizer, Grid } from 'react-virtualized';

interface SkillsGridProps {
  skills: Skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  const [expandedSkillId, setExpandedSkillId] = useState<string | null>(null);
  const [columnCount, setColumnCount] = useState(1);
  const [columnWidth, setColumnWidth] = useState(300);
  const [rowHeights, setRowHeights] = useState<Record<number, number>>({});

  // Update row height when a card expands/collapses
  const updateRowHeight = useCallback((rowIndex: number, height: number) => {
    setRowHeights(prev => ({ ...prev, [rowIndex]: height }));
  }, []);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      const newColumnCount = width >= 1280 ? 4 : width >= 1024 ? 3 : width >= 640 ? 2 : 1;
      const newColumnWidth = width >= 640 ? Math.floor((width - 96) / newColumnCount) : width - 32;
      
      setColumnCount(newColumnCount);
      setColumnWidth(newColumnWidth);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  if (skills.length === 0) {
    return (
      <EmptyState 
        title="No skills found" 
        description="Try adjusting your filters or search query." 
      />
    );
  }

  const rowCount = Math.ceil(skills.length / columnCount);
  
  // Dynamic row height calculation
  const getRowHeight = ({ index }: { index: number }) => {
    return rowHeights[index] || 320; // Default height
  };

  const cellRenderer = ({ columnIndex, key, rowIndex, style }: any) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= skills.length) return null;
    
    const skill = skills[index];
    return (
      <div key={key} style={style} className="p-3">
        <SkillCard
          skill={skill}
          isExpanded={skill.id === expandedSkillId}
          onToggleExpand={() => {
            setExpandedSkillId(
              skill.id === expandedSkillId ? null : skill.id
            );
            // Reset row height when collapsing
            if (skill.id === expandedSkillId) {
              updateRowHeight(rowIndex, 320);
            }
          }}
          onHeightChange={(height) => updateRowHeight(rowIndex, height)}
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
            rowHeight={getRowHeight} // Now using dynamic row heights
            width={width}
            overscanRowCount={2}
          />
        )}
      </AutoSizer>
    </div>
  );
}
