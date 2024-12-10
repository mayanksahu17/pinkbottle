'use client'

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
}
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