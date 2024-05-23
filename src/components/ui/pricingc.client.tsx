"use client";
import { UserButton, auth, useAuth, useUser } from "@clerk/nextjs";
import { JSX, SVGProps } from "react";
import React, { useState } from "react";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer"

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

const PricingUser = () => {
  const {userId} = useAuth();
  
  const plans = [
    {
      name: "Basic",
      price: "199",
      priceId: "price_1PJR4wACYURR6mEK5da3Kp4H",
      originalPrice: "300", // Original price before discount
      savings: "100",
      features: [
        { name: "250 Job applications", enabled: true },
        { name: "1 Assistant", enabled: true },
        { name: "Resume Review", enabled: false },
        { name: "Custom Cover Letters", enabled: false },
        { name: "Custom Resumes", enabled: false },
        { name: "LinkedIn Makeover", enabled: false },
        { name: "Mock Interviews", enabled: false },
        // Add the rest of the features here
      ],
      link: "https://buy.stripe.com/test_6oE6rk8cA1ujdO07sz",
    },
    {
      name: "Standard",
      price: "250",
      priceId: "price_1PJR4BACYURR6mEKuJOVMN2h",
      originalPrice: "400", // Original price before discount
      savings: "150",
      features: [
        { name: "350 Job applications", enabled: true },
        { name: "1 Assistant", enabled: true },
        { name: "Resume Review", enabled: true },
        { name: "Custom Cover Letters", enabled: false },
        { name: "Custom Resumes", enabled: false },
        { name: "LinkedIn Makeover", enabled: false },
        { name: "Mock Interviews", enabled: false },
        // Add the rest of the features here
      ],
      link: "https://buy.stripe.com/test_8wM7vogJ62ynh0c7sy",
    },
    {
      name: "Best Value",
      price: "350",
      priceId: "price_1PJR0yACYURR6mEKGfNb2i7y",
      originalPrice: "500", // Original price before discount
      savings: "150", // Amount saved
      features: [
        { name: "800 Job applications", enabled: true },
        { name: "2 Assistant", enabled: true },
        { name: "Resume Review", enabled: true },
        { name: "Custom Cover Letters", enabled: true },
        { name: "Custom Resumes", enabled: true },
        { name: "LinkedIn Makeover", enabled: true },
        { name: "2 Mock Interviews", enabled: true },
      ],
      link: "https://buy.stripe.com/test_00g7voeAYb4TeS4fZ3",
    },
    {
      name: "Ultimate Bundle",
      price: "500",
      priceId: "price_1PJQxKACYURR6mEKI4UKv8lw",
      originalPrice: "700", // Original price before discount
      savings: "200",
      features: [
        { name: "1200 Job applications", enabled: true },
        { name: "3 Assistant", enabled: true },
        { name: "Resume Review", enabled: true },
        { name: "Custom Cover Letters", enabled: true },
        { name: "Custom Resumes", enabled: true },
        { name: "LinkedIn Makeover", enabled: true },
        { name: "5 Mock Interviews", enabled: true },
        // Add the rest of the features here
      ],
      link: "https://buy.stripe.com/test_aEUg1UboMgpd4dq9AE",
    },

    // Add other plans similarly
  ];

  const handleStripeCheckout = async ({id, checkOutDetails}:any) => {
    if(!id){
      alert("Please login to continue buying!")
    }
    const stripe = await stripePromise;
    if (!stripe) {
      console.error("Stripe.js has not loaded properly.");
      return;
    }
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId: checkOutDetails.priceId, metadata: {...checkOutDetails, userId: id}}),
    });
    console.log(response);
    
    if (response.ok) {
      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } else {
      console.error("Failed to create checkout session");
    }
  };

  return (
    <div
      className="min-h-screen text-black"
      style={{ backgroundColor: "#FAF6F6" }}
    >
      <Navbar />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-10">
          Pricing Plans
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-300 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {plan.name}
                </h3>
                {plan.savings && (
                  <span className="text-sm font-semibold text-green-600">
                    Save ${plan.savings}
                  </span>
                )}
              </div>
              <div className="flex items-baseline">
                <p className="text-4xl font-extrabold text-gray-900 mr-2">
                  ${plan.price}
                </p>
                {plan.originalPrice && (
                  <p className="text-lg text-gray-500 line-through">
                    ${plan.originalPrice}
                  </p>
                )}
              </div>
              <ul className="mt-4 list-none pl-6 space-y-4 text-sm">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    {feature.enabled ? (
                      <>
                        <span className="text-black-500 mr-2">⇨</span>
                        {feature.name}
                      </>
                    ) : (
                      <>
                        <span className="text-red-500 mr-2">✕</span>
                        {feature.name}
                      </>
                    )}
                  </li>
                ))}
              </ul>

              <button
                key={plan.priceId}
                onClick={() => handleStripeCheckout({id:userId, checkOutDetails:plan})}
                className="mt-6 inline-block w-full text-center text-black font-bold py-3 px-6 rounded-lg border border-transparent hover:border-gray-300 bg-[#dedede] shadow-sm transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">
            To put things into perspective
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-4 p-4 text-center rounded-lg shadow-lg bg-white">
              <DocumentIcon className="h-12 w-12 text-blue-500" />
              <p className="text-sm font-medium text-gray-900">
                Resume consultation costs you $500/hour
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-4 text-center rounded-lg shadow-lg bg-white">
              <MusicIcon className="h-12 w-12 text-black-100" />
              <p className="text-sm font-medium text-gray-900">
                 Concerts will cost you $500
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-4 text-center rounded-lg shadow-lg bg-white">
              <BriefcaseIcon className="h-12 w-12 text-black-500" />
              <p className="text-sm font-medium text-gray-900">
                A Long Weekend Trip costs you $300
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-4 text-center rounded-lg shadow-lg bg-white">
              <GraduationCapIcon className="h-12 w-12 text-black-500" />
              <p className="text-sm font-medium text-gray-900">
                A Univ Lecture costs $300/hour
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-center text-black mb-6">
            Let's do a Cost-Benefit Analysis
          </h2>
          <p className="text-center text-sm font-light text-black mb-8">
            We know that you want to evaluate the value we bring to the table
            for the investment you make. Discover how productively you can use
            that time and how we compare with the standard plan.
          </p>

          <div className="relative mt-4">
            {/* Vertical line to connect items */}

            {/* Roadmap items container */}
            <div className="space-y-4">
              {/* Individual roadmap items */}
              {[
                "You're paying us $0.75/hour",
                "Increase in interviews 5x",
                "Advantage in interviews 3x",
                "Full-time Pay Range $50 - $150/hour",
                "You can make $12-20/hour on part-time",
                "Time saved for Interview Prep 80 hours/10 Days",
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="px-6 py-4 bg-white rounded-lg shadow text-center w-72">
                    <p className="text-sm font-semibold text-gray-800">
                      {item}
                    </p>
                  </div>
                  {index < 5 && <div className="w-1 h-6 bg-gray-300"></div>}{" "}
                  {/* Small connectors */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

