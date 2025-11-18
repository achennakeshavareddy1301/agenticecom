import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep = ({ step, title, description, isLast }: ProcessStepProps) => {
  return (
    <div className="relative flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
          <span className="text-lg font-bold text-primary">{step}</span>
        </div>
      </div>
      <div className="flex-1 pb-8">
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-border" />
      )}
    </div>
  );
};

export default ProcessStep;
