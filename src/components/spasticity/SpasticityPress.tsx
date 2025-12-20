import React from "react";
import { motion } from "framer-motion";
import { Newspaper, ArrowUpRight } from "lucide-react";

interface PressProps {
  data?: {
    title?: string;
    description?: string;
    articles?: { headline: string; link?: string }[];
  };
}

const SpasticityPress: React.FC<PressProps> = ({ data }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            Media Coverage
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {data?.title || "Press & Insights"}
          </h2>
          {data?.description && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              {data.description}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data?.articles && data.articles.length > 0 ? (
            data.articles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative bg-white/80 backdrop-blur-md p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] transition-all duration-500 border-2 border-white/60 hover:border-blue-200 hover:-translate-y-2 overflow-hidden"
              >
                 {/* Animated Gradient Background on Hover */}
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                 
                 {/* Gradient border glow */}
                 <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20 blur-xl" />

                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/40 group-hover:scale-110 group-hover:rotate-6">
                    <Newspaper size={28} />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors leading-snug">
                      {article.headline}
                    </h3>
                  </div>
                </div>
                
                {article.link && (
                  <div className="flex justify-end">
                      <a
                        href={article.link}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900 font-semibold group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-500 shadow-md hover:shadow-lg"
                      >
                        Read Full Article
                        <ArrowUpRight size={18} />
                      </a>
                  </div>
                )}
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-[4rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 bg-white rounded-3xl shadow-sm border border-gray-100">
              <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No press releases available at this time.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpasticityPress;
