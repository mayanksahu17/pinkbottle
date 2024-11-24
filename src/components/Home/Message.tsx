import Link from 'next/link';
import React, { useState } from 'react';
import { TextGenerateEffect } from "../ui/text-generate-effect";


const words = ` Job searching has become one of the most stressful phases of our
          lives, especially for those of us who graduated without a job offer or 
          were laid off due to circumstances beyond our control.`;

const words2 = `Engaging in extensive networking and submitting applications to
          countless jobs has become the norm. The most frustrating aspect is
          repeatedly inputting the same information into lengthy applications,
          only to receive no response. This lack of feedback can be incredibly
          disheartening, making it difficult to maintain motivation.`
const words3 = `Unfortunately, this is the reality we face, and it seems unavoidable.
          While we cannot change the system, we can find ways to navigate it
          more effectively. I've tried everything from using auto-fill
          extensions to AI auto-apply services without success. Eventually, I
          hired a college student from India to apply to jobs on my behalf,
          securing a job within 60 days.`

const words4 = `This experience was eye-opening, prompting me to start a service to
          assist others who are struggling through the job hunt ordeal.`

const Message = () => {
  return (
    <section className="bg-[#ffffff] py-8 mb-10">
      <div className="max-w-2xl mx-auto px-6 text-justify bg-white shadow-lg rounded-lg p-8 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100">
        <h2
          className="text-4xl font-bold mb-8 text-gray-800"
          style={{ fontFamily: 'Calibri, sans-serif' }}
        >
          Dear Fellow Job Seeker,
        </h2>

        <p
          className="text-gray-700 mb-6 text-sm"
          style={{
            fontFamily: 'Calibri, sans-serif',
            lineHeight: '1.8',
          }}
        >
         <TextGenerateEffect words={words} duration={2}/>
        </p>
        <p
          className="text-gray-700 mb-6 text-lg"
          style={{
            fontFamily: 'Calibri, sans-serif',
            lineHeight: '1.8',
          }}
        >
          <TextGenerateEffect words={words2} />
        </p>
        <p
          className="text-gray-700 mb-6 text-lg"
          style={{
            fontFamily: 'Calibri, sans-serif',
            lineHeight: '1.8',
          }}
        >
          <TextGenerateEffect words={words3} />
        </p>
        <p
          className="text-gray-700 mb-6 text-lg"
          style={{
            fontFamily: 'Calibri, sans-serif',
            lineHeight: '1.8',
          }}
        >
          <TextGenerateEffect words={words4} />
        </p>
        <div className="flex items-center mb-8">
          <div className="w-24 h-24 border border-gray-300 rounded-lg mr-4 overflow-hidden">
            <img
              src="Shubham.png"
              alt="Shubham Jain"
              className="w-full h-full transform scale-100 object-cover"
            />
          </div>


          <div>
            <p
              className="text-gray-800 font-bold"
              style={{ fontFamily: 'Calibri' }}
            >
              Shubham Jain
            </p>
            <p
              className="text-gray-600"
              style={{ fontFamily: 'Calibri, sans-serif' }}
            >
              Co-Founder | Operations | Ex - Amazon
            </p>
            {/* <a
              href="https://www.linkedin.com/in/nikhil-jain-profile"
              target="_blank"
              className="text-green-500"
            >
              LinkedIn Profile →
            </a> */}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-10 items-center justify-center">
          <Link href="/onboarding">
            <button className="relative flex items-center justify-center gap-2 px-6 py-2 text-sm md:text-lg font-medium text-black bg-white rounded-full hover:bg-green-50 transition-all shadow-lg border border-gray-300 w-full md:w-auto animate-shimmer bg-[linear-gradient(110deg,#d2f8e3,45%,#b6e7d9,55%,#d2f8e3)] bg-[length:200%_100%] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50">
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
          <Link href="https://apply.neetocal.com/meeting-with-nikhil-jain" target="_blank" rel="noopener noreferrer">
                <button className="relative flex items-center justify-center gap-2 px-4 py-1.5 text-sm md:text-base font-medium text-primary-foreground bg-white rounded-full hover:bg-gray-100 transition-all shadow-md border border-gray-300 w-full md:w-auto">
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
          </div>
        </div>

      </div>
    </section>
  );
};

export default Message;
