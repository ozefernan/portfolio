import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

const StarWars = ({ onClose }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error)
      })
    }

    // Close modal when video ends
    const handleVideoEnd = () => {
      setTimeout(() => {
        onClose()
      }, 1000) // Wait 1 second after video ends
    }

    const video = videoRef.current
    if (video) {
      video.addEventListener('ended', handleVideoEnd)
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd)
        video.pause()
      }
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black overflow-hidden flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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

      {/* Video element */}
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        playsInline
        preload="auto"
        muted
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  )
}

export default StarWars
