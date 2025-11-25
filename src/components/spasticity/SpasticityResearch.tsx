import React from "react";
import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";

interface ResearchProps {
  data?: {
    title?: string;
    summary?: string;
    image?: string;
  };
}

const SpasticityResearch: React.FC<ResearchProps> = ({ data }) => {
  return (
    <section className="py-24 bg-slate-50" id="research">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {data?.title || "Research & Development"}
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-8" />
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
            {data?.summary ||
              "Our research focuses on developing breakthrough solutions that combine medical expertise with advanced technology to improve spasticity treatment outcomes."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
        >
          {data?.image ? (
            <img
              src={data.image}
              alt="Research"
              className="w-full h-auto object-cover"
            />
          ) : (
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 via-purple-500/10 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <FlaskConical size={64} className="mx-auto mb-4 text-accent" />
                <p className="text-2xl font-semibold text-primary">Medical Research</p>
                <p className="text-gray-600 mt-2">Scientific Innovation in Progress</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SpasticityResearch;
