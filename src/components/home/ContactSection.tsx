import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import PartnerForm from "../shared/PartnerForm";

interface ContactProps {
  data?: {
    title?: string;
    email?: string;
    phone?: string;
    address?: string;
  };
}

const ContactSection: React.FC<ContactProps> = ({ data }) => {
  const [isPartnerFormOpen, setIsPartnerFormOpen] = useState(false);

  const {
    title = "Get In Touch",
    email = "ataryo.info@gmail.com",
    phone = "+91 XXX XXX XXXX",
    address = "Bengaluru, India",
  } = data || {};

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-dark via-slate-900 to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions or want to partner with us? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a href={`mailto:${email}`} className="text-lg hover:text-accent transition-colors">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <p className="text-lg">{phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-lg">{address}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-accent/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-accent/30"
          >
            <h3 className="text-2xl font-semibold mb-4">Interested in Partnering?</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We're always looking for innovative partners to collaborate with. 
              Whether you're interested in our NeuroAssistive™ or Sustainex™ solutions, 
              let's explore how we can work together.
            </p>
            
            <button
              onClick={() => setIsPartnerFormOpen(true)}
              className="w-full px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-accent/50 flex items-center justify-center gap-2 text-lg"
            >
              <Send className="w-5 h-5" />
              Send Partnership Inquiry
            </button>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400 text-center">
                Or email us directly at{" "}
                <a href={`mailto:${email}`} className="text-accent hover:underline">
                  {email}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partner Form Modal */}
      <PartnerForm 
        isOpen={isPartnerFormOpen} 
        onClose={() => setIsPartnerFormOpen(false)} 
      />
    </section>
  );
};

export default ContactSection;
