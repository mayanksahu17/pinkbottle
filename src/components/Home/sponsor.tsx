import React, { useState } from 'react';
import FAQSection from '../FAQ/faq';

const Sponsor = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          <div className="col-span-2 md:col-span-1 text-center mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">Backed by:</p>
            <div className="flex justify-center items-center h-16 mt-2">
              <img
                src="/UF.png"
                alt="University of Florida"
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 text-center mb-4 md:mb-0 whitespace-nowrap">
            <p className="text-gray-800 text-base font-semibold whitespace-nowrap">
              University of Florida
            </p>
            <p className="text-gray-600 text-sm mt-1 whitespace-nowrap">
              Center for Entrepreneurship
            </p>
          </div>
          <div className="hidden md:block col-span-1 lg:col-span-1 border-r border-gray-300 h-10"></div>
          <div className="col-span-2 md:col-span-1 text-center mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">As seen in:</p>
          </div>
          <div className="col-span-1 lg:col-span-1 text-center mb-4 md:mb-0">
            <div className="flex justify-center items-center h-10 mt-2">
              <img
                src="Yourstory.png"
                alt="YourStory"
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1 text-center mb-4 md:mb-0">
            <div className="flex justify-center items-center h-32 mt-2">
              <img
                src="FinancialExpress.png"
                alt="Financial Express"
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1 text-center mb-4 md:mb-0">
            <div className="flex justify-center items-center h-6 mt-2">
              <img
                src="Forbes.png"
                alt="Forbes"
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1 text-center mb-4 md:mb-0">
            <div className="flex justify-center items-center h-10 mt-2">
              <img
                src="DNA.png"
                alt="DNA"
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;