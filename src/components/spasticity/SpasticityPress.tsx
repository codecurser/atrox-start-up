import React from "react";
import { motion } from "framer-motion";
import { Newspaper, ExternalLink } from "lucide-react";

interface PressProps {
  data?: {
    title?: string;
    articles?: { title: string; excerpt: string; link?: string; date?: string }[];
  };
}

const SpasticityPress: React.FC<PressProps> = ({ data }) => {
  const articles = data?.articles || [
    {
      title: "Breakthrough in Spasticity Treatment",
      excerpt: "New wearable technology shows promising results in clinical trials.",
      date: "2024-03-15",
    },
    {
      title: "AI-Powered Rehabilitation Tools",
      excerpt: "Machine learning enhances personalized therapy outcomes.",
      date: "2024-02-20",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {data?.title || "Press & Publications"}
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <Newspaper size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  {article.date && (
                    <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  )}
                </div>
              </div>
              <p className="text-secondary leading-relaxed mb-4">{article.excerpt}</p>
              {article.link && (
                <a
                  href={article.link}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                  Read More
                  <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpasticityPress;
