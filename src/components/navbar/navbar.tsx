"use client"
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    const {userId} = useAuth();
    
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      <Link href="/">
        <img
          alt="Your Logo"
          className="cursor-pointer h-8 md:h-10 transform scale-110 ml-4 md:ml-6" // Adjusted with margin-left classes
          src="/Jobify.png"
          style={{ transform: "scale(1.9)" }} // Scaling up by 180%
        />
      </Link>
      <nav className="flex gap-4 items-center">
        <Link href="/about" passHref>
          <span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer">
            About Us
          </span>
        </Link>
        <Link href="/how-it-works" passHref>
          <span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer">
            How it works
          </span>
        </Link>
        <Link href="/pricing" passHref>
          <span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer">
            Pricing
          </span>
        </Link>
        <Link href="/trial" passHref>
          <span className="text-sm bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 cursor-pointer">
            Try the Copilot Free
          </span>
        </Link>
      </nav>
      <div>
        {userId ? (
          <div className="flex gap-4 items-center">
            <Link href="/dashboard" passHref>
              <span className="text-sm font-medium cursor-pointer">
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
    </header>
  );
};

export default Navbar;
