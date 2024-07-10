'use client';
import { Button } from '@/components/ui/button';
import React, { SVGProps, useEffect, useState } from 'react';
import { UserButton, auth, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import styles from '../Button.module.css';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Marquee from 'react-fast-marquee';
import { ContactModal } from '../contactModal';
import Help from '../GetInTouch/Help';
import Model from '../GetInTouch/Model';
import Footer from '../footer/footer';
import SwiperCore from 'swiper';
import Navbar from '../navbar/navbar';

// Configure Swiper to use modules

type WindowSize = {
  width: number | undefined;
};

// Custom hook to check window width
const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    // Set the size initially on client-side
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const HomePage = () => {
  const { isSignedIn, user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width !== undefined && width < 768;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const testimonials = [
    {
      imgSrc: '/Whatsappone.jpeg',
      // caption: 'A quick highlight from testimonial 1...',
    },
    {
      imgSrc: '/Whatsapptwo.jpeg',
      // caption: 'A quick highlight from testimonial 2...',
    },
    {
      imgSrc: '/Whatsappone.jpeg',
      // caption: 'A quick highlight from testimonial 1...',
    },
    {
      imgSrc: '/Whatsapptwo.jpeg',
      // caption: 'A quick highlight from testimonial 2...',
    },
    // Add more testimonials as needed
  ];

  //get in touch
  const handleClose = () => setShowForm(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div
      className="min-h-screen text-black"
      style={{ backgroundColor: '#FFFFFF' }}
    >
  <Navbar />
      <div className="bg-[#bafff1] py-2 shadow-md">
        <div className="max-w-xl mx-auto text-center px-4">
          <p className="text-base font-medium text-gray-800 animate-bounce">
            Ready to get a Job
            <a
              href="#"
              onClick={() => setShowForm(true)}
              className="text-blue-600 hover:text-blue-700 underline pl-1 transition duration-300 ease-in-out"
            >
              Talk to Us!
            </a>
          </p>
        </div>
        <Model show={showForm} onClose={handleClose}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="flex flex-col justify-center items-center p-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-4 text-center">
                Schedule a Call With Founders
              </h2>
              <Link
                href="https://apply.neetocal.com/meeting-with-nikhil-jain"
                target="_blank"
              >
                <button className="flex items-center justify-center gap-2 px-6 py-2 text-sm md:text-lg font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary-dark transition-all shadow-lg border">
                  <span className="rounded-full bg-white p-2">
                    {' '}
                    {/* Increased padding for a bigger circle */}
                    {/* Custom image */}
                    <img
                      src="Nikhil.jpeg"
                      alt="Custom Image"
                      className="h-6 w-6"
                    />{' '}
                    {/* Adjust height and width as needed */}
                  </span>
                  <span>Schedule a call</span>{' '}
                  {/* Corrected to use a span for text content */}
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
                    className="md:ml-1 h-5 w-5 text-gray-400  animate-pulse"
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

              <p className="mt-4 text-sm md:text-lg text-center text-gray-600">
                Schedule a personal call with our founders
              </p>
            </div>
            <Help />
          </div>
        </Model>
      </div>

      <main>
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

              <div className="flex gap-4 mt-10">
                <Link href="/dashboard">
                  <button className="border border-black flex items-center justify-center gap-2 px-6 py-2 text-sm md:text-lg font-medium text-primary-foreground bg-primary rounded-xl hover:bg-primary-dark transition-all shadow-lg">
                    Get Started for Free
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
                <a
                  href="https://apply.neetocal.com/meeting-with-nikhil-jain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-2 text-sm md:text-lg font-bold text-gray-800 bg-transparent border-2 border-gray-800 rounded-xl hover:bg-gray-100 transition-all"
                >
                  Schedule a call
                  <span className="animate-bounce">👋</span>
                </a>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <img src="/Banner.png" alt="Person" className="rounded-lg" />
              <div className="absolute top-64 left-0 flex items-center p-4 bg-white rounded-lg shadow-lg">
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
      </main>

      <div className="bg-gray-100 py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
      <div className="col-span-2 md:col-span-1 text-center mb-4 md:mb-0">
        <p className="text-gray-600 text-sm">Backed by:</p>
        <div className="flex justify-center items-center h-16 mt-2">
          <img
            src="/UF.png"
            alt="University of Florida"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
      <div className="col-span-2 md:col-span-1 text-center mb-4 md:mb-0 whitespace-nowrap">
        <p className="text-gray-800 text-base font-semibold whitespace-nowrap">
          University of Florida
        </p>
        <p className="text-gray-600 text-sm mt-1 whitespace-nowrap">
          Center for Entrepreneurship
        </p>
      </div>
      <div className="hidden md:block col-span-1 lg:col-span-1 border-r border-gray-300 h-10"></div>
      <div className="col-span-2 md:col-span-1 text-center mb-4 md:mb-0">
        <p className="text-gray-600 text-sm">As seen in:</p>
      </div>
      <div className="col-span-1 lg:col-span-1 text-center mb-4 md:mb-0">
        <div className="flex justify-center items-center h-10 mt-2">
          <img
            src="Yourstory.png"
            alt="YourStory"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-1 text-center mb-4 md:mb-0">
        <div className="flex justify-center items-center h-10 mt-2">
          <img
            src="FinancialExpress.png"
            alt="Financial Express"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-1 text-center mb-4 md:mb-0">
        <div className="flex justify-center items-center h-10 mt-2">
          <img
            src="Forbes.png"
            alt="Forbes"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-1 text-center mb-4 md:mb-0">
        <div className="flex justify-center items-center h-10 mt-2">
          <img
            src="DNA.png"
            alt="DNA"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</div>



<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r">
<div className="container px-4 md:px-6 text-center">
  <div className="space-y-4">
    <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-6xl lg:text-7xl">
      91% Increase in Calls with HiredEasy
    </h1>
    <p className="max-w-[700px] mx-auto text-primary-foreground text-sm sm:text-base md:text-lg lg:text-xl">
      Our clients start receiving calls within the first month of having our assistants apply. Remarkably, 70% secure a job within one month of joining HiredEasy.
    </p>
  </div>
</div>

  <section className="bg-white py-10 bg-[#ffffff] mt-10">
    <div className="max-w-6xl mx-auto px-4">
      <div className="md:grid-cols-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
          <div className="text-center text-justify">
            <span className="text-5xl font-bold text-black">1300+</span>
            <p className="text-lg text-gray-700 font-calibri">Landed Full-Time Roles</p>
            <p className="text-gray-700 font-calibri text-sm">
              Our clients achieve remarkable results, with 72% securing full-time positions in USA. Impressively, 47% of these roles are obtained through our strategic applications, while the remaining 44% come from leveraging personal networks and individual efforts.
            </p>
          </div>
          <div className="text-center text-justify text-sm">
            <span className="text-5xl font-bold text-black">80x</span>
            <p className="text-lg text-gray-700 font-calibri">Less time spent in job search</p>
            <p className="text-gray-700 font-calibri">
              Our clients achieve remarkable results, with 72% securing full-time positions in just three months. Impressively, 47% of these roles are obtained through our strategic applications, while the remaining 44% come from leveraging personal networks and individual efforts.
            </p>
          </div>
          <div className="text-center text-justify text-sm">
            <span className="text-5xl font-bold text-black">600x</span>
            <p className="text-lg text-gray-700 font-calibri">Return on Investment.</p>
            <p className="text-gray-700 font-calibri">
              By cutting weeks off the job search, we help clients gain an extra $20K in earnings. Additionally, receiving multiple offers can boost salaries by an average of $30K, leading to a substantial increase in overall compensation.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Our results speak for
        <br /> themselves.
      </h2>
      <div className="flex items-center justify-center mt-4">
        <Link href="/pricing">
          <button className="flex items-center justify-center gap-2 px-6 py-2 text-sm md:text-lg font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary-dark transition-all shadow-lg">
            <span className="rounded-full bg-white p-2">
              <img src="Nikhil.jpeg" alt="Custom Image" className="h-6 w-6" />
            </span>
            <span>Join the Club</span>
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
  </section>
</section>


      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            We Produly say, Our clients now works at{' '}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We stand by our commitments and ensure that our actions align with our promises.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="flex justify-center items-center h-16 w-full">
              <img
                src="Blackrock.svg"
                alt="Blackrock"
                className="h-full object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-12 w-full">
              <img
                src="google.png"
                alt="Google"
                className="h-full object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-20 w-full">
              <img
                src="Tinder.png"
                alt="Tinder"
                className="h-full object-contain"
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
              />
            </div>
            <div className="flex justify-center items-center h-16 w-full">
              <img
                src="servicenow.svg"
                alt="servicenow"
                className="h-full object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-12 w-full">
              <img
                src="DEShaw.svg"
                alt="DE Shaw & Co"
                className="h-full object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-20 w-full">
              <img
                src="cocacola.svg"
                alt="Coca Cola"
                className="h-full object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-16 w-full">
              <img
                src="Nvidia.png"
                alt="Nvidia"
                className="h-full object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-24 w-full">
              <img
                src="SocieteGenerale.png"
                alt="Societe Generale"
                className="h-full object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-16 w-full">
              <img
                src="airbnb.png"
                alt="Airbnb"
                className="h-full object-contain"
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
              />
            </div>
            <div className="flex justify-center items-center h-24 w-full">
              <img
                src="Pinterest.svg"
                alt="Pinterest"
                className="h-full object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-16 w-full">
              <img
                src="salesforce.png"
                alt="Salesforce"
                className="h-full object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-12 w-full">
              <img
                src="microsoft.png"
                alt="Amazon"
                className="h-full object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-10 w-full">
              <img src="wex.svg" alt="wex" className="h-full object-contain" />
            </div>
            <div className="flex justify-center items-center h-10 w-full">
              <img
                src="twitch.png"
                alt="Twitch"
                className="h-full object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-16 w-full">
              <img
                src="uber.png"
                alt="Uber"
                className="h-full object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-16 w-full">
              <img
                src="doordash.svg"
                alt="DoorDash"
                className="h-full object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-16 w-full">
              <img src="FIS.png" alt="FIS" className="h-full object-contain" />
            </div>
            <div className="flex justify-center items-center h-20 w-full">
              <img
                src="Walmart.png"
                alt="Walmart"
                className="h-full object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-8 w-full">
              <img
                src="spglobal.svg"
                alt="S&P Global"
                className="h-full object-contain"
              />
            </div>
            <div className="flex justify-center items-center h-14 w-full">
              <img
                src="clear_street.svg"
                alt="Clear Street"
                className="h-full object-contain"
              />
            </div>
          </div>
          <p className="mt-8 text-gray-600 text-sm">
          We've worked with several thousand fellows and counting. Read their stories {' '}
            <a href="Wall" className="text-blue-600">
              here
            </a>
            .
          </p>
        </div>
      </div>

      <section className="bg-[#faf8f2] py-32 my-8 sm:my-0 md:pt-16">
  <div className="max-w-sm md:max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-extrabold text-gray-900">
        Trusted by 60+ Universities Students and 1300+ got a Job
      </h2>
      <p className="mt-8 text-gray-600 text-sm">
          We've worked with several thousand fellows and counting. Read their stories {' '}
            <a href="Wall" className="text-blue-600">
              here
            </a>
            .
          </p>
    </div>
    <div className="flex justify-center md:justify-start overflow-x-auto">
      <Marquee autoFill={true}>
        {/* Increase the base size for better visibility on mobile */}
        <img
          className="w-36 md:w-36 lg:w-36 p-4"
          src="CalState.jpeg"
          alt="Cal State"
        />
        <img
          className="w-40 md:w-48 lg:w-56 p-4"
          src="UF.png"
          alt="University of Florida"
        />
        <img
          className="w-36 md:w-36 lg:w-36 p-4"
          src="BostonUniversity.gif"
          alt="Boston University"
        />
        <img
          className="w-40 md:w-48 lg:w-56 p-4"
          src="USSA.png"
          alt="University of South Alabama"
        />
        <img
          className="w-52 md:w-56 lg:w-62 p-4"
          src="RIT.png"
          alt="NYIT"
        />
        <img
          className="w-40 md:w-48 lg:w-56 p-4"
          src="ASU.png"
          alt="Arizon State University"
        />
        <img
          className="w-40 md:w-48 lg:w-56 p-4"
          src="Bridgeport.png"
          alt="Bridgeport University"
        />
        <img
          className="w-40 md:w-48 lg:w-56 p-4"
          src="Clarksonlogo.png"
          alt="Clarkson University"
        />
        <img
          className="w-40 md:w-48 lg:w-56 p-4"
          src="Auburn.png"
          alt="Auburn University"
        />
        <img
          className="w-36 md:w-36 lg:w-36 p-4"
          src="StevensLogo.png"
          alt="Stevens Institute"
        />
        <img
          className="w-40 md:w-48 lg:w-56 p-4"
          src="TexasLogo.png"
          alt="Texas A&M"
        />
        <img
          className="w-40 md:w-48 lg:w-56 p-4"
          src="DrexelLogo.png"
          alt="Drexel University"
        />
        <img
          className="w-40 md:w-48 lg:w-56 p-4"
          src="OSU.png"
          alt="Orlando State University"
        />
        <img
          className="w-40 md:w-48 lg:w-56 p-4"
          src="NortheasternLogo.png"
          alt="Northeastern University"
        />
        <img
          className="w-40 md:w-48 lg:w-56 p-4"
          src="KentState.png"
          alt="Michigan State"
        />
        <img
          className="w-40 md:w-48 lg:w-56 p-4"
          src="Pacelogo.png"
          alt="Pace University"
        />
      </Marquee>
    </div>
  </div>
</section>


      <section className="bg-white py-32 bg-[#faf8f2]">
        <div className="max-w-7xl mx-auto px-6 ">
          <h2
            className="text-4xl font-bold text-gray-800 mb-2"
            style={{ fontFamily: 'Josefin Sans, sans-serif' }}
          >
            Sidekicks you can trust
          </h2>
          <p
            className="mb-10 text-gray-500"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            We assemble top-tier talent to support you during the pivotal
            moments of your journey as your trusted aides.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Repeat this card for each person */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out w-full sm:w-72 mx-auto border border-gray-200">
              <div className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white">
                  <img
                    alt="Deepesh Jain"
                    className="w-full h-full object-cover object-center"
                    src="/Depeesh.png" // Replace with the path to the person's image
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Deepesh Jain
                </h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-lg font-semibold text-gray-800 ml-1">
                    4.9 rating
                  </span>
                  <span className="text-gray-500 ml-2">(71 reviews)</span>
                </div>
                <p
                  className="text-gray-500 mt-2 text-sm italic"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  "One of my client landed a dream job their success call made
                  my day!"
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out w-full sm:w-72 mx-auto border border-gray-200">
              <div className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white">
                  <img
                    alt="Aakansha Prajapathi"
                    className="w-full h-full object-cover object-center"
                    src="/Anjali.png" // Replace with the path to the person's image
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Anjali Singh
                </h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-lg font-semibold text-gray-800 ml-1">
                    4.8 rating
                  </span>
                  <span className="text-gray-500 ml-2">(43 reviews)</span>
                </div>
                <p
                  className="text-gray-500 mt-2 text-sm italic"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  "The joy of assisting clients in their pursuit of a full-time
                  career is unparalleled!"
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out w-full sm:w-72 mx-auto border border-gray-200">
              <div className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white">
                  <img
                    alt="Arjun Gupta"
                    className="w-full h-full object-cover object-center"
                    src="/Anil.jpg" // Replace with the path to the person's image
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Yash Jaiswal
                </h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-lg font-semibold text-gray-800 ml-1">
                    4.3 rating
                  </span>
                  <span className="text-gray-500 ml-2">(31 reviews)</span>
                </div>
                <p
                  className="text-gray-500 mt-2 text-sm italic"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  "After submitting 500+ applications, my client finally got
                  that much-awaited offer letter and that was one of the happy
                  moment for me!"
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out w-full sm:w-72 mx-auto border border-gray-200">
              <div className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white">
                  <img
                    alt="Priya Gupta"
                    className="w-full h-full object-cover object-center"
                    src="/Radhika.png" // Replace with the path to the person's image
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Radhika Gupta
                </h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-lg font-semibold text-gray-800 ml-1">
                    4.8 rating
                  </span>
                  <span className="text-gray-500 ml-2">(38 reviews)</span>
                </div>
                <p
                  className="text-gray-500 mt-2 text-sm italic"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  "It made my day when a client thanked me for helping her land
                  a great job."
                </p>
              </div>
            </div>

            <div className="hidden sm:block bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out w-full sm:w-72 mx-auto border border-gray-200">
              <div className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white">
                  <img
                    alt="Chirag Thakur"
                    className="w-full h-full object-cover object-center"
                    src="/Chirag.png" // Replace with the path to the person's image
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Chirag Thakur
                </h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-lg font-semibold text-gray-800 ml-1">
                    4.7 rating
                  </span>
                  <span className="text-gray-500 ml-2">(22 reviews)</span>
                </div>
                <p
                  className="text-gray-500 mt-2 text-sm italic"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  "My best moment was when a client called me to tell that she
                  landed in a fulltime. I was the second one she called to."
                </p>
              </div>
            </div>

            <div className="hidden sm:block bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out w-full sm:w-72 mx-auto border border-gray-200">
              <div className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white">
                  <img
                    alt="Siddharth Jain"
                    className="w-full h-full object-cover object-center"
                    src="/Siddharth.png" // Replace with the path to the person's image
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Siddharth Jain
                </h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-lg font-semibold text-gray-800 ml-1">
                    4.7 rating
                  </span>
                  <span className="text-gray-500 ml-2">(65 reviews)</span>
                </div>
                <p
                  className="text-gray-500 mt-2 text-sm italic"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  "I helped a client who had only 45 days before her OPT
                  expires, I helped her and she got a job in FAANG in less than
                  30 days"
                </p>
              </div>
            </div>

            <div className="hidden sm:block bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out w-full sm:w-72 mx-auto border border-gray-200">
              <div className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white">
                  <img
                    alt="Arjun Gupta"
                    className="w-full h-full object-cover object-center"
                    src="/Kuldeep.jpeg" // Replace with the path to the person's image
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Kuldeep Vyas
                </h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-lg font-semibold text-gray-800 ml-1">
                    4.8 rating
                  </span>
                  <span className="text-gray-500 ml-2">(82 reviews)</span>
                </div>
                <p
                  className="text-gray-500 mt-2 text-sm italic"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  "Seeing a client secure their ideal job after our mock
                  interviews was a proud moment."
                </p>
              </div>
            </div>

            <div className="hidden sm:block bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out w-full sm:w-72 mx-auto border border-gray-200">
              <div className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white">
                  <img
                    alt="Tanvi Jha"
                    className="w-full h-full object-cover object-center"
                    src="/Tanvi.png" // Replace with the path to the person's image
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Tanvi Jha
                </h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-lg font-semibold text-gray-800 ml-1">
                    4.8 rating
                  </span>
                  <span className="text-gray-500 ml-2">(23 reviews)</span>
                </div>
                <p
                  className="text-gray-500 mt-2 text-sm italic"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  "After numerous mock interviews, client aced the real one and
                  got the job—thrilling news!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/*  <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Our Screening Process
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-8">
              <div className="flex items-center hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg p-4">
                <div className="flex-none bg-gray-200 overflow-hidden mr-4 rounded-md">
                  <img
                    src="/vettingone.webp"
                    alt="Description for image 1"
                    className="w-40 h-40 object-contains"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">34% off pass</h3>
                  <p>
                    Every candidate goes through a video interview and is tested
                    for interpersonal skills and English fluency.
                  </p>
                </div>
              </div>
              <div className="flex items-center hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg p-4">
                <div className="flex-none bg-gray-200 overflow-hidden mr-4 rounded-md">
                  <img
                    src="/vettingtwo.webp"
                    alt="Description for image 2"
                    className="w-40 h-40 object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">12% off pass</h3>
                  <p>
                    Selected candidates are examined on their analytical
                    capabilities by conducting two proctored tests.
                  </p>
                </div>
              </div>
              <div className="flex items-center hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg p-4">
                <div className="flex-none bg-gray-200 overflow-hidden mr-4 rounded-md">
                  <img
                    src="/vettingthree.webp"
                    alt="Description for image 3"
                    className="w-40 h-40 object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">2% off pass</h3>
                  <p>
                    On clearing the exam, each of these candidates will be given
                    to complete 25 mock job applications to fill and draft email
                    and LinkedIn responses to particular situations.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Video Interview</h3>
                <p className="mb-4">
                  Every candidate goes through a video interview to ensure they
                  possess the skills and are a cultural fit.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/dashboard">
                    <button className="border border-black flex items-center justify-center gap-2 px-6 py-2 text-sm md:text-lg font-medium text-primary-foreground bg-primary rounded-xl hover:bg-primary-dark transition-all shadow-lg">
                      Get Started for Free
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
                  <a
                    href="https://apply.neetocal.com/meeting-with-nikhil-jain"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2 text-sm md:text-lg font-bold text-gray-800 bg-transparent border-2 border-gray-800 rounded-xl hover:bg-gray-100 transition-all"
                  >
                    Talk to Founder{' '}
                    <span className="animate-bounce ml-2">👋</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
          {/* <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 ">
              How it works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7 lg:col-span-8 pr-30">
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "62.57242178447277%",
                    height: 0,
                  }}
                >
                  <iframe
                    src="https://www.loom.com/embed/fc7716dd8976465f8ec74778994b498e?sid=1c5f25c4-ae83-45db-b037-caa4f0533ea3"
                    frameBorder="0"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
              </div>
              <div className="md:col-span-5 lg:col-span-4">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="rounded-full h-8 w-8 flex items-center justify-center border-2 border-green-500 text-green-500 mr-2">
                      1
                    </div>
                    <h3 className="text-lg font-semibold">Get Started</h3>
                  </div>
                  <p className="text-sm">
                    Sign up and hop on an onboarding call to meet your dedicated
                    Career Assistant.
                  </p>
                </div>
                <br />
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="rounded-full h-8 w-8 flex items-center justify-center border-2 border-green-500 text-green-500 mr-2">
                      2
                    </div>
                    <h3 className="text-lg font-semibold">
                      Your Assistant will apply to jobs
                    </h3>
                  </div>
                  <p className="text-sm">
                    Your Assistant will manually apply to delegated jobs on your
                    behalf and will communicate updates daily on WhatsApp.
                  </p>
                </div>
                <br />
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="rounded-full h-8 w-8 flex items-center justify-center border-2 border-green-500 text-green-500 mr-2">
                      3
                    </div>
                    <h3 className="text-lg font-semibold">
                      Get 5X more interviews
                    </h3>
                  </div>
                  <p className="text-sm">
                    You get more interviews thus higher chances of landing in a
                    full time role. It is just a numbers game.
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                <button className="inline-flex mr-4 items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800">
    Explore Platform
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:ml-1 h-5 w-5 text-gray-400  animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-ml-3 h-5 w-5 animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
</button>
<a href="#" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12">
                <span className="absolute animate-pulse bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-primary p-1.5 text-xs"></span>
                Talk to founder<span className="group-hover:animate-bounce ml-2">👋</span>
            </a>
             

                </div>
              </div>
            </div>
          </div>
        </section> */}

      <div className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
          Our clients <span className="text-red-500">❤️</span> us
        </h2>
        <div className="text-center mb-10">
          <a
            href="/Wall"
            className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
          >
            see more ⇗
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
          <div className="max-w-sm w-full mx-auto text-center">
            <img
              className="w-32 md:w-32 lg:w-32 p-4 mx-auto"
              src="google.png"
              alt="Google"
            />
            <div className="flex items-center space-x-4 mb-4 justify-center">
              <img
                src="/Try.jpeg?height=40&width=40"
                alt="Riya Patel"
                className="w-10 h-10 rounded-full"
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold">Riya Patel</h3>
                <p className="text-sm text-gray-500">Product Manager</p>
              </div>
            </div>
            <p className="text-gray-600">
              When I lost my job during an economic downturn and had just 60
              days left on my H1B visa, I was extremely anxious. I decided to
              try their premium service and fully committed to the process.
              Within just 1 month, I received 2 job offers, each offering a
              significant salary increase over my previous position. Their
              expertise were remarkable. I am profoundly thankful for their
              assistance during this challenging period.
            </p>
          </div>
          <div className="max-w-sm w-full mx-auto text-center">
            <img
              className="w-32 md:w-32 lg:w-32 p-4 mx-auto"
              src="Hsbc.png"
              alt="HSBC"
            />
            <div className="flex items-center space-x-4 mb-4 justify-center">
              <img
                src="/Nikunj_Desai.jpeg?height=50&width=50"
                alt="Nikunj Desai"
                className="w-10 h-10 rounded-full"
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold">Nikunj Desai</h3>
                <p className="text-sm text-gray-500">Software Developer</p>
              </div>
            </div>
            <p className="text-gray-600">
              Working full time left me with little time to apply for jobs. The
              application process was tedious and could take more than 15
              minutes for just one job. After a week of trying on my own, I felt
              exhausted and demotivated. Then I heard about 'HiredEasy.com,' a
              service that applies for jobs on your behalf. Their team was
              incredibly helpful, always available to talk, and followed my job
              application priorities. They made the process so much easier for
              me.
            </p>
          </div>
          <div className="max-w-sm w-full mx-auto text-center">
            <img
              className="w-32 md:w-32 lg:w-32 p-4 mx-auto"
              src="wex.svg"
              alt="wex"
            />
            <div className="flex items-center space-x-4 mb-4 justify-center">
              <img
                src="/Anshul.jpeg?height=40&width=40"
                alt="Anshul Jain"
                className="w-10 h-10 rounded-full"
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold">Anshul Jain</h3>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>
            <p className="text-gray-600">
              I was looking for an internship and applied to over 300 positions
              on my own, but nothing worked out. Then I found HiredEasy. They
              updated my resume, wrote cover letters, and applied for jobs for
              me. Soon, I received two offer letters. Investing in their service
              was worth it because I got a great internship that covers both my
              student loan and living expenses.
            </p>
          </div>
        </div>
      </div>

      {/* <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            We Bring Real Impact 🫶
          </h2>
          {isMobile ? (
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center mb-4">
                    <figure className="relative inline-block w-full max-w-xs mx-auto">
                      <img
                        src={testimonial.imgSrc}
                        alt={`Testimonial ${index + 1}`}
                        className="rounded-lg shadow-lg"
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                        }}
                      />
                    </figure>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-5">
              {testimonials.map((testimonial, index) => (
                <div className="group" key={index}>
                  <div className="text-center mb-4">
                    <figure className="relative inline-block w-full">
                      <img
                        src={testimonial.imgSrc}
                        alt={`Testimonial ${index + 1}`}
                        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mx-auto"
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                        }}
                      />
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section> */}

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-1">
          <h2 className="text-3xl font-bold text-center mb-8">
            Questions? Here's a few of the common ones.
          </h2>
          <div className="divide-y divide-gray-300">
            <details className="group py-4">
              <summary className="text-lg font-medium cursor-pointer flex justify-between items-center">
                What is the success rate?
                <span className="ml-2 text-gray-400 group-open:text-black group-open:rotate-180 transition-transform duration-300">
                  {'\u2935'}
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-sm text-gray-500">
                70% of our users landed fulltime roles in 1 months. 47% of them
                are from the roles we applied to and remaining 44% are from
                their personal networking and individual efforts. According to
                U.S. Bureau of Labor Statistics found that the average period of
                unemployment in 2023 is five months. We cut short it to anywhere
                between 45 days to 3 months.
              </p>
            </details>
            <details className="group py-4">
              <summary className="text-lg font-medium cursor-pointer flex justify-between items-center py-2">
                How many recruiter calls will I get?
                <span className="ml-2 text-gray-400 group-open:text-black group-open:rotate-180 transition-transform duration-300">
                  {'\u2935'}{' '}
                  {/* This is a placeholder for your chevron or arrow icon */}
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-500 text-sm">
                <p>
                You will get 91% more calls than the recruiter calls you received when you applied by yourself.
                  Let us get this straight, we are NOT
                  doing any 'magic' here. All we are doing is taking away the
                  meaningless grunt work from you and giving it to someone else
                  so that you prioritize your mental effort for networking,
                  interview prep, and more productive things.
                </p>
                <p className="mt-2">
                  But if you still ask us about the industry benchmarks that
                  we've been seeing so far in this bad job market, here are some
                  numbers:
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    <strong>
                      For Grad Students and/or Those Needing Sponsorship:
                    </strong>{' '}
                    The response rate ranges between 0.5 to 2%, depending on the
                    individual's profile and experience.
                  </li>
                  <li>
                    <strong>
                      For Experienced Professionals or Those Working on Hyped
                      Modules like 'Generative AI' and/or Not Requiring
                      Sponsorship:
                    </strong>{' '}
                    The response rate is approximately 1.5 to 3%.
                  </li>
                </ul>
              </div>
            </details>
            <details className="group py-4">
              <summary className="text-lg font-medium cursor-pointer flex justify-between items-center">
                Why should I also shortlist the jobs when I am paying? Why not the HiredEasy
                Assistants do that?
                <span className="ml-2 text-gray-400 group-open:text-black group-open:rotate-180 transition-transform duration-300">
                  {'\u2935'}
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-500 text-sm">
                <p>
                  Having assisted over 1300+ job seekers in landing full-time
                  positions, we've identified several compelling reasons for you
                  to take an active role in shortlisting jobs:
                </p>
                <p className="mt-2">
                  <strong>Personal Expertise:</strong> No one understands the
                  nuances of the jobs and roles you’re aiming for better than
                  you. Your insights and preferences are invaluable in
                  identifying the best opportunities.
                </p>
                <p className="mt-2">
                  <strong>Improved Outcomes:</strong> Our experience shows that
                  final outcomes are significantly better when you stay engaged
                  and involved in the process. Rather than us randomly applying
                  to hundreds of positions, your input ensures we target the
                  most suitable roles.
                </p>
                <p className="mt-2">
                  <strong>Avoiding Bias:</strong> For instance, on Day 10 of our
                  collaboration, you might notice we’ve shortlisted roles on
                  platforms like Greenhouse and Lever but seemingly neglected
                  Workday and iCIMS. By staying involved, you can prevent any
                  perceived biases and ensure a balanced approach.
                </p>
                <p className="mt-2">
                  <strong>Geographic Limitations:</strong> LinkedIn often
                  restricts the visibility of US job listings from Indian
                  profiles, making your participation crucial in finding the
                  best matches.
                </p>
                <p className="mt-2">
                  <strong>Unique Requirements:</strong> Each client has distinct
                  needs. For example, one client wanted SDE roles with a focus
                  on JavaScript. We initially shortlisted Node.js roles, but the
                  client specifically preferred React.js. Another client desired
                  Product Manager positions based on location, industry, and
                  posting date but was dissatisfied because some roles required
                  more experience than they had.
                </p>
                <p className="mt-2">
                  Given the diverse and specific nature of our clients’ needs,
                  it’s clear that keeping you in the driver’s seat for job
                  shortlisting is beneficial. That said, we also accommodate
                  clients who prefer to delegate completely. Some clients share
                  their LinkedIn credentials and set up job alerts, asking us to
                  apply for all jobs that come through those alerts.
                </p>
                <p className="mt-2">
                  In these instances, we are more than happy to handle the
                  shortlisting. Otherwise, we recommend you take the lead.
                </p>
              </div>
            </details>
            <details className="group py-4">
              <summary className="text-lg font-medium cursor-pointer flex justify-between items-center">
                How long will my assistant take to apply for the shortlisted
                job?
                <span className="ml-2 text-gray-400 group-open:text-black group-open:rotate-180 transition-transform duration-300">
                  {'\u2935'}
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-500 text-sm">
                <p>
                  Typically, applications are submitted within 24 hours. It is
                  uncommon for the process to take longer than 48 hours. If an
                  application is not submitted within this timeframe, an
                  escalation ticket is automatically generated.
                </p>
              </div>
            </details>

            <details className="group py-4">
              <summary className="text-lg font-medium cursor-pointer flex justify-between items-center">
                How do I track my applications?
                <span className="ml-2 text-gray-400 group-open:text-black group-open:rotate-180 transition-transform duration-300">
                  {'\u2935'}
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-500 text-sm">
                <p>
                  You can visit the dashboard to monitor all your submitted
                  applications and also have the option to import a CSV file.
                </p>
              </div>
            </details>

            <details className="group py-4">
              <summary className="text-lg font-medium cursor-pointer flex justify-between items-center">
                How are you creating personalized Resumes?
                <span className="ml-2 text-gray-400 group-open:text-black group-open:rotate-180 transition-transform duration-300">
                  {'\u2935'}
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-500 text-sm">
                <p>
                  We follow a code and build policy for resumes, as research
                  shows that coded resumes are more likely to pass through ATS
                  and have higher chances of being shortlisted. We utilize AI
                  tools to review resumes and offer unlimited revisions.
                </p>
              </div>
            </details>

            <details className="group py-4">
              <summary className="text-lg font-medium cursor-pointer flex justify-between items-center">
                How are you creating personalized Cover Letters?
                <span className="ml-2 text-gray-400 group-open:text-black group-open:rotate-180 transition-transform duration-300">
                  {'\u2935'}
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-500 text-sm">
                <p>
                  We utilize AI to create customized cover letters by inputting
                  the specific job description, roles, responsibilities, and
                  your resume. This ensures the cover letter is highly
                  personalized and targeted for the role. The quality of these
                  generated cover letters has been remarkably high. You can try
                  it out for free once you log in to our platform.
                </p>
              </div>
            </details>

            <details className="group py-4">
              <summary className="text-lg font-medium cursor-pointer flex justify-between items-center">
                Who will review my Linkedin?
                <span className="ml-2 text-gray-400 group-open:text-black group-open:rotate-180 transition-transform duration-300">
                  {'\u2935'}
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-500 text-sm">
                <p>
                  Your LinkedIn profile will be reviewed by working
                  professionals currently employed at major tech companies in
                  the USA. They will provide direct feedback, and we can also
                  arrange a call if needed.
                </p>
              </div>
            </details>

            <details className="group py-4">
              <summary className="text-lg font-medium cursor-pointer flex justify-between items-center">
                Who are the assistants?
                <span className="ml-2 text-gray-400 group-open:text-black group-open:rotate-180 transition-transform duration-300">
                  {'\u2935'}
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-500 text-sm">
                <p>
                  Our assistants are college students and working professionals
                  from top universities and small companies in India, working
                  part-time. They are specifically trained to fill US job
                  applications on behalf of clients. We select only the top 2%
                  of applicants who wish to join us, and they undergo rigorous
                  training and testing across multiple parameters and
                  situations.
                </p>
              </div>
            </details>

            <details className="group py-4">
              <summary className="text-lg font-medium cursor-pointer flex justify-between items-center">
                What if I am not happy with my assistant?
                <span className="ml-2 text-gray-400 group-open:text-black group-open:rotate-180 transition-transform duration-300">
                  {'\u2935'}
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-500 text-sm">
                <p>
                  You can request a new assistant at any time. We will assign a
                  new assistant for you, allowing you to continue delegating
                  tasks seamlessly.
                </p>
              </div>
            </details>
            <details className="group py-4">
              <summary className="text-lg font-medium cursor-pointer flex justify-between items-center">
                How long will my assistant take to apply for the shortlisted
                job?
                <span className="ml-2 text-gray-400 group-open:text-black group-open:rotate-180 transition-transform duration-300">
                  {'\u2935'}
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-500 text-sm">
                <p>
                  Typically, applications are submitted within 24 hours. It is
                  uncommon for the process to take longer than 48 hours. If an
                  application is not submitted within this timeframe, an
                  escalation ticket is automatically generated.
                </p>
              </div>
            </details>

            <details className="group py-4">
              <summary className="text-lg font-medium cursor-pointer flex justify-between items-center">
                Pricing looks expensive?
                <span className="ml-2 text-gray-400 group-open:text-black group-open:rotate-180 transition-transform duration-300">
                  {'\u2935'}
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-sm text-gray-500">
                We maintain a high success rate thanks to our rigorous screening
                process and the exceptional quality of candidates we accept into
                our program.
              </p>
            </details>
            {/* Repeat the structure above for additional questions */}
          </div>
        </div>
      </section>
      <section className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span style={{ color: 'black' }}>Have more?</span>{' '}
            <span style={{ color: 'gray' }}>Let's catch up over a call</span>
          </h2>

          <p className="mb-6">
            We understand that you might have questions that are specific to
            your situation. <br />
            Pick a slot to talk to our founder. Happy to help you out 😊
          </p>

          <a
            href="https://apply.neetocal.com/meeting-with-nikhil-jain"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-6 py-2 text-sm md:text-lg font-bold text-gray-800 bg-transparent border-2 border-gray-800 rounded-xl hover:bg-gray-100 transition-all"
          >
            Schedule a call <span className="animate-bounce ml-2">👋</span>
          </a>
        </div>
      </section>

      <section className="py-16 bg-[#faf8f2]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            {/* Content in row one */}
            <div className="md:w-1/2 mb-6 md:mb-0">
              {' '}
              {/* Added margin-bottom for spacing */}
              <h2
                className="text-5xl font-bold mb-5 text-gray-800"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Many kickass investors believe in our mission.
              </h2>
              <p
                className="text-center md:text-left mb-3 text-gray-500 text-xl"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                All of them are top of their game in Careers and Immigration.
                Here are a couple of them.
              </p>
            </div>
            {/* Images and text in row two */}
            <div className="md:w-1/2 flex flex-col md:flex-row justify-end items-center space-y-8 md:space-y-0 md:space-x-8">
              <div className="text-center">
                <img
                  alt="Investor 1"
                  src="/Mudambi.jpeg"
                  className="w-64 h-64 md:w-64 md:h-64 rounded-full inline-block transition-transform duration-300 ease-in-out transform hover:scale-110"
                  style={{
                    border: '3px solid white',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  }}
                />
                <h3 className="text-lg font-semibold mt-4">
                  Mudambi Srinivas | SDE II AWS 
                </h3>
                <div className="flex justify-center space-x-2 mt-2">
                  <a
                    className="text-gray-400 hover:text-gray-500"
                    target="_blank"
                    href="https://www.linkedin.com/in/mssrinivasbhargav/"
                  >
                    <LinkedinIcon className="h-6 w-6" />
                  </a>
                  {/* <a className="text-gray-400 hover:text-gray-500" href="#">
              <InstagramIcon className="h-6 w-6" />
            </a> */}
                </div>
              </div>

              <div className="text-center">
                <img
                  alt="Investor 2"
                  src="/Tithy.jpeg"
                  className="w-64 h-64 md:w-64 md:h-64 rounded-full inline-block transition-transform duration-300 ease-in-out transform hover:scale-110"
                  style={{
                    border: '3px solid white',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  }}
                />
                <h3 className="text-lg font-semibold mt-4">
                  Tithy Sahu | Software Engineer Google
                </h3>
                <div className="flex justify-center space-x-2 mt-2">
                  <a
                    className="text-gray-400 hover:text-gray-500"
                    target="_blank"
                    href="https://www.linkedin.com/in/tithys30/"
                  >
                    <LinkedinIcon className="h-6 w-6" />
                  </a>
                  {/* <a className="text-gray-400 hover:text-gray-500" target="_blank" href="https://www.linkedin.com/in/rrishijain/">
              <InstagramIcon className="h-6 w-6" />
            </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff] py-16">
        <div className="max-w-4xl mx-auto px-6 text-justify">
          <h2
            className="text-4xl font-bold mb-8 text-center"
            style={{ fontFamily: 'Calibri, sans-serif' }}
          >
            Why are we doing this?
          </h2>

          <p
            className="text-gray-500  mb-6"
            style={{
              fontFamily: 'Times New Roman, serif',
              lineHeight: '1.35',
            }}
          >
            Job searching has become one of the most stressful phases of our
            lives, especially for those of us who graduated without a job offer
            or were laid off due to circumstances beyond our control.
          </p>
          <p
            className="text-gray-500 mb-6"
            style={{
              fontFamily: 'Times New Roman, serif',
              lineHeight: '1.35',
            }}
          >
            Engaging in extensive networking and submitting applications to
            countless jobs has become the norm. The most frustrating aspect is
            repeatedly inputting the same information into lengthy applications,
            only to receive no response. This lack of feedback can be incredibly
            disheartening, making it difficult to maintain motivation.
          </p>
          <p
            className="text-gray-500 mb-6"
            style={{
              fontFamily: 'Times New Roman, serif',
              lineHeight: '1.35',
            }}
          >
            Unfortunately, this is the reality we face, and it seems
            unavoidable. While we cannot change the system, we can find ways to
            navigate it more effectively. I've tried everything from using
            auto-fill extensions to AI auto-apply services without success.
            Eventually, I hired a college student from India to apply to jobs on
            my behalf, securing a job within 60 days.
          </p>
          <p
            className="text-gray-500 mb-6"
            style={{
              fontFamily: 'Times New Roman, serif',
              lineHeight: '1.35',
            }}
          >
            This experience was eye-opening, prompting me to start a service to
            assist others who are struggling through the job hunt ordeal.
          </p>
          <div className="inline-block mb-8">
            <p className="text-gray-600 italic">— Nikhil Jain</p>
            <p className="text-gray-600">Co-Founder & IIM Kolkata</p>
          </div>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/dashboard">
              <button className="border border-black flex items-center justify-center gap-2 px-6 py-2 text-sm md:text-lg font-medium text-primary-foreground bg-primary rounded-xl hover:bg-primary-dark transition-all shadow-lg">
                Get Started for Free
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
            <a
              href="https://apply.neetocal.com/meeting-with-nikhil-jain"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 text-sm md:text-lg font-bold text-gray-800 bg-transparent border-2 border-gray-800 rounded-xl hover:bg-gray-100 transition-all"
            >
              Schedule a call <span className="animate-bounce ml-2">👋</span>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;

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
