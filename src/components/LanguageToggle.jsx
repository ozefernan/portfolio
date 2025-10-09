import { useLanguage } from '../contexts/LanguageContext'

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 px-4 py-3 bg-slate-800/30 hover:bg-slate-700/80 border border-slate-700/30 hover:border-slate-600/80 rounded-lg transition-all duration-500 lg:opacity-40 hover:opacity-100 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105"
      aria-label="Toggle Language"
    >
      <span className="text-base opacity-70 group-hover:opacity-100 transition-opacity">
        {language === 'pt' ? '🇺🇸' : '🇧🇷'}
      </span>
      <span className="text-sm font-bold text-slate-400 group-hover:text-slate-200 transition-colors uppercase tracking-wider">
        {language === 'pt' ? 'EN' : 'PT'}
      </span>
    </button>
  )
}

export default LanguageToggle
