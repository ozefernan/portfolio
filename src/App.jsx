import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider } from './contexts/LanguageContext'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import LanguageToggle from './components/LanguageToggle'
import StarWars from './components/StarWars'
import MobileHeader from './components/MobileHeader'
import MatrixRain from './components/MatrixRain'

function App() {
  const [showStarWars, setShowStarWars] = useState(false)
  const [showMatrix, setShowMatrix] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      document.documentElement.style.setProperty('--mouse-x', `${x}%`)
      document.documentElement.style.setProperty('--mouse-y', `${y}%`)
      document.body.classList.add('mouse-active')
    }

    const handleMouseLeave = () => {
      document.body.classList.remove('mouse-active')
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <LanguageProvider>
      {/* Matrix Rain Effect - Highest z-index */}
      {showMatrix && (
        <MatrixRain duration={10000} onComplete={() => setShowMatrix(false)} />
      )}

      {/* Mobile Header */}
      <MobileHeader />


      {/* Fixed Language Toggle Button */}
      <LanguageToggle />

      <div className="relative min-h-screen">
        {/* Gradient background effect */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-slate-950"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-purple-500/5 blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-500/5 blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Two column layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="lg:grid lg:grid-cols-8 min-h-screen gap-6 sm:gap-8 lg:gap-24">
            {/* Left column - Fixed Hero on desktop */}
            <div className="lg:col-span-3 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:py-24">
              <Hero
                onStarWarsClick={() => setShowStarWars(true)}
                showMatrix={showMatrix}
                setShowMatrix={setShowMatrix}
              />
            </div>

            {/* Right column - Scrollable content */}
            <div className="w-full pt-16 pb-12 lg:pt-0 lg:col-span-5 lg:pb-24">
              <div id="about" className="lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
                <About />
              </div>
              <Skills />
              <Experience />
              <Projects />
              <Footer />
            </div>
          </div>
        </div>
      </div>

      {/* Star Wars Intro Modal */}
      <AnimatePresence>
        {showStarWars && <StarWars onClose={() => setShowStarWars(false)} />}
      </AnimatePresence>
    </LanguageProvider>
  )
}

export default App
