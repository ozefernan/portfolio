import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  return (
    <section
      className="px-4 py-12 sm:py-16 lg:px-0 lg:py-0"
      aria-label="About me"
    >
      {/* Section Title - Visible only on mobile */}
      <h2
        className="lg:hidden text-sm font-bold text-slate-200 uppercase tracking-widest mb-4"
        id="about-title"
      >
        {t("hero.nav.about")}
      </h2>

      <motion.div
        className="w-full"
        initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 50 }}
        whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={
          isMobile ? {} : { once: false, margin: "-150px", amount: 0.3 }
        }
        transition={isMobile ? {} : { duration: 0.6 }}
      >
        <div className="space-y-4 text-base sm:text-sm text-slate-400 leading-relaxed">
          <motion.p
            initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={isMobile ? {} : { once: false, amount: 0.5 }}
            transition={isMobile ? {} : { duration: 0.5, delay: 0.1 }}
          >
            {t("about.p1.intro")}{" "}
            <span className="text-slate-300 font-medium">
              {t("about.p1.title")}
            </span>{" "}
            {t("about.p1.text")}
          </motion.p>
          <motion.p
            initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={isMobile ? {} : { once: false, amount: 0.5 }}
            transition={isMobile ? {} : { duration: 0.5, delay: 0.2 }}
          >
            {t("about.p2.text1")}{" "}
            <span className="text-slate-300 font-medium">
              {t("about.p2.company1")}
            </span>
            {t("about.p2.text2")}
          </motion.p>
          <motion.p
            initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={isMobile ? {} : { once: false, amount: 0.5 }}
            transition={isMobile ? {} : { duration: 0.5, delay: 0.3 }}
          >
            {t("about.p3.text1")}{" "}
            <span className="text-slate-300 font-medium">
              {t("about.p3.company1")}
            </span>{" "}
            {t("about.p3.text2")}{" "}
            <span className="text-slate-300 font-medium">
              {t("about.p3.company2")}
            </span>{" "}
            {t("about.p3.text3")}
          </motion.p>

          {/* New paragraph about passion and interests */}
          <motion.p
            initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={isMobile ? {} : { once: false, amount: 0.5 }}
            transition={isMobile ? {} : { duration: 0.5, delay: 0.4 }}
          >
            {t("about.p4.text")}
          </motion.p>

          {/* Interests/Hobbies section */}
          <motion.div
            className="pt-4"
            initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={isMobile ? {} : { once: false, amount: 0.5 }}
            transition={isMobile ? {} : { duration: 0.5, delay: 0.5 }}
          >
            <p className="text-slate-300 font-medium mb-3">{t("about.interests.title")}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>{t("about.interests.item1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>{t("about.interests.item2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>{t("about.interests.item3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>{t("about.interests.item4")}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
