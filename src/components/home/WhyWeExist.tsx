import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface WhyWeExistProps {
  data?: {
    title?: string;
    description?: string;
    highlights?: string[];
    image?: string;
  };
}

const WhyWeExist: React.FC<WhyWeExistProps> = ({ data }) => {
  const {
    title = "Why We Exist",
    description = "Our purpose lies in bridging innovation with humanity — crafting technologies that serve both people and the planet.",
    highlights = [
      "Empowering ethical innovation",
      "Driving community upliftment",
      "Sustaining ecological balance",
    ],
    image = "",
  } = data || {};

  return (
    <section className="relative py-32 overflow-hidden bg-primary-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/95 to-primary-dark/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              {title}
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              {description}
            </p>

            <ul className="space-y-6">
              {highlights.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="flex items-center gap-4 text-lg text-white"
                >
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white flex-shrink-0">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={image}
                alt="Why We Exist"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-accent/10" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;
