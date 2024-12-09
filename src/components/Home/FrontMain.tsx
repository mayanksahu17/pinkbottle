"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, Search, FileText, Award, Users, Laptop, Coffee, BarChart, Mail, ChevronRight } from 'lucide-react';
import Testimonials from "./newtestimonials";

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
        repeatType: "reverse",
      }}
    >
      <Icon size={size} />
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container px-4 mx-auto">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-between py-20">
          {/* Background floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingElement icon={Briefcase} className="top-[10%] left-[10%]" size={32} />
            <FloatingElement icon={Search} className="top-[25%] left-[5%]" size={28} />
            <FloatingElement icon={FileText} className="bottom-[25%] left-[15%]" size={36} />
            <FloatingElement icon={Award} className="top-[20%] right-[10%]" size={40} />
            <FloatingElement icon={Users} className="top-[33%] right-[5%]" size={32} />
            <FloatingElement icon={Laptop} className="bottom-[33%] right-[15%]" size={36} />
            <FloatingElement icon={Coffee} className="bottom-[20%] left-[20%]" size={28} />
            <FloatingElement icon={BarChart} className="top-[50%] left-[25%]" size={32} />
            <FloatingElement icon={Mail} className="bottom-[50%] right-[20%]" size={36} />
          </div>

          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]"
            >
              Land Your{" "}
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
              Our assistants help you get more interviews and ace them for top companies like
              Google, Amazon, McKinsey and more.
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
                className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 bg-white"
                style={{
                  transform: "perspective(1000px) rotateX(5deg) rotateY(-5deg)",
                  transformOrigin: "center bottom",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
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
                  style={{ marginTop: "32px" }}
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
          <Testimonials />
        </motion.div>
      </div>
    </div>
  );
}

