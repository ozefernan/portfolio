import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 lg:py-24 scroll-mt-24" aria-label="About me">
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-150px", amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('about.p1.intro')} <span className="text-slate-300 font-medium">{t('about.p1.title')}</span> {t('about.p1.text')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('about.p2.text1')} <span className="text-slate-300 font-medium">{t('about.p2.company1')}</span>{t('about.p2.text2')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t('about.p3.text1')} <span className="text-slate-300 font-medium">{t('about.p3.company1')}</span> {t('about.p3.text2')} <span className="text-slate-300 font-medium">{t('about.p3.company2')}</span> {t('about.p3.text3')}
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

export default About
