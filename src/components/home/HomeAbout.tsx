import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Quote } from "lucide-react";

interface AboutProps {
  data?: {
    title?: string;
    vision?: string;
    mission?: string;
    statement?: string;
    image?: string;
  };
}

const HomeAbout: React.FC<AboutProps> = ({ data }) => {
  if (!data) return null;
  const { title, vision, mission, statement, image } = data;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {image && (
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <img
                  src={image}
                  alt={title || "About Us"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            )}
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                {title}
              </h2>
            )}

            <div className="space-y-8">
              {vision && (
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <Eye size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Our Vision</h3>
                    <p className="text-secondary leading-relaxed">{vision}</p>
                  </div>
                </div>
              )}

              {mission && (
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
                    <p className="text-secondary leading-relaxed">{mission}</p>
                  </div>
                </div>
              )}

              {statement && (
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-accent">
                  <Quote className="text-accent/40 mb-2" size={24} />
                  <p className="text-lg text-primary font-medium italic">"{statement}"</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
