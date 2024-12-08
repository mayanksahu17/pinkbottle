'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const logos = [
  "CalState.jpeg", "UF.png", "BostonUniversity.gif", "USSA.png", "RIT.png",
  "ASU.png", "Bridgeport.png", "Clarksonlogo.png", "Auburn.png", "StevensLogo.png",
  "TexasLogo.png", "DrexelLogo.png", "OSU.png", "NortheasternLogo.png", "KentState.png",
  "Pacelogo.png"
]

const AnimatedLogoGrid: React.FC = () => {
  const [currentLogos, setCurrentLogos] = useState<string[]>(
    Array(20).fill('').map(() => logos[Math.floor(Math.random() * logos.length)])
  )

  useEffect(() => {
    const interval = setInterval(() => {
      // Change 7-8 random logos at once
      const logoIndicesToChange = new Set<number>()
      while (logoIndicesToChange.size < 8) {
        logoIndicesToChange.add(Math.floor(Math.random() * 20))
      }

      setCurrentLogos(prev => {
        const newLogos = [...prev]
        logoIndicesToChange.forEach(index => {
          newLogos[index] = logos[Math.floor(Math.random() * logos.length)]
        })
        return newLogos
      })
    }, 500) // Reduced interval to 500ms for faster changes

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
      <div className="grid grid-cols-4 grid-rows-5 gap-4 w-full h-full">
        {currentLogos.map((logo, index) => (
          <motion.div
            key={`${index}-${logo}`}
            className="relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            layoutId={`logo-${index}`}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
            />
            <motion.img
              src={logo}
              alt="University logo"
              className="w-full h-full object-contain relative z-10"
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedLogoGrid