import React, {useState} from "react";

const WorksFor = () => {
    return (
        <div className="bg-white -py-16 mb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[4rem] text-3xl relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-8">
              We Proudly say, Our clients now works at{' '}
            </h2>
            <p className=" text-lg text-gray-600">
              We stand by our commitments and ensure that our actions align with
              our promises.
            </p>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              <div className="flex justify-center items-center h-16 w-full">
                <img
                  src="blackrock.svg"
                  alt="Blackrock"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-12 w-full">
                <img
                  src="google.png"
                  alt="Google"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-20 w-full">
                <img
                  src="Tinder.png"
                  alt="Tinder"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-20 w-full">
                <img
                  src="Amazon.png"
                  alt="Amazon"
                  className="h-full object-contain"
                />
              </div>
              <div className="flex justify-center items-center h-24 w-full">
                <img
                  src="JPMorgan.png"
                  alt="JP Morgan & Chase"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-16 w-full">
                <img
                  src="servicenow.svg"
                  alt="servicenow"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-12 w-full">
                <img
                  src="DEShaw.svg"
                  alt="DE Shaw & Co"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-20 w-full">
                <img
                  src="cocacola.svg"
                  alt="Coca Cola"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-16 w-full">
                <img
                  src="Nvidia.png"
                  alt="Nvidia"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-24 w-full">
                <img
                  src="SocieteGenerale.png"
                  alt="Societe Generale"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-16 w-full">
                <img
                  src="airbnb.png"
                  alt="Airbnb"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-16 w-full">
                <img src="EY.svg" alt="EY" className="h-full object-contain" />
              </div>
              <div className="flex justify-center items-center h-16 w-full">
                <img
                  src="apexanalytix.svg"
                  alt="Apex Analytix"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-24 w-full">
                <img
                  src="Pinterest.svg"
                  alt="Pinterest"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-16 w-full">
                <img
                  src="salesforce.png"
                  alt="Salesforce"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-12 w-full">
                <img
                  src="microsoft.png"
                  alt="Amazon"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-10 w-full">
                <img
                  src="wex.svg"
                  alt="wex"
                  className="h-full object-contain"
                />
              </div>
              <div className="flex justify-center items-center h-10 w-full">
                <img
                  src="twitch.png"
                  alt="Twitch"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-16 w-full">
                <img
                  src="uber.png"
                  alt="Uber"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-16 w-full">
                <img
                  src="doordash.svg"
                  alt="DoorDash"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-16 w-full">
                <img
                  src="FIS.png"
                  alt="FIS"
                  className="h-full object-contain"
                />
              </div>
              <div className="flex justify-center items-center h-20 w-full">
                <img
                  src="Walmart.png"
                  alt="Walmart"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-8 w-full">
                <img
                  src="spglobal.svg"
                  alt="S&P Global"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center items-center h-14 w-full">
                <img
                  src="clear_street.svg"
                  alt="Clear Street"
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="mt-8 text-gray-600 text-sm">
              We've worked with several thousand fellows and counting. Read
              their stories{' '}
              <a href="Wall" className="text-blue-600">
                here
              </a>
              .
            </p>
          </div>
        </div>
    );
};

export default WorksFor;