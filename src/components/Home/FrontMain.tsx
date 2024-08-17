import Link from 'next/link';
import React, { useState } from 'react';

const FrontMain = () => {
  return (
    <section className="bg-[#fffff] py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">
        <div>
          <div className="inline-flex items-center gap-1 px-2 py-1 mb-4 text-xs font-medium rounded-md shadow-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all border border-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4 animate-pulse text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Save 100+ hours of grunt work
          </div>

          <h1
            className="text-6xl font-bold mb-8 text-gray-800"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Land Your
            <br />
            <span
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className="text-6xl text-primary relative inline-block"
            >
              Dream Job
              <div className="absolute w-full h-1 bg-primary transform -translate-y-2 rotate-2"></div>
            </span>
          </h1>
          <p
            className="text-2xl text-gray-700"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our assistants help you get more interviews and ace them for top
            companies like Google, Amazon, McKinsey and more.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-10 items-center">
            <Link href="/onboarding">
              <button className="relative flex items-center justify-center gap-2 px-6 py-2 text-sm md:text-lg font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-all shadow-lg border border-gray-300 w-full md:w-auto">
                Schedule 3 days free trial
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5 animate-pulse"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5-5 5m0-5H6"
                  ></path>
                </svg>
              </button>
            </Link>

            <div className="flex items-center justify-center w-full md:w-auto">
              <Link href="https://apply.neetocal.com/meeting-with-nikhil-jain">
                <button className="relative flex items-center justify-center gap-2 px-4 py-1.5 text-sm md:text-base font-medium text-primary-foreground bg-white rounded-full hover:bg-gray-100 transition-all shadow-md border border-gray-300 w-full md:w-auto">
                  <span className="rounded-full bg-white p-1.5">
                    <img
                      src="Nikhil.jpeg"
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
            </div>
          </div>
        </div>
        <div className="relative mt-8 md:mt-0">
          <img
            src="/Banner.png"
            alt="Person"
            className="rounded-lg"
            loading="lazy"
          />
          <div className="absolute top-52 left-0 flex items-center p-4 bg-white rounded-lg shadow-lg">
            <UsersIcon className="w-6 h-6 text-[#5f4bb6]" />
            <div className="ml-4">
              <p className="text-xl font-bold text-[#f59e0b]">$83,307</p>
              <p className="text-sm text-gray-600">
                Average junior base salary
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 flex items-center p-4 bg-white rounded-lg shadow-lg">
            <UsersIcon className="w-6 h-6 text-[#f59e0b]" />
            <div className="ml-4">
              <p className="text-xl font-bold text-[#f59e0b]">$199,896</p>
              <p className="text-sm text-gray-600">
                Average senior base salary
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontMain;

function UsersIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
