'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
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
  const isSadiaOrAshutosh = gridArea === 'sadia1' || gridArea === 'sadia2' || gridArea === 'ashutosh';
  
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
          className={`rounded-lg ${isSadiaOrAshutosh ? 'object-contain' : 'object-cover'}`} 
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
      </div>
    </section>
  )
}

export default IncreaseInCalls
