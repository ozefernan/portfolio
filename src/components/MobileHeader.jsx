import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const MobileHeader = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Show button after scrolling 100px
      setIsVisible(scrollY > 100);

      // Detect active section
      const sections = ["about", "experience", "projects"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setIsOpen(false);
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Menu Button - Only visible on mobile and when scrolled */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 p-3 bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700/50 hover:border-slate-600/80 text-slate-300 hover:text-slate-100 rounded-lg shadow-lg hover:shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Full Screen Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-40 bg-slate-900/98 backdrop-blur-md"
          >
            <div className="flex items-center justify-center min-h-screen px-8">
              <motion.nav
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="w-full max-w-md space-y-4"
              >
                <button
                  onClick={() => handleNavClick("about")}
                  className={`w-full text-center px-6 py-4 rounded-lg transition-all duration-300 ${
                    activeSection === "about"
                      ? "bg-blue-500/20 text-blue-400 scale-105"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <span className="text-lg font-semibold uppercase tracking-wider">
                    {t("hero.nav.about")}
                  </span>
                </button>
                <button
                  onClick={() => handleNavClick("experience")}
                  className={`w-full text-center px-6 py-4 rounded-lg transition-all duration-300 ${
                    activeSection === "experience"
                      ? "bg-blue-500/20 text-blue-400 scale-105"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <span className="text-lg font-semibold uppercase tracking-wider">
                    {t("hero.nav.experience")}
                  </span>
                </button>
                <button
                  onClick={() => handleNavClick("projects")}
                  className={`w-full text-center px-6 py-4 rounded-lg transition-all duration-300 ${
                    activeSection === "projects"
                      ? "bg-blue-500/20 text-blue-400 scale-105"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <span className="text-lg font-semibold uppercase tracking-wider">
                    {t("hero.nav.projects")}
                  </span>
                </button>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader;
