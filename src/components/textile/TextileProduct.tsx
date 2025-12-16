import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";

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
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-semibold text-sm">Our Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {data?.title || "Product & Application"}
          </h2>
          {data?.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {data.description}
            </p>
          )}
        </motion.div>

        {/* Features Grid */}
        {data?.features && data.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {data.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Products Cards */}
        {products.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {products.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-500 rounded-2xl transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        )}

        {/* Applications */}
        {data?.applications && data.applications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              All Applications
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {data.applications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-6 py-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full border border-green-500/20 hover:border-green-500/40 transition-all"
                >
                  <span className="text-gray-700 font-medium">{app}</span>
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
