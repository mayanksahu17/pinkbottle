'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { FileText, Music, Briefcase, GraduationCap } from 'lucide-react'

export const Perspective = () => {
  const items = [
    {
      icon: <FileText className="h-10 w-10 text-blue-500" />,
      title: "Resume Consultation",
      cost: "$500/hour",
      gradient: "bg-gradient-to-tr from-blue-500 via-blue-300 to-blue-100",
      shadow: "shadow-blue-500",
    },
    {
      icon: <Music className="h-10 w-10 text-purple-500" />,
      title: "Concert Tickets",
      cost: "$500",
      gradient: "bg-gradient-to-tr from-purple-500 via-purple-300 to-purple-100",
      shadow: "shadow-purple-500",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-green-500" />,
      title: "Long Weekend Trip",
      cost: "$300",
      gradient: "bg-gradient-to-tr from-green-500 via-green-300 to-green-100",
      shadow: "shadow-green-500",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-red-500" />,
      title: "University Lecture",
      cost: "$300/hour",
      gradient: "bg-gradient-to-tr from-red-500 via-red-300 to-red-100",
      shadow: "shadow-red-500",
    },
  ]

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[3rem] font-bold text-center mb-8 text-gray-700">
          To Put Things into Perspective
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={`group relative rounded-xl ${item.gradient} p-4 border border-transparent hover:border-white transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className={`absolute inset-0 rounded-xl transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-2xl group-hover:${item.shadow}`}
              />
              <Card
                className={`relative z-10 overflow-hidden rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500`}
              >
                <CardContent className="relative flex flex-col items-center justify-center p-6 text-center">
                  <motion.div
                    className="group-hover:animate-bounce"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {item.icon}
                  </motion.div>
                  <motion.h3
                    className="mt-4 font-semibold text-gray-900 text-lg tracking-wide"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="mt-2 text-sm font-medium text-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {item.cost}
                  </motion.p>
                </CardContent>
              </Card>
              <div className="absolute inset-0 z-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-white via-transparent to-black rounded-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
