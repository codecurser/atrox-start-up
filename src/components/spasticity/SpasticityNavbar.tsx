import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  data?: {
    title?: string;
    links?: { label: string; href: string; internal?: boolean }[];
    showTextile?: boolean;
    showSpasticity?: boolean;
  };
}

const SpasticityNavbar: React.FC<NavbarProps> = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const links = data?.links || [];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const el = document.querySelector(href) as HTMLElement | null;
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1
          onClick={() => navigate("/")}
          className={`text-2xl font-bold cursor-pointer transition-colors ${
            scrolled ? "text-primary" : "text-white"
          }`}
        >
          {data?.title || "Ataryo"}
        </h1>

        <ul className="hidden md:flex space-x-8">
          {data?.showTextile && location.pathname !== "/textile" && (
            <li>
              <button
                onClick={() => navigate("/textile")}
                className={`font-medium transition-colors ${
                  scrolled ? "text-gray-700 hover:text-accent" : "text-white hover:text-accent"
                }`}
              >
                Textile
              </button>
            </li>
          )}
          {data?.showSpasticity && location.pathname !== "/spasticity" && (
            <li>
              <button
                onClick={() => navigate("/spasticity")}
                className={`font-medium transition-colors ${
                  scrolled ? "text-gray-700 hover:text-accent" : "text-white hover:text-accent"
                }`}
              >
                Spasticity
              </button>
            </li>
          )}
          {links.map((l, i) => (
            <li key={i}>
              {l.internal ? (
                <Link
                  to={l.href}
                  className={`font-medium transition-colors ${
                    scrolled ? "text-gray-700 hover:text-accent" : "text-white hover:text-accent"
                  }`}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.href}
                  onClick={handleAnchorClick(l.href)}
                  className={`font-medium transition-colors ${
                    scrolled ? "text-gray-700 hover:text-accent" : "text-white hover:text-accent"
                  }`}
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col space-y-4 px-6 py-6">
            {data?.showTextile && location.pathname !== "/textile" && (
              <li>
                <button
                  onClick={() => {
                    navigate("/textile");
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-800 font-medium hover:text-accent transition-colors"
                >
                  Textile
                </button>
              </li>
            )}
            {data?.showSpasticity && location.pathname !== "/spasticity" && (
              <li>
                <button
                  onClick={() => {
                    navigate("/spasticity");
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-800 font-medium hover:text-accent transition-colors"
                >
                  Spasticity
                </button>
              </li>
            )}
            {links.map((l, i) => (
              <li key={i}>
                {l.internal ? (
                  <Link
                    to={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-800 font-medium hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    onClick={handleAnchorClick(l.href)}
                    className="text-gray-800 font-medium hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default SpasticityNavbar;
