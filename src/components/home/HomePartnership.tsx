import React from "react";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

interface PartnershipProps {
  data?: {
    title?: string;
    description?: string;
    image?: string;
  };
}

const HomePartnership: React.FC<PartnershipProps> = ({ data }) => {
  if (!data) return null;

  const {
    title = "Why partner with us",
    description = "",
    image = "/assets/partner-default.jpg",
  } = data;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
              <Handshake size={32} />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {title}
            </h2>

            <p className="text-lg text-secondary leading-relaxed mb-8">
              {description}
            </p>

            <button className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-semibold transition-all duration-300">
              Become a Partner
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative blob */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomePartnership;
