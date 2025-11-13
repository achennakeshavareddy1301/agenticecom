
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import agenticLogo from '@/assets/agentic-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Logo and About */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={agenticLogo} 
                alt="AgenticEcom - Agentic Ecommerce Solutions" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-white/60 mb-4 max-w-md">
              Pioneering the future of ecommerce through agentic AI research and full-scale business solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/60 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/60 hover:text-white transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/references" className="text-white/60 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/booking" className="text-white/60 hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:info@agenticecom.com" 
                  className="text-white/60 hover:text-white transition-colors flex items-center"
                >
                  <Mail size={16} className="mr-2" />
                  agenticecom@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © {currentYear} AgenticEcom. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/" className="text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-white/40 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
