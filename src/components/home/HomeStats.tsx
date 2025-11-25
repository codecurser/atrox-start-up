import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Award, Zap } from "lucide-react";

// Counter animation component
const AnimatedCounter: React.FC<{ end: number; suffix?: string; duration?: number }> = ({ 
  end, 
  suffix = "", 
  duration = 2 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(startValue + (end - startValue) * easeOutQuart);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-5xl font-bold text-white mb-2">
      {count}{suffix}
    </div>
  );
};

const HomeStats: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: 500,
      suffix: "+",
      label: "Innovations Delivered",
      color: "from-accent to-green-600",
    },
    {
      icon: Users,
      value: 10000,
      suffix: "+",
      label: "Lives Impacted",
      color: "from-blue-500 to-primary",
      formatter: (val: number) => {
        if (val >= 1000) return `${Math.floor(val / 1000)}K`;
        return val.toString();
      },
    },
    {
      icon: Award,
      value: 15,
      suffix: "+",
      label: "Industry Awards",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-dark via-slate-900 to-primary-dark overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-accent/50 transition-all duration-300 text-center">
                  {/* Icon with Gradient */}
                  <div className="relative inline-block mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`} />
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg`}>
                      <Icon size={32} />
                    </div>
                  </div>

                  {/* Animated Value */}
                  {stat.formatter ? (
                    <AnimatedCounterWithFormatter 
                      end={stat.value} 
                      suffix={stat.suffix} 
                      formatter={stat.formatter}
                      duration={2}
                    />
                  ) : (
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix} 
                      duration={2}
                    />
                  )}

                  {/* Label */}
                  <p className="text-gray-300 font-medium">{stat.label}</p>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br ${stat.color} rounded-full opacity-0 group-hover:opacity-30 transition-opacity blur-xl`} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"
        />
      </div>
    </section>
  );
};

// Special counter for formatted values (like 10K)
const AnimatedCounterWithFormatter: React.FC<{ 
  end: number; 
  suffix?: string; 
  formatter: (val: number) => string;
  duration?: number;
}> = ({ end, suffix = "", formatter, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(startValue + (end - startValue) * easeOutQuart);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-5xl font-bold text-white mb-2">
      {formatter(count)}{suffix}
    </div>
  );
};

export default HomeStats;
