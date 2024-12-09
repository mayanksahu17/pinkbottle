'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { UniversityGrid } from '../../components/ui/animated-logo-grid'

const stats = [
  { label: "Universities", value: "25+" },
  { label: "Partner Companies", value: "100+" },
  { label: "Jobs Secured", value: "600+" },
]

const contentSections = [
  {
    title: "Transforming Education into Opportunity",
    description: "Our program bridges the gap between academia and industry, helping students from prestigious universities launch successful careers."
  },
  {
    title: "Empowering the Next Generation",
    description: "Through strategic partnerships and comprehensive training, we've created a pathway to success for tomorrow's industry leaders."
  },
  {
    title: "Connecting Talent with Opportunity",
    description: "We match top university graduates with leading companies, fostering innovation and driving economic growth."
  }
]

export default function UniversitiesSection() {
  const [activeContentIndex, setActiveContentIndex] = useState(0)

  const handleLeftColumnChange = useCallback(() => {
    setActiveContentIndex((prev) => (prev + 1) % contentSections.length)
  }, [])

  return (
    <section className="relative overflow-hidden bg-white">
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #6b21a8 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        animate={{
          backgroundPositionY: ["0%", "100%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeContentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
                  {contentSections[activeContentIndex].title}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {contentSections[activeContentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeContentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <div className="text-4xl font-bold text-purple-600">
                  {stats[activeContentIndex].value}
                </div>
                <div className="text-xl text-gray-600">
                  {stats[activeContentIndex].label}
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.a
              href="#learn-more"
              className="inline-flex items-center space-x-2 text-purple-600 font-semibold hover:text-purple-700"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="aspect-square w-full">
              <UniversityGrid onLeftColumnChange={handleLeftColumnChange} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

