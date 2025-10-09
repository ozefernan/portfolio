import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  const experiences = [
    {
      period: t("exp.itau.period"),
      role: t("exp.itau.role"),
      company: t("exp.itau.company"),
      description: t("exp.itau.description"),
      tech: [
        "Angular",
        "TypeScript",
        "RxJS",
        "NgRx",
        "Jest",
        "Cypress",
        "Microfrontend",
        "AWS",
      ],
    },
    {
      period: t("exp.cox.period"),
      role: t("exp.cox.role"),
      company: t("exp.cox.company"),
      description: t("exp.cox.description"),
      tech: ["React", "TypeScript", "JavaScript", "Redux", "Lerna", "Monorepo"],
    },
    {
      period: t("exp.santander.period"),
      role: t("exp.santander.role"),
      company: t("exp.santander.company"),
      description: t("exp.santander.description"),
      tech: ["COBOL", "JCL", "Batch Processing", "Mainframe"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 lg:py-24"
      aria-label="Work experience"
    >
      <div className="w-full">
        {/* Section Title - Visible only on mobile */}
        <h2
          className="lg:hidden text-sm font-bold text-slate-200 uppercase tracking-widest mb-4 px-4"
          id="experience-title"
        >
          {t("hero.nav.experience")}
        </h2>
        <h2 className="sr-only lg:block">Work Experience</h2>
        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              className="group relative grid lg:grid-cols-4 gap-4 lg:gap-8 transition-all duration-300 hover:!opacity-100 group-hover/list:opacity-50 p-4 lg:p-6 rounded-lg hover:bg-slate-800/50 hover:shadow-lg"
              initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={
                isMobile ? {} : { once: false, margin: "-100px", amount: 0.4 }
              }
              transition={isMobile ? {} : { duration: 0.5, delay: index * 0.1 }}
              role="article"
              aria-label={`${exp.role} at ${exp.company}`}
            >
              <div className="lg:col-span-1">
                <time
                  className="block text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-tight whitespace-nowrap"
                  dateTime={exp.period.split(" — ")[0]}
                >
                  {exp.period}
                </time>
              </div>
              <div className="lg:col-span-3">
                <h3 className="text-base font-semibold text-slate-200 group-hover:text-blue-400 transition-colors duration-300">
                  <span className="block sm:inline">{exp.role}</span>
                  <span className="hidden sm:inline text-slate-500"> · </span>
                  <span className="block sm:inline mt-1 sm:mt-0">
                    {exp.company}
                  </span>
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {exp.tech.map((tech, techIndex) => (
                    <li key={techIndex}>
                      <span className="inline-block px-3 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
