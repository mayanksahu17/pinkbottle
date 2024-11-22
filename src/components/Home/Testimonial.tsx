import React, { useState } from 'react';

const Testimonial = () => {
  return (
    <div className="bg-gray-50 py-32">
      <h2 className="text-[3rem] font-bold text-center text-gray-800 mb-6">
        Our clients <span className="text-red-500">❤️</span> us
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Hear what our customers have to say about their experience with
        HiredEasy.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center px-4 space-x-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 h-96">
          <div className="flex flex-col items-start mb-4">
            <img
              className="w-24 mb-4"
              src="google.png"
              alt="Google"
              loading="lazy"
            />
            <div className="flex items-center">
              <img
                className="w-16 h-16 rounded-full border-4 border-blue-500 mr-4"
                src="/Try.jpeg?height=40&width=40"
                alt="Riya Patel"
                loading="lazy"
              />
              <div>
                <h3 className="text-gray-800 text-2xl font-semibold" style={{ fontFamily: 'Calibri' }}>Riya Patel</h3>
                <p className="text-base text-green-600 font-medium" style={{ fontFamily: 'Calibri' }}>Product Manager</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 style={{ fontFamily: 'Calibri' }}">
            "When I lost my job during an economic downturn and had just 60 days
            left on my H1B visa, I was extremely anxious. I decided to try their
            premium service and fully committed to the process. Within just 1
            month, I received 2 job offers, each offering a significant salary
            increase over my previous position. Their expertise were remarkable.
            I am profoundly thankful for their assistance during this
            challenging period."
          </p>
        </div>
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 h-96">
          <div className="flex flex-col items-start mb-4">
            <img
              className="w-24 mb-4"
              src="Hsbc.png"
              alt="HSBC"
              loading="lazy"
            />
            <div className="flex items-center">
              <img
                className="w-16 h-16 rounded-full border-4 border-blue-500 mr-4"
                src="/Nikunj_Desai.jpeg?height=50&width=50"
                alt="Nikunj Desai"
                loading="lazy"
              />
              <div>
                <h3 className="text-gray-800 text-2xl font-semibold" style={{ fontFamily: 'Calibri' }}>Nikunj Desai</h3>
                <p className="text-base text-green-600 font-medium" style={{ fontFamily: 'Calibri' }}>Software Engineer</p>
              </div>
            </div>
          </div>  
          <p className="text-gray-600 style={{ fontFamily: 'Calibri' }}">
            "Working full time left me with little time to apply for jobs. The
            application process was tedious and could take more than 15 minutes
            for just one job. After a week of trying on my own, I felt exhausted
            and demotivated. Then I heard about 'HiredEasy.com,' a service that
            applies for jobs on your behalf. Their team was incredibly helpful,
            always available to talk, and followed my job application
            priorities. They made the process so much easier for me."
          </p>
        </div>
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 h-96">
          <div className="flex flex-col items-start mb-4">
            <img className="w-24 mb-4" src="wex.svg" alt="wex" loading="lazy" />
            <div className="flex items-center">
              <img
                className="w-16 h-16 rounded-full border-4 border-blue-500 mr-4"
                src="/Anshul.jpeg?height=40&width=40"
                alt="Anshul Jain"
                loading="lazy"
              />
              <div>
                <h3 className="text-gray-800 text-2xl font-semibold" style={{ fontFamily: 'Calibri' }}>Anshul Jain</h3>
                <p className="text-base text-green-600 font-medium" style={{ fontFamily: 'Calibri' }}>Software Engineer</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 style={{ fontFamily: 'Calibri' }}">
            "I was looking for an internship and applied to over 300 positions
            on my own, but nothing worked out. Then I found HiredEasy. They
            updated my resume, wrote cover letters, and applied for jobs for me.
            Soon, I received two offer letters. Investing in their service was
            worth it because I got a great internship that covers both my
            student loan and living expenses."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
