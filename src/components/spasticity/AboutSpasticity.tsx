import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

interface AboutProps {
  data?: {
    title?: string;
    vision?: string;
    mission?: string;
    description?: string;
    image?: string;
  };
}

const AboutSpasticity: React.FC<AboutProps> = ({ data }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-sky-50 relative overflow-hidden" id="about">
       {/* Decorative Background Elements */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] -z-10" />
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600 mb-8 leading-tight">
              {data?.title || "About ModeNeu™"}
            </h2>
            {data?.description && (
              <p className="text-lg text-gray-700 leading-relaxed mb-10 font-medium">
                {data.description}
              </p>
            )}

            {/* Key Points */}
            <div className="space-y-6">
              {data?.vision && (
                <div className="group relative flex gap-5 p-6 bg-white/70 backdrop-blur-xl rounded-3xl border-2 border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgb(59,130,246,0.3)] transition-all duration-500 overflow-hidden">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-[0_10px_25px_rgba(59,130,246,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Eye size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">{data.vision}</p>
                  </div>
                </div>
              )}
              {data?.mission && (
                <div className="group relative flex gap-5 p-6 bg-white/70 backdrop-blur-xl rounded-3xl border-2 border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgb(59,130,246,0.3)] transition-all duration-500 overflow-hidden">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 flex items-center justify-center text-white shadow-[0_10px_25px_rgba(59,130,246,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Target size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">{data.mission}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={data?.image || "/spasticity-care.png"}
                alt="About Spasticity - Patient Care"
                className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                style={{ willChange: 'transform' }}
              />
               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
            </div>
            {/* Decorative blob */}
            <div className="absolute -top-12 -right-12 w-72 h-72 bg-gradient-to-br from-purple-400/30 to-blue-400/30 rounded-full blur-3xl -z-10 animate-pulse" />
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSpasticity;
