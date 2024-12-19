import React from "react";

const Sponsor = () => {
  return (
    <div className="py-6 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with a broken line */}
        <div className="relative flex items-center justify-center mb-4">
          <div className="absolute w-full h-px bg-gray-200"></div>
          <div className="relative bg-transparent px-4">
            <h2 className="text-sm font-semibold text-gray-500 bg-gray-100 px-4">Trusted by</h2>
          </div>
        </div>

        {/* Logos Section */}
        <div className="border border-gray-200 rounded-lg shadow-sm p-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* University of Florida with Invested by label */}
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium text-gray-500 mb-2">Invested by</span>
              <div className="h-8 w-32 relative flex justify-center">
                <img
                  src="UF.png"
                  alt="University of Florida"
                  className="absolute inset-0 w-full h-full object-contain object-center scale-110"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Other logos with consistent sizing */}
            <div className="h-12 w-28 relative flex justify-center">
              <img
                src="Yourstory.png"
                alt="YourStory"
                className="absolute inset-0 w-full h-full object-contain object-center scale-110"
                loading="lazy"
              />
            </div>
            <div className="h-12 w-32 relative flex justify-center">
              <img
                src="FinancialExpress.png"
                alt="Financial Express"
                className="absolute inset-0 w-full h-full object-contain object-center scale-125"
                loading="lazy"
              />
            </div>
            <div className="h-8 w-28 relative flex justify-center">
              <img
                src="Forbes.png"
                alt="Forbes"
                className="absolute inset-0 w-full h-full object-contain object-center scale-110"
                loading="lazy"
              />
            </div>
            <div className="h-8 w-28 relative flex justify-center">
              <img
                src="DNA.png"
                alt="DNA"
                className="absolute inset-0 w-full h-full object-contain object-center scale-110"
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

