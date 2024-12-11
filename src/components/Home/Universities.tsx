'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

// Array of all logos
const ALL_LOGOS = [
  "CalState.jpeg", "UF.png", "BostonUniversity.gif", "USSA.png", "RIT.png",
  "ASU.png", "Bridgeport.png", "Clarksonlogo.png", "Auburn.png", "StevensLogo.png",
  "TexasLogo.png", "DrexelLogo.png", "OSU.png", "NortheasternLogo.png", "KentState.png",
  "Pacelogo.png"
]

// Content variations for the left side
const CONTENT_VARIATIONS = [
  {
    title: "Millions",
    stats: [
      { number: "BMW owners", text: "using ConnectedDrive Store" },
      { number: "350+", text: "US dealerships" },
      { number: "5+", text: "Amazon businesses on Stripe including Prime, Audible, and Amazon Pay." },
      { number: "50+", text: "Payment methods available on Stripe" },
    ],
    products: ["Payments", "Connect"]
  },
  {
    title: "Millions",
    stats: [
      { number: "1M+", text: "Transactions processed daily through our platform" },
      { number: "20+", text: "Years of industry experience" },
      { number: "100+", text: "Countries supported worldwide" },
      { number: "24/7", text: "Customer support availability" },
    ],
    products: ["Payments", "Connect"]
  },
  {
    title: "Millions",
    stats: [
      { number: "Stripe Users", text: "in over 120 countries" },
      { number: "500+", text: "Partner integrations" },
      { number: "1000+", text: "Enterprise solutions delivered" },
      { number: "Top-tier", text: "security and compliance" },
    ],
    products: ["Payments", "Connect"]
  }
]

export default function EnterpriseSection() {
  const [displayedLogos, setDisplayedLogos] = useState<string[]>([])
  const [contentIndex, setContentIndex] = useState(0)

  // Initialize logos with unique set
  useEffect(() => {
    setDisplayedLogos(getUniqueRandomLogos(12))
  }, [])

  // Rotate content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prev) => (prev + 1) % CONTENT_VARIATIONS.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Function to get unique random logos
  function getUniqueRandomLogos(count: number): string[] {
    // Create a copy of ALL_LOGOS and shuffle
    const shuffled = [...ALL_LOGOS].sort(() => Math.random() - 0.5)
    
    // Return the first 'count' unique logos
    return shuffled.slice(0, count)
  }

  // Function to replace random logos while ensuring no repeats
  function updateRandomLogos() {
    const currentLogos = [...displayedLogos]
    const availableLogos = ALL_LOGOS.filter(logo => !currentLogos.includes(logo))
    
    // Determine how many logos to replace (1-3)
    const numToReplace = Math.floor(Math.random() * 3) + 1

    // Replace logos
    for (let i = 0; i < numToReplace; i++) {
      if (availableLogos.length === 0) break

      // Find an index of a logo to replace
      const replaceIndex = Math.floor(Math.random() * currentLogos.length)
      
      // Pick a random logo from available logos
      const randomNewLogo = availableLogos.splice(Math.floor(Math.random() * availableLogos.length), 1)[0]
      
      // Replace the logo
      currentLogos[replaceIndex] = randomNewLogo
    }

    setDisplayedLogos(currentLogos)
  }

  // Update logos every 3 seconds
  useEffect(() => {
    const interval = setInterval(updateRandomLogos, 3000)
    return () => clearInterval(interval)
  }, [displayedLogos])

  const currentContent = CONTENT_VARIATIONS[contentIndex]

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Top Section */}
      <div className="mb-12">
        <span className="text-blue-600 font-semibold">Enterprise reinvention</span>
        <h2 className="text-4xl font-bold mt-2">Bring agility to your enterprise</h2>
        <p className="text-gray-600 text-lg mt-4">
          Quickly build great payments experiences, improve performance, expand into new markets, and engage customers with subscriptions and marketplaces. Get expert integration guidance from our professional services team and certified partners, and connect Stripe to Salesforce, SAP, and more through the Stripe App Marketplace.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 mt-6">
          Explore Stripe for enterprises
        </Button>
      </div>

      {/* Middle Section */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Content with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={contentIndex}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-blue-600">{currentContent.title}</h3>
            <div className="space-y-4">
              {currentContent.stats.map((stat, index) => (
                <div key={index}>
                  <h4 className="text-2xl font-bold text-gray-800">{stat.number}</h4>
                  <p className="text-gray-600">{stat.text}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2 mt-4">
              <p className="font-semibold">Products used</p>
              <ul className="text-gray-600">
                {currentContent.products.map((product, index) => (
                  <li key={index}>{product}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Content with Grid of Logos */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <div className="grid grid-cols-4 grid-rows-3 gap-4">
            {displayedLogos.map((logo, index) => (
              <motion.div
                key={`${logo}-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-4 rounded-lg flex items-center justify-center aspect-square"
              >
                <Image
                  src={`/${logo}`}
                  alt={`Logo ${index + 1}`}
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}