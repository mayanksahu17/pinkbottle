"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Briefcase, Search, FileText, Award, Users, Laptop, Coffee, BarChartIcon as ChartBar, Mail } from 'lucide-react'

const FloatingElement = ({ icon: Icon, className, size = 24  }: { icon: React.ElementType; className?: string; size?: number }) => {
  return (
    <motion.div
      className={`absolute text-gray-400 ${className}`}
      animate={{
        y: [0, -10, 0],
        x: [0, 5, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Icon size={size} />
    </motion.div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      <section className="pt-20 pb-16">
        <div className="container px-4 mx-auto relative">
          <FloatingElement icon={Briefcase} className="top-10 left-[10%]" size={32} />
          <FloatingElement icon={Search} className="top-1/4 left-[5%]" size={28} />
          <FloatingElement icon={FileText} className="bottom-1/4 left-[15%]" size={36} />
          <FloatingElement icon={Award} className="top-20 right-[10%]" size={40} />
          <FloatingElement icon={Users} className="top-1/3 right-[5%]" size={32} />
          <FloatingElement icon={Laptop} className="bottom-1/3 right-[15%]" size={36} />
          <FloatingElement icon={Coffee} className="bottom-20 left-[20%]" size={28} />
          <FloatingElement icon={ChartBar} className="top-1/2 left-[25%]" size={32} />
          <FloatingElement icon={Mail} className="bottom-1/2 right-[20%]" size={36} />
          <FloatingElement icon={Briefcase} className="top-1/4 right-[30%]" size={40} />
          <FloatingElement icon={Search} className="bottom-1/3 left-[30%]" size={32} />
          <FloatingElement icon={FileText} className="top-2/3 right-[25%]" size={28} />
          <FloatingElement icon={Award} className="bottom-1/4 right-[35%]" size={36} />
          <FloatingElement icon={Users} className="top-1/2 right-[40%]" size={32} />
          <div className="flex flex-col items-center">
            <div className="w-full lg:w-[45%] mb-12 lg:mb-0 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] pr-6"
                >
                  Land Your<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Dream Job</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl text-gray-400 mb-12 pr-4"
                >
                  Our assistants help you get more interviews and ace them for top companies like Google, Amazon, McKinsey and more.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex flex-col md:flex-row gap-4 mt-10 items-center justify-center">
                    <Link href="/onboarding">
                      <button className="relative flex items-center justify-center gap-2 px-6 py-2 text-sm md:text-lg font-medium text-black bg-white rounded-full hover:bg-green-50 transition-all shadow-lg border border-gray-300 w-full md:w-auto animate-shimmer bg-[linear-gradient(110deg,#d2f8e3,45%,#b6e7d9,55%,#d2f8e3)] bg-[length:200%_100%] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Schedule 3 days free trial
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5 animate-pulse"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7l5 5-5 5m0-5H6"
                          ></path>
                        </svg>
                      </button>
                    </Link>

                    <div className="flex items-center justify-center w-full md:w-auto">
                      <Link href="https://apply.neetocal.com/meeting-with-nikhil-jain">
                        <button className="relative flex items-center justify-center gap-2 px-4 py-1.5 text-sm md:text-base font-medium text-primary-foreground bg-white rounded-full hover:bg-gray-100 transition-all shadow-md border border-gray-300 w-full md:w-auto">
                          <span className="rounded-full bg-white p-1.5">
                            <Image
                              src="/Ashwin_jain.png"
                              alt="Custom Image"
                              width={20}
                              height={20}
                              className="rounded-full"
                            />
                          </span>
                          <span>Schedule a Call</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="md:ml-1 h-4 w-4 text-gray-400"
                          >
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="-ml-2 h-4 w-4 text-gray-400"
                          >
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                          <span className="absolute top-0 right-0 mt-1 -mr-1 h-3 w-3 bg-green-500 rounded-full animate-ping"></span>
                          <span className="absolute top-0 right-0 mt-1 -mr-1 h-3 w-3 bg-green-500 rounded-full"></span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full lg:w-[65%] mt-12 lg:mt-16 relative"
            >
              <div
                className="relative rounded-xl overflow-hidden border border-gray-200"
                style={{
                  transform: 'perspective(700px) rotateY(-20deg) rotateX(20deg)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-7 bg-white flex items-center gap-1.5 px-3">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                </div>
                <Image
                  src="/LinkedinJobs.png"
                  alt="this is a placeholder"
                  width={1270}
                  height={300}
                  className="w-full"
                  style={{
                    marginTop: '28px',
                    borderRadius: '10px',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
