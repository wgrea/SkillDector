// src/components/skills/filters/category-filter.ts

import { SkillCategory } from '@/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: SkillCategory[];
  selectedCategory: SkillCategory | 'all';
  onSelectCategory: (category: SkillCategory | 'all') => void;
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}: CategoryFilterProps) {
  const categoryIcons: Record<SkillCategory, string> = {
    programming: '💻',
    design: '🎨',
    data: '📊',
    marketing: '📢',
    business: '💼',
    ai: '🤖',
  };
  
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedCategory === 'all' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onSelectCategory('all')}
        className={cn(
          "transition-all",
          selectedCategory === 'all' 
            ? "bg-primary text-primary-foreground" 
            : "hover:bg-primary/10"
        )}
      >
        All
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          size="sm"
          onClick={() => onSelectCategory(category)}
          className={cn(
            "transition-all",
            selectedCategory === category 
              ? "bg-primary text-primary-foreground" 
              : "hover:bg-primary/10"
          )}
        >
          <span className="mr-1.5">{categoryIcons[category]}</span>
          <span className="capitalize">{category}</span>
        </Button>
      ))}
    </div>
  );
}

/*
// Saved implementation with sorting and skills display:

import { Skill } from '@/types';
import { useState } from 'react';
import { getAllSkills, sortSkills } from '@/data/skills-data';
import { SkillCard } from '@/components/skills/skill-card';

export function CategoryFilterWithSkills({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const [sortType, setSortType] = useState<'industry' | 'community'>('industry');
  const sortedSkills = sortSkills(getAllSkills(), sortType);

  return (
    <div>
      <select 
        onChange={(e) => setSortType(e.target.value as 'industry' | 'community')} 
        className="p-2 border rounded"
      >
        <option value="industry">Sort by Industry Demand</option>
        <option value="community">Sort by Community Popularity</option>
      </select>

      {sortedSkills.map((skill: Skill) => (
        <SkillCard key={skill.id} skill={skill} isExpanded={false} onToggleExpand={() => {}} />
      ))}

      <div className="flex flex-wrap gap-2">
        <Button 
          variant={selectedCategory === 'all' ? 'default' : 'outline'} 
          size="sm" 
          onClick={() => onSelectCategory('all')}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button 
            key={category} 
            variant={selectedCategory === category ? 'default' : 'outline'} 
            size="sm" 
            onClick={() => onSelectCategory(category)}
          >
            <span className="mr-1.5">{categoryIcons[category]}</span>
            <span className="capitalize">{category}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
*/