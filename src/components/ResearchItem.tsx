import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ResearchItemProps {
  title: string;
  tldr: string;
  implications: string;
  pdfLink?: string;
  productMapping?: string;
}

const ResearchItem = ({ title, tldr, implications, pdfLink, productMapping }: ResearchItemProps) => {
  return (
    <Card className="glassmorphism card-hover">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2 flex items-start gap-2">
              <FileText className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
              <span>{title}</span>
            </CardTitle>
            <CardDescription className="text-sm">
              <span className="font-semibold text-foreground">TL;DR:</span> {tldr}
            </CardDescription>
          </div>
          {pdfLink && (
            <a
              href={pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors flex-shrink-0"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-sm font-medium text-foreground mb-1">Implications for SMEs:</p>
          <p className="text-sm text-muted-foreground">{implications}</p>
        </div>
        {productMapping && (
          <div className="pt-3 border-t border-border">
            <p className="text-sm">
              <span className="font-medium text-primary">Research → Product:</span>{' '}
              <span className="text-muted-foreground">{productMapping}</span>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResearchItem;
