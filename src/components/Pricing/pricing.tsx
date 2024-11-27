'use client';
import { UserButton, auth, useAuth, useUser } from '@clerk/nextjs';
import { JSX, SVGProps } from 'react';
import React, { useState } from 'react';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import { Metadata } from 'next';
import CostTimeline from './cost-timeline';
import { Perspective } from './perspective';
import { AnimatedTooltip } from "../ui/animated-tooltip";


const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

export const metadata: Metadata = {
  title: 'HiredEasy - Pricing Plans | Affordable Job Application Services',
  description: 'Discover HiredEasy’s affordable pricing plans designed to simplify your job application process and help you land your dream job.',
  keywords: 'HiredEasy, pricing, job application services, affordable job applications, career services, job seekers, pricing plans',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  authors: [{ name: 'HiredEasy' }],
  openGraph: {
    type: 'website',
    url: 'https://hiredeasy.com/pricing',
    title: 'HiredEasy - Pricing Plans | Affordable Job Application Services',
    description: 'Discover HiredEasy’s affordable pricing plans designed to simplify your job application process and help you land your dream job.',
    images: [
      {
        url: 'https://hiredeasy.com/Hiredeasy.png',
        width: 800,
        height: 600,
        alt: 'HiredEasy Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HiredEasy - Pricing Plans | Affordable Job Application Services',
    description: 'Discover HiredEasy’s affordable pricing plans designed to simplify your job application process and help you land your dream job.',
    images: [
      {
        url: 'https://hiredeasy.com/Hiredeasy.png',
        alt: 'HiredEasy Logo'
      }
    ]
  }
};


const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://hiredeasy.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Pricing",
      "item": "https://hiredeasy.com/pricing"
    }
  ]
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "HiredEasy Pricing",
  "url": "https://hiredeasy.com/pricing",
  "description": "Check out our pricing plans for simplifying your job application process."
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

