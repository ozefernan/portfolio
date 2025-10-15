import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      category: t("skills.frontend.title"),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        "React",
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML/CSS",
        "Tailwind CSS",
        "Redux",
        "NgRx",
        "RxJS",
        "Framer Motion"
      ],
    },
    {
      category: t("skills.testing.title"),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      skills: [
        "Jest",
        "Cypress",
        "React Testing Library",
        "Jasmine",
        "Karma"
      ],
    },
    {
      category: t("skills.tools.title"),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        "Git",
        "Webpack",
        "Vite",
        "Lerna",
        "npm/yarn",
        "ESLint",
        "Prettier"
      ],
    },
    {
      category: t("skills.cloud.title"),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      skills: [
        "AWS S3",
        "AWS CloudFront",
        "AWS Lambda",
        "CI/CD",
        "Docker"
      ],
    },
    {
      category: t("skills.architecture.title"),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      skills: [
        "Microfrontend",
        "Monorepo",
        "REST APIs",
        "Responsive Design",
        "Accessibility (a11y)",
        "Performance Optimization"
      ],
    },
    {
      category: t("skills.other.title"),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      skills: [
        "COBOL",
        "JCL",
        "Mainframe",
        "Agile/Scrum",
        "Code Review",
        "Mentoring"
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 lg:py-24"
      aria-label="Technical skills"
    >
      <div className="w-full">
        {/* Section Title - Visible only on mobile */}
        <h2
          className="lg:hidden text-sm font-bold text-slate-200 uppercase tracking-widest mb-4 px-4"
          id="skills-title"
        >
          {t("hero.nav.skills")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative p-6 rounded-lg border border-slate-700/50 bg-slate-800/20 hover:bg-slate-800/40 hover:border-slate-600/50 transition-all duration-300"
              initial={isMobile ? {} : { opacity: 0, y: 30 }}
              whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
              viewport={
                isMobile ? {} : { once: false, margin: "-100px", amount: 0.3 }
              }
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-200">
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-700/30 rounded-md hover:bg-slate-700/50 transition-colors duration-200"
                    initial={isMobile ? {} : { opacity: 0, scale: 0.8 }}
                    whileInView={isMobile ? {} : { opacity: 1, scale: 1 }}
                    viewport={isMobile ? {} : { once: false, amount: 0.5 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Hover effect overlay */}
              <div
                className={`absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
