import React from "react";
import { motion } from "framer-motion";
import { Microscope, Lightbulb, Cpu } from "lucide-react";

interface ResearchProps {
  data?: {
    title?: string;
    summary?: string;
    image?: string;
  };
}

const TextileResearch: React.FC<ResearchProps> = ({ data }) => {
  const highlights = [
    { icon: Microscope, title: "Bio-based Polymers", desc: "Next-gen sustainable materials" },
    { icon: Lightbulb, title: "Smart Fabric Integration", desc: "Intelligent textile systems" },
    { icon: Cpu, title: "Advanced Fiber Spinning", desc: "Precision manufacturing tech" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="research">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {data?.title || "Research & Development"}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {data?.summary ||
              "Our R&D focuses on the intersection of biotechnology, artificial intelligence, and sustainable design — developing fabrics that monitor vitals, react to environmental stimuli, and optimize human performance."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {data?.image ? (
                <img
                  src={data.image}
                  alt="Research Lab"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-[400px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🔬</div>
                    <p className="text-2xl font-bold text-gray-800">Research & Innovation</p>
                    <p className="text-gray-600 mt-2">Pioneering the Future</p>
                  </div>
                </div>
              )}
              {/* Decorative Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border-4 border-blue-100">
              <p className="text-4xl font-bold text-blue-600">R&D</p>
              <p className="text-sm text-gray-600">Innovation Lab</p>
            </div>
          </motion.div>

          {/* Highlights Cards */}
          <div className="space-y-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-start gap-4 p-6 bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TextileResearch);
