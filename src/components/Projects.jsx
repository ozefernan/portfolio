import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: t("proj.toolkit.title"),
      description: t("proj.toolkit.description"),
      tech: ["React", "TypeScript", "Vite", "TanStack Query", "Zustand", "IndexedDB", "Tailwind CSS"],
      link: "https://github.com/ozefernan/Toolkit-Dev",
      image: "/projects/toolkit-dev-screenshot.png",
    },
    {
      title: t("proj.cox.title"),
      description: t("proj.cox.description"),
      tech: ["React", "TypeScript", "Redux", "Lerna", "Monorepo", "Webpack"],
      link: "https://www.dealertrack.com.br/#/home",
      image: "/projects/cox-screenshot.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-24"
      aria-label="Featured projects"
    >
      <div className="w-full">
        {/* Section Title - Visible only on mobile */}
        <h2
          className="lg:hidden text-sm font-bold text-slate-200 uppercase tracking-widest mb-4 px-4"
          id="projects-title"
        >
          {t("hero.nav.projects")}
        </h2>
        <div className="space-y-10 sm:space-y-16">
          {projects.map((project, index) => {
            const Component = project.link ? motion.a : motion.div;
            const linkProps = project.link ? {
              href: project.link,
              target: "_blank",
              rel: "noopener noreferrer"
            } : {};

            return (
              <Component
                key={index}
                {...linkProps}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group block relative grid lg:grid-cols-12 gap-4 lg:gap-8 transition-all duration-300 p-6 rounded-lg hover:bg-slate-800/50 hover:shadow-lg ${!project.link ? 'cursor-default' : 'cursor-pointer'}`}
                initial={isMobile ? {} : { y: 40 }}
                whileInView={isMobile ? {} : { y: 0 }}
                animate={{
                  opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.5 : 1
                }}
                viewport={
                  isMobile ? {} : { once: false, margin: "-100px", amount: 0.3 }
                }
                transition={{ duration: 0.3 }}
              >
                <div className="lg:col-span-4 mb-4 lg:mb-0">
                  <div className="relative overflow-hidden rounded border-2 border-slate-700/50 group-hover:border-slate-600 transition-all duration-300">
                    <div className="aspect-video bg-slate-800 flex items-center justify-center overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full items-center justify-center">
                        <span className="text-slate-600 text-sm">
                          Project Preview
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="lg:col-span-8">
                <h3 className="text-base font-semibold text-slate-200 group-hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                  {project.title}
                  {project.link && (
                    <svg
                      className="w-4 h-4 -translate-y-1 translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Component>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Projects;
