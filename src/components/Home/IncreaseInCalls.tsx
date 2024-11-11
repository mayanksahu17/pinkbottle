import Link from 'next/link';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const resultHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-6xl lg:text-7xl style={{ fontFamily: 'Calibri' }}">
            91% Increase in Calls with HiredEasy
          </h1>
          <p className="max-w-[700px] mx-auto text-primary-foreground text-sm sm:text-base md:text-lg lg:text-xl style={{ fontFamily: 'Calibri' }}">
            Our clients start receiving calls within the first month of having
            our assistants apply. Remarkably, 70% secure a job within one month
            of joining HiredEasy.
          </p>
        </div>
      </div>

      <section
        className="bg-white py-16"
        style={{ fontFamily: 'Calibri, sans-serif' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid Layout for Desktop and Tablet */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Aadvik */}
            <div className="text-center">
              <h3 className="text-green-600 font-bold text-lg">Aadvik</h3>
              <p className="text-black font-semibold">Student to Full-time</p>
              <p className="text-gray-700 mb-4">
                Aadvik received offer letter from FAANG and ready for next round
                at Spotify{' '}
              </p>
              <img
                src="Testimonial6.jpeg"
                alt="Sunny Testimonial"
                className="shadow-lg rounded-lg w-2/3 mx-auto"
              />
            </div>

            {/* Surabhi */}
            <div className="text-center">
              <h3 className="text-green-600 font-bold text-lg">Sadia</h3>
              <p className="text-black font-semibold">Interview with Wex</p>
              <p className="text-gray-700 mb-4">
                Sadia received Interview from Wex
              </p>
              <img
                src="Testimonial1.png"
                alt="Surabhi Testimonial"
                className="shadow-lg rounded-lg w-full h-auto mb-10"
                style={{ maxWidth: '100%', maxHeight: '1000px' }}
              />
              {/* Pratik */}
              <div className="text-center">
                <h3 className="text-green-600 font-bold text-lg">Sadia</h3>
                <p className="text-black font-semibold">
                  Interview with JP Morgan
                </p>
                <p className="text-gray-700 mb-4">
                  Sadia received Interview from JP Morgan
                </p>
                <img
                  src="Testimonial2.png"
                  alt="Pratik Testimonial"
                  className="shadow-lg rounded-lg w-full"
                />
              </div>
            </div>

            {/* Ashutosh */}
            <div className="text-center">
              <h3 className="text-green-600 font-bold text-lg">Ashutosh</h3>
              <p className="text-black font-semibold">
                Received interview from Google
              </p>
              <p className="text-gray-700 mb-4">
                Ashustosh received interview call from Google
              </p>
              <img
                src="Testimonial4.png"
                alt="Anjali Testimonial"
                className="shadow-lg rounded-lg w-full mb-10"
              />
              <div className="text-center">
                <h3 className="text-green-600 font-bold text-lg">Anshul</h3>
                <p className="text-black font-semibold">
                  Received referral at Amazon
                </p>
                <p className="text-gray-700 mb-4">
                  Anshul received multiple referrals from Tech companies
                </p>
                <img
                  src="Testimonial7.png"
                  alt="Anshul Testimonial"
                  className="shadow-lg rounded-lg w-full mb-20"
                />
              </div>
            </div>
          </div>

          {/* Slider for Mobile */}
          <div className="block md:hidden">
            <Slider {...settings}>
              {/* Ashutosh */}
              <div className="text-center px-2">
                <h3 className="text-green-600 font-bold text-lg">Ashutosh</h3>
                <p className="text-black font-semibold">
                  Received interview from Google
                </p>
                <p className="text-gray-700 mb-4">
                  Ashutosh received interview call from Google
                </p>
                <img
                  src="Testimonial4.png"
                  alt="Ashutosh Testimonial"
                  className="shadow-lg rounded-lg w-full"
                />
              </div>

              {/* Aadvik */}
              <div className="text-center px-2">
                <h3 className="text-green-600 font-bold text-lg">Aadvik</h3>
                <p className="text-black font-semibold">Student to Full-time</p>
                <p className="text-gray-700 mb-4">
                  Aadvik received offer letter from FAANG and ready for next
                  round at Spotify
                </p>
                <div
                  className="flex justify-center items-center"
                  style={{ minHeight: '300px' }}
                >
                  <img
                    src="Testimonial6.jpeg"
                    alt="Aadvik Testimonial"
                    className="shadow-lg rounded-lg max-h-64 object-contain"
                  />
                </div>
              </div>

              {/* Sadia */}
              <div className="text-center px-2">
                <h3 className="text-green-600 font-bold text-lg">Sadia</h3>
                <p className="text-black font-semibold">Interview with Wex</p>
                <p className="text-gray-700 mb-4">
                  Sadia received Interview from Wex
                </p>
                <div
                  className="flex justify-center items-center"
                  style={{ minHeight: '300px' }}
                >
                  <img
                    src="Testimonial1.png"
                    alt="Sadia Testimonial"
                    className="shadow-lg rounded-lg max-h-64 object-contain"
                  />
                </div>
              </div>
              {/* Sadia */}
              <div className="text-center px-2">
                <h3 className="text-green-600 font-bold text-lg">Sadia</h3>
                <p className="text-black font-semibold">
                  Interview with JP Morgan
                </p>
                <p className="text-gray-700 mb-4">
                  Sadia received Interview from JP Morgan
                </p>
                <img
                  src="Testimonial2.png"
                  alt="Sadia Testimonial"
                  className="shadow-lg rounded-lg w-full"
                />
              </div>

              {/* Anshul */}
              <div className="text-center px-2">
                <h3 className="text-green-600 font-bold text-lg">Anshul</h3>
                <p className="text-black font-semibold">
                  Received referral at Amazon
                </p>
                <p className="text-gray-700 mb-4">
                  Anshul received multiple referrals from Tech companies
                </p>
                <img
                  src="Testimonial7.png"
                  alt="Anshul Testimonial"
                  className="shadow-lg rounded-lg w-full"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Our results speak for
          <br /> themselves.
        </h2>
        <div className="flex items-center justify-center mt-4">
          <Link href="/onboarding">
            <button className="flex items-center justify-center gap-2 px-6 py-2 text-sm md:text-lg font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary-dark transition-all shadow-lg">
              <span className="rounded-full bg-white p-2">
                <img
                  src="Ashwin_jain.png"
                  alt="Custom Image"
                  className="h-6 w-6"
                  loading="lazy"
                />
              </span>
              <span>Start your Free Trial</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="md:ml-1 h-5 w-5 text-gray-400 animate-pulse"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="-ml-3 h-5 w-5 animate-pulse"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <section className="bg-white py-10 bg-[#ffffff] mt-5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="text-center text-justify">
                <span className="text-5xl font-bold text-black">1300+</span>
                <p className="text-lg text-gray-700 font-calibri">
                  Landed Full-Time Roles
                </p>
                <p className="text-gray-700 font-calibri text-sm">
                  Our clients achieve remarkable results, with 72% securing
                  full-time positions in USA. Impressively, 47% of these roles
                  are obtained through our strategic applications, while the
                  remaining 44% come from leveraging personal networks and
                  individual efforts.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="text-center text-justify">
                <span className="text-5xl font-bold text-black">80x</span>
                <p className="text-lg text-gray-700 font-calibri">
                  Less time spent in job search
                </p>
                <p className="text-gray-700 font-calibri text-sm">
                  Our clients achieve remarkable results, with 72% securing
                  full-time positions in just three months. Impressively, 47% of
                  these roles are obtained through our strategic applications,
                  while the remaining 44% come from leveraging personal networks
                  and individual efforts.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="text-center text-justify">
                <span className="text-5xl font-bold text-black">600x</span>
                <p className="text-lg text-gray-700 font-calibri">
                  Return on Investment
                </p>
                <p className="text-gray-700 font-calibri text-sm">
                  By cutting weeks off the job search, we help clients gain an
                  extra $20K in earnings. Additionally, receiving multiple
                  offers can boost salaries by an average of $30K, leading to a
                  substantial increase in overall compensation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default resultHome;
