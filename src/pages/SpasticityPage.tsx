import React, { useEffect } from "react";
import { useContentStore } from "../store/contentStore";
import SpasticityNavbar from "../components/spasticity/SpasticityNavbar";
import SpasticityHero from "../components/spasticity/SpasticityHero";
import AboutSpasticity from "../components/spasticity/AboutSpasticity";
import SpasticityInnovation from "../components/spasticity/SpasticityInnovation";
import SpasticityWhoHelps from "../components/spasticity/SpasticityWhoHelps";
import SpasticityResearch from "../components/spasticity/SpasticityResearch";
import SpasticityPress from "../components/spasticity/SpasticityPress";
import SpasticityFooter from "../components/spasticity/SpasticityFooter";

const SpasticityPage: React.FC = () => {
  const { content, fetchContent, loading, error } = useContentStore();

  useEffect(() => {
    fetchContent("spasticity");
  }, [fetchContent]);

  const spasticity = content?.spasticity || {};

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-white text-red-500">
        Error loading Spasticity Page: {error}
      </div>
    );

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <SpasticityNavbar data={spasticity.navbar} />
      <SpasticityHero data={spasticity.hero} />
      <AboutSpasticity data={spasticity.about} />
      <SpasticityInnovation data={spasticity.innovation} />
      <SpasticityWhoHelps data={spasticity.whoItHelps} />
      <SpasticityResearch data={spasticity.research} />
      <SpasticityPress data={spasticity.press} />
      <SpasticityFooter data={{ ...spasticity.footer, contactEmail: spasticity.footer?.email }} />
    </div>
  );
};

export default SpasticityPage;
