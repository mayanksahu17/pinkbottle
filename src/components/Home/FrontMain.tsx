import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

export default function FrontMain() {
  return (
    <section className="bg-background py-16">
      <div className="container px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1 px-2 py-1 mb-4 text-xs font-medium rounded-md shadow-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all border border-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4 animate-pulse text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Save 100+ hours of grunt work
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span className="text-primary relative inline-block">
            Land Your Dream Job
              <div className="absolute w-full h-1 bg-primary transform -translate-y-2 rotate-2"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our assistants help you get more interviews and ace them for top companies like Google, Amazon, McKinsey and more.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-10 items-center justify-center">
            <Link href="/onboarding" target="_blank" rel="noopener noreferrer">
              <Button className="relative flex items-center justify-center gap-2 px-6 py-2 text-sm md:text-lg font-medium text-black bg-white rounded-full hover:bg-green-100 transition-all shadow-lg border border-gray-300 w-full md:w-auto animate-shimmer bg-[linear-gradient(110deg,#d2f8e3,45%,#b6e7d9,55%,#d2f8e3)] bg-[length:200%_100%] focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2 focus:ring-offset-slate-50">
                Schedule 3 days free trial
                <ChevronRight className="h-5 w-5 animate-pulse" />
              </Button>
            </Link>

            <Link href="https://apply.neetocal.com/meeting-with-nikhil-jain" target="_blank" rel="noopener noreferrer">
              <button className="relative flex items-center justify-center gap-2 px-4 py-1.5 text-sm md:text-base font-medium text-primary-foreground bg-white rounded-full hover:bg-gray-100 transition-all shadow-md border border-gray-300 w-full md:w-auto">
                <span className="rounded-full bg-white p-1.5">
                  <img
                    src="Ashwin_jain.png"
                    alt="Custom Image"
                    className="h-5 w-5 rounded-full"
                    loading="lazy"
                  />
                </span>
                <span>Schedule a Call</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:ml-1 h-4 w-4 text-gray-400"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="-ml-2 h-4 w-4 text-gray-400"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
                <span className="absolute top-0 right-0 mt-1 -mr-1 h-3 w-3 bg-green-500 rounded-full animate-ping"></span>
                <span className="absolute top-0 right-0 mt-1 -mr-1 h-3 w-3 bg-green-500 rounded-full"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

