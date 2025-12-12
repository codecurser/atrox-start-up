import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroProps {
  data?: {
    title?: string;
    subtitle?: string;
    backgroundImage?: string;
    ctaText?: string;
  };
}

const TextileHero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary-dark">
      {/* Background with Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: data?.backgroundImage ? `url(${data.backgroundImage})` : undefined,
          willChange: 'transform',
        }}
        initial={{ scale: 1.03 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary-dark/70 to-accent/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", willChange: 'transform, opacity' }}
        >
          {data?.title || "Revolutionizing Smart Textiles"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ willChange: 'transform, opacity' }}
        >
          {data?.subtitle ||
            "We blend technology and sustainability to craft the next generation of intelligent, eco-friendly fabrics."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button className="group px-8 py-4 bg-accent text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
            {data?.ctaText || "Explore Innovation"}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300">
            Our Products
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TextileHero;

