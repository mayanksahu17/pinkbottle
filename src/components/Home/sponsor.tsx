import React from "react";

const Sponsor = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-white to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-xl font-bold text-gray-800">
            Featured In:
          </h2>
          <p className="text-gray-600 text-sm mt-4">
          Proudly supported by the University of Central Florida and recognized by leading media outlets.
          </p>
        </div>

        {/* Logos Section */}
        <div className="flex flex-wrap justify-center items-center gap-16">
          {/* Backed By */}
          <div className="flex flex-col items-center">
            <p className="text-gray-600 text-sm font-medium">Invested by:</p>
            <div className="flex justify-center items-center h-8 mt-2">
              <img
                src="/UF.png"
                alt="University of Florida"
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Separator */}
          <div className="hidden md:block w-px h-10 bg-gray-300"></div>

          {/* As Seen In */}
          <div className="flex flex-col items-center">
            <p className="text-gray-600 text-sm font-medium">As seen in:</p>
          </div>
          <div className="flex justify-center items-center h-6">
            <img
              src="Yourstory.png"
              alt="YourStory"
              className="h-full w-auto object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex justify-center items-center h-6">
            <img
              src="FinancialExpress.png"
              alt="Financial Express"
              className="h-full w-auto object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex justify-center items-center h-6">
            <img
              src="Forbes.png"
              alt="Forbes"
              className="h-full w-auto object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex justify-center items-center h-6">
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
  );
};

export default Sponsor;
