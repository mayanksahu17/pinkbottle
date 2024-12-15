'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { SparklesCore } from "@/components/ui/sparkles"
import { Cover } from "@/components/ui/cover"

// Testimonials Data
const testimonials = [
  {
    name: "Aadvik",
    status: "Student to Full-time",
    description: "Aadvik received offer letter from FAANG and ready for next round at Spotify",
    image: "/Testimonial6.jpeg",
    gridArea: "aadvik"
  },
  {
    name: "Sadia",
    status: "Interview with Wex",
    description: "Sadia received Interview from Wex",
    image: "/Testimonial1.png",
    gridArea: "sadia1"
  },
  {
    name: "Sadia",
    status: "Interview with JP Morgan",
    description: "Sadia received Interview from JP Morgan",
    image: "/Testimonial2.png",
    gridArea: "sadia2"
  },
  {
    name: "Ashutosh",
    status: "Received interview from Google",
    description: "Ashutosh received interview call from Google",
    image: "/Testimonial4.png",
    gridArea: "ashutosh"
  },
  {
    name: "Anshul",
    status: "Received referral at Amazon",
    description: "Anshul received multiple referrals from Tech companies",
    image: "/Testimonial7.png",
    gridArea: "anshul"
  }
]

// Testimonial Card Component
const TestimonialCard: React.FC<{
  name: string
  status: string
  description: string
  image: string
  gridArea: string
}> = ({ name, status, description, image, gridArea }) => {
  const isAadvik = gridArea === 'aadvik'
  
  return (
    <motion.div 
      className={`bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      style={{ gridArea }}
    >
      <div className="space-y-2">
        <h3 className="text-green-600 font-bold text-2xl">{name}</h3>
        <p className="font-semibold text-gray-800">{status}</p>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className={`relative w-full ${isAadvik ? 'aspect-[3/5]' : 'aspect-[4/3]'} mt-4`}> 
        <Image
          src={image}
          alt={`${name}'s success story`}
          fill
          className={`rounded-lg object-cover`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </motion.div>
  )
}

// Testimonials Grid Component
const TestimonialsGrid = () => {
  return (
    <div 
      className="grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:gap-8 lg:gap-6"
      style={{
        gridTemplateAreas: `
          'aadvik sadia1 ashutosh'
          'aadvik sadia2 anshul'
        `,
        gridTemplateColumns: "1fr 1fr 1fr",
        gridAutoRows: "auto"
      }}
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  )
}

// Animated Button Component
const AnimatedButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.button
      className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-green-500 rounded-full overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
      <span className="relative">{children}</span>
    </motion.button>
  )
}

// Main Section Component
const IncreaseInCalls = () => {
  return (
    <section className="w-full py-16 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <Cover>91% Increase in Calls with HiredEasy</Cover>
          </h1>
          <div className="w-24 h-4 mx-auto relative">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <div className="mb-16 md:block hidden">
          <TestimonialsGrid />
        </div>

        {/* Mobile View: Vertical Cards */}
        <div className="mb-16 md:hidden flex flex-col gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-2">
                <h3 className="text-green-600 font-bold text-2xl">{testimonial.name}</h3>
                <p className="font-semibold text-gray-800">{testimonial.status}</p>
                <p className="text-gray-600">{testimonial.description}</p>
              </div>
              <div className={`relative w-full ${testimonial.gridArea === 'aadvik' ? 'aspect-[3/5]' : 'aspect-[4/3]'} mt-4`}>
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name}'s success story`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to get started?
          </h2>
          <Link href="/onboarding">
            <AnimatedButton>
              <Image
                src="/Ashwin_jain.png"
                alt="Custom Image"
                width={24}
                height={24}
                className="mr-2 rounded-full inline-block"
              />
              Start your Free Trial
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →→
              </motion.span>
            </AnimatedButton>
          </Link>
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            {
              title: "1300+",
              subtitle: "Landed Full-Time Roles",
              description: "72% secured full-time positions in USA with strategic applications."
            },
            {
              title: "80x",
              subtitle: "Less time spent in job search",
              description: "72% secured roles in 3 months using our streamlined methods."
            },
            {
              title: "600x",
              subtitle: "Return on Investment",
              description: "Cut weeks off job search, boosting earnings by $20K-$30K."
            }
          ].map((stat, index) => (
            <BackgroundGradient key={index} className="rounded-2xl p-6 bg-white dark:bg-zinc-900">
              <h3 className="text-4xl font-bold text-black dark:text-neutral-200 mb-2">{stat.title}</h3>
              <h4 className="text-xl font-semibold mb-4">{stat.subtitle}</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{stat.description}</p>
            </BackgroundGradient>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default IncreaseInCalls