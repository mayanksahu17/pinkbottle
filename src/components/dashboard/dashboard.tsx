"use client";
import { Button } from "@/components/ui/button";
import styles from "../Button.module.css";
import Link from "next/link";
import { UserButton, auth, useUser } from "@clerk/nextjs";
import { JSX, SVGProps } from "react";
import React, { useState } from "react";
import usePaymentStatus from "@/hooks/usePaymentStatus";
import { CiLock } from "react-icons/ci";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardMain from "./dashboard-main";
import Resume from "../profile/resume";
import JobsMain from "../jobs/jobs-main";
import { Jobs } from "@/lib/database/models/User/types";
import { User } from "@clerk/nextjs/server";
import { redirect, useRouter } from "next/navigation";

const DashboardPage = ({ isPaidUser, jobs, firstName , resume, cover}: { isPaidUser: boolean, jobs:Jobs[], firstName:string , resume:string, cover: string}) => {
  const {user} = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAsideMenuOpen, setIsAsideMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState<'dashboard'|'jobs'|'call'|'profile'>('dashboard');
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (!isMenuOpen) setIsAsideMenuOpen(false);
  };
  const toggleAsideMenu = () => {
    setIsAsideMenuOpen(!isAsideMenuOpen);
    if (!isAsideMenuOpen) setIsMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen text-black"
      style={{ backgroundColor: "#FAF6F6" }}
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
      <div className="flex">
        <div className="relative z-5 md:hidden">
          <button
            className="text-gray-600 focus:outline-none absolute top-0 left-0 mt-4 ml-4"
            onClick={toggleAsideMenu}
          >
            <svg viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              {/* Only show the hamburger icon if the aside menu is not open */}
              {!isAsideMenuOpen && (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Aside Menu */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#f7f7f7] p-4 transform transition-transform duration-300 ease-in-out h-screen ${
            isAsideMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 md:block shadow-xl`}
        >
          {/* Close Icon inside menu for mobile */}
          {isAsideMenuOpen && (
            <button
              className="text-gray-600 focus:outline-none absolute top-0 right-0 mt-4 mr-4"
              onClick={toggleAsideMenu}
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          <nav className="mt-16 flex flex-col space-y-1">
            {/* Your menu items here */}
            
              <Button
                className={`justify-start text-sm text-black ${currentTab === 'dashboard'&&'bg-gray-200'}`}
                variant="ghost"
                onClick={()=> setCurrentTab('dashboard')}
              >
                Dashboard
              </Button>
              <Button
                className={`justify-start text-sm text-black ${currentTab === 'call'&&'bg-gray-200'}`}
                variant="ghost"
                onClick={()=> {
                  router.push("https://apply.neetocal.com/meeting-with-nikhil-jain")
                
                }}
                
              >
                Call with Founders
              </Button>
            <div className="flex items-center">
              <Button
                disabled={!isPaidUser}
                className={`justify-start w-full disabled:cursor-not-allowed flex items-center text-sm text-black ${currentTab === 'jobs'&&'bg-gray-200'}`}
                variant="ghost"
                onClick={()=> setCurrentTab('jobs')}

              >
                  Jobs
              </Button>
              {!isPaidUser && <CiLock />}
            </div>
            <div className="flex items-center">
              <Button
                disabled={!isPaidUser}
                className={`justify-start w-full disabled:cursor-not-allowed flex items-center text-sm text-black ${currentTab === 'profile'&&'bg-gray-200'}`}
                variant="ghost"
                onClick={()=> setCurrentTab('profile')}
              >
                Profile
              </Button>
                {!isPaidUser && <CiLock />}
            </div>
            {/* <Button className="justify-start text-sm text-black" variant="ghost">
            Preferences
          </Button>
          <Button className="justify-start text-sm text-black" variant="ghost">
            Add to chrome
          </Button> */}
          </nav>
        </aside>
        {currentTab==='dashboard'&&<DashboardMain isPaidUser={isPaidUser} />}
        {currentTab==='profile'&&<Resume resume={resume} cover={cover} />}
        {currentTab==='jobs'&&<JobsMain jobs={jobs} firstName={firstName} />}
      </div>
    </div>
  );
};
export default DashboardPage;