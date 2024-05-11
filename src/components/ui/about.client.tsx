"use client"
import React, { SVGProps, useState } from 'react';
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"; // Adjust the path as necessary

const Aboutus = () => {
    const { isSignedIn, user } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  
    return (
        <div className="min-h-screen text-black" style={{ backgroundColor: '#FAF6F6' }}>
        <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <Link href="/">
  <img
    alt="Your Logo"
    className="cursor-pointer h-8 md:h-10 transform scale-110 ml-4 md:ml-6" // Adjusted with margin-left classes
    src="/Jobify.png"
    style={{ transform: 'scale(1.9)' }} // Scaling up by 180%
  />
</Link>

      {/* Hamburger Icon for Mobile */}
      <button className="md:hidden text-gray-600 focus:outline-none" onClick={toggleMenu}>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6">
          {isMenuOpen ? (
            // 'X' (close) icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Hamburger icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Items */}
      <div className={`fixed inset-x-0 top-16 z-10 bg-white p-4 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
      <nav className="flex flex-col space-y-2 bg-white p-4">
  <Link href="/about" passHref>
    <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">About Us</span>
  </Link>
  <Link href="/works" passHref>
    <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">How it works</span>
  </Link>
  <Link href="/pricing" passHref>
    <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">Pricing</span>
  </Link>
  <Link href="/" passHref>
    <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">Try the Copilot Free</span>
  </Link>
  {user ? (
    <div className="flex flex-col space-y-2">
      <Link href="/dashboard" passHref>
        <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">Dashboard</span>
      </Link>
      {/* Assumed 'UserButton' is a styled component you have */}
      <div className="pt-2">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  ) : (
    <div className="flex flex-col space-y-2">
      <Link href="/sign-in" passHref>
        <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">Login</span>
      </Link>
      <Link href="/sign-up" passHref>
        <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">Sign Up</span>
      </Link>
    </div>
  )}
</nav>


      </div>

      {/* Desktop Menu and Auth Links */}
      <div className="hidden md:flex md:items-center md:justify-between md:flex-grow">
        {/* Desktop Menu Links */}
        <nav className="hidden md:flex md:items-center md:justify-center md:flex-grow">
  <Link href="/about" passHref>
    <span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer mx-2">About Us</span>
  </Link>
  <Link href="/works" passHref>
    <span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer mx-2">How it works</span>
  </Link>
  <Link href="/pricing" passHref>
    <span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer mx-2">Pricing</span>
  </Link>
  <Link href="/" passHref>
    <span className="text-sm bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 cursor-pointer mx-2">Try the Copilot Free</span>
  </Link>
</nav>
        {/* Desktop Auth Links */}
        {/* ... */}
        <div>
          {user ? (
            <div className="flex gap-4 items-center">
              <Link href="/dashboard" passHref>
  <span className="text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:border-green-500 rounded-md py-2 px-4 cursor-pointer shadow-sm hover:shadow transition-all duration-150 ease-in-out transform hover:-translate-y-0.5">
    Dashboard
  </span>
</Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="space-x-4">
              <Link href="/sign-in" passHref><span className="text-sm cursor-pointer">Login</span></Link>
              <Link href="/sign-up" passHref><span className="text-sm cursor-pointer">Sign Up</span></Link>
            </div>
          )}
        </div>
      </div>
    </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">We understand you better than anyone</h1>
          <p className="text-lg text-gray-600 mb-6">
            We have been in your shoes and understand the challenges of job hunting. Our mission is to help job seekers
            find their dream jobs.
          </p>
          <button className="text-base border-2 rounded-lg px-8 py-3 font-semibold border-gray-800 text-gray-800 bg-white hover:bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl ml-4">
  Talk to founder 👋
</button>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center text-center">
            <img
              alt="Nikhil Jain"
              className="mb-4 rounded-full"
              height="200"
              src="/Nikhil.jpeg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h2 className="font-bold text-2xl mb-2">Nikhil Jain</h2>
            <p className="text-gray-700 mb-4">
              Co-Founder | Product | <LinkedinIcon className="inline ml-1" />
            </p>
            <p className="text-gray-600 mb-4">
            I love crafting user-centric tech solutions and streamlining market delivery brings me joy. IIM Kolkata Alumni and experience at S&P Global, my journey is about enhancing user experiences.
            </p>
            <div className="flex space-x-2">
              <img
                alt="IIM Kolkata logo"
                height="70"
                src="/IIM.png"
                style={{
                  aspectRatio: "120/40",
                  objectFit: "contain",
                }}
                width="210"
              />
              <img
                alt="S&P Global"
                height="150"
                src="/spglobal.svg"
                style={{
                  aspectRatio: "120/40",
                  objectFit: "contain",
                }}
                width="140"
              />
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              alt="Gaurav Jain"
              className="mb-4 rounded-full"
              height="200"
              src="/Gauravnew.png"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h2 className="font-bold text-2xl mb-2">Anshul Jain</h2>
            <p className="text-gray-700 mb-4">
              Co-Founder | Tech | <LinkedinIcon className="inline ml-1" />
            </p>
            <p className="text-gray-600 mb-4">
              I am ex IITian and Microsoft SDE. From building Pulsejet engines to coding full-stack Apps, I love tinkering and building stuff. Launched a
              couple of startups and failed better each time, now trying to be the best tech wingman.
            </p>
            <div className="flex space-x-2">
              <img
                alt="IIT logo"
                height="70"
                src="/IIT.png"
                style={{
                  aspectRatio: "120/40",
                  objectFit: "contain",
                }}
                width="210"
              />
              <img
                alt="Microsoft"
                height="150"
                src="/microsoft.png"
                style={{
                  aspectRatio: "120/40",
                  objectFit: "contain",
                }}
                width="140"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#12083b]">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
      <p className="text-sm text-white mb-8 lg:mb-0">
        Made with <HeartIcon className="text-red-500 inline" /> by Hirely Team
      </p>
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12">
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
            Company
          </h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a className="text-base text-white hover:text-gray-300" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="text-base text-white hover:text-gray-300" href="#">
                Wall of Love
              </a>
            </li>
            <li>
              <a className="text-base text-white hover:text-gray-300" href="#">
                Join as an Affiliate
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
            Resources
          </h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a className="text-base text-white hover:text-gray-300" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="text-base text-white hover:text-gray-300" href="#">
                AI Copilot
              </a>
            </li>
          </ul>
        </div>
      </div>
      <br/>
      <div>
  <h3 className="text-base font-bold text-white mb-4">
    Follow Us On
  </h3>
  <div className="flex space-x-4">
    <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300">
      <InstagramIcon className="h-8 w-8" />
    </a>
    <a href="#" className="text-white hover:text-blue-700 transition-colors duration-300">
      <LinkedinIcon className="h-8 w-8" />
    </a>
    {/* Uncomment to include a Twitter icon */}
    {/* <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300">
      <TwitterIcon className="h-8 w-8" />
    </a> */}
  </div>
</div>

    </div>
  </div>
</footer>

    </div>
  );
};

export default Aboutus;

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

function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
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
