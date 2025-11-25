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
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-white text-red-500">
        Error loading Home Page: {error}
      </div>
    );

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <HomeNavbar data={home.navbar} />
      
      <HomeHero data={home.hero} />
      
      <HomeAbout data={home.about} />
      
      <HomeCoreValues data={home.coreValues} />
      
      <WhyWeExist data={home.whyWeExist} />
      
      {partnerships && <HomePartnership data={partnerships} />}
      
      {investment && <HomeInvestment data={investment} />}
      
      <HomeTeam data={home.team} />
      
      <HomeFooter data={home.footer} />
    </div>
  );
};

export default HomePage;
