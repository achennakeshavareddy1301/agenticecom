import React, { useEffect } from "react";
import { Code, Check, ArrowRight, Palette, Smartphone, Zap, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainFeatures = [
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

  const additionalServices = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly interfaces that convert visitors into customers"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Optimization",
      description: "Fully responsive designs that work seamlessly across all devices"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Lightning-fast loading times for better user experience and SEO"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your business needs and goals"
    },
    {
      step: "02", 
      title: "Design",
      description: "Creating beautiful mockups and prototypes"
    },
    {
      step: "03",
      title: "Development",
      description: "Building your website with clean, modern code"
    },
    {
      step: "04",
      title: "Launch",
      description: "Deploying and supporting your new website"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Professional Website Development
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Transform your online presence with a custom-built website designed to grow your business
          </p>
        </div>
      </section>

      {/* Main Service Package */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Service</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete website solution tailored to your business needs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 md:p-12 rounded-2xl glassmorphism border border-primary/20 shadow-2xl card-hover animate-fade-in">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                BEST VALUE
              </div>
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">Website Development</h3>
                <p className="text-muted-foreground mb-6">Complete website solution from design to deployment</p>
                
                <div className="mb-8">
                  <div className="text-5xl font-bold text-foreground">₹3,000</div>
                  <p className="text-muted-foreground mt-2">One-time investment</p>
                </div>
              </div>

              <div className="mb-8 border-t border-border pt-8">
                <h4 className="text-xl font-semibold text-foreground mb-6 text-center">What's Included</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {mainFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-primary/10 p-1 flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="flex-1 inline-flex items-center justify-center bg-primary text-primary-foreground font-bold py-4 px-8 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/references"
                  className="flex-1 inline-flex items-center justify-center border-2 border-border bg-background text-foreground font-bold py-4 px-8 rounded-lg hover:bg-accent transition-all duration-300"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-6 md:px-12 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Makes Us Different</h2>
            <p className="text-muted-foreground">
              Our comprehensive approach to web development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl glassmorphism border border-border hover:border-primary/30 transition-all duration-300 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for delivering exceptional websites
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-t from-background to-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project and learn how we can help transform your online presence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-bold py-4 px-8 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl text-lg btn-glow"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/references"
              className="inline-flex items-center justify-center bg-background border-2 border-border text-foreground font-bold py-4 px-8 rounded-lg hover:bg-accent transition-all duration-300 text-lg"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;