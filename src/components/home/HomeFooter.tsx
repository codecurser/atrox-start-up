import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, MapPin, ArrowRight } from "lucide-react";

interface FooterProps {
  data?: {
    companyName?: string;
    logo?: string;
    contactEmail?: string;
    address?: string;
    links?: { label: string; href: string }[];
  };
}

const HomeFooter: React.FC<FooterProps> = ({ data }) => {
  const {
    companyName = "Ataryo Labs",
    logo = "",
    contactEmail = "hello@ataryolabs.com",
    address = "Bengaluru, India",
    links = [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Contact", href: "#" },
    ],
  } = data || {};

  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-purple-500 to-accent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            {logo ? (
              <img src={logo} alt={companyName} className="h-12 mb-6" />
            ) : (
              <h2 className="text-3xl font-bold mb-6">{companyName}</h2>
            )}
            <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-8">
              Empowering innovation through technology, creativity, and purpose. Building a better future together.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {links.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${contactEmail}`} className="text-gray-400 hover:text-accent transition-colors flex items-center gap-3">
                  <Mail size={20} />
                  {contactEmail}
                </a>
              </li>
              <li className="text-gray-400 flex items-center gap-3">
                <MapPin size={20} />
                {address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
