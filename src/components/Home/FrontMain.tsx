"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const SalaryCard = ({ title, amount, className }: { title: string; amount: string; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={`absolute flex items-center p-4 bg-white rounded-lg shadow-lg ${className}`}
  >
    <svg 
      className="w-6 h-6 text-[#f59e0b]" 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
    <div className="ml-4">
      <motion.p 
        className="text-xl font-bold text-[#f59e0b]"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {amount}
      </motion.p>
      <motion.p 
        className="text-sm text-gray-600"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        {title}
      </motion.p>
    </div>
  </motion.div>
)

const FloatingElement = ({ size, color, className }: { size?: 'sm' | 'md' | 'lg'; color?: string; className?: string }) => {
  const sizeMap = {
    sm: 'w-3 h-3',
    md: 'w-6 h-6',
    lg: 'w-10 h-10',
  };
  const sizeClass = sizeMap[size || 'sm'];

  return (
    <motion.div
      className={`absolute rounded-full ${sizeClass} ${className}`}
      style={{ backgroundColor: color }}
      animate={{
        y: [0, -5, 0],
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

export default function FrontMain() {
  return (
    <section className="bg-background py-16 overflow-hidden">
      <div className="container px-4 text-center">
        <div className="max-w-3xl mx-auto relative">
          {/* Decorative Elements */}
          <FloatingElement 
            size="lg" 
            color="#22c55e"
            className="-left-40 -top-20 opacity-50" 
          />
          <FloatingElement 
            size="md" 
            color="#15803d"
            className="-right-32 top-40 opacity-40" 
          />
          <FloatingElement 
            size="sm" 
            color="#166534"
            className="-left-20 bottom-0 opacity-30" 
          />
          
          {/* Salary Cards */}
          <SalaryCard 
            title="Average junior base salary" 
            amount="$83,307" 
            className="hidden md:flex -left-60 top-40 z-10"
          />
          <SalaryCard 
            title="Average senior base salary" 
            amount="$199,896" 
            className="hidden md:flex -right-60 top-60 z-10"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1 px-2 py-1 mb-4 text-xs font-medium rounded-md shadow-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all border border-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4 animate-pulse text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Save 100+ hours of grunt work
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-8 text-gray-800"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span className="text-primary relative inline-block">
              Land Your Dream Job
              <motion.div 
                className="absolute w-full h-1 bg-primary transform -translate-y-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              ></motion.div>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-700 mb-10"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our assistants help you get more interviews and ace them for top companies like Google, Amazon, McKinsey and more.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 mt-10 items-center justify-center"
          >
            <Link href="/onboarding" target="_blank" rel="noopener noreferrer">
              <Button className="relative flex items-center justify-center gap-2 px-6 py-2 text-sm md:text-lg font-medium text-black bg-white rounded-full hover:bg-green-100 transition-all shadow-lg border border-gray-300 w-full md:w-auto animate-shimmer bg-[linear-gradient(110deg,#d2f8e3,45%,#b6e7d9,55%,#d2f8e3)] bg-[length:200%_100%] focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2 focus:ring-offset-slate-50 group">
                Schedule 3 days free trial
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="https://apply.neetocal.com/meeting-with-nikhil-jain" target="_blank" rel="noopener noreferrer">
              <button className="relative flex items-center justify-center gap-2 px-4 py-1.5 text-sm md:text-base font-medium text-primary-foreground bg-white rounded-full hover:bg-gray-100 transition-all shadow-md border border-gray-300 w-full md:w-auto group">
                <span className="rounded-full bg-white p-1.5">
                  <img
                    src="/Ashwin_jain.png"
                    alt="Profile"
                    className="h-5 w-5 rounded-full"
                    width={20}
                    height={20}
                  />
                </span>
                <span>Schedule a Call</span>
                <ChevronRight className="md:ml-1 h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                <ChevronRight className="-ml-2 h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                <span className="absolute top-0 right-0 mt-1 -mr-1 h-3 w-3 bg-green-500 rounded-full animate-ping"></span>
                <span className="absolute top-0 right-0 mt-1 -mr-1 h-3 w-3 bg-green-500 rounded-full"></span>
              </button>
            </Link>
          </motion.div>

          {/* Mobile Salary Cards */}
          <div className="md:hidden space-y-4 mt-8">
            <SalaryCard title="Average junior base salary" amount="$83,307" className="position-static" />
            <SalaryCard title="Average senior base salary" amount="$199,896" className="position-static" />
          </div>
        </div>
      </div>
    </section>
  )
}

