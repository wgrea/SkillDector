import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Clock, Bookmark, ExternalLink } from 'lucide-react';
import { Project } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProjectDifficultyBadge } from '@/components/projects/project-difficulty-badge';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export function ProjectCard({ project, isExpanded, onToggleExpand }: ProjectCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const toggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };
  
  return (
    <Card 
      className={cn(
        "transition-shadow hover:shadow-md cursor-pointer overflow-hidden h-full flex flex-col",
        isExpanded ? "shadow-md" : ""
      )}
      onClick={onToggleExpand}
    >
      <div 
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${project.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <ProjectDifficultyBadge difficulty={project.difficulty} />
          <div className="flex items-center text-white">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{project.estimatedHours} hours</span>
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3 flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{project.title}</h3>
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
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
          {project.description}
        </p>
      </CardHeader>
      
      <CardContent className="pb-3">
        <div className="flex flex-wrap gap-1.5">
          {project.requiredSkills.slice(0, 3).map((skill) => (
            <Badge key={skill.id} variant="outline" className="text-xs">
              {skill.name}
            </Badge>
          ))}
          {project.requiredSkills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.requiredSkills.length - 3} more
            </Badge>
          )}
        </div>
        
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
            <div className="pt-4 space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Required Skills</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.requiredSkills.map((skill) => (
                    <div 
                      key={skill.id} 
                      className="flex items-center p-2 rounded-md bg-muted/50"
                    >
                      <span 
                        className="text-lg mr-2"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </span>
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Helpful Resources</h4>
                <div className="space-y-2">
                  {project.resourceLinks.map((resource, index) => (
                    <a 
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                      {resource.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </CardContent>
      
      <CardFooter className="pt-2 mt-auto">
        <Button 
          variant="ghost" 
          size="sm" 
          className="ml-auto h-8 w-8 p-0"
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