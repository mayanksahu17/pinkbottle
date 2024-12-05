'use client'

import React, { useState } from 'react'
import AnimatedLogoGrid from '../ui/animated-logo-grid'
import { motion } from 'framer-motion'

const Universities: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="bg-[#faf8f2] py-32 my-8 sm:my-0 md:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center md:text-left mb-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Trusted by 25+ Universities
              </motion.h2>
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                600+ Students Got a Job Through Our Program
              </motion.p>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: isExpanded ? "auto" : 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  We've worked with several thousand fellows and counting. Our program has helped students from various universities secure jobs in top companies across the industry.
                </p>
              </motion.div>
              <motion.button
                className="text-lg md:text-xl text-blue-600 font-semibold"
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isExpanded ? "Read less" : "Read more"}
              </motion.button>
            </div>
          </motion.div>
          <div className="h-[600px] w-full">
            <AnimatedLogoGrid />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Universities
