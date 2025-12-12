import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Rocket, Heart } from "lucide-react";

const CareersSection: React.FC = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Work on cutting-edge textile technology that makes a real difference",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Join a team of passionate innovators and problem solvers",
    },
    {
      icon: Heart,
      title: "Purpose-Driven",
      description: "Create solutions that improve lives and protect the planet",
    },
    {
      icon: Briefcase,
      title: "Growth Opportunities",
      description: "Develop your skills in a fast-growing startup environment",
    },
  ];

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Be part of a mission to revolutionize textiles for healthcare, sustainability, and human mobility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-accent/50 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-accent to-purple-600 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We're always looking for talented individuals who share our vision. 
            Send us your resume and let's explore opportunities together.
          </p>
          <a
            href="mailto:ataryo.info@gmail.com?subject=Career Opportunity at Ataryo"
            className="inline-block px-8 py-4 bg-white text-accent rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg text-lg"
          >
            Send Your Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
