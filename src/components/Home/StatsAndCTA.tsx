'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { BackgroundGradient } from '@/components/ui/background-gradient';

const sectionsData = [
  {
    title: '1300+',
    subtitle: 'Landed Full-Time Roles',
    description:
      'Our clients achieve remarkable results, with 72% securing full-time positions in USA. Impressively, 47% of these roles are obtained through our strategic applications, while the remaining 44% come from leveraging personal networks and individual efforts.',
    bgColor: '#4338CA',
    image:
      'https://res.cloudinary.com/dmky9t4sr/video/upload/v1736744484/20250113_1028_Focused_Student_Job_Application_simple_compose_01jhf0dzfjf8zrehtvb5sqbv8k_acc4ru.mp4?height=600&width=550',
  },
  {
    title: '80x',
    subtitle: 'Less time spent in job search',
    description:
      'Our clients achieve remarkable results, with 82% securing full-time positions in just three months. Impressively, 47% of these roles are obtained through our strategic applications, while the remaining 44% come from leveraging personal networks and individual efforts.',
    bgColor: '#2563EB',
    image: 'https://res.cloudinary.com/dmky9t4sr/video/upload/v1736745520/20250113_1048_Dream_Job_Unveiled_simple_compose_01jhf1hgdffddtm8v04v6y9nfs_dlh4i8.mp4?height=600&width=550',
  },
  {
    title: '600x',
    subtitle: 'Return on Investment',
    description:
      'By cutting weeks off the job search, we help clients gain an extra $20K in earnings. Additionally, receiving multiple offers can boost salaries by an average of $30K, leading to a substantial increase in overall compensation.',
    bgColor: '#059669',
    image: 'https://res.cloudinary.com/dmky9t4sr/video/upload/v1736745713/20250113_1051_Entering_Google_s_Office_simple_compose_01jhf1qt9gfrs8yv1m823kw6t8_w2u1bs.mp4?height=600&width=550',
  },
];

const AnimatedButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.button
      className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-white rounded-full overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
      <span className="relative">{children}</span>
    </motion.button>
  );
};

const Section = ({
  data,
  index,
}: {
  data: (typeof sectionsData)[0];
  index: number;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Image animation: moves from right to left with blur
  const x = useTransform(scrollYProgress, [0, 1], ['50%', '0%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ['blur(20px)', 'blur(0px)', 'blur(0px)']
  );

  // Smooth background color transition
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      index === 0 ? data.bgColor : sectionsData[index - 1].bgColor,
      data.bgColor,
      index === sectionsData.length - 1
        ? data.bgColor
        : sectionsData[index + 1].bgColor,
    ]
  );

  return (
    <div
      ref={sectionRef}
      className="min-h-screen relative flex items-center overflow-hidden"
    >
      {/* Background Div with smooth transition */}
      <motion.div
        className={`absolute top-0 right-0 h-full w-[35%] ${index === 0 ? 'rounded-tl-[200px]' : ''} ${index === sectionsData.length - 1 ? 'rounded-bl-[200px]' : ''}`}
        style={{ backgroundColor }}
        transition={{ duration: 0.5 }}
      />
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block px-4 py-2 text-base font-bold text-gray bg-gradient-to-r from-gray-100 to-gray-500 rounded-lg shadow-lg"
          >
            {data.subtitle}
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold"
          >
            {data.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            {data.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="https://apply.neetocal.com/meeting-with-nikhil-jain">
              <button className="relative flex items-center justify-center gap-2 px-4 py-1.5 text-sm md:text-base font-medium text-primary-foreground bg-white rounded-full hover:bg-gray-100 transition-all shadow-md border border-gray-300 w-full md:w-auto mt-8">
                <span className="rounded-full bg-white p-1.5">
                  <img
                    src="Ashwin_jain.png"
                    alt="Custom Image"
                    className="h-5 w-5 rounded-full"
                    loading="lazy"
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
          </motion.div>
        </div>

        {/* Animated Image Section */}
        <motion.div
          className="lg:w-1/3 relative flex justify-end"
          style={{ x, opacity, filter }}
        >
          <BackgroundGradient className="rounded-2xl p-4 bg-white dark:bg-zinc-900 shadow-lg">
            {/* Dynamic width and height control via class */}
            <div className="w-[560px] h-[315px]">
              <video
                src={data.image}
                className="rounded-lg border-0 outline-none"
                autoPlay
                loop
                muted
                playsInline
                controls={false} // Remove this line if controls are needed
              />
              {/* Accessibility: Add a caption or description for screen readers */}
              <p className="sr-only">{`${data.subtitle} Interface`}</p>
            </div>
          </BackgroundGradient>
        </motion.div>
      </div>
    </div>
  );
};

export default function ScrollAnimatedSections() {
  return (
    <div className="relative">
      {sectionsData.map((data, index) => (
        <Section key={index} data={data} index={index} />
      ))}
    </div>
  );
}
