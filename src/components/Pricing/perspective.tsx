"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
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
        <h2 className="text-[3rem] font-bold  text-center mb-8 text-gray-700">
          To Put Things into Perspective
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Card key={index} className={`${item.color} border-none shadow-md hover:shadow-lg transition-shadow duration-300`}>
              <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                {item.icon}
                <h3 className="mt-4 font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm font-medium text-gray-700">
                  {item.cost}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

