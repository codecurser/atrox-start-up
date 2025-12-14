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

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary-dark">
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          willChange: 'transform',
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"
          animate={{
            background: [
              "linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
              "linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
              "linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Glow Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
            style={{ willChange: 'transform, opacity' }}
          >
            {title}
          </motion.h1>
        )}

        {subtitle && (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-accent-glow font-medium mb-8"
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 30px rgba(59, 130, 246, 0.8)",
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {subtitle}
            </motion.span>
          </motion.h2>
        )}

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ willChange: 'transform, opacity' }}
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {ctaText1 && (
            <motion.button 
              onClick={() => {
                document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-accent/50 text-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">{ctaText1}</span>
            </motion.button>
          )}
          {ctaText2 && (
            <motion.button 
              onClick={() => setIsPartnerFormOpen(true)}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold transition-all text-lg"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              {ctaText2}
            </motion.button>
          )}
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(255,255,255,0.2)",
              "0 0 0 10px rgba(255,255,255,0)",
              "0 0 0 0 rgba(255,255,255,0.2)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
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
