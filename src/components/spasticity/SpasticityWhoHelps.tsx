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
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {data?.title || "Who It Helps"}
          </h2>
          {data?.description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                  className="group relative bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-[0_10px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(147,51,234,0.3)] transition-all duration-500 border-2 border-white/70 hover:border-purple-200 hover:bg-white hover:-translate-y-2 overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  
                  {/* Gradient glow border */}
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20 blur-xl" />
                  
                  {/* Icon/Number Badge */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-[0_10px_25px_rgba(147,51,234,0.4)] group-hover:shadow-[0_15px_35px_rgba(147,51,234,0.6)]">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium">{person.role}</p>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-100/60 to-transparent rounded-bl-[4rem] rounded-tr-[2rem] -z-10 transition-all duration-500 group-hover:from-purple-200/80 group-hover:w-32 group-hover:h-32" />
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
