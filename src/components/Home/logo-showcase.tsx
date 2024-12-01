'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// Add your company logos here
const LOGO_SETS = [
  [
    // First set of logos
    // Format: { src: '/path-to-logo.svg', alt: 'Company Name' }
    { src: '/UF.png', alt: 'Company 1' },
    { src: '/Yourstory.png', alt: 'Company 2' },
    { src: '/FinancialExpress.png', alt: 'Company 3' },
  ],
  [
    // Second set of logos
    { src: '/Forbes.png', alt: 'Company 4' },
    { src: '/DNA.png', alt: 'Company 5' },
    { src: '/blackrock.svg', alt: 'Company 6' },
  ],
  // Add more sets as needed
]

export default function LogoShowcase() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSetIndex((prev) => (prev + 1) % LOGO_SETS.length)
        setIsTransitioning(false)
      }, 500) // Half of the transition duration
    }, 3000) // Change logos every 3 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">
            Powering the world's best product teams.
          </h2>
          <p className="text-xl text-gray-400">
            From next-gen startups to established enterprises.
          </p>
        </div>
        
        <div className="relative">
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center transition-opacity duration-1000 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {LOGO_SETS[currentSetIndex].map((logo, index) => (
              <div
                key={`${index}-${currentSetIndex}`}
                className="w-full max-w-[200px] h-20 relative"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain filter brightness-0 invert"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

