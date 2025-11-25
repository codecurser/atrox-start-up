import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useContentStore } from "../../store/contentStore";
import { Menu, X, User, LogOut } from "lucide-react";

interface NavbarProps {
  data?: {
    title?: string;
    links?: { label: string; href: string }[];
    showTextile?: boolean;
    showSpasticity?: boolean;
  };
}

const HomeNavbar: React.FC<NavbarProps> = ({ data }) => {
  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useContentStore();
  const location = useLocation();

  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    const success = await login(email, password);
    setLoading(false);
    if (success) {
      setShowLogin(false);
      navigate("/admin");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navLinks = [
    ...(data?.showTextile ? [{ label: "Textile", href: "/textile" }] : []),
    ...(data?.showSpasticity ? [{ label: "Spasticity", href: "/spasticity" }] : []),
    ...(data?.links || []),
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-2xl font-bold cursor-pointer tracking-tight ${
              scrolled ? "text-primary" : "text-white" // Assuming hero has dark bg, otherwise adjust
            }`}
            onClick={() => navigate("/")}
          >
            {data?.title || "ATARYO"}
          </motion.h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => navigate(link.href)}
                className={`font-medium transition-colors hover:text-accent ${
                  scrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                } ${location.pathname === link.href ? "text-accent" : ""}`}
              >
                {link.label}
              </button>
            ))}

            {!isAuthenticated ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLogin(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                  scrolled
                    ? "bg-primary text-white hover:bg-primary-light"
                    : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                }`}
              >
                <User size={18} />
                <span>Admin</span>
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all font-medium"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </motion.button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <button
                  key={i}
                  onClick={() => {
                    navigate(link.href);
                    setMobileMenuOpen(false);
                  }}
                  className="text-2xl font-semibold text-gray-800 text-left"
                >
                  {link.label}
                </button>
              ))}
              <div className="h-px bg-gray-100 w-full my-4" />
              {!isAuthenticated ? (
                <button
                  onClick={() => {
                    setShowLogin(true);
                    setMobileMenuOpen(false);
                  }}
                  className="text-xl font-medium text-primary flex items-center gap-2"
                >
                  <User size={20} /> Admin Login
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-xl font-medium text-red-500 flex items-center gap-2"
                >
                  <LogOut size={20} /> Logout
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <AnimatePresence>
        {showLogin && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowLogin(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
                  <button
                    onClick={() => setShowLogin(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="admin@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-4 bg-red-50 p-3 rounded-lg"
                  >
                    {error}
                  </motion.p>
                )}

                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="w-full mt-6 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-light transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomeNavbar;
