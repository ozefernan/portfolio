import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = ({ onStarWarsClick, showMatrix, setShowMatrix }) => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("about");
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects"];
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
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNameClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 7) {
      // Trigger Matrix effect
      setShowMatrix(true);
      setClickCount(0);
    }

    // Reset counter after 2 seconds of inactivity
    setTimeout(() => {
      if (clickCount < 6) setClickCount(0);
    }, 2000);
  };

  return (
    <section
      className="px-4 pt-24 lg:px-0 lg:pt-0 lg:py-0"
      aria-label="Introduction"
    >
      <div className="w-full">
        <motion.h1
          onClick={handleNameClick}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-200 mb-2 cursor-pointer select-none relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Oséas Fernandes
          {/* Hint tooltip */}
          <span className="absolute -top-8 left-0 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {t("hero.easterEggHint")}
          </span>
          {/* Click counter */}
          {clickCount > 0 && clickCount < 7 && (
            <motion.span
              className="absolute -top-8 right-0 text-sm text-green-400 font-mono"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              {clickCount}/7
            </motion.span>
          )}
        </motion.h1>
        <motion.h2
          className="text-lg sm:text-xl lg:text-1xl font-bold text-slate-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t("hero.title")}
        </motion.h2>
        <motion.p
          className="text-base lg:text-base text-slate-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {t("hero.description")}
        </motion.p>

        {/* Navigation - Hidden on mobile */}
        <motion.nav
          className="hidden lg:flex mt-12 flex-col gap-4"
          aria-label="Main navigation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#about"
            className={`group flex items-center gap-3 transition-colors ${
              activeSection === "about"
                ? "text-slate-200"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span
              className={`h-px bg-slate-600 transition-all duration-300 ${
                activeSection === "about"
                  ? "w-16 bg-slate-200"
                  : "w-8 group-hover:w-16 group-hover:bg-slate-200"
              }`}
            ></span>
            <span className="text-xs font-semibold uppercase tracking-widest">
              {t("hero.nav.about")}
            </span>
          </a>
          <a
            href="#skills"
            className={`group flex items-center gap-3 transition-colors ${
              activeSection === "skills"
                ? "text-slate-200"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span
              className={`h-px bg-slate-600 transition-all duration-300 ${
                activeSection === "skills"
                  ? "w-16 bg-slate-200"
                  : "w-8 group-hover:w-16 group-hover:bg-slate-200"
              }`}
            ></span>
            <span className="text-xs font-semibold uppercase tracking-widest">
              {t("hero.nav.skills")}
            </span>
          </a>
          <a
            href="#experience"
            className={`group flex items-center gap-3 transition-colors ${
              activeSection === "experience"
                ? "text-slate-200"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span
              className={`h-px bg-slate-600 transition-all duration-300 ${
                activeSection === "experience"
                  ? "w-16 bg-slate-200"
                  : "w-8 group-hover:w-16 group-hover:bg-slate-200"
              }`}
            ></span>
            <span className="text-xs font-semibold uppercase tracking-widest">
              {t("hero.nav.experience")}
            </span>
          </a>
          <a
            href="#projects"
            className={`group flex items-center gap-3 transition-colors ${
              activeSection === "projects"
                ? "text-slate-200"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span
              className={`h-px bg-slate-600 transition-all duration-300 ${
                activeSection === "projects"
                  ? "w-16 bg-slate-200"
                  : "w-8 group-hover:w-16 group-hover:bg-slate-200"
              }`}
            ></span>
            <span className="text-xs font-semibold uppercase tracking-widest">
              {t("hero.nav.projects")}
            </span>
          </a>
        </motion.nav>

        {/* Social links */}
        <motion.div
          className="flex mt-8 lg:mt-12 gap-5"
          role="navigation"
          aria-label="Social media links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <a
            href="https://github.com/ozzyfernan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-200 transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/oseasfernandes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-200 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/ozzyfernan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-200 transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Link
            to="/curriculo"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 border border-slate-600/50 hover:border-slate-500 rounded-lg transition-all duration-300 hover:scale-105 group"
            aria-label={t("hero.resume")}
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm font-semibold uppercase tracking-wide">
              {t("hero.resume")}
            </span>
          </Link>
        </motion.div>

        {/* Star Wars Button - Temporarily hidden */}
        {/* <motion.button
          onClick={onStarWarsClick}
          className="hidden lg:flex mt-8 px-6 py-3 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 hover:border-yellow-400/50 rounded-lg transition-all duration-300 hover:scale-105 group items-center gap-2"
          aria-label="Ver Intro Star Wars"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 group-hover:rotate-12 transition-transform"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold uppercase tracking-wide">
              {t("hero.starwars")}
            </span>
          </span>
        </motion.button> */}
      </div>
    </section>
  );
};

export default Hero;
