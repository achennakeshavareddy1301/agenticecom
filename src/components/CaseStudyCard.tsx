import React from 'react';
import { ExternalLink, TrendingUp, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CaseStudyCardProps {
  title: string;
  industry: string;
  problem: string;
  solution: string;
  metricsBefore: { label: string; value: string };
  metricsAfter: { label: string; value: string };
  techStack: string[];
  demoLink?: string;
  imageSrc?: string;
}

const CaseStudyCard = ({ 
  title, 
  industry, 
  problem, 
  solution, 
  metricsBefore, 
  metricsAfter, 
  techStack,
  demoLink,
  imageSrc
}: CaseStudyCardProps) => {
  return (
    <Card className="glassmorphism card-hover overflow-hidden h-full flex flex-col">
      {imageSrc && (
        <div className="w-full h-48 overflow-hidden">
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <Badge variant="secondary" className="whitespace-nowrap">{industry}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <div>
          <h4 className="font-semibold text-sm text-foreground mb-1">Problem:</h4>
          <p className="text-sm text-muted-foreground">{problem}</p>
        </div>
        <div>
          <h4 className="font-semibold text-sm text-foreground mb-1 flex items-center gap-1">
            <Zap className="w-4 h-4 text-primary" />
            Agent Solution:
          </h4>
          <p className="text-sm text-muted-foreground">{solution}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
            <p className="text-xs text-muted-foreground mb-1">Before</p>
            <p className="text-lg font-bold text-foreground">{metricsBefore.value}</p>
            <p className="text-xs text-muted-foreground">{metricsBefore.label}</p>
          </div>
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              After
            </p>
            <p className="text-lg font-bold text-foreground">{metricsAfter.value}</p>
            <p className="text-xs text-muted-foreground">{metricsAfter.label}</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm text-foreground mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      {demoLink && (
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              View Demo
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default CaseStudyCard;
