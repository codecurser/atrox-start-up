import React from "react";
import { motion } from "framer-motion";
import { Activity, Cpu, Heart, Zap, Brain, Gauge, Sparkles } from "lucide-react";

interface InnovationProps {
  data?: {
    title?: string;
    description?: string;
    items?: { name: string; description: string; icon?: string }[];
    applications?: string[];
  };
}

const SpasticityInnovation: React.FC<InnovationProps> = ({ data }) => {
  const items = data?.items || [];
  const icons = [Activity, Cpu, Heart, Zap, Brain, Gauge];

  return (
    <section className="py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden" id="innovation">
      {/* Subtle Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold text-sm">Innovation & Technology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {data?.title || "Our Innovation — Products & Applications"}
          </h2>
          {data?.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {data.description}
            </p>
          )}
        </motion.div>

        {/* Innovation Cards */}
        {items.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {items.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-blue-100/50 hover:border-accent/30 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-accent/0 group-hover:from-blue-50/50 group-hover:to-accent/5 transition-all duration-300" />
                  
                  {/* Icon */}
                  <div className="relative w-16 h-16 bg-gradient-to-br from-accent via-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-accent/20">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-xl" />
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Applications Section */}
        {data?.applications && data.applications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              Key Applications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.applications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative flex items-center gap-4 p-5 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-accent/5 transition-all border border-blue-100/50 hover:border-accent/30 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-accent to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-700 font-semibold text-sm group-hover:text-accent transition-colors">
                    {app}
                  </span>
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
