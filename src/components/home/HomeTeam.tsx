import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Dribbble } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  education?: string;
  experience?: string;
  image?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    dribbble?: string;
  };
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
    title = "Our Founders",
    description = "Ataryo is led by visionary founders with expertise in design innovation and advanced technology.",
    members = [],
  } = data;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Profile Image */}
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center text-white text-4xl font-bold">
                    {member.name ? member.name[0] : "?"}
                  </div>
                )}
              </div>

              {/* Name and Role */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-accent font-semibold text-lg">{member.role}</p>
                {member.education && (
                  <p className="text-gray-500 text-sm mt-1">({member.education})</p>
                )}
              </div>

              {/* Experience */}
              {member.experience && (
                <div className="mb-6">
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {member.experience}
                  </p>
                </div>
              )}

              {/* Social Links */}
              {member.social && (
                <div className="flex justify-center gap-3 pt-4 border-t border-gray-100">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-500 transition-all hover:scale-110"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-all hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-all hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {member.social.dribbble && (
                    <a
                      href={member.social.dribbble}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-50 hover:bg-pink-50 text-gray-600 hover:text-pink-500 transition-all hover:scale-110"
                      aria-label="Dribbble"
                    >
                      <Dribbble size={20} />
                    </a>
                  )}
                </div>
              )}

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(HomeTeam);
