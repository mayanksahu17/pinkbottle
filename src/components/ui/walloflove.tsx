"use client";
import { Button } from "@/components/ui/button";
import React, { SVGProps, useEffect, useState } from "react";
import { UserButton, auth, useUser } from "@clerk/nextjs";
import Link from "next/link";
import styles from "../Button.module.css";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import Marquee from "react-fast-marquee";
import { ContactModal } from "../contactModal";

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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Walloflove = () => {
    const { isSignedIn, user } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { width } = useWindowSize();
    const isMobile = width !== undefined && width < 768;
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const testimonials = [
    {
      imgSrc: "/Whatsappone.jpeg",
      // caption: 'A quick highlight from testimonial 1...',
    },
    {
      imgSrc: "/Whatsapptwo.jpeg",
      // caption: 'A quick highlight from testimonial 2...',
    },
    {
      imgSrc: "/Whatsappone.jpeg",
      // caption: 'A quick highlight from testimonial 1...',
    },
    {
      imgSrc: "/Whatsapptwo.jpeg",
      // caption: 'A quick highlight from testimonial 2...',
    },
    // Add more testimonials as needed
  ];
  return (
    <div
      className="min-h-screen text-black"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <Link href="/">
          <img
            alt="Your Logo"
            className="cursor-pointer h-8 md:h-10 transform scale-110 ml-4 md:ml-6" // Adjusted with margin-left classes
            src="/Jobify.png"
            style={{ transform: "scale(1.9)" }} // Scaling up by 180%
          />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
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
        <div
          className={`fixed inset-x-0 top-16 z-10 bg-white p-4 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          } md:hidden`}
        >
          <nav className="flex flex-col space-y-2 bg-white p-4">
            <Link href="/about" passHref>
              <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">
                About Us
              </span>
            </Link>
            <Link href="/works" passHref>
              <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">
                How it works
              </span>
            </Link>
            <Link href="/pricing" passHref>
              <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">
                Pricing
              </span>
            </Link>
            <Link href="/" passHref>
              <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">
                Try the Copilot Free
              </span>
            </Link>
            {user ? (
              <div className="flex flex-col space-y-2">
                <Link href="/dashboard" passHref>
                  <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">
                    Dashboard
                  </span>
                </Link>
                {/* Assumed 'UserButton' is a styled component you have */}
                <div className="pt-2">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link href="/sign-in" passHref>
                  <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">
                    Login
                  </span>
                </Link>
                <Link href="/sign-up" passHref>
                  <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">
                    Sign Up
                  </span>
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
              <span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer mx-2">
                About Us
              </span>
            </Link>
            <Link href="/works" passHref>
              <span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer mx-2">
                How it works
              </span>
            </Link>
            <Link href="/pricing" passHref>
              <span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer mx-2">
                Pricing
              </span>
            </Link>
            <Link href="/" passHref>
              <span className="text-sm bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 cursor-pointer mx-2">
                Try the Copilot Free
              </span>
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
                <Link href="/sign-in" passHref>
                  <span className="text-sm cursor-pointer">Login</span>
                </Link>
                <Link href="/sign-up" passHref>
                  <span className="text-sm cursor-pointer">Sign Up</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
      <main>

      <div className="bg-white py-12">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
    Our clients <span className="text-red-500">❤️</span> us
  </h2>
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
    Our clients <span className="text-red-500">❤️</span> us
  </h2>
  <div className="flex flex-wrap justify-center gap-8 px-4">
    <div className="max-w-sm w-full md:w-1/3">
      <img className="w-32 md:w-32 lg:w-32 p-4" src="MissionPower.jpeg" alt="Company Logo" />
      <div className="flex items-center space-x-4 mb-4">
        <img src="/Anshul.jpeg?height=40&width=40" alt="Anshul Jain" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">Anshul Jain</h3>
          <p className="text-sm text-gray-500">Software Engineer</p>
        </div>
      </div>
      <p className="text-gray-600">
        Facing a layoff during a recession with only 60 days left on my H1B visa, I was in a critical situation. I
        took their premium service and went all in aggressively. 4 weeks down the line, I secured three job offers,
        with a 75% salary increase compared to my previous position. Their professionalism and efficiency were
        exceptional. I am grateful for their support during this crucial time. Highly recommend Hirelynow.com and it
        exceeded all my expectations.
      </p>
    </div>
    <div className="max-w-sm w-full md:w-1/3">
      <img className="w-32 md:w-32 lg:w-32 p-4" src="microsoft.png" alt="Company Logo" />
      <div className="flex items-center space-x-4 mb-4">
        <img src="/Nikhil.jpeg?height=50&width=50" alt="Nikhil Jain" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">Nikhil Jain</h3>
          <p className="text-sm text-gray-500">Product Strategy & Growth</p>
        </div>
      </div>
      <p className="text-gray-600">
        As I work full time and could not spare much time for applying jobs. Applying each job is such a painful
        process sometimes it takes more than 15 minutes for one application. I got tired and demotivated after a
        week of applying by myself. I heard of 'Hirelynow.com' where they apply for your jobs online. Team did a great
        help in applying jobs and always available to talk. They followed my priority in applying jobs as well.
      </p>
    </div>
    <div className="max-w-sm w-full md:w-1/3">
      <img className="w-32 md:w-32 lg:w-32 p-4" src="microsoft.png" alt="Company Logo" />
      <div className="flex items-center space-x-4 mb-4">
        <img src="/Gaurav.png?height=40&width=40" alt="Gaurav Jain" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">Gaurav Jain</h3>
          <p className="text-sm text-gray-500">Consultant</p>
        </div>
      </div>
      <p className="text-gray-600">
        I moved from India to Canada and recruiting worked very differently from where I was coming. It took me a
        while to get a hang of how job search works here and applying to jobs was my biggest pain point. It felt
        pointless and right then, I found Hirelynow.com that helped me focus on the right things. In fact, I was able
        to build a small micro-service FIREmails.xyz from the time I saved.
      </p>
    </div>
    <div className="max-w-sm w-full md:w-1/3">
      <img className="w-32 md:w-32 lg:w-32 p-4" src="wex.svg" alt="Company Logo" />
      <div className="flex items-center space-x-4 mb-4">
        <img src="/Anshul.jpeg?height=40&width=40" alt="Anshul Jain" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">Anshul</h3>
          <p className="text-sm text-gray-500">Consultant</p>
        </div>
      </div>
      <p className="text-gray-600">
        I moved from India to Canada and recruiting worked very differently from where I was coming. It took me a
        while to get a hang of how job search works here and applying to jobs was my biggest pain point. It felt
        pointless and right then, I found Hirelynow.com that helped me focus on the right things. In fact, I was able
        to build a small micro-service FIREmails.xyz from the time I saved.
      </p>
    </div>
    <div className="max-w-sm w-full md:w-1/3">
      <img className="w-32 md:w-32 lg:w-32 p-4" src="spglobal.svg" alt="Company Logo" />
      <div className="flex items-center space-x-4 mb-4">
        <img src="/Nikhil.jpeg?height=40&width=40" alt="Nikhil Jain" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">Nikhil Jain</h3>
          <p className="text-sm text-gray-500">Consultant</p>
        </div>
      </div>
      <p className="text-gray-600">
        I moved from India to Canada and recruiting worked very differently from where I was coming. It took me a
        while to get a hang of how job search works here and applying to jobs was my biggest pain point. It felt
        pointless and right then, I found Hirelynow.com that helped me focus on the right things. In fact, I was able
        to build a small micro-service FIREmails.xyz from the time I saved.
      </p>
    </div>
    <div className="max-w-sm w-full md:w-1/3">
      <img className="w-32 md:w-32 lg:w-32 p-4" src="microsoft.png" alt="Company Logo" />
      <div className="flex items-center space-x-4 mb-4">
        <img src="/Gaurav.png?height=40&width=40" alt="Gaurav Jain" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">Gaurav Jain</h3>
          <p className="text-sm text-gray-500">Consultant</p>
        </div>
      </div>
      <p className="text-gray-600">
        I moved from India to Canada and recruiting worked very differently from where I was coming. It took me a
        while to get a hang of how job search works here and applying to jobs was my biggest pain point. It felt
        pointless and right then, I found Hirelynow.com that helped me focus on the right things. In fact, I was able
        to build a small micro-service FIREmails.xyz from the time I saved.
      </p>
    </div>
    <div className="max-w-sm w-full md:w-1/3">
      <img className="w-32 md:w-32 lg:w-32 p-4" src="microsoft.png" alt="Company Logo" />
      <div className="flex items-center space-x-4 mb-4">
        <img src="/Gaurav.png?height=40&width=40" alt="Gaurav Jain" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">Gaurav Jain</h3>
          <p className="text-sm text-gray-500">Consultant</p>
        </div>
      </div>
      <p className="text-gray-600">
        I moved from India to Canada and recruiting worked very differently from where I was coming. It took me a
        while to get a hang of how job search works here and applying to jobs was my biggest pain point. It felt
        pointless and right then, I found Hirelynow.com that helped me focus on the right things. In fact, I was able
        to build a small micro-service FIREmails.xyz from the time I saved.
      </p>
    </div>
    <div className="max-w-sm w-full md:w-1/3">
      <img className="w-32 md:w-32 lg:w-32 p-4" src="microsoft.png" alt="Company Logo" />
      <div className="flex items-center space-x-4 mb-4">
        <img src="/Gaurav.png?height=40&width=40" alt="Gaurav Jain" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">Gaurav Jain</h3>
          <p className="text-sm text-gray-500">Consultant</p>
        </div>
      </div>
      <p className="text-gray-600">
        I moved from India to Canada and recruiting worked very differently from where I was coming. It took me a
        while to get a hang of how job search works here and applying to jobs was my biggest pain point. It felt
        pointless and right then, I found Hirelynow.com that helped me focus on the right things. In fact, I was able
        to build a small micro-service FIREmails.xyz from the time I saved.
      </p>
    </div>
    
  </div>
</div>

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

export default Walloflove;

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
  