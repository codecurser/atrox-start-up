import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplet, Recycle, Heart } from "lucide-react";

interface SustainabilityProps {
  data?: {
    title?: string;
    description?: string;
    points?: string[];
    tagline?: string;
    ctaText?: string;
  };
}

const TextileSustainability: React.FC<SustainabilityProps> = ({ data }) => {
  const icons = [Leaf, Droplet, Recycle, Heart];

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden" id="sustainability">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {data?.title || "Sustainability & Impact"}
          </h2>
          {data?.description && (
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {data.description}
            </p>
          )}
        </motion.div>

        {/* Impact Cards */}
        {data?.points && data.points.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {data.points.map((point, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 leading-relaxed font-medium">{point}</p>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-200/20 to-transparent rounded-bl-full" />
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl max-w-4xl mx-auto mb-12"
          >
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Our textile development follows a zero-waste philosophy. From water-efficient dyeing
              processes to biodegradable materials, we focus on minimizing carbon footprints
              while ensuring superior quality and durability.
            </p>
          </motion.div>
        )}

        {/* Tagline */}
        {data?.tagline && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full shadow-lg">
              <p className="text-xl font-bold">{data.tagline}</p>
            </div>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2">
            {data?.ctaText || "Explore Our Eco Journey"}
            <Leaf className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(TextileSustainability);
