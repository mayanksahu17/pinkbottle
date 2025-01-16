'use client'

import { useState } from 'react'
import {  Clock } from 'lucide-react'
import Navbar from '@/components/navbar/navbar' 
import Footer from '@/components/footer/footer'

export default function JobListingPage() {
  const [activeView, setActiveView] = useState('graduates') // 'graduates' or 'internships'

  // Airtable embed URLs - replace internshipTableUrl with actual URL when available
  const graduatesTableUrl = "https://airtable.com/embed/app9puVMCLbdwj4Dn/shrFKQl9cnRZflq1q?viewControls=on"
  const internshipTableUrl = "https://airtable.com/embed/appzGIJzpA2DdUULP/shrY7FbIDMSrAqXGN?viewControls=on" // TODO: Replace with actual internship table URL

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            2025 Entry-Level Jobs for New Graduates | U.S.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">
            This job repository delivers hourly updates on entry-level positions for new graduates with 0-2 years of experience across the United States. We aggregate opportunities from multiple sources, including 200,000+ company career sites and major job boards (LinkedIn, Indeed, Glassdoor, etc.). All listings are carefully verified - no fake jobs, just real opportunities to start your career!
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg transition-all">
              The Top AI/ML Jobs from Trending AI Companies →
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg transition-all">
              The Ultimate 2025 U.S. Internships List →
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600 mb-6">
            <Clock className="w-4 h-4 mr-2" />
            January 15, 2025, 08:08 PM PST
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-5xl font-bold text-emerald-500 mb-2">
                10,790
              </h2>
              <p className="text-gray-600 font-medium">New Openings Today</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-5xl font-bold text-emerald-500 mb-2">
                39,689
              </h2>
              <p className="text-gray-600 font-medium">Total Openings</p>
            </div>
          </div>
        </div>
      </section>

      {/* View Selection Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveView('graduates')}
              className={`px-8 py-4 rounded-lg text-lg font-semibold transition-all ${
                activeView === 'graduates'
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Graduates (0-2 years of experience)
            </button>
            <button
              onClick={() => setActiveView('internships')}
              className={`px-8 py-4 rounded-lg text-lg font-semibold transition-all ${
                activeView === 'internships'
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Internships (for current students)
            </button>
          </div>
        </div>
      </section>

      {/* Airtable Embedded Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <iframe
              className="airtable-embed w-full h-[800px]"
              src={activeView === 'graduates' ? graduatesTableUrl : internshipTableUrl}
              frameBorder="0"
              width="100%"
              height="800"
              style={{ background: 'transparent', border: '1px solid #ccc' }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-black mb-1 font-['SF Pro Display']">
                Step by Step Guide to Securing
              </h2>
              <h2 className="text-3xl font-bold text-black mb-8 font-['SF Pro Display']">
                Full time role in 2025
              </h2>
            </div>

            {/* Step 1 */}
            <div className="space-y-4">
              <h3 className="text-[#00FF7F] text-xl font-semibold">Step 1: Identify the Goal</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-emerald-500">
                  How to set clear career goals →
                </a>
                <a href="#" className="block text-gray-600 hover:text-emerald-500">
                  How To Choose a Career Path in 9 Steps (With Examples) →
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-4">
              <h3 className="text-[#00FF7F] text-xl font-semibold">Step 2: Build the Foundation</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-black">Prep Your Resume</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      How To Make a Comprehensive Resume (With Examples) →
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      How to Use Keywords and Phrases in Your Resume →
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      Do NOT make these resume mistakes! →
                    </a>
                  </div>

                  <h4 className="font-semibold text-black pt-4">Build Your LinkedIn Profile</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      How To Make A LinkedIn Profile →
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      How to Write a Professional LinkedIn Summary →
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      Make Yourself a LinkedIn Headshot (Tool!) →
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-black">Prep Your Cover Letter</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      How to write a Cover Letter (with example) →
                    </a>
                  </div>

                  <h4 className="font-semibold text-black pt-4">Attend Career Fair</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      What To Do at a Career Fair To Stand Out →
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      Tips for a Successful Career Fair →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-4">
              <h3 className="text-[#00FF7F] text-xl font-semibold">Step 3: Take Action</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-black">Apply to New Grad Roles</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      When? →
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      The Essential Guide to Industry Recruiting Timelines: 2024-2025 →
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      Where? →
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      Need Help? →
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-black">Network</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      What is Networking? Why is it so important? →
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      5 tips with sample scripts!—for cold outreach in your job search →
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      What to say? →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="space-y-4">
              <h3 className="text-[#00FF7F] text-xl font-semibold">Step 4: Show Yourself</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-black">Practice Interview Questions</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      How to Prepare for a Job Interview →
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      How To Use the STAR Interview Method →
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      36 Questions To Ask in a Job Interview →
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      How To Prepare for an Interview →
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-black">Interview Day</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      Advice for the day before and day of interview →
                    </a>
                    <a href="#" className="block text-gray-600 hover:text-emerald-500">
                      Remember to write a Thank-You Email after the interview! →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer/>
    </div>
  )
}

