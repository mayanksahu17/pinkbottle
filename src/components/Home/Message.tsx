import Link from 'next/link';
import React, { useState } from 'react';
import ScheduleCallButton from '../buttons/schedule-call'; // Import the reusable component

const Message = () => {
  return (
    <section className="bg-transparent py-8 mt-10 ">
      <div className="max-w-2xl mx-auto px-6 text-justify bg-white shadow-2xl rounded-lg p-8 bg-gradient-to-r from-white-100 via-gray-50 to-gray-100">
        <h2
          className="text-3xl font-bold mb-8 text-gray-800"
          style={{ fontFamily: 'Calibri, sans-serif' }}
        >
          Dear Fellow Job Seeker,
        </h2>

        <p
          className="text-gray-700 mb-6 text-lg"
          style={{
            fontFamily: 'Calibri, sans-serif',
            lineHeight: '1.8',
          }}
        >
          Job searching has become one of the most stressful phases of our
          lives, especially for those of us who graduated without a job offer or
          were laid off due to circumstances beyond our control.
        </p>
        <p
          className="text-gray-700 mb-6 text-lg"
          style={{
            fontFamily: 'Calibri, sans-serif',
            lineHeight: '1.8',
          }}
        >
          Engaging in extensive networking and submitting applications to
          countless jobs has become the norm. The most frustrating aspect is
          repeatedly inputting the same information into lengthy applications,
          only to receive no response. This lack of feedback can be incredibly
          disheartening, making it difficult to maintain motivation.
        </p>
        <p
          className="text-gray-700 mb-6 text-lg"
          style={{
            fontFamily: 'Calibri, sans-serif',
            lineHeight: '1.8',
          }}
        >
          Unfortunately, this is the reality we face, and it seems unavoidable.
          While we cannot change the system, we can find ways to navigate it
          more effectively. I've tried everything from using auto-fill
          extensions to AI auto-apply services without success. Eventually, I
          hired a college student from India to apply to jobs on my behalf,
          securing a job within 60 days.
        </p>
        <p
          className="text-gray-700 mb-6 text-lg"
          style={{
            fontFamily: 'Calibri, sans-serif',
            lineHeight: '1.8',
          }}
        >
          This experience was eye-opening, prompting me to start a service to
          assist others who are struggling through the job hunt ordeal.
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

          {/* Use the reusable ScheduleCallButton component here */}
          <ScheduleCallButton />
        </div>
      </div>
    </section>
  );
};

export default Message;
