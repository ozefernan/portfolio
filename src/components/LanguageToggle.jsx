import { useLanguage } from '../contexts/LanguageContext'

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 px-4 py-3 bg-slate-800/30 hover:bg-slate-700/80 border border-slate-700/30 hover:border-slate-600/80 rounded-lg transition-all duration-500 opacity-40 hover:opacity-100 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105"
      aria-label="Toggle Language"
    >
      <svg
        className="w-5 h-5 text-slate-400 group-hover:text-slate-200 transition-all duration-300 group-hover:rotate-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
      <span className="text-sm font-bold text-slate-400 group-hover:text-slate-200 transition-colors uppercase tracking-wider">
        {language === 'pt' ? 'EN' : 'PT'}
      </span>
    </button>
  )
}

export default LanguageToggle
