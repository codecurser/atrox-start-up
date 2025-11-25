import React from "react";
import { Linkedin, Twitter, Mail, MapPin } from "lucide-react";

interface FooterProps {
  data?: {
    description?: string;
    email?: string;
    address?: string;
  };
}

const SpasticityFooter: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Ataryo Spasticity</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              {data?.description || "Pioneering innovative solutions for spasticity treatment and improving lives."}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#innovation" className="text-gray-300 hover:text-accent transition-colors">Innovation</a></li>
              <li><a href="#research" className="text-gray-300 hover:text-accent transition-colors">Research</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-accent transition-colors">About</a></li>
              <li><a href="/" className="text-gray-300 hover:text-accent transition-colors">Home</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-accent mt-1" />
                <span className="text-gray-300">{data?.email || "spasticity@ataryo.com"}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent mt-1" />
                <span className="text-gray-300">{data?.address || "Medical Innovation Center"}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Get the latest research updates and innovations.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
              />
              <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Ataryo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SpasticityFooter;
