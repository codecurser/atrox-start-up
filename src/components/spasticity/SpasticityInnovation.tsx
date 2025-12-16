import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle } from "lucide-react";

interface InnovationProps {
  data?: {
    title?: string;
    description?: string;
    items?: { name: string; description: string; image?: string }[];
    applications?: string[];
  };
}

const SpasticityInnovation: React.FC<InnovationProps> = ({ data }) => {
  const items = data?.items || [];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="innovation">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold text-sm">Our Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {data?.title || "Our Innovation — Products & Applications"}
          </h2>
          {data?.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {data.description}
            </p>
          )}
        </motion.div>

        {/* Product Cards */}
        {items.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                {item.image && (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                      {item.name}
                    </h3>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent rounded-2xl transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        )}

        {/* Applications Section */}
        {data?.applications && data.applications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Applications
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {data.applications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-accent/10 rounded-full border border-blue-500/20 hover:border-accent/40 transition-all"
                >
                  <span className="text-gray-700 font-medium">{app}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default React.memo(SpasticityInnovation);
