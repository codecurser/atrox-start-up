import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface InvestmentProps {
  data?: {
    title?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    image?: string;
  };
}

const HomeInvestment: React.FC<InvestmentProps> = ({ data }) => {
  if (!data) return null;

  const {
    title = "Investment Opportunities",
    description = "",
    ctaText = "",
    ctaLink = "",
    image = "",
  } = data;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary-dark rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent mb-8 backdrop-blur-sm">
                <TrendingUp size={32} />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {title}
              </h2>
              
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                {description}
              </p>

              {ctaLink && (
                <Link
                  to={ctaLink}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-accent/50 group"
                >
                  {ctaText} 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {image && (
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInvestment;
