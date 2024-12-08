'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { FileText, Music, Briefcase, GraduationCap } from 'lucide-react'

export const Perspective = () => {
  const items = [
    {
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      title: "Resume Consultation",
      cost: "$500/hour",
      color: "bg-blue-50",
    },
    {
      icon: <Music className="h-8 w-8 text-purple-500" />,
      title: "Concert Tickets",
      cost: "$500",
      color: "bg-purple-50",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-500" />,
      title: "Long Weekend Trip",
      cost: "$300",
      color: "bg-green-50",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-red-500" />,
      title: "University Lecture",
      cost: "$300/hour",
      color: "bg-red-50",
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
              className={`${item.color} border-none shadow-md hover:shadow-lg transition-shadow duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  {item.icon}
                  <motion.h3
                    className="mt-4 font-semibold text-gray-900"
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}