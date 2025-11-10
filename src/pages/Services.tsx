import React, { useEffect } from "react";
import { ShoppingCart, Brain, Code, Check, ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const servicePackages = [{
    id: "startup",
    icon: <ShoppingCart className="w-12 h-12" />,
    title: "Startup Ecom",
    tagline: "Launch Fast, Scale Faster",
    description: "Perfect for new businesses ready to enter the ecommerce space with AI-powered automation from day one.",
    price: "₹5,000",
    features: ["Custom storefront design and development", "AI-powered product recommendations", "Automated inventory tracking", "Smart chatbot for customer service", "Payment gateway integration", "Mobile-responsive design", "Basic analytics dashboard", "30 days of post-launch support"],
    recommended: false
  }, {
    id: "automation",
    icon: <Brain className="w-12 h-12" />,
    title: "Agentic Automation",
    tagline: "Transform Your Existing Store",
    description: "Upgrade your current ecommerce platform with intelligent agents that handle operations autonomously.",
    price: "₹10,000",
    features: ["AI customer service agent integration", "Intelligent inventory management system", "Automated marketing campaign optimization", "Predictive analytics and forecasting", "Multi-channel sales automation", "Dynamic pricing algorithms", "Advanced reporting and insights", "60 days of optimization and support"],
    recommended: true
  }, {
    id: "enterprise",
    icon: <Code className="w-12 h-12" />,
    title: "Enterprise Solutions",
    tagline: "Custom-Built for Scale",
    description: "Full-scale custom platforms with advanced AI integration designed for high-volume operations.",
    price: "Custom Pricing",
    features: ["Fully custom platform architecture", "Advanced AI agent orchestration", "Multi-warehouse automation", "Custom API development and integrations", "White-label solutions available", "Enterprise-grade security", "Dedicated support team", "Continuous optimization and updates"],
    recommended: false
  }];
  const additionalServices = [{
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Consulting & Strategy",
    description: "Expert guidance on implementing agentic commerce strategies for your business."
  }, {
    icon: <Zap className="w-6 h-6" />,
    title: "Integration Services",
    description: "Connect your existing tools and platforms with new AI-powered systems."
  }, {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Optimization & Training",
    description: "Ongoing optimization of AI agents and training for your team."
  }];
  return <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-agentic-black-light"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Ecommerce Solutions for Every Stage
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto animate-fade-in" style={{
          animationDelay: '100ms'
        }}>
            From startup launch to enterprise transformation, we build agentic commerce solutions that scale with your business
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Package</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Professional e-commerce solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 animate-fade-in ${
                  pkg.recommended
                    ? 'bg-white/10 border-white/30 shadow-2xl'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-bold">
                    RECOMMENDED
                  </div>
                )}
                
                <div className="text-white/80 mb-4">{pkg.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                <p className="text-white/60 text-sm mb-4">{pkg.tagline}</p>
                <p className="text-white/70 mb-6">{pkg.description}</p>
                
                <div className="mb-8">
                  <div className="text-3xl font-bold text-white">{pkg.price}</div>
                </div>

                <Link
                  to="/booking" 
                  className="w-full inline-flex items-center justify-center bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-white/90 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-6 md:px-12 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Additional Services</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-white/80 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/60 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Process Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              A proven methodology for implementing agentic commerce solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[{
            step: "01",
            title: "Discovery",
            description: "Understanding your business needs and goals"
          }, {
            step: "02",
            title: "Design",
            description: "Creating the perfect solution architecture"
          }, {
            step: "03",
            title: "Development",
            description: "Building and integrating AI agents"
          }, {
            step: "04",
            title: "Deploy & Optimize",
            description: "Launch and continuous improvement"
          }].map((phase, index) => <div key={index} className="text-center animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="text-5xl font-bold text-white/20 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-white/60 text-sm">{phase.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-t from-black to-agentic-black-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Agentic Commerce Platform?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project and learn how we can help transform your ecommerce business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="inline-flex items-center justify-center bg-white text-black font-bold py-4 px-8 rounded-lg hover:bg-white/90 transition-all duration-300 btn-glow text-lg">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/references" className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-lg">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Services;