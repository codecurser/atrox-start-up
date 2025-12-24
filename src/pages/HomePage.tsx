import React, { useEffect } from "react";
import { useContentStore } from "../store/contentStore";
import HomeNavbar from "../components/home/HomeNavbar";
import HomeFooter from "../components/home/HomeFooter";
import HomeHero from "../components/home/HomeHero";
import HomeAbout from "../components/home/HomeAbout";
import HomeCoreValues from "../components/home/HomeCoreValues";
import HomeTeam from "../components/home/HomeTeam";
import HomePartnership from "../components/home/HomePartnership";
import HomeInvestment from "../components/home/HomeInvestment";
import WhyWeExist from "../components/home/WhyWeExist";
import ContactSection from "../components/home/ContactSection";
import CareersSection from "../components/home/CareersSection";
import SolutionsSlider from "../components/home/SolutionsSlider";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  const { content, fetchContent, loading, error } = useContentStore();

  useEffect(() => {
    fetchContent("home");

    // Removes page side-scroll
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflowX = "auto";
    };
  }, [fetchContent]);

  const home = content?.home || {};
  const partnerships = home.partnershipsAndInvestors?.partnership;
  const investment = home.partnershipsAndInvestors?.investment;

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary-dark via-slate-900 to-primary-dark">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-4 border-accent border-t-transparent rounded-full"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-white text-lg font-medium"
        >
          Loading Experience...
        </motion.p>
        <motion.div
          className="mt-4 flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-accent rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-white text-red-500">
        Error loading Home Page: {error}
      </div>
    );

  return (
    <motion.div
      className="bg-white text-gray-900 overflow-x-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating Decorative Elements */}
      <div className="fixed top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: "6s" }} />
      
      <HomeNavbar data={home.navbar} />
      
      <HomeHero 
        data={{
          ...home.hero,
          backgroundImage: "/home-hero-bg.jpg"
        }} 
      />
      
      <SolutionsSlider />
      
      <HomeAbout 
        data={{
          ...home.about,
          image: "/about-us.jpg"
        }} 
      />
      
      <HomeCoreValues data={home.coreValues} />
      
      <WhyWeExist data={home.whyWeExist} />
      
      {partnerships && (
        <HomePartnership 
          data={{
            ...partnerships,
            image: "https://images.pexels.com/photos/3184649/pexels-photo-3184649.jpeg"
          }} 
        />
      )}
      
      {investment && (
        <HomeInvestment 
          data={{
            ...investment,
            image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg"
          }} 
        />
      )}
      
      <CareersSection />
      
      <ContactSection data={{ email: home.footer?.email }} />
      
      <HomeTeam data={home.team} />
      
      <HomeFooter data={{ ...home.footer, contactEmail: home.footer?.email }} />
    </motion.div>
  );
};

export default HomePage;



