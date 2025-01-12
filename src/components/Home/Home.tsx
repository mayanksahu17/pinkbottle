'use client';

import React, { useState, useEffect } from 'react';
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
import StatsAndCTA from './StatsAndCTA'
import { FloatingNav } from '../ui/floating-navbar';
import LogoShowcase from './logo-showcase';
import Testimonials from './newtestimonials';
import { EnterpriseShowcase } from '../ui/enterprise-showcase';
import ModularSolutions from '../ui/dynamicLogos';
import Call from './call';


const Help = dynamic(() => import('../GetInTouch/Help'), { ssr: false });
const Model = dynamic(() => import('../GetInTouch/Model'), { ssr: false });
const Sidekick = dynamic(() => import('./sidekick'), { ssr: false });
const FAQSection = dynamic(() => import('../FAQ/faq'), { ssr: false });
const Widget = dynamic(() => import('./Widget'), { ssr: false });
const Testimonial = dynamic(() => import('./Testimonial'), { ssr: false });

const ScrollBackgroundEffect = () => {
  const [bgColor, setBgColor] = useState('#ffffff')

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollFraction = scrollTop / docHeight

      const colors = [
        '#ffffff', // White
        '#f8f9fa', // Very light gray
        '#f1f3f5', // Light grayish blue
        '#fff5f5', // Very light pink
        '#f8f0fc', // Very light lavender
        '#f3f0ff', // Very light violet
        '#edf2ff', // Very light blue
        '#e7f5ff', // Very light cyan
        '#e3fafc', // Very light sky blue
        '#f0f4f8', // Soft light slate gray
        '#fdf1f1', // Light rose
        '#f2f2f2', // Neutral light gray
        '#fef7f1', // Soft peach cream
        '#f3f2fc', // Light misty purple
        '#faf6f9', // Light pinkish gray
        '#f9f4ff', // Soft lavender blush
        '#fef3f7', // Light cherry blossom pink
      ];
      

      // Calculate the current index and mix colors
      const index = Math.min(Math.floor(scrollFraction * (colors.length - 1)), colors.length - 2)
      const nextIndex = index + 1

      const color1 = colors[index]
      const color2 = colors[nextIndex]

      // Interpolate between color1 and color2
      const interpolate = (start: number, end: number, factor: number) =>
        Math.round(start + (end - start) * factor).toString(16).padStart(2, '0')

      const mixColors = (c1: string, c2: string, factor: number) => {
        const [r1, g1, b1] = c1.match(/\w\w/g)!.map((hex) => parseInt(hex, 16))
        const [r2, g2, b2] = c2.match(/\w\w/g)!.map((hex) => parseInt(hex, 16))
        return `#${interpolate(r1, r2, factor)}${interpolate(g1, g2, factor)}${interpolate(b1, b2, factor)}`
      }

      const factor = (scrollFraction * (colors.length - 1)) % 1
      setBgColor(mixColors(color1, color2, factor))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      style={{ 
        backgroundColor: bgColor, 
        transition: 'background-color 0.5s ease', 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
      }}
    />
  )
}

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

      <div className="relative min-h-screen text-black">
        <ScrollBackgroundEffect />
        <div className="relative z-10">
          <Navbar />
          <FrontMain />
          <Sponsor />
          <Call/>
          <StatsAndCTA/>
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
      </div>
    </>
  );
};

export default HomePage;

