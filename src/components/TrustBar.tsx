import React from 'react';
import { Quote, Shield } from 'lucide-react';

const TrustBar = () => {
  const testimonials = [
    {
      text: "AgenticEcom transformed our customer support. Response times dropped by 80%.",
      author: "Priya Sharma",
      company: "Boutique Fashion"
    },
    {
      text: "The marketing automation suite paid for itself in the first month. Incredible ROI.",
      author: "Rajesh Kumar",
      company: "Organic Foods Co"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glassmorphism p-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <Quote className="w-8 h-8 text-primary mb-3" />
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="glassmorphism p-4 flex items-center justify-center gap-3">
          <Shield className="w-5 h-5 text-primary" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Data Privacy:</span> All customer data is encrypted and complies with Indian data protection regulations. We never store payment card details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
