'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { BackgroundGradient } from '@/components/ui/background-gradient'

const sectionsData = [
  {
    title: "1300+",
    subtitle: "Landed Full-Time Roles",
    description: "Our clients achieve remarkable results, with 72% securing full-time positions in USA. Impressively, 47% of these roles are obtained through our strategic applications, while the remaining 44% come from leveraging personal networks and individual efforts.",
    bgColor: "#4338CA",
    image: "/blackrock.svg?height=600&width=550"
  },
  {
    title: "80x",
    subtitle: "Less time spent in job search",
    description: "Our clients achieve remarkable results, with 72% securing full-time positions in just three months. Impressively, 47% of these roles are obtained through our strategic applications, while the remaining 44% come from leveraging personal networks and individual efforts.",
    bgColor: "#2563EB",
    image: "/cocacola.svg?height=600&width=550"
  },
  {
    title: "600x",
    subtitle: "Return on Investment",
    description: "By cutting weeks off the job search, we help clients gain an extra $20K in earnings. Additionally, receiving multiple offers can boost salaries by an average of $30K, leading to a substantial increase in overall compensation.",
    bgColor: "#059669",
    image: "/DEShaw.svg?height=600&width=550"
  },
]

const AnimatedButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.button
      className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-white rounded-full overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
      <span className="relative">{children}</span>
    </motion.button>
  )
}

const Section = ({ data, index }: { data: typeof sectionsData[0], index: number }) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Image animation: moves from right to left with blur
  const x = useTransform(scrollYProgress, [0, 1], ["50%", "0%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1])
  const filter = useTransform(scrollYProgress, [0, 0.2, 1], ["blur(20px)", "blur(0px)", "blur(0px)"])

  // Smooth background color transition
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      index === 0 ? data.bgColor : sectionsData[index - 1].bgColor,
      data.bgColor,
      index === sectionsData.length - 1 ? data.bgColor : sectionsData[index + 1].bgColor
    ]
  )

  return (
    <div ref={sectionRef} className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background Div with smooth transition */}
      <motion.div 
        className={`absolute top-0 right-0 h-full w-[35%] ${index === 0 ? 'rounded-tl-[200px]' : ''} ${index === sectionsData.length - 1 ? 'rounded-bl-[200px]' : ''}`}
        style={{ backgroundColor }}
        transition={{ duration: 0.5 }}
      />
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold text-blue-600"
          >
            {data.subtitle}
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold"
          >
            {data.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            {data.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
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
        </div>

        {/* Animated Image Section */}
        <motion.div 
          className="lg:w-1/3 relative flex justify-end"
          style={{ x, opacity, filter }}
        >
          <BackgroundGradient className="rounded-2xl p-4 bg-white dark:bg-zinc-900 shadow-lg">
            {/* Dynamic width and height control via class */}
            <div className="w-[550px] h-[600px]">
              <Image
                src={data.image}
                alt={`${data.subtitle} Interface`}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
                priority
              />
            </div>
          </BackgroundGradient>
        </motion.div>
      </div>
    </div>
  )
}

export default function ScrollAnimatedSections() {
  return (
    <div className="relative">
      {sectionsData.map((data, index) => (
        <Section key={index} data={data} index={index} />
      ))}
    </div>
  )
}
