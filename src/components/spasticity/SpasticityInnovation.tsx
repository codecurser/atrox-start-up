import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Activity, Users } from "lucide-react";

interface InnovationProps {
  data?: {
    title?: string;
    items?: { name: string; description: string; icon?: string }[];
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
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default SpasticityInnovation;
