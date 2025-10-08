import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const DevNotice = () => {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Show notice only when at the top (scroll position < 100px)
      setIsVisible(window.scrollY < 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="bg-yellow-500/10 backdrop-blur-md border-b border-yellow-500/30 py-3 px-6">
        <p className="text-yellow-400 text-xs font-semibold uppercase tracking-wide text-center">
          {t('hero.devNotice')}
        </p>
      </div>
    </div>
  )
}

export default DevNotice
