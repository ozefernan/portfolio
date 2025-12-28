import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

function Resume() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center text-slate-400 hover:text-blue-400 transition-colors group"
        >
          <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t('resume.back')}
        </Link>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {t('resume.download')}
        </a>
      </header>

      {/* PDF Viewer */}
      <div className="flex-1 w-full">
        <iframe
          src="/resume.pdf"
          className="w-full h-full min-h-[calc(100vh-57px)]"
          title={t('resume.title')}
        />
      </div>
    </div>
  )
}

export default Resume
