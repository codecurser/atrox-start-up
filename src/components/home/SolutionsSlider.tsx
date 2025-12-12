import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SolutionsSlider: React.FC = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      id: "neuroassistive",
      title: "NeuroAssistive™",
      tagline: "Empowering Movement & Mobility",
      description: "Smart adaptive wearables that support individuals with neuromuscular challenges through intelligent textile engineering and real-time monitoring.",
      icon: Activity,
      gradient: "from-blue-600 to-cyan-500",
      image: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
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
      icon: Shield,
      gradient: "from-green-600 to-emerald-500",
      image: "https://images.pexels.com/photos/6461509/pexels-photo-6461509.jpeg",
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${solution.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-90`} />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 text-white h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <solution.icon className="w-8 h-8" />
                  </div>
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
                <button
                  onClick={() => navigate(solution.link)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all group-hover:gap-4"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSlider;
