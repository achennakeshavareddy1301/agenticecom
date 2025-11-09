import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Brain, Code, TrendingUp, ShoppingCart, Sparkles, ArrowRight } from "lucide-react";
import agenticLogo from '@/assets/agentic-logo.png';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Startup Ecom",
      description: "Launch your online store with AI-powered automation. Perfect for new businesses ready to scale from day one.",
      icon: <ShoppingCart className="w-8 h-8" />,
    },
    {
      title: "Agentic Automation",
      description: "Transform your existing store with intelligent agents that handle customer service, inventory, and marketing.",
      icon: <Brain className="w-8 h-8" />,
    },
    {
      title: "Enterprise Solutions",
      description: "Custom-built platforms for large-scale operations with advanced AI integration and scalable architecture.",
      icon: <Code className="w-8 h-8" />,
    }
  ];

  const benefits = [
    "AI-powered customer service automation",
    "Intelligent inventory management",
    "Predictive analytics and insights",
    "Seamless integration with existing tools"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 py-20">
          <div className="mb-8 flex justify-center animate-fade-in">
            <img 
              src={agenticLogo} 
              alt="AgenticEcom - Next-Gen Ecommerce Research & Solutions" 
              className="h-32 md:h-40 w-auto"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in text-glow">
            Next-Gen Ecommerce Research & Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Pioneering agentic commerce through cutting-edge research and full-scale business solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center bg-white text-black font-bold py-4 px-8 rounded-lg hover:bg-white/90 transition-all duration-300 btn-glow text-lg"
            >
              Explore Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-lg"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* What is Agentic Commerce Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-black to-agentic-black-light">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="w-8 h-8 text-white mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">What is Agentic Commerce?</h2>
          </div>
          
          <p className="text-lg text-white/70 leading-relaxed">
            Imagine waking up to find your morning coffee already ordered, your groceries restocked, and that perfect birthday gift for your mom delivered—all without lifting a finger. Welcome to agentic commerce, where intelligent AI agents become your personal shopping companions. Instead of spending hours comparing prices across websites or worrying about missing that limited-time deal, your AI agent works tirelessly in the background, understanding your preferences, hunting for the best options, and completing purchases on your behalf. It's like having a trusted friend who knows exactly what you need, when you need it, and ensures it arrives at your doorstep—transforming the exhausting chore of online shopping into an effortless experience. This isn't just the future of e-commerce; it's a fundamental shift where technology doesn't just help you shop—it shops for you, giving you back the most precious commodity: your time.
          </p>
        </div>
      </section>

      {/* Research Highlights Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Research</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover case studies and insights from the cutting edge of agentic ecommerce innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "AI Customer Service Agents",
                summary: "How autonomous agents are revolutionizing customer support with 24/7 availability and instant responses.",
                category: "Case Study"
              },
              {
                title: "Predictive Inventory Systems",
                summary: "Using machine learning to forecast demand and optimize stock levels automatically.",
                category: "Research"
              }
            ].map((article, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-white/50 text-sm mb-2 uppercase tracking-wide">{article.category}</div>
                <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                <p className="text-white/70 mb-4">{article.summary}</p>
                <Link
                  to="/blog"
                  className="inline-flex items-center text-white hover:text-white/70 transition-colors link-hover"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center text-white hover:text-white/70 transition-colors text-lg link-hover"
            >
              View All Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-12 bg-agentic-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              From startup to enterprise, we build agentic ecommerce solutions that scale with your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="glassmorphism p-8 card-hover animate-fade-in text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-white/90 transition-all duration-300 btn-glow"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio/Case Studies Preview */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              See how we've helped businesses transform with agentic commerce
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Fashion Retailer AI Transformation",
                result: "300% increase in customer satisfaction with AI-powered support",
                category: "Retail"
              },
              {
                title: "B2B Marketplace Automation",
                result: "Reduced operational costs by 60% through intelligent automation",
                category: "B2B"
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="glassmorphism p-8 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-white/50 text-sm mb-2 uppercase tracking-wide">{project.category}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <div className="flex items-start mb-4">
                  <TrendingUp className="w-5 h-5 text-white mr-2 flex-shrink-0 mt-1" />
                  <p className="text-white/80">{project.result}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/references"
              className="inline-flex items-center text-white hover:text-white/70 transition-colors text-lg link-hover"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-t from-black to-agentic-black-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Ecommerce?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how agentic commerce can revolutionize your business. Get a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center bg-white text-black font-bold py-4 px-8 rounded-lg hover:bg-white/90 transition-all duration-300 btn-glow text-lg"
            >
              Request Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-lg"
            >
              Read Research
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
