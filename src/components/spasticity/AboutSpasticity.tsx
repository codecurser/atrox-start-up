import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

interface AboutProps {
  data?: {
    title?: string;
    vision?: string;
    mission?: string;
    description?: string;
    image?: string;
  };
}

const AboutSpasticity: React.FC<AboutProps> = ({ data }) => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {data?.title || "About NeuroAssistive™"}
            </h2>
            {data?.description && (
              <p className="text-lg text-secondary leading-relaxed mb-8">
                {data.description}
              </p>
            )}

            {/* Key Points */}
            <div className="space-y-6">
              {data?.vision && (
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <Eye size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Our Vision</h3>
                    <p className="text-secondary">{data.vision}</p>
                  </div>
                </div>
              )}
              {data?.mission && (
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
                    <p className="text-secondary">{data.mission}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              {data?.image ? (
                <img
                  src={data.image}
                  alt="About Spasticity"
                  className="w-full h-[450px] object-cover"
                  loading="lazy"
                  style={{ willChange: 'opacity' }}
                />
              ) : (
                <div className="w-full h-[450px] bg-gradient-to-br from-primary/20 via-accent/10 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏥</div>
                    <p className="text-xl font-semibold text-primary">Spasticity Care</p>
                  </div>
                </div>
              )}
            </div>
            {/* Decorative blob */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSpasticity;
