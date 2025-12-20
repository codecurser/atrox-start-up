import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SolutionsSlider: React.FC = () => {
  const solutions = [
    {
      id: "neuroassistive",
      title: "ModeNeu™",
      tagline: "Empowering Movement & Mobility",
      description: "Smart adaptive wearables that support individuals with neuromuscular challenges through intelligent textile engineering and real-time monitoring.",
      gradient: "from-blue-600 to-cyan-500",
      features: [
        "Embedded textile sensors",
        "Real-time mobility analytics",
        "Adaptive compression support",
        "Day-long comfort",
      ],
      link: "/spasticity",
    },
    {
      id: "sustainex",
      title: "Sustainex™",
      tagline: "Clean, Safe & Sustainable",
      description: "Advanced antimicrobial textiles engineered for healthcare, hospitality, and industrial applications with built-in sustainability.",
      gradient: "from-green-600 to-emerald-500",
      features: [
        "Antimicrobial technology",
        "Eco-friendly fibers",
        "Long-lasting protection",
        "Washable & durable",
      ],
      link: "/textile",
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <span className="text-accent font-semibold text-sm">Our Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Innovative Textile Technologies
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our groundbreaking solutions designed to enhance lives and protect the environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{ willChange: 'transform' }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-90`} />

              {/* Content */}
              <div className="relative z-10 p-8 text-white h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-white/90 text-lg font-medium mb-4">
                    {solution.tagline}
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-white/90">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  to={solution.link}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(SolutionsSlider);
