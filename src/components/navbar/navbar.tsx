'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} passHref>
    <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer">
      {children}
    </span>
  </Link>
);

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 50) {
        // Scrolling down
        setIsVisible(false);
      } else if (scrollTop < lastScrollTop || scrollTop < 50) {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const handleTalkToUsClick = () => {
    alert('Talk to Us form or modal would appear here.');
    // Replace the alert with your modal display logic
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Navbar */}
        <div className="flex items-center justify-between py-2 px-4 bg-green-100/90 border border-gray-200 rounded-full shadow-md backdrop-blur-sm">
          {/* Logo */}
          <Link href="/">
            <img
              alt="Hiredeasy Logo"
              className="h-7 w-auto cursor-pointer"
              src="/Hiredeasy.png"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/Wall">Wall of Love</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <Link href="/" passHref>
              <span className="text-sm font-medium bg-green-600 text-white py-1.5 px-4 rounded-full hover:bg-green-700 cursor-pointer transition-colors duration-200">
                Try Copilot Free
              </span>
            </Link>
          </nav>

          {/* User Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link href="/dashboard" passHref>
                  <span className="text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:border-green-500 rounded-md py-1.5 px-4 cursor-pointer shadow-sm hover:shadow transition-all duration-150 ease-in-out transform hover:-translate-y-0.5">
                    Dashboard
                  </span>
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <>
                <NavLink href="/sign-in">Login</NavLink>
                <NavLink href="/sign-up">Sign Up</NavLink>
              </>
            )}
          </div>
        </div>

        {/* "Ready to Get a Job?" Section */}
        {isVisible && (
          <div className="mt-2 px-4 py-2 bg-transparent text-black font-bold text-center">
            <p className="text-base animate-bounce">
              Ready to get a Job?{' '}
              <a
                href="#"
                onClick={handleTalkToUsClick}
                className="text-blue-300 font-extrabold underline hover:text-blue-400 transition duration-300 ease-in-out"
              >
                Talk to Us!
              </a>
            </p>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-green-100/90 border border-gray-200 rounded-lg shadow-lg p-4 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/Wall">Wall of Love</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <Link href="/" passHref>
                <span className="text-sm font-medium bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 cursor-pointer transition-colors duration-200 text-center block">
                  Try Copilot Free
                </span>
              </Link>
              {user ? (
                <>
                  <Link href="/dashboard" passHref>
                    <span className="text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:border-green-500 rounded-md py-2 px-4 cursor-pointer shadow-sm hover:shadow transition-all duration-150 ease-in-out transform hover:-translate-y-0.5 text-center block">
                      Dashboard
                    </span>
                  </Link>
                  <div className="flex justify-center">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </>
              ) : (
                <>
                  <NavLink href="/sign-in">Login</NavLink>
                  <NavLink href="/sign-up">Sign Up</NavLink>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
