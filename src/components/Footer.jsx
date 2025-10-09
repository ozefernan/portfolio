import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="py-12 text-center text-slate-500 text-sm">
      <p className="mb-2">
        {t('footer.built')} <span className="text-slate-400 font-medium">React</span> {t('footer.and')} <span className="text-slate-400 font-medium">Tailwind CSS</span>
      </p>
      <p className="text-xs text-slate-600">
        Designed & developed by Oséas Fernandes
      </p>
    </footer>
  )
}

export default Footer
