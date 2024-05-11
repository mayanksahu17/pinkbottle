"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { UserButton, auth, currentUser, useUser } from "@clerk/nextjs";
import { JSX, SVGProps, useState } from "react";
import { JobDetailsProp } from "@/lib/actions/users/user.types";

const JobsApplied = ({ jobs }: { jobs: JobDetailsProp[] }) => {
  const { isSignedIn, user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAsideMenuOpen, setIsAsideMenuOpen] = useState(false);

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
        <div className="relative z-50 md:hidden">
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
            <Link href="/dashboard">
              <Button
                className="justify-start text-sm text-black"
                variant="ghost"
              >
                Dashboard
              </Button>
            </Link>
            <Link href="/Jobs">
              <Button
                className="justify-start text-sm text-black"
                variant="ghost"
              >
                Jobs
              </Button>
            </Link>
            <Link
              href="https://apply.neetocal.com/meeting-with-anshul-jain"
              target="_blank"
            >
              <Button
                className="justify-start text-sm text-black"
                variant="ghost"
              >
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
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 pt-[4rem]">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">
              Hey {user?.firstName}, We are still working on this. Soon you can
              checkout jobs we applied here!
            </h1>
          </div>

          <div className="flex items-center justify-center p-4">
            <div className="relative flex-1 max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-5-8a5 5 0 1110 0 5 5 0 01-10 0z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M12.293 12.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414-1.414l4-4z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM10 4a6 6 0 100 12 6 6 0 000-12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                className="block w-full bg-white text-gray-700 border border-gray-300 rounded-md py-2 pl-10 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm"
                placeholder="Search job..."
                type="search"
                name="search"
              />
            </div>
          </div>

          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Image
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Job Title
                  </th>
                  <th scope="col" className="py-3 px-6 hidden md:table-cell">
                    Applied
                  </th>
                  <th scope="col" className="py-3 px-6 hidden md:table-cell">
                    Date
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody >
                {jobs &&
                  jobs.length > 0 ?
                  jobs.map((job) => {
                    return (
                      <tr key={job._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="py-4 px-6">
                          <img
                            alt="Company logo"
                            className="h-10 w-10 rounded-full"
                            src="/amazon.jpeg"
                          />
                        </td>
                        <td className="py-4 px-6">{job.title}</td>
                        <td className="py-4 px-6 hidden md:table-cell">
                          {job.position}
                        </td>
                        <td className="py-4 px-6">03/23/2024</td>
                        <td className="py-4 px-6">{job.status}</td>
                      </tr>
                    );
                  }):<div className=" w-full">
                    <p className="text-black p-6 text-lg font-medium">No Jobs are available</p>
                  </div>
                }
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};
export default JobsApplied;
