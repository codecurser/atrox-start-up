import React, { useState } from "react";
import { motion } from "framer-motion";
import PartnerForm from "../shared/PartnerForm";

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
  const [isPartnerFormOpen, setIsPartnerFormOpen] = useState(false);
  
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
          willChange: 'transform',
        }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Overlay */}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
            style={{ willChange: 'transform, opacity' }}
          >
            {title}
          </motion.h1>
        )}

        {subtitle && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-accent-glow font-medium mb-8"
            style={{ willChange: 'transform, opacity' }}
          >
            {subtitle}
          </motion.h2>
        )}

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ willChange: 'transform, opacity' }}
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {ctaText1 && (
            <button 
              onClick={() => {
                document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-accent/50 text-lg"
            >
              {ctaText1}
            </button>
          )}
          {ctaText2 && (
            <button 
              onClick={() => setIsPartnerFormOpen(true)}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold transition-all text-lg"
            >
              {ctaText2}
            </button>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
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

      {/* Partner Form Modal */}
      <PartnerForm 
        isOpen={isPartnerFormOpen} 
        onClose={() => setIsPartnerFormOpen(false)} 
      />
    </section>
  );
};

export default HomeHero;
