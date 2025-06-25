// src/components/skills/skill-card.tsx
// Revise with code from the non-working version

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Bookmark, TrendingUp, TrendingDown, ExternalLink, Award, DollarSign, Briefcase } from 'lucide-react';
import { Skill } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SkillLevelBadge } from '@/components/skills/skill-level-badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

interface SkillCardProps {
  skill: Skill;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export function SkillCard({ skill, isExpanded, onToggleExpand }: SkillCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const categoryColors = {
      security: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
      design: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      data: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      marketing: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      business: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      ai: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      frontend: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      backend: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
      cloud: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300',
      devops: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300',
      scripting: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
      embedded: 'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300',
      gamedev: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300',
  };
  
  const formatSalary = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: skill.salaryRange.currency,
      maximumFractionDigits: 0,
    }).format(amount);
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Card 
        className={cn(
          "transition-all duration-300 hover:shadow-lg cursor-pointer overflow-hidden",
          isExpanded ? "shadow-md" : ""
        )}
        onClick={onToggleExpand}
      >
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <div 
                className="w-10 h-10 rounded-md flex items-center justify-center transition-transform duration-300 hover:scale-110"
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
              className="h-8 w-8 transition-transform duration-300 hover:scale-110" 
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
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Demand Score</span>
                    <div className="w-2/3 bg-secondary rounded-full h-2 overflow-hidden">
                      <motion.div 
                        className="bg-primary h-2 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.demandScore}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <div className="text-sm">
                        <p className="font-medium">Salary Range</p>
                        <p className="text-muted-foreground">
                          {formatSalary(skill.salaryRange.min)} - {formatSalary(skill.salaryRange.max)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <div className="text-sm">
                        <p className="font-medium">Job Postings</p>
                        <p className="text-muted-foreground">
                          {new Intl.NumberFormat().format(skill.jobPostings)}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Certifications</h4>
                    <div className="space-y-2">
                      {skill.certifications.map((cert, index) => (
                        <a
                          key={index}
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-primary hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Award className="h-3.5 w-3.5 mr-1.5" />
                          {cert.name} - {cert.provider}
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Data Source</h4>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button
                          variant="link"
                          className="h-auto p-0 text-sm text-muted-foreground hover:text-primary"
                        >
                          {skill.source.name}
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <p className="text-sm">{skill.source.description}</p>
                          <p className="text-xs text-muted-foreground">
                            Last updated: {skill.source.lastUpdated}
                          </p>
                          <a
                            href={skill.source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs text-primary hover:underline"
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View source
                          </a>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>

        <CardFooter className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <SkillLevelBadge level={skill.level} />
            {trendIndicator}
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0 transition-transform duration-300 hover:scale-110"
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
    </motion.div>
  );
}
