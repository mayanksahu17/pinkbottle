'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import FrontMain from './FrontMain';
import Sponsor from './sponsor';
import IncreaseResult from './IncreaseInCalls';
import WorksFor from './worksfor';
import Universities from './Universities';
import Message from './Message';
import HeroScrollDemo from './HeroScrollDemo';
import Features from './Features';

// Dynamic imports with SSR disabled for non-critical components
const Help = dynamic(() => import('../GetInTouch/Help'), { ssr: false });
const Model = dynamic(() => import('../GetInTouch/Model'), { ssr: false });
const Sidekick = dynamic(() => import('./sidekick'), { ssr: false });
const FAQSection = dynamic(() => import('../FAQ/faq'), { ssr: false });
const Widget = dynamic(() => import('./Widget'), { ssr: false });
const Testimonial = dynamic(() => import('./Testimonial'), { ssr: false });

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'HiredEasy',
  url: 'https://hiredeasy.com',
  sameAs: [
    'https://www.linkedin.com/company/hiredeasy',
    'https://www.instagram.com/hiredeasy',
  ],
  mainEntity: [
    {
      '@type': 'WebPage',
      url: 'https://hiredeasy.com/pricing',
      name: 'Pricing',
    },
    {
      '@type': 'WebPage',
      url: 'https://hiredeasy.com/about',
      name: 'About Us',
    },
    {
      '@type': 'WebPage',
      url: 'https://hiredeasy.com/sign-up',
      name: 'Sign Up',
    },
    {
      '@type': 'WebPage',
      url: 'https://hiredeasy.com/sign-in',
      name: 'Sign In',
    },
    {
      '@type': 'WebPage',
      url: 'https://hiredeasy.com/Wall',
      name: 'Wall of Love',
    },
  ],
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://hiredeasy.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Pricing',
      item: 'https://hiredeasy.com/pricing',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'About Us',
      item: 'https://hiredeasy.com/about',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Career',
      item: 'https://hiredeasy.com/career',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Sign Up',
      item: 'https://hiredeasy.com/sign-up',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Sign In',
      item: 'https://hiredeasy.com/sign-in',
    },
    {
      '@type': 'ListItem',
      position: 7,
      name: 'Wall of Love',
      item: 'https://hiredeasy.com/Wall',
    },
  ],
};

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);

  // Close the form modal
  const handleClose = () => setShowForm(false);

  return (
    <>
      <Head>
        <title>HiredEasy - Land Your Dream Job</title>
        <meta
          name="description"
          content="Get more interviews and ace them for top companies with HiredEasy. Our assistants help you land your dream job by offering resume building, personalized cover letters, job application services, and interview preparation."
        />
        <meta
          name="keywords"
          content="job applications, resume building, job hunting, career services, HiredEasy, job search, interview preparation, cover letters, job offers"
        />
        <meta name="author" content="HiredEasy" />
        <meta property="og:title" content="HiredEasy - Land Your Dream Job" />
        <meta
          property="og:description"
          content="Our assistants help you get more interviews and ace them for top companies. Explore our resume building, personalized cover letters, and interview preparation services."
        />
        <meta property="og:image" content="https://hiredeasy.com/logo.png" />
        <meta property="og:url" content="https://hiredeasy.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HiredEasy" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HiredEasy - Land Your Dream Job" />
        <meta
          name="twitter:description"
          content="Our assistants help you get more interviews and ace them for top companies. Explore our resume building, personalized cover letters, and interview preparation services."
        />
        <meta
          name="twitter:image"
          content="https://hiredeasy.com/HiredEasy.png"
        />
        <meta name="twitter:site" content="@HiredEasy" />
        <link rel="canonical" href="https://hiredeasy.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </Head>

      <div
        className="min-h-screen text-black"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <Navbar />

        <div className="bg-[#bafff1] py-2 shadow-md mt-16">
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
                      <img
                        src="Nikhil.jpeg"
                        alt="Nikhil Jain"
                        className="h-6 w-6"
                        loading="lazy"
                      />
                    </span>
                    <span>Schedule a call</span>
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

                <p className="mt-4 text-sm md:text-lg text-center text-gray-600">
                  Schedule a personal call with our founders
                </p>
              </div>
              <Help />
            </div>
          </Model>
        </div>

        <FrontMain />
        <Sponsor />
        <IncreaseResult />
        <HeroScrollDemo />
        <WorksFor />
        <Universities />
        <Features />
        <Sidekick />
        <Testimonial />
        <FAQSection />
        <Message />
        <Widget />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
