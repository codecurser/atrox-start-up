import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface CoreValuesProps {
  data?: {
    title?: string;
    values?: { title: string; description: string }[];
  };
}

const HomeCoreValues: React.FC<CoreValuesProps> = ({ data }) => {
  if (!data) return null;
  const { title, values = [] } = data;
  const displayValues = values.slice(0, 3);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{title}</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
          </motion.div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {displayValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
              <p className="text-secondary leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCoreValues;
