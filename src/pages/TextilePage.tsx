import React, { useEffect } from "react";
import { useContentStore } from "../store/contentStore";
import TextileNavbar from "../components/textile/TextileNavbar";
import TextileHero from "../components/textile/TextileHero";
import Products from "../components/textile/TextileProduct";
import Sustainability from "../components/textile/TextileSustainability";  
import AboutTextile from "../components/textile/AboutTextile";  
import Research from "../components/textile/TextileResearch";  
import Press from "../components/textile/TextilePress";  
import TextileFooter from "../components/textile/TextileFooter";

const TextilePage: React.FC = () => {
  const { content, fetchContent, loading, error } = useContentStore();

  useEffect(() => {
    fetchContent("textile");
  }, [fetchContent]);

  const textile = content?.textile || {};

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-white text-red-500">
        Error loading Textile Page: {error}
      </div>
    );

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <TextileNavbar data={textile.navbar} />
      <TextileHero data={textile.hero} />
      <AboutTextile data={textile.about} />
      <Products data={textile.products} />
      <Sustainability data={textile.sustainability} />
      <Research data={textile.research} />
      <Press data={textile.press} />
      <TextileFooter data={{ ...textile.footer, contactEmail: textile.footer?.email }} />
    </div>
  );
};

export default TextilePage;
