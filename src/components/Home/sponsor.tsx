import React from "react";

const Sponsor = () => {
  return (
    <div className="py-6 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with a broken line */}
        <div className="relative flex items-center justify-center mb-8">
          <div className="absolute w-full h-px bg-gray-200"></div>
          <div className="relative bg-gray-100 px-4">
            <h2 className="text-sm font-semibold text-gray-500">Trusted by</h2>
          </div>
        </div>

        {/* Logos Section */}
        <div className="border border-gray-200 rounded-lg shadow-sm p-6 sm:p-8">
          <div className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 gap-y-10">
            {/* University of Florida with Invested by label */}
            <div className="relative flex flex-col items-center group">
              <span className="absolute -top-7 text-xs font-semibold text-blue-600 bg-gray-100 px-2 py-1 border border-blue-200 rounded">
                Invested by
              </span>
              <div className="h-12 w-32 relative flex justify-center">
                <img
                  src="UF.png"
                  alt="University of Florida"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="h-16 w-px bg-gray-300"></div>

            {/* Other Logos */}
            <div className="h-12 w-32 relative flex justify-center">
              <img
                src="Yourstory.png"
                alt="YourStory"
                className="absolute inset-0 w-full h-full object-contain object-center"
                loading="lazy"
              />
            </div>

            <div className="h-14 w-36 relative flex justify-center">
              <img
                src="FinancialExpress.png"
                alt="Financial Express"
                className="absolute inset-0 w-full h-full object-contain object-center scale-110"
                loading="lazy"
              />
            </div>

            <div className="h-12 w-32 relative flex justify-center">
              <img
                src="Forbes.png"
                alt="Forbes"
                className="absolute inset-0 w-full h-full object-contain object-center"
                loading="lazy"
              />
            </div>

            <div className="h-12 w-32 relative flex justify-center">
              <img
                src="DNA.png"
                alt="DNA"
                className="absolute inset-0 w-full h-full object-contain object-center"
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
