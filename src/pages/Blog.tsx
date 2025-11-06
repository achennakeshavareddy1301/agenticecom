import React, { useEffect, useState } from "react";
import BlogPost from "@/components/BlogPost";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const researchArticles = [
    {
      id: "ai-customer-service",
      title: "Autonomous AI Agents in Customer Service",
      excerpt: "Deep dive into how autonomous AI agents are transforming customer support with 24/7 availability, instant responses, and continuous learning capabilities.",
      date: "November 2, 2025",
      readTime: "8 min read",
      author: "Dr. Sarah Chen",
      category: "Research",
      imageSrc: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80",
      featured: true
    },
    {
      id: "predictive-inventory",
      title: "Machine Learning for Inventory Optimization",
      excerpt: "Exploring how predictive algorithms are revolutionizing inventory management, reducing waste, and optimizing stock levels in real-time.",
      date: "October 28, 2025",
      readTime: "10 min read",
      author: "Michael Torres",
      category: "Case Study",
      imageSrc: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80"
    },
    {
      id: "automated-marketing",
      title: "AI-Driven Marketing Campaign Optimization",
      excerpt: "How autonomous agents are testing, learning, and adapting marketing campaigns in real-time to maximize conversion rates.",
      date: "October 15, 2025",
      readTime: "7 min read",
      author: "Emma Rodriguez",
      category: "Analysis",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      id: "personalization-engines",
      title: "Next-Gen Personalization Engines",
      excerpt: "Study of how AI agents create hyper-personalized shopping experiences by analyzing behavior patterns and predicting customer needs.",
      date: "October 5, 2025",
      readTime: "9 min read",
      author: "Dr. James Park",
      category: "Research",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    {
      id: "supply-chain",
      title: "Agentic Systems in Supply Chain Management",
      excerpt: "Comprehensive analysis of autonomous agents managing end-to-end supply chain operations with minimal human intervention.",
      date: "September 20, 2025",
      readTime: "11 min read",
      author: "Dr. Lisa Anderson",
      category: "Case Study",
      imageSrc: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80"
    },
    {
      id: "dynamic-pricing",
      title: "Dynamic Pricing: The Agentic Approach",
      excerpt: "How AI agents continuously adjust pricing strategies based on market conditions, competitor analysis, and demand forecasting.",
      date: "September 10, 2025",
      readTime: "6 min read",
      author: "Marcus Williams",
      category: "Analysis",
      imageSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
    }
  ];
  
  const categories = [
    "All",
    "Research",
    "Case Study",
    "Analysis"
  ];
  
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredArticles = researchArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-agentic-black-light py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Agentic Commerce Research
            </h1>
            <p className="text-xl text-white/70 mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Cutting-edge insights, case studies, and analysis from the forefront of agentic ecommerce innovation
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={18} />
              <Input
                type="text"
                placeholder="Search research articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-black border-white/10 text-white w-full"
              />
            </div>
            
            <div className="w-full md:w-1/2 flex gap-2 overflow-x-auto pb-2 no-scrollbar flex-nowrap md:justify-end">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors font-medium ${
                    activeCategory === category
                      ? "bg-white text-black"
                      : "bg-black text-white/70 hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Research Articles */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <BlogPost
                  key={article.id}
                  {...article}
                  className={`animate-fade-in ${article.featured ? "md:col-span-2" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl text-white mb-2">No articles found</h3>
              <p className="text-white/60">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 px-6 md:px-12 bg-agentic-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated on Agentic Commerce
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Subscribe to receive the latest research, case studies, and insights on agentic ecommerce technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-black border-white/10 text-white flex-grow"
              />
              <button className="bg-white text-black font-bold py-2 px-6 rounded-lg hover:bg-white/90 transition-all duration-300 btn-glow">
                Subscribe
              </button>
            </div>
            
            <p className="text-white/40 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
