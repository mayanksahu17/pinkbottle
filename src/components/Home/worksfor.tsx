'use client'

import React, { useState, useEffect } from "react";
import { companies, Company } from "./companyData";
import { motion, AnimatePresence } from "framer-motion";

const WorksFor: React.FC = () => {
  const [visibleCompanies, setVisibleCompanies] = useState<Company[]>([]);

  useEffect(() => {
    setVisibleCompanies(getRandomCompanies());
    const intervalId = setInterval(() => {
      setVisibleCompanies(getRandomCompanies());
    }, 5000); // Change every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  const getRandomCompanies = (): Company[] => {
    return [...companies].sort(() => 0.5 - Math.random()).slice(0, 6);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600">
          Our Clients Now Work At
        </h2>
        <p className="text-xl text-gray-700 mb-12">
          We're proud of our commitments and the success of our clients.
        </p>
        <AnimatePresence mode="wait">
          <motion.div
            key={visibleCompanies.map(c => c.name).join(',')}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-3 gap-8 items-center"
          >
            {visibleCompanies.map((company) => (
              <motion.div
                key={company.name}
                variants={itemVariants}
                className="flex justify-center items-center h-32 w-full bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <p className="mt-12 text-gray-700 text-lg">
          We've helped thousands of professionals advance their careers. Read their stories{' '}
          <a href="/wall" className="text-blue-600 hover:text-blue-800 underline">
            here
          </a>.
        </p>
      </div>
    </section>
  );
};

export default WorksFor;