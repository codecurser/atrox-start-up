import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Microscope, Lightbulb, Dna } from "lucide-react";

interface ResearchProps {
  data?: {
    title?: string;
    items?: { heading: string; details: string }[];
    image?: string;
  };
}

const SpasticityResearch: React.FC<ResearchProps> = ({ data }) => {
  const highlights = data?.items || [
    { heading: "Clinical Studies", details: "Ongoing research in collaboration with leading healthcare institutions." },
    { heading: "Technology Innovation", details: "Continuous development of next-generation sensing and support systems." },
  ];

  const icons = [Microscope, Lightbulb, Dna, FlaskConical];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="research">
       {/* Subtle Grid Background */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text & Cards Side */}
            <div>
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                  >
                    <div className="flex items-center gap-3 text-blue-600 font-bold mb-4">
                        <span className="w-10 h-[2px] bg-blue-600" />
                        <span className="uppercase tracking-widest text-sm">Our Research</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                      {data?.title || "Pioneering Medical Research"}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We are committed to evidence-based innovation. Our team serves at the intersection of technology and biology, ensuring every solution is backed by rigorous scientific verification.
                    </p>
                  </motion.div>

                  <div className="space-y-6">
                    {highlights.map((item, index) => {
                      const Icon = icons[index % icons.length];
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="group relative flex gap-6 p-7 bg-white rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] border-2 border-gray-100 hover:shadow-[0_15px_40px_rgba(59,130,246,0.25)] hover:border-blue-200 transition-all duration-500 overflow-hidden"
                        >
                          {/* Gradient background on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                          
                          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6">
                            <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-all duration-500" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                              {item.heading}
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-medium">{item.details}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
            </div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:h-[600px] h-[400px]"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 opacity-10" />
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={data?.image || "/research-lab.png"}
                alt="Research Laboratory"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
               {/* Overlay Content */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                   <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50">
                       <div className="flex items-center gap-3">
                           <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                           <span className="font-bold text-gray-800 text-sm">Active Clinical Trials</span>
                       </div>
                   </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(SpasticityResearch);
