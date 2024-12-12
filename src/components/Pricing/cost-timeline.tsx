'use client'

import React from "react"
import { Timeline } from "@/components/ui/timeline"

export default function CostTimeline() {
  const journeyData = [
    {
      title: "Cost",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-[2rem] font-normal mb-4">
            You're paying us $0.05/hour
          </p>
        </div>
      ),
    },
    {
      title: "Interview Performance",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-[2rem] font-normal mb-3 mr-5">
            Increase in interviews 5x
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-[2rem] font-normal mb-4">
            Advantage in interviews 3x
          </p>
        </div>
      ),
    },
    {
      title: "Potential Earnings",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-[2rem] font-normal mb-4">
            Full-time Pay Range $50 - $150/hour
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-[2rem] font-normal mb-4">
            You can make $12-20/hour on part-time
          </p>
        </div>
      ),
    },
    {
      title: "Time Saved",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-[2rem] font-normal mb-4">
            Time saved for Interview Prep 80 hours/10 Days
          </p>
        </div>
      ),
    },
  ]

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
       
        <div className="w-full">
          <Timeline data={journeyData} />
        </div>
      </div>
    </section>
  )
}