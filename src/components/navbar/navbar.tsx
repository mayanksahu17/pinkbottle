"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const { isSignedIn, user } = useUser();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="flex items-center justify-between p-2 border-b border-gray-200">
        <Link href="/">
          <img
            alt="Your Logo"
            className="cursor-pointer h-10 md:h-12 transform scale-125 ml-4 md:ml-6"
            src="/Hiredeasy.png"
            style={{ transform: "scale(2.1)" }}
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
            <Link href="/career" passHref>
              <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">
                Career
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
            <Link href="/career" passHref>
              <span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer mx-2">
                Career
              </span>
            </Link>
            <Link href="/" passHref>
              <span className="text-sm bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 cursor-pointer mx-2">
                Try the Copilot Free
              </span>
            </Link>
          </nav>
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
      </div>
    </header>
  );
};

export default Navbar;
