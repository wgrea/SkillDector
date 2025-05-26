import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Bookmark, TrendingUp, TrendingDown } from 'lucide-react';
import { Skill } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SkillLevelBadge } from '@/components/skills/skill-level-badge';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  skill: Skill;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export function SkillCard({ skill, isExpanded, onToggleExpand }: SkillCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const categoryColors = {
    programming: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    design: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    data: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    marketing: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    business: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
    ai: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  };
  
  const trendIndicator = skill.growthRate > 0 ? (
    <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-medium">
      <TrendingUp className="h-4 w-4 mr-1" />
      +{skill.growthRate}%
    </div>
  ) : (
    <div className="flex items-center text-red-600 dark:text-red-400 text-sm font-medium">
      <TrendingDown className="h-4 w-4 mr-1" />
      {skill.growthRate}%
    </div>
  );
  
  const toggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };
  
  return (
    <Card 
      className={cn(
        "transition-shadow hover:shadow-md cursor-pointer overflow-hidden",
        isExpanded ? "shadow-md" : ""
      )}
      onClick={onToggleExpand}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-2">
            <div 
              className="w-10 h-10 rounded-md flex items-center justify-center"
              style={{ backgroundColor: skill.color + '15' }}
            >
              <span 
                className="text-2xl"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-lg leading-tight">{skill.name}</h3>
              <Badge 
                variant="outline" 
                className={cn("mt-1", categoryColors[skill.category])}
              >
                {skill.category}
              </Badge>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={toggleBookmark}
          >
            <Bookmark 
              className={cn(
                "h-4 w-4", 
                isBookmarked ? "fill-primary text-primary" : "text-muted-foreground"
              )} 
            />
            <span className="sr-only">Bookmark</span>
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {skill.description}
        </p>
        
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {isExpanded && (
            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Popularity</span>
                <div className="w-2/3 bg-secondary rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full" 
                    style={{ width: `${skill.popularityScore}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium">Related Skills</span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {skill.relatedSkills.map((relatedSkill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {relatedSkill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-2">
        <div className="flex items-center space-x-2">
          <SkillLevelBadge level={skill.level} />
          {trendIndicator}
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 p-0 w-8"
          onClick={onToggleExpand}
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
          <span className="sr-only">
            {isExpanded ? "Show less" : "Show more"}
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
}