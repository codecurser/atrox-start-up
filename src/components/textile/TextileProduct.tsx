import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface ProductsProps {
  data?: {
    title?: string;
    description?: string;
    features?: string[];
    items?: { title: string; desc: string; image: string }[];
    applications?: string[];
  };
}

const TextileProduct: React.FC<ProductsProps> = ({ data }) => {
  const products = data?.items || [];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="products">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-green-100/40 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-sm border border-green-100 rounded-full shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-green-800 font-bold text-sm tracking-wide uppercase">Our Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {data?.title || "Product & Application"}
          </h2>
          {data?.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {data.description}
            </p>
          )}
        </motion.div>

        {/* Product Cards */}
        {products.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {products.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_25px_60px_rgba(16,185,129,0.35)] transition-all duration-500 border-2 border-gray-100 hover:border-green-200 flex flex-col h-full hover:-translate-y-2"
              >
                {/* Image Area */}
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                  
                  {/* Animated gradient border on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 animate-pulse opacity-30" />
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                     <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                      {item.title}
                    </h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full group-hover:w-24 transition-all duration-300 shadow-lg shadow-green-500/50" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col justify-between bg-gradient-to-b from-white to-gray-50/50">
                  <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center text-green-600 font-semibold group/link cursor-pointer">
                    <span className="group-hover/link:underline">View Details</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/10 to-transparent rounded-bl-[4rem] pointer-events-none" />
              </motion.div>
            ))}
          </div>
        )}

        {/* Applications Section */}
        {data?.applications && data.applications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2.5rem] bg-gradient-to-br from-gray-900 to-green-900 p-12 text-center shadow-2xl relative overflow-hidden"
          >
             {/* Abstract Shapes */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />

            <h3 className="text-3xl font-bold text-white mb-10 relative z-10">
              Key Applications
            </h3>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              {data.applications.map((app, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-green-900 transition-all cursor-default shadow-lg"
                >
                  {app}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default React.memo(TextileProduct);
