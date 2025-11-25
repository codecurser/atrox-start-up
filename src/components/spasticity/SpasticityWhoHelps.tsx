import React from "react";
import { motion } from "framer-motion";
import { Heart, UserCheck, Award } from "lucide-react";

interface WhoHelpsProps {
  data?: {
    title?: string;
    beneficiaries?: { name: string; description: string }[];
  };
}

const SpasticityWhoHelps: React.FC<WhoHelpsProps> = ({ data }) => {
  const beneficiaries = data?.beneficiaries || [
    {
      name: "Patients with Cerebral Palsy",
      description: "Improving mobility and comfort through adaptive fabrics.",
    },
    {
      name: "Stroke Survivors",
      description: "Supporting recovery with smart rehabilitation tools.",
    },
    {
      name: "Athletes & Fitness Enthusiasts",
      description: "Enhancing performance and preventing injuries.",
    },
  ];

  const icons = [Heart, UserCheck, Award];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {data?.title || "Who We Help"}
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {beneficiaries.map((person, i) => {
            const Icon = icons[i] || Heart;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="group bg-gradient-to-br from-white to-slate-50 p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{person.name}</h3>
                <p className="text-secondary leading-relaxed">{person.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpasticityWhoHelps;
