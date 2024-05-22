"use client"
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { currentUser, useUser } from '@clerk/nextjs';
import { CiLock } from 'react-icons/ci';

const DashboardMain = ({isPaidUser}:{isPaidUser:boolean}) => {
    const { isSignedIn, user } = useUser();
    console.log(isPaidUser);
    console.log(process.env.MONGODB_URI);
  return (
    <main
          className={`flex-1 px-4 py-6 pt-[4rem]`}
        >
          <div className="flex items-center space-x-4">
            <div
              className={`transition-all duration-300 ease-in-out`}
            >
              <Avatar>
                <AvatarImage
                  alt="Profile picture"
                  src="https://github.com/shadcn.png"
                />
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black">
                Hey {user?.firstName}, You are almost there!
              </h1>
              <p className="text-sm text-black">
                Select a plan, team up with your associate, and start saving
                time right away.
              </p>
            </div>
          </div>
          <div className="mt-6 flex space-x-4">
            <Link href="/">
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800">
              Explore Platform
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="md:ml-1 h-5 w-5 text-gray-400  animate-pulse"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="-ml-3 h-5 w-5 animate-pulse"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
            </Link>
            <a
              href="https://apply.neetocal.com/meeting-with-nikhil-jain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12"
              aria-haspopup="dialog"
              aria-expanded="false"
            >
              <span className="absolute animate-pulse bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-primary p-1.5 text-xs"></span>
              Talk to founder
              <span className="group-hover:animate-bounce ml-2">👋</span>
            </a>
          </div>
          <div className="mt-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-black text-[#bd1e59]">
                1
              </span>
              <div className="flex-1 ml-4 border-t-2 border-dashed border-gray-300" />
            </div>
            <h2 className="text-xl font-semibold text-black">
              Unlock Access to your Associate
            </h2>
            <p className="mt-1 text-sm text-black">
              See our impact on other clients,{" "}
              <Link className="text-[#bd1e59] text-black" href="#">
                Testimonials
              </Link>
            </p>
            <Button className="mt-4 text-black" variant="secondary">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800"
              >
                Check Plan
              </a>
            </Button>
          </div>
          <div className="mt-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-black text-[#bd1e59]">
                2
              </span>
              <div className="flex-1 ml-4 border-t-2 border-dashed border-gray-300" />
            </div>
            <h2 className="text-xl font-semibold text-black">
              Onboarding Call
            </h2>
            <p className="mt-1 text-sm text-black">
              You will be greeted by your dedicated assistant
            </p>
            <Button disabled={!isPaidUser} className="mt-4 text-black">
              <a
                href="https://apply.neetocal.com/meeting-with-nikhil-jain"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex ${!isPaidUser&&'bg-white text-neutral-500 border-neutral-400'} items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800`}
              >
                Pick a splot
              {!isPaidUser && <CiLock className='ml-2' />}
              </a>
            </Button>
          </div>
        </main>
  )
}

export default DashboardMain