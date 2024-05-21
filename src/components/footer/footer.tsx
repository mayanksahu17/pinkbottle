"use client"

import { SVGProps } from "react";

const footer = () => {
    
  return (
    <footer className="bg-[#12083b]">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        <p className="text-sm text-white mb-8 lg:mb-0">
          Made with <HeartIcon className="text-red-500 inline" /> by Hirely Team
        </p>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12">
          <div>
            <h4 className="text-xl font-semibold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="mt-4 space-y-4">
              <li>
                <a className="text-sm text-base text-white hover:text-gray-300" href="/pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-sm text-base text-white hover:text-gray-300" href="/Wall">
                  Wall of Love
                </a>
              </li>
              <li>
                <a className="text-sm text-base text-white hover:text-gray-300" href="#">
                  Join as an Affiliate
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a className="text-sm text-base text-white hover:text-gray-300" href="/career">
                  Career
                </a>
              </li>
              {/* <li>
                <a className="text-base text-white hover:text-gray-300" href="#">
                  AI Copilot
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <br/>
        <div>
    <h3 className="text-base font-bold text-white mb-4">
      Follow Us On
    </h3>
    <div className="flex space-x-4">
      <a href="https://www.instagram.com/hiredeasy/" target="_blank" className="text-white hover:text-blue-500 transition-colors duration-300">
        <InstagramIcon className="h-8 w-8" />
      </a>
      <a href="#" className="text-white hover:text-blue-700 transition-colors duration-300">
        <LinkedinIcon className="h-8 w-8" />
      </a>
      {/* Uncomment to include a Twitter icon */}
      {/* <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300">
        <TwitterIcon className="h-8 w-8" />
      </a> */}
    </div>
  </div>
  
      </div>
    </div>
  </footer>
  );
};

export default footer;

function InstagramIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
  ) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }
  
  function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    );
  }
  
  function LinkedinIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
  ) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  

