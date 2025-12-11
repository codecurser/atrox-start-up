import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

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
  const products = data?.items || [
    {
      title: "Smart Fabrics",
      desc:
        "Integrating sensors within textiles for responsive performance in health and lifestyle applications.",
      image: "/images/smart-fabric.jpg",
    },
    {
      title: "Adaptive Clothing",
      desc:
        "AI-driven materials that adapt to temperature, comfort, and movement for dynamic environments.",
      image: "/images/adaptive-clothing.jpg",
    },
    {
      title: "Technical Textiles",
      desc:
        "Durable, sustainable fabrics for industrial, medical, and performance-based use cases.",
      image: "/images/technical-textiles.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-4xl font-bold text-gray-800 mb-6 text-center"
        >
          {data?.title || "Product & Application"}
        </motion.h2>
        {data?.description && (
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            {data.description}
          </p>
        )}
        
        {/* Features List */}
        {data?.features && data.features.length > 0 && (
          <div className="mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {data.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-blue-700 rounded-full flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Applications List */}
        {data?.applications && data.applications.length > 0 && (
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Applications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {data.applications.map((app, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg text-center justify-center"
                >
                  <span className="text-gray-700 font-medium">{app}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TextileProduct;
