'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} passHref>
    <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer">
      {children}
    </span>
  </Link>
);

const Navbar = ({ onTalkToUsClick }: { onTalkToUsClick: () => void }) => {
  const { isSignedIn, user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-2 left-0 right-0 z-50 px-4">
      <div className="max-w-5xl mx-auto"> {/* Increased max width */}
        <div className="flex flex-col items-center justify-between p-4 bg-green-100 border border-gray-200 rounded-full shadow-lg">
          {/* Top Row: Logo and Navigation */}
          <div className="flex items-center justify-between w-full">
            <Link href="/">
              <img
                alt="Hiredeasy Logo"
                className="h-9 w-auto cursor-pointer"
                src="/Hiredeasy.png"
              />
            </Link>

            {/* Mobile menu button */}
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
                <span className="text-sm font-medium bg-green-600 text-white py-1 px-4 rounded-full hover:bg-green-700 cursor-pointer transition-colors duration-200">
                  Try Copilot Free
                </span>
              </Link>
            </nav>

            {/* User Controls */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <Link href="/dashboard" passHref>
                    <span className="text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:border-green-500 rounded-md py-1 px-4 cursor-pointer shadow-sm hover:shadow transition-all duration-150 ease-in-out transform hover:-translate-y-0.5">
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

          {/* Ready to get a job banner */}
          <div className="mt-2 text-center">
            <p className="text-base font-medium text-gray-800 animate-bounce">
              Ready to get a Job?
              <a
                href="#"
                onClick={onTalkToUsClick}
                className="text-blue-600 hover:text-blue-700 underline pl-1 transition duration-300 ease-in-out"
              >
                Talk to Us!
              </a>
            </p>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
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
