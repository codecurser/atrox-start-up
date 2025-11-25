import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Globe } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  website?: string;
}

interface TeamSectionProps {
  data?: {
    title?: string;
    description?: string;
    members?: TeamMember[];
  };
}

const HomeTeam: React.FC<TeamSectionProps> = ({ data }) => {
  if (!data) return null;

  const {
    title = "Meet Our Team",
    description = "We bring together innovation, design, and purpose to create solutions that empower people and the planet.",
    members = [],
  } = data;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">{title}</h2>
          {description && (
            <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-gray-50 rounded-3xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 max-w-xs w-full"
            >
              {/* Sticker Badge */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg transform rotate-12 border-2 border-white z-10 group-hover:rotate-0 transition-transform duration-300">
                {member.name.charAt(0)}
              </div>

              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:scale-105 transition-transform duration-500">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-4xl font-bold">
                    {member.name ? member.name[0] : "?"}
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
              <p className="text-accent font-medium mb-6">{member.role}</p>

              <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white shadow-sm hover:text-accent hover:shadow-md transition-all"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white shadow-sm hover:text-accent hover:shadow-md transition-all"
                  >
                    <Globe size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTeam;
