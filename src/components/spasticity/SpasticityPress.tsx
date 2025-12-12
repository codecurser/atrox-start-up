import React from "react";
import { motion } from "framer-motion";
import { Newspaper, ExternalLink } from "lucide-react";

interface PressProps {
  data?: {
    title?: string;
    description?: string;
    articles?: { headline: string; link?: string }[];
  };
}

const SpasticityPress: React.FC<PressProps> = ({ data }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {data?.title || "Press & Media"}
          </h2>
          {data?.description && (
            <p className="text-lg text-secondary max-w-2xl mx-auto mb-6">
              {data.description}
            </p>
          )}
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
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
                className="group bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <Newspaper size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors capitalize">
                      {article.headline}
                    </h3>
                  </div>
                </div>
                {article.link && (
                  <a
                    href={article.link}
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                  >
                    Learn More
                    <ExternalLink size={16} />
                  </a>
                )}
              </motion.div>
            ))
          ) : (
            <div className="col-span-2 text-center text-gray-500">
              <p>No press releases available at this time.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpasticityPress;
