import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Activity, Users } from "lucide-react";

interface InnovationProps {
  data?: {
    title?: string;
    description?: string;
    items?: { name: string; description: string; icon?: string }[];
    applications?: string[];
  };
}

const SpasticityInnovation: React.FC<InnovationProps> = ({ data }) => {
  const items = data?.items || [
    {
      name: "Smart Rehabilitation Fabrics",
      description:
        "Integrating sensors and adaptive compression to support therapeutic recovery.",
    },
    {
      name: "Assistive Technology Devices",
      description:
        "Enhancing mobility and muscle control through intelligent wearables.",
    },
    {
      name: "Data-Driven Insights",
      description:
        "Leveraging real-time patient feedback to refine and personalize therapy.",
    },
  ];

  const icons = [Lightbulb, Activity, Users];

  return (
    <section className="py-24 bg-slate-50" id="innovation">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {data?.title || "Our Innovations"}
          </h2>
          {data?.description && (
            <p className="text-lg text-secondary max-w-3xl mx-auto mb-4">
              {data.description}
            </p>
          )}
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {items.map((item, index) => {
            const Icon = icons[index] || Lightbulb;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.name}
                </h3>
                <p className="text-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Applications Section */}
        {data?.applications && data.applications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-10 rounded-3xl shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              Applications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.applications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-accent/5 transition-colors"
                >
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-secondary font-medium">{app}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SpasticityInnovation;

