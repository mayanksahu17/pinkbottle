/*'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { FileText, Music, Briefcase, GraduationCap } from 'lucide-react'

export const Perspective = () => {
  const items = [
    {
      icon: <FileText className="h-10 w-10 text-gray-700" />,
      title: "Resume Consultation",
      cost: "$500/hour",
    },
    {
      icon: <Music className="h-10 w-10 text-gray-700" />,
      title: "Concert Tickets",
      cost: "$500",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-gray-700" />,
      title: "Long Weekend Trip",
      cost: "$300",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-gray-700" />,
      title: "University Lecture",
      cost: "$300/hour",
    },
  ]

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          To Put Things into Perspective
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-lg shadow-lg bg-white p-4 text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 bg-gray-50">
                <motion.div
                  className="mb-3"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="font-semibold text-gray-800 text-lg mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-gray-600">{item.cost}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}*/
 /*
 'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { FileText, Music, Briefcase, GraduationCap } from 'lucide-react'

export const Perspective = () => {
  const [animations, setAnimations] = useState([]);

  const items = [
    {
      icon: <FileText className="h-10 w-10 text-gray-700" />,
      title: "Resume Consultation",
      cost: "$500/hour",
    },
    {
      icon: <Music className="h-10 w-10 text-gray-700" />,
      title: "Concert Tickets",
      cost: "$500",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-gray-700" />,
      title: "Long Weekend Trip",
      cost: "$300",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-gray-700" />,
      title: "University Lecture",
      cost: "$300/hour",
    },
  ];

  // Function to generate random light colors for backgrounds
  const generateRandomColors = () => {
    return items.map(() => {
      const r = Math.floor(Math.random() * 200) + 55; // Light color range
      const g = Math.floor(Math.random() * 200) + 55;
      const b = Math.floor(Math.random() * 200) + 55;
      return `rgb(${r}, ${g}, ${b})`;
    });
  };

  // Function to create the animation keyframes for color transition
  const createAnimationKeyframes = (colors) => {
    return `
      @keyframes colorChange {
        0% { background-color: ${colors[0]}; }
        25% { background-color: ${colors[1]}; }
        50% { background-color: ${colors[2]}; }
        75% { background-color: ${colors[3]}; }
        100% { background-color: ${colors[0]}; }
      }
    `;
  };

  useEffect(() => {
    const colors = generateRandomColors();
    const animationKeyframes = createAnimationKeyframes(colors);

    // Add the keyframes to the document style
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(animationKeyframes, styleSheet.cssRules.length);

    setAnimations(colors);
  }, [items.length]);

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          To Put Things into Perspective
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-lg shadow-lg p-4 text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                animation: `colorChange 10s infinite alternate`,
                animationDelay: `${index * 2}s`, // Stagger the animation start times
              }}
            >
              <Card className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 bg-gray-50">
                <motion.div
                  className="mb-3"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="font-semibold text-gray-800 text-lg mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-gray-600">{item.cost}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
*/

'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { FileText, Music, Briefcase, GraduationCap } from 'lucide-react'

export default function PerspectiveCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const gradientHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight)
    }
  }, [])

  const items = [
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Resume Consultation",
      description: "Expert guidance for your career journey",
      cost: "$500/hour",
    },
    {
      icon: <Music className="h-10 w-10" />,
      title: "Concert Tickets",
      description: "Premium entertainment experience",
      cost: "$500",
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: "Long Weekend Trip",
      description: "Escape to your dream destination",
      cost: "$300",
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: "University Lecture",
      description: "Knowledge from industry experts",
      cost: "$300/hour",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 pl-20">
      <div className="max-w-4xl mx-auto py-20 px-4" ref={containerRef}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
          To Put Things into Perspective
        </h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800" />
          <motion.div 
            className="absolute left-8 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500"
            style={{ height: gradientHeight, originY: 0 }}
          />
          
          <div className="space-y-20">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative pl-16">
                  <div className="absolute left-[26px] top-8 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950" />
                  
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      rotateX: 5,
                      rotateY: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="perspective-1000"
                  >
                    <Card className="overflow-hidden bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border border-gray-200 dark:border-gray-800">
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                          </div>
                        </div>
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
                            {item.cost}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

