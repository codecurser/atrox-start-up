import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Microscope, Lightbulb } from "lucide-react";

interface ResearchProps {
  data?: {
    title?: string;
    items?: { heading: string; details: string }[];
    image?: string;
  };
}

const SpasticityResearch: React.FC<ResearchProps> = ({ data }) => {
  const highlights = data?.items || [
    { heading: "Clinical Studies", details: "Ongoing research in collaboration with leading healthcare institutions." },
    { heading: "Technology Innovation", details: "Continuous development of next-generation sensing and support systems." },
  ];

  const icons = [Microscope, Lightbulb];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="research">
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
            {data?.title || "Research"}
          </h2>
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
                  alt="Research"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-[400px] bg-gradient-to-br from-blue-500/20 via-accent/20 to-blue-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <FlaskConical size={80} className="mx-auto mb-4 text-accent" />
                    <p className="text-2xl font-bold text-gray-800">Medical Research</p>
                    <p className="text-gray-600 mt-2">Scientific Innovation in Progress</p>
                  </div>
                </div>
              )}
              {/* Decorative Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border-4 border-blue-100">
              <p className="text-4xl font-bold text-accent">R&D</p>
              <p className="text-sm text-gray-600">Research Lab</p>
            </div>
          </motion.div>

          {/* Highlights Cards */}
          <div className="space-y-6">
            {highlights.map((item, index) => {
              const Icon = icons[index % icons.length];
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
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-accent transition-colors">
                      {item.heading}
                    </h3>
                    <p className="text-gray-600">{item.details}</p>
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

export default React.memo(SpasticityResearch);
