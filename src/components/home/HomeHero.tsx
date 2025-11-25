import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  data?: {
    title?: string;
    subtitle?: string;
    description?: string;
    backgroundImage?: string;
    ctaText1?: string;
    ctaText2?: string;
  };
}

const HomeHero: React.FC<HeroProps> = ({ data }) => {
  if (!data) return null;

  const {
    title,
    subtitle,
    description,
    backgroundImage,
    ctaText1,
    ctaText2,
  } = data;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary-dark">
      {/* Background Image with Parallax/Zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Overlay */}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            {title}
          </motion.h1>
        )}

        {subtitle && (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-accent-glow font-medium mb-8"
          >
            {subtitle}
          </motion.h2>
        )}

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {ctaText1 && (
            <button className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-accent/50 text-lg">
              {ctaText1}
            </button>
          )}
          {ctaText2 && (
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold transition-all text-lg">
              {ctaText2}
            </button>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HomeHero;
