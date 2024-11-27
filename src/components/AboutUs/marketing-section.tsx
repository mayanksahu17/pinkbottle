"use client"

import Link from "next/link"
import { Star } from 'lucide-react'
import { AnimatedTooltip } from "../ui/animated-tooltip"

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
]

export default function MarketingSection() {
  return (
    <div className="bg-black text-white min-h-[400px] flex items-center justify-center p-8">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div className="space-y-8 flex-1">
            {/* Heading Section */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Get started today with Proactiv to kickstart your marketing efforts
              </h1>
              <p className="text-gray-400 text-lg">
                Proactiv houses the best in class software tools to kickstart your marketing journey. Join 127,000+ other users to get started.
              </p>
            </div>

            {/* Social Proof Section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-10">
                <div className="flex flex-row items-center w-auto sm:w-auto">
                  <AnimatedTooltip items={people} />
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-400">Trusted by 22,000+ creations</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center justify-center md:justify-end w-full md:w-auto mt-8 md:mt-0">
            <Link 
              href="http://localhost:3000/pricing"
              className="inline-block bg-[#40E0D0] hover:bg-[#3CC8BA] text-black font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
            >
              Book a demo →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}