import React, { useEffect } from "react";
import { Code, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Custom responsive design",
    "Modern UI/UX development",
    "Mobile-first approach",
    "SEO optimization",
    "Fast loading performance",
    "Cross-browser compatibility",
    "Contact form integration",
    "Google Analytics setup",
    "30 days post-launch support"
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Website Development Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional web solutions designed to elevate your online presence
            </p>
          </div>

          {/* Main Service Card */}
          <Card className="max-w-4xl mx-auto border-primary/20 shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <CardTitle className="text-3xl">Website Development</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Complete website solution from design to deployment
              </CardDescription>
              <div className="mt-6">
                <div className="text-5xl font-bold text-primary">₹3,000</div>
                <p className="text-muted-foreground mt-2">One-time investment</p>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Features List */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-primary/10 p-1">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t">
                <Button asChild size="lg" className="flex-1">
                  <Link to="/booking" className="gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <Link to="/references">
                    View Portfolio
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Need something more custom?{" "}
              <Link to="/booking" className="text-primary hover:underline">
                Let's discuss your requirements
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;