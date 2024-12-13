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
import LazyLoad from './LazyLoad'; // Import the LazyLoad component
import { FloatingNav } from '../ui/floating-navbar';
import LogoShowcase from './logo-showcase';
import Testimonials from './newtestimonials';
import { EnterpriseShowcase } from '../ui/enterprise-showcase';
import ModularSolutions from '../ui/dynamicLogos';

// Dynamic imports with SSR disabled for non-critical components
const Help = dynamic(() => import('../GetInTouch/Help'), { ssr: false });
const Model = dynamic(() => import('../GetInTouch/Model'), { ssr: false });
const Sidekick = dynamic(() => import('./sidekick'), { ssr: false });
const FAQSection = dynamic(() => import('../FAQ/faq'), { ssr: false });
const Widget = dynamic(() => import('./Widget'), { ssr: false });
const Testimonial = dynamic(() => import('./Testimonial'), { ssr: false });

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
      </Head>

      <div
        className="min-h-screen text-black"
        style={{ backgroundColor: '#FFFFFF' }}
      >
    <Navbar/>

        <FrontMain />
        <Sponsor />
        <IncreaseResult />
        

   
        {/* <EnterpriseShowcase /> //newone not needed */}
        <WorksFor />  {/* //remove  Done */}
        <Universities />   {/* //remove  Done */}
        {/* <ModularSolutions />  //newone not need */}
        <Features />

        {/* Lazy-loaded components */}
        <LazyLoad>
          <Sidekick />
        </LazyLoad>

        <LazyLoad>
          <Testimonial />
        </LazyLoad>

        <LazyLoad>
          <FAQSection />
        </LazyLoad>

        <LazyLoad>
          <Message />
        </LazyLoad>

        <LazyLoad>
          <Widget />
        </LazyLoad>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
