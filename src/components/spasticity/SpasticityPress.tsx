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
  const pressData = data?.articles || [];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="press">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {data?.title || "Press & Media"}
          </h2>
          {data?.description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {data.description}
            </p>
          )}
        </motion.div>

        {/* Press Cards */}
        {pressData.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressData.map((press, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Icon Header */}
                <div className="p-6 pb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Newspaper className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {press.headline}
                  </h3>

                  {/* Read More Link */}
                  {press.link && (
                    <a
                      href={press.link}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all group/link"
                    >
                      Read Article
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>

                {/* Decorative Bottom Border */}
                <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-12">
            <Newspaper className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p className="text-lg">No press releases available at this time.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(SpasticityPress);
