import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  problemStatement: string;
  features: string[];
  metric: string;
  ctaLink: string;
}

const ProductCard = ({ icon, title, problemStatement, features, metric, ctaLink }: ProductCardProps) => {
  return (
    <Card className="glassmorphism card-hover h-full flex flex-col">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
          {icon}
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{problemStatement}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-3 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">{feature}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-3 rounded-lg bg-primary/5 border border-primary/10">
          <p className="text-sm font-medium text-foreground">{metric}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full btn-glow">
          <Link to={ctaLink}>
            Request Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
