import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const StarWars = ({ onClose }) => {
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Play audio when component mounts
    if (audioRef.current) {
      audioRef.current.volume = 0.5
      const playPromise = audioRef.current.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Audio playing successfully')
          })
          .catch(error => {
            console.log('Audio playback failed:', error)
            // Try playing after user interaction
            setIsMuted(true)
          })
      }
    }

    return () => {
      // Stop audio when component unmounts
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [])

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Audio element */}
      <audio ref={audioRef} loop preload="auto">
        <source src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3" type="audio/mpeg" />
      </audio>

      {/* Stars background */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-50 text-yellow-400 hover:text-yellow-300 transition-colors"
        aria-label="Fechar"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Mute button */}
      <button
        onClick={toggleMute}
        className="absolute top-8 right-20 z-50 text-yellow-400 hover:text-yellow-300 transition-colors"
        aria-label={isMuted ? "Ativar som" : "Silenciar"}
      >
        {isMuted ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>

      {/* Star Wars Logo */}
      <div className="logo">
        <h1 className="star-wars-logo">STAR WARS</h1>
      </div>

      {/* Star Wars Intro */}
      <div className="intro-container">
        <div className="intro-text">
          <div className="crawl">
            <div className="title">
              <p>Episódio I</p>
              <h1>O DESENVOLVEDOR FRONTEND</h1>
            </div>

            <p className="crawl-text">
              Há muito tempo, em uma galáxia muito,
              muito distante, um jovem desenvolvedor
              embarcou em uma jornada épica pelo
              universo da programação...
            </p>

            <p className="crawl-text">
              Armado apenas com React, TypeScript e
              uma vontade inquebrável de aprender,
              OSÉAS FERNANDES enfrentou os desafios
              mais complexos do desenvolvimento web.
            </p>

            <p className="crawl-text">
              No ITAÚ UNIBANCO, ele lidera batalhas
              contra bugs temíveis, constrói interfaces
              que encantam milhões de usuários, e
              domina as forças do JavaScript com
              maestria.
            </p>

            <p className="crawl-text">
              Especializado em criar experiências
              digitais escaláveis e acessíveis, este
              guerreiro do código continua sua missão
              de transformar pixels em interfaces
              perfeitas...
            </p>

            <p className="crawl-text">
              A saga continua em
              oseasfernandes.com
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default StarWars
