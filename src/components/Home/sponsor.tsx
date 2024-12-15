import React from "react";

const Sponsor = () => {
  return (
    <div className="py-6 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with a broken line */}
        <div className="relative flex items-center justify-center mb-4">
          <div className="absolute w-full h-px bg-gray-200"></div>
          <div className="bg-transparent px-4 z-10">
            <h2 className="text-sm font-semibold text-gray-500">Trusted by</h2>
          </div>
        </div>

        {/* Logos Section */}
        <div className="border border-gray-200 rounded-lg shadow-sm p-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Individual Logos */}
            <div className="flex justify-center w-1/2 sm:w-auto">
              <img
                src="UF.png"
                alt="University of Florida"
                className="h-8 object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex justify-center w-1/2 sm:w-auto">
              <img
                src="Yourstory.png"
                alt="YourStory"
                className="h-8 object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex justify-center w-1/2 sm:w-auto">
              <img
                src="FinancialExpress.png"
                alt="Financial Express"
                className="h-8 object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex justify-center w-1/2 sm:w-auto">
              <img
                src="Forbes.png"
                alt="Forbes"
                className="h-8 object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex justify-center w-1/2 sm:w-auto">
              <img
                src="DNA.png"
                alt="DNA"
                className="h-8 object-contain"
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
