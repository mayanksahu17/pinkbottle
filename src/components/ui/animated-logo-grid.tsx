'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const logos = [
  "CalState.jpeg", "UF.png", "BostonUniversity.gif", "USSA.png", "RIT.png",
  "ASU.png", "Bridgeport.png", "Clarksonlogo.png", "Auburn.png", "StevensLogo.png",
  "TexasLogo.png", "DrexelLogo.png", "OSU.png", "NortheasternLogo.png", "KentState.png",
  "Pacelogo.png"
]

const AnimatedLogoGrid: React.FC = () => {
  const [activeLogos, setActiveLogos] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newActiveLogos = Array.from({ length: 2 + Math.floor(Math.random() * 2) }, () =>
        Math.floor(Math.random() * 25)
      )
      setActiveLogos(newActiveLogos)
    }, 3000) // Increased interval for slower appearance

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-5 gap-4 w-full h-full">
      {Array.from({ length: 25 }).map((_, index) => (
        <motion.div
          key={index}
          className="aspect-square flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        >
          <AnimatePresence>
            {activeLogos.includes(index) && (
              <motion.img
                src={logos[Math.floor(Math.random() * logos.length)]}
                alt="University logo"
                className="w-full h-full object-contain p-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

export default AnimatedLogoGrid

