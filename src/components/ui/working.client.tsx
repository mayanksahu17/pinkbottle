"use client"
import React, { SVGProps, useState } from 'react';
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"; // Adjust the path as necessary
import Marquee from "react-fast-marquee";

const Working = () => {
    const { isSignedIn, user } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  
    return (
      <>
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

      <><section className="w-full py-8 md:py-20 lg:py-15 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-500 px-3 py-1 text-sm text-white shadow hover:shadow-md transition-shadow duration-300 ease-in-out cursor-pointer hover:bg-gray-600">
  How It Works
</div>

              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">Your Job Search Journey</h2>
              <p className="max-w-[800px] mx-auto text-gray-500 md:text-xl lg:text-lg xl:text-xl dark:text-gray-400">
                Find your dream job with our easy-to-use platform. Here's a step-by-step guide to help you navigate the
                application process and land the perfect position.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 max-w-xs sm:max-w-4xl lg:max-w-5xl">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700 text-black">
                1
              </div>
              <div className="grid gap-1 text-center">
                <h3 className="text-lg font-bold text-black">Create Account</h3>
                <p className="text-sm text-gray-800 dark:text-gray-400">
                  Begin your journey by create your account and find the opportunities that match your skills and interests.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700 text-black">
                2
              </div>
              <div className="grid gap-1 text-center">
                <h3 className="text-lg font-bold text-black">Complete Payment</h3>
                <p className="text-sm text-gray-800 dark:text-gray-400">
                  Secure Your Access: Finalize your registration by completing your payment. This step ensures full access to all the features and resources available, tailored to enhance your job search and application process.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700 text-black">
                3
              </div>
              <div className="grid gap-1 text-center">
                <h3 className="text-lg font-bold text-black">Build Profile</h3>
                <p className="text-sm text-gray-800 dark:text-gray-400">
                  Craft a comprehensive profile highlighting your skills, experience, and aspirations. This is your opportunity to stand out to potential employers and find matches that resonate with your career goals.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700 text-black">
                4
              </div>
              <div className="grid gap-1 text-center">
                <h3 className="text-lg font-bold text-black">Job Assistant</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Utilize our Job Assistant to effortlessly search and filter opportunities that align with your expertise and interests. This tool is designed to simplify your search and connect you with your ideal job.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700 text-black">
                5
              </div>
              <div className="grid gap-1 text-center">
                <h3 className="text-lg font-bold text-black">Interviews</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  As your applications catch attention, prepare for interviews with potential employers. Our platform will notify you of interview requests and provide the necessary details to ensure you’re fully prepared.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700 text-black">
                6
              </div>
              <div className="grid gap-1 text-center">
                <h3 className="text-lg font-bold text-black">Get Prepared for Interview</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Leverage our comprehensive resources to ace your interviews. From tips on answering common questions to advice on making a lasting impression, we’ve got you covered to ensure you’re prepared and confident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="text-gray-600 body-font bg-[#f7f8fa]">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="text-3xl font-medium title-font text-center text-gray-900 mb-12">Testimonials</h1>
    <Marquee gradient={false} speed={50} delay={0}>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {/* Array to render testimonials multiple times to avoid large gap */}
        {Array.from({ length: 2 }, () => (
          <>
            {/* Testimonial 1 */}
            <div className="flex flex-col max-w-sm w-full">
              <img className="w-32 md:w-40 lg:w-48 mx-auto p-4" src="microsoft.png" alt="Company Logo" />
              <div className="flex items-center space-x-4 mb-4 justify-center">
                <img src="/Anshul.jpeg?height=40&width=40" alt="Anshul Jain" className="w-10 h-10 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold">Anshul Jain</h3>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 px-2">
                Facing a layoff during a recession with only 60 days left on my H1B visa, I was in a critical situation...
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className="flex flex-col max-w-sm w-full">
              <img className="w-32 md:w-40 lg:w-48 mx-auto p-4" src="microsoft.png" alt="Company Logo" />
              <div className="flex items-center space-x-4 mb-4 justify-center">
                <img src="/Nikhil.jpeg?height=50&width=50" alt="Nikhil Jain" className="w-10 h-10 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold">Nikhil Jain</h3>
                  <p className="text-sm text-gray-500">Product Strategy & Growth</p>
                </div>
              </div>
              <p className="text-gray-600 px-2">
                As I work full time and could not spare much time for applying jobs. Applying each job is such a painful process...
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className="flex flex-col max-w-sm w-full">
              <img className="w-32 md:w-40 lg:w-48 mx-auto p-4" src="microsoft.png" alt="Company Logo" />
              <div className="flex items-center space-x-4 mb-4 justify-center">
                <img src="/Gaurav.png?height=40&width=40" alt="Gaurav Jain" className="w-10 h-10 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold">Gaurav Jain</h3>
                  <p className="text-sm text-gray-500">Consultant</p>
                </div>
              </div>
              <p className="text-gray-600 px-2">
                I moved from India to Canada and recruiting worked very differently from where I was coming...
              </p>
            </div>
          </>
        ))}
      </div>
    </Marquee>
  </div>
</section>

</>
    </div><footer className="bg-[#12083b]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-white">
                Made with <HeartIcon className="text-white inline" /> by Anshul Jain{""}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a className="text-base text-white hover:text-gray-900" href="#">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white hover:text-gray-900" href="#">
                      Wall of Love
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white hover:text-gray-900" href="#">
                      Join as an Affiliate
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Resources</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a className="text-base text-white hover:text-gray-900" href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white hover:text-gray-900" href="#">
                      AI copilot
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Follow Us On:</h3>
              <div className="mt-4 flex space-x-6">
                <a className="text-gray-400 hover:text-gray-500" href="#">
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a className="text-gray-400 hover:text-gray-500" href="#">
                  <LinkedinIcon className="h-6 w-6" />
                </a>
                {/* <a className="text-gray-400 hover:text-gray-500" href="#">
                  <TwitterIcon className="h-6 w-6" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </footer></>
  
  )
};
export default Working;

function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
  )
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
  )
}

function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
  )
}