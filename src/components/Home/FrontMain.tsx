'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Briefcase,
  Search,
  FileText,
  Award,
  Users,
  Laptop,
  Coffee,
  BarChart,
  Mail,
  ChevronRight,
} from 'lucide-react';
import Testimonials from './newtestimonials';

const FloatingElement = ({
  icon: Icon,
  className,
  size = 24,
}: {
  icon: React.ElementType;
  className?: string;
  size?: number;
}) => {
  return (
    <motion.div
      className={`absolute text-gray-400/50 ${className}`}
      animate={{
        y: [0, -10, 0],
        x: [0, 5, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      <Icon size={size} />
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <div className="container px-4 mx-auto mt-32">
        {/* Hero Section */}
        <section className="relative flex flex-col justify-center items-center text-center min-h-[90vh]">
          {/* Background floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingElement
              icon={Briefcase}
              className="top-[10%] left-[10%]"
              size={32}
            />
            <FloatingElement
              icon={Search}
              className="top-[25%] left-[5%]"
              size={28}
            />
            <FloatingElement
              icon={FileText}
              className="bottom-[25%] left-[15%]"
              size={36}
            />
            <FloatingElement
              icon={Award}
              className="top-[20%] right-[10%]"
              size={40}
            />
            <FloatingElement
              icon={Users}
              className="top-[33%] right-[5%]"
              size={32}
            />
            <FloatingElement
              icon={Laptop}
              className="bottom-[33%] right-[15%]"
              size={36}
            />
            <FloatingElement
              icon={Coffee}
              className="bottom-[20%] left-[20%]"
              size={28}
            />
            <FloatingElement
              icon={BarChart}
              className="top-[50%] left-[25%]"
              size={32}
            />
            <FloatingElement
              icon={Mail}
              className="bottom-[50%] right-[20%]"
              size={36}
            />
          </div>

          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 max-w-2xl"
          >
            <div className="flex flex-col justify-center items-center text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]"
              >
                Land Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                  Dream Job
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 mb-12"
              >
                Our assistants help you get more interviews and ace them for top
                companies like Google, Amazon, McKinsey and more.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/onboarding"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-green-500 rounded-full hover:opacity-90 transition-all shadow-lg shadow-blue-500/25 group"
                >
                  Start Free Trial
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/schedule"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium text-gray-700 bg-white rounded-full hover:bg-gray-50 transition-all border border-gray-200 shadow-sm group"
                >
                  <Image
                    src="/placeholder.svg"
                    alt="Avatar"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  Schedule a Call
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
            <div className="flex justify-center items-center gap-8 mt-8">
              {/* Job Seekers Helped */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 7a4 4 0 110 8 4 4 0 010-8z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
                  700+ Job Seekers Helped
                </span>
              </div>

              {/* Trustpilot Rating */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full shadow-sm">
                <div className="flex gap-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-5 w-5 bg-green-500 flex items-center justify-center rounded-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </div>
                  ))}
                  {/* Half Star */}
                  <div className="h-5 w-5 bg-green-500 flex items-center justify-center rounded-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 15.4l-3.76 2.27 1-4.28L5.47 10l4.38-.37L12 5.5l2.15 4.13 4.38.37-3.76 3.38 1 4.28L12 15.4z" />
                    </svg>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
                  4.2 on Trustpilot
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>

              {/* Jobs Applied */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16l-4-4m0 0l4-4m-4 4h16"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
                  250k+ Jobs Applied
                </span>
              </div>
            </div>
          </motion.div>

          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-4xl mx-auto mt-16 lg:mt-0 lg:ml-auto"
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div
                className="relative w-[90vw] h-[70vh] flex items-center justify-center overflow-hidden bg-white mt-8"
                style={{
                  transform:
                    'perspective(1000px) rotateX(5deg) rotateY(5deg) rotateZ(-10deg) skewX(10deg)',
                  transformOrigin: 'center bottom',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  zIndex: 1,
                  maskImage:
                    'linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)',
                  maskSize: '100% 100%',
                  WebkitMaskSize: '100% 100%',
                }}
              >
                {/* Window controls */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100/80 backdrop-blur flex items-center gap-1.5 px-4 z-10">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>

                <Image
                  src="/LinkedinJobs.png"
                  alt="Application Interface"
                  fill
                  className="object-cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              {/* Subtle gradient background */}
              <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-blue-500/20 to-green-500/20 opacity-20 blur-3xl" />
            </motion.div>
          </motion.div>
        </section>

        {/* Testimonials section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative z-10 py-20"
        >
          {/* <Testimonials /> */}
        </motion.div>
      </div>
    </div>
  );
}