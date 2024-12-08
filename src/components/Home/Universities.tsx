'use client'

import React, { useState, useEffect } from 'react'
import AnimatedLogoGrid from '../ui/animated-logo-grid'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, GraduationCap, Building, Briefcase } from 'lucide-react'

const stats = [
  { icon: GraduationCap, label: "Universities", value: "25+" },
  { icon: Building, label: "Partner Companies", value: "100+" },
  { icon: Briefcase, label: "Jobs Secured", value: "600+" },
]

const Universities: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeStatIndex, setActiveStatIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf8f2] to-white" />
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, purple 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.div
              className="absolute -left-4 -top-4 w-20 h-20 bg-purple-200 rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
              Transforming Education into Opportunity
            </h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStatIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center space-x-4 mb-8"
              >
                {React.createElement(stats[activeStatIndex].icon, {
                  className: "w-8 h-8 text-purple-500",
                })}
                <div>
                  <div className="text-3xl font-bold text-purple-600">
                    {stats[activeStatIndex].value}
                  </div>
                  <div className="text-gray-600">
                    {stats[activeStatIndex].label}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isExpanded ? "auto" : 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <p className="text-lg text-gray-600 mb-8">
                Our program bridges the gap between academia and industry, helping students from prestigious universities launch successful careers. Through strategic partnerships and comprehensive training, we've created a pathway to success for the next generation of professionals.
              </p>
            </motion.div>

            <motion.button
              className="group inline-flex items-center space-x-2 text-purple-600 font-semibold"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{isExpanded ? "Read less" : "Read more"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="h-[600px] w-full">
              <AnimatedLogoGrid />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Universities

