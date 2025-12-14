import React from "react";
import { motion } from "framer-motion";
import { Heart, UserCheck, Award, Users, Activity, Stethoscope } from "lucide-react";

interface WhoHelpsProps {
  data?: {
    title?: string;
    description?: string;
    people?: { name: string; role: string }[];
  };
}

const SpasticityWhoHelps: React.FC<WhoHelpsProps> = ({ data }) => {
  const people = data?.people || [];
  const icons = [Heart, UserCheck, Award, Users, Activity, Stethoscope];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {data?.title || "Who It Helps"}
          </h2>
          {data?.description && (
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {data.description}
            </p>
          )}
        </motion.div>

        {/* People Cards */}
        {people.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {people.map((person, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-blue-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{person.role}</p>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200/20 to-transparent rounded-bl-full" />
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(SpasticityWhoHelps);
