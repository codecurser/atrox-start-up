import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface InnovationProps {
  data?: {
    title?: string;
    description?: string;
    items?: { name: string; description: string; image?: string }[];
    applications?: string[];
  };
}

const SpasticityInnovation: React.FC<InnovationProps> = ({ data }) => {
  const items = data?.items || [];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="innovation">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-100/40 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 font-bold text-sm tracking-wide uppercase">Our Innovation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {data?.title || "Products & Applications"}
          </h2>
          {data?.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {data.description}
            </p>
          )}
        </motion.div>

        {/* Product Cards */}
        {items.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {items.map((item, index) => {
              // Assign product images
              const productImages = ['/modeneu-device.png', '/therapy-device.png', '/medical-system.png'];
              const itemImage = item.image || productImages[index % productImages.length];
              
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_25px_60px_rgba(59,130,246,0.35)] transition-all duration-500 border-2 border-gray-100 hover:border-blue-200 flex flex-col h-full hover:-translate-y-1"
              >
                {/* Image Area */}
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
                  <img
                    src={itemImage}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                  
                  {/* Animated gradient border on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-pulse opacity-30" />
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                     <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                      {item.name}
                    </h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full group-hover:w-24 transition-all duration-300 shadow-lg shadow-blue-500/50" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col justify-between bg-gradient-to-b from-white to-gray-50/50">
                  <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-semibold group/link cursor-pointer">
                    <span className="group-hover/link:underline">View Details</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-[4rem] pointer-events-none" />
              </motion.div>
            )})}
          </div>
        )}

        {data?.applications && data.applications.length > 0 && (
          <div className="mt-32 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h3 className="text-3xl font-bold text-gray-900 relative z-10 inline-block">
                Key Applications
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
              </h3>
            </motion.div>

            <div className="relative w-full">
               {/* Gradient Masks for Fade Effect */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

              <div className="flex overflow-hidden">
                <motion.div
                  className="flex gap-6 flex-nowrap"
                  animate={{ x: "-50%" }}
                  transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {[...data.applications, ...data.applications, ...data.applications].map((app, index) => (
                    <div
                      key={index}
                      className="group relative h-40 w-64 flex-shrink-0 flex flex-col justify-center items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] hover:border-blue-100 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/30 rounded-2xl transition-all duration-500" />
                      
                      {/* Decorative Icon */}
                      <div className="mb-4 p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                        <Sparkles className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 transition-colors" />
                      </div>

                      <span className="text-lg font-bold text-gray-700 text-center group-hover:text-blue-800 transition-colors relative z-10">
                        {app}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(SpasticityInnovation);
