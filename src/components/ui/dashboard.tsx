"use client"
import { Button } from "@/components/ui/button"
import styles from '../Button.module.css';
import Link from "next/link";
import { UserButton, auth, useUser } from "@clerk/nextjs";
import { JSX, SVGProps } from "react";
import React, { useState } from 'react';
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
// Import the ContactModal from its file
import { ContactModal } from '../../components/contactModal';
  // Adjust the path according to your file structure



const DashboardPage = () => {
    const { isSignedIn, user } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAsideMenuOpen, setIsAsideMenuOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle modal visibility
    const toggleModal = () => setIsOpen(!isOpen);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    if (!isMenuOpen) setIsAsideMenuOpen(false);
  };
  const toggleAsideMenu = () => {
    setIsAsideMenuOpen(!isAsideMenuOpen);
    if (!isAsideMenuOpen) setIsMenuOpen(false);
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
            <div className="flex">
            <div className="relative z-50 md:hidden">
        <button className="text-gray-600 focus:outline-none absolute top-0 left-0 mt-4 ml-4" onClick={toggleAsideMenu}>
          <svg viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            {/* Only show the hamburger icon if the aside menu is not open */}
            {!isAsideMenuOpen && (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Aside Menu */}
      <div className={`app-container ${isOpen ? 'filter blur-sm' : ''}`}>
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#f7f7f7] p-4 transform transition-transform duration-300 ease-in-out h-screen ${isAsideMenuOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:block shadow-xl`}>
        {/* Close Icon inside menu for mobile */}
        {isAsideMenuOpen && (
          <button className="text-gray-600 focus:outline-none absolute top-0 right-0 mt-4 mr-4" onClick={toggleAsideMenu}>
            <svg viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
         <nav className="mt-16 flex flex-col space-y-1">
          {/* Your menu items here */}
          <Link href="/dashboard">
          <Button className="justify-start text-sm text-black" variant="ghost">
            Dashboard
          </Button>
          </Link>
          <Link href="/Jobs">
            <Button className="justify-start text-sm text-black" variant="ghost">
              Jobs
            </Button>
          </Link>
          <Link href="https://apply.neetocal.com/meeting-with-anshul-jain" target="_blank">
            <Button className="justify-start text-sm text-black" variant="ghost">
             Call with Founders
            </Button>
          </Link>
          {/* <Button className="justify-start text-sm text-black" variant="ghost">
            Preferences
          </Button>
          <Button className="justify-start text-sm text-black" variant="ghost">
            Add to chrome
          </Button> */}
        </nav>
      </aside>
      </div>
      <main className={`flex-1 px-4 py-6 pt-[4rem] ${isAsideMenuOpen ? 'pt-16' : 'pt-6'}`}>
    <div className="flex items-center space-x-4">
    <div className={`transition-all duration-300 ease-in-out ${isAsideMenuOpen ? 'mt-16' : 'mt-0'}`}>
                  <Avatar>
                    <AvatarImage alt="Profile picture" src="https://github.com/shadcn.png" />
                    <AvatarFallback>AN</AvatarFallback>
                  </Avatar>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-black">Hey {user?.firstName}, You are almost there!</h1>
                    <p className="text-sm text-black">Select a plan, team up with your associate, and start saving time right away.</p>
                  </div>
                </div>
                <div className="mt-6 flex space-x-4">
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800">
    Explore Platform
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="md:ml-1 h-5 w-5 text-gray-400  animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="-ml-3 h-5 w-5 animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
</button>
<a href="#" onClick={toggleModal} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12">
                <span className="absolute animate-pulse bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-primary p-1.5 text-xs"></span>
                Talk to founder<span className="group-hover:animate-bounce ml-2">👋</span>
            </a>

            {/* Modal component */}
            {isOpen && <ContactModal onClose={toggleModal} />}

                </div>
                <div className="mt-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-black text-[#bd1e59]">1</span>
                    <div className="flex-1 ml-4 border-t-2 border-dashed border-gray-300" />
                  </div>
                  <h2 className="text-xl font-semibold text-black">Unlock Access to your Associate</h2>
                  <p className="mt-1 text-sm text-black">
                    See our impact on other clients,{" "}
                    <Link className="text-[#bd1e59] text-black" href="#">
                      Testimonials
                    </Link>
                  </p>
                  <Button className="mt-4 text-black" variant="secondary">
                  <a href="/pricing" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800">
                      Check Plan
                  </a>
                  </Button>
                </div>
                <div className="mt-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-black text-[#bd1e59]">2</span>
                    <div className="flex-1 ml-4 border-t-2 border-dashed border-gray-300" />
                  </div>
                  <h2 className="text-xl font-semibold text-black">Onboarding Call</h2>
                  <p className="mt-1 text-sm text-black">You will be greeted by your dedicated assistant</p>
                  <Button className="mt-4 text-black">
                  
                  <a href="https://apply.neetocal.com/meeting-with-anshul-jain" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800">
  Pick a splot
</a>

                  </Button>
                </div>
              </main>
            </div>
          </div>
        )
      }
export default DashboardPage;