const PricingUser = () => {
  const { userId } = useAuth();

  const plans = [
    {
      name: 'Basic',
      price: '199',
      priceId: 'price_1PJR4wACYURR6mEK5da3Kp4H',
      originalPrice: '300', // Original price before discount
      savings: '100',
      features: [
        { name: '250 Job applications', enabled: true },
        { name: '1 Assistant', enabled: true },
        { name: 'Cold Emails', enabled: false },
        { name: 'Resume Review', enabled: false },
        { name: 'Custom Cover Letters', enabled: false },
        { name: 'Custom Resumes', enabled: false },
        { name: 'LinkedIn Makeover', enabled: false },
        { name: 'Mock Interviews', enabled: false },
        // Add the rest of the features here
      ],
      link: 'https://buy.stripe.com/test_6oE6rk8cA1ujdO07sz',
    },
    {
      name: 'Standard',
      price: '250',
      priceId: 'price_1PJR4BACYURR6mEKuJOVMN2h',
      originalPrice: '400', // Original price before discount
      savings: '150',
      features: [
        { name: '350 Job applications', enabled: true },
        { name: '1 Assistant', enabled: true },
        { name: '50 Cold Emails', enabled: true },
        { name: 'Resume Review', enabled: true },
        { name: 'Custom Cover Letters', enabled: false },
        { name: 'Custom Resumes', enabled: false },
        { name: 'LinkedIn Makeover', enabled: false },
        { name: 'Mock Interviews', enabled: false },
        // Add the rest of the features here
      ],
      link: 'https://buy.stripe.com/test_8wM7vogJ62ynh0c7sy',
    },
    {
      name: 'Best Value',
      price: '350',
      priceId: 'price_1PJR0yACYURR6mEKGfNb2i7y',
      originalPrice: '500', // Original price before discount
      savings: '150', // Amount saved
      features: [
        { name: '800 Job applications', enabled: true },
        { name: '2 Assistant', enabled: true },
        { name: '200 Cold Emails', enabled: true },
        { name: 'Resume Review', enabled: true },
        { name: 'Custom Cover Letters', enabled: true },
        { name: 'Custom Resumes', enabled: true },
        { name: 'LinkedIn Makeover', enabled: true },
        { name: '2 Mock Interviews', enabled: true },
      ],
      link: 'https://buy.stripe.com/test_00g7voeAYb4TeS4fZ3',
    },
    {
      name: 'Ultimate Bundle',
      price: '500',
      priceId: 'price_1PJQxKACYURR6mEKI4UKv8lw',
      originalPrice: '700', // Original price before discount
      savings: '200',
      features: [
        { name: '1200 Job applications', enabled: true },
        { name: '3 Assistant', enabled: true },
        { name: '500 Cold Emails', enabled: true },
        { name: 'Resume Review', enabled: true },
        { name: 'Custom Cover Letters', enabled: true },
        { name: 'Custom Resumes', enabled: true },
        { name: 'LinkedIn Makeover', enabled: true },
        { name: '5 Mock Interviews', enabled: true },
        // Add the rest of the features here
      ],
      link: 'https://buy.stripe.com/test_aEUg1UboMgpd4dq9AE',
    },

    // Add other plans similarly
  ];

  const handleStripeCheckout = async ({ id, checkOutDetails }: any) => {
    if (!id) {
      alert('Please login to continue buying!');
    }
    const stripe = await stripePromise;
    if (!stripe) {
      console.error('Stripe.js has not loaded properly.');
      return;
    }
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: checkOutDetails.priceId,
        metadata: { ...checkOutDetails, userId: id },
      }),
    });
    console.log(response);

    if (response.ok) {
      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } else {
      console.error('Failed to create checkout session');
    }
  };

  return (
    <div className="min-h-screen text-black" style={{ backgroundColor: '#FAF6F6', paddingTop: '4rem' }}>
      <Navbar />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-10 flex items-center justify-center">
          <span>Pricing Plans</span>
          <div className="flex items-center ml-4">
            <AnimatedTooltip items={people} />
          </div>
        </h2>
        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border ${
                plan.name === 'Ultimate Bundle' ? 'border-[#4a4a4a] bg-[#1a1a1a]' : 'border-gray-200 bg-white'
              } shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 ${
                plan.name === 'Ultimate Bundle' ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-blue-400 to-indigo-500'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}></div>
              <div className="relative z-10">
                <div className="flex justify-between items-center">
                  <h3 className={`text-lg leading-6 font-medium ${plan.name === 'Ultimate Bundle' ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  {plan.savings && (
                    <span className="text-sm font-semibold text-green-400">
                      Save ${plan.savings}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline mt-4">
                  <p className={`text-4xl font-extrabold ${plan.name === 'Ultimate Bundle' ? 'text-white' : 'text-gray-900'} mr-2`}>
                    ${plan.price}
                  </p>
                  {plan.originalPrice && (
                    <p className="text-lg text-gray-400 line-through">
                      ${plan.originalPrice}
                    </p>
                  )}
                </div>
                <ul className="mt-6 space-y-4 text-sm">
                  {plan.features.map((feature, index) => (
                    <li key={index} className={`flex items-center ${plan.name === 'Ultimate Bundle' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {feature.enabled ? (
                        <>
                          <span className="text-green-400 mr-2">✓</span>
                          {feature.name}
                        </>
                      ) : (
                        <>
                          <span className="text-red-400 mr-2">✕</span>
                          {feature.name}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleStripeCheckout({ id: userId, checkOutDetails: plan })}
                  className={`mt-8 w-full ${
                    plan.name === 'Ultimate Bundle'
                      ? 'text-black font-bold py-3 px-6 rounded-lg border border-transparent bg-gradient-to-r from-purple-400 to-pink-500'
                      : 'text-white font-bold py-3 px-6 rounded-lg border border-transparent bg-gradient-to-r from-blue-500 to-indigo-600'
                  } shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CostTimeline />
      <Perspective />
      <Footer />
    </div>
  );
};

export default PricingUser;

function DocumentIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-file-text"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2z" />
      <line x1="9" y1="7" x2="10" y2="7" />
      <line x1="9" y1="11" x2="15" y2="11" />
      <line x1="9" y1="15" x2="15" y2="15" />
    </svg>
  );
}

function MusicIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function BriefcaseIcon(
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
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function GraduationCapIcon(
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
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
