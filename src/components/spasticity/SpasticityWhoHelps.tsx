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
    <section className="py-28 bg-gradient-to-b from-white to-blue-50/40 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
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
            {data?.title || "Who It Helps"}
          </h2>
          {data?.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                  className="group relative bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-blue-100/50 hover:border-accent/30 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-accent/0 group-hover:from-blue-50/40 group-hover:to-accent/5 transition-all duration-300" />
                  
                  {/* Icon */}
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-accent via-blue-500 to-blue-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-accent/20">
                    <Icon size={32} />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                      {person.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {person.role}
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
      </div>
    </section>
  );
};

export default React.memo(SpasticityWhoHelps);
