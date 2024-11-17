'use client'

import { Button } from '@/components/ui/button'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import Sidebar from '../SideBar/sideBar'
import DashboardMain from './dashboard-main'
import Warmup from '../Interview/warmup'
import JobsMain from '../jobs/jobs-main'
import Resume from '../profile/resume'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Jobs } from '@/lib/database/models/User/types'

interface Job {
  _id?: string
  image: string
  title: string
  position: string
  date: string
  status: string
  location: string
}

export default function DashboardPage({
  isPaidUser,
  jobs,
  firstName,
  resume,
  cover,
}: {
  isPaidUser: boolean
  jobs: Jobs[]
  firstName: string
  resume: string
  cover: string
}) {
  const [currentTab, setCurrentTab] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab)
    setSidebarOpen(false)
  }

  const transformedJobs: Job[] = (jobs || []).map((job) => ({
    _id: job._id,
    image: job.image,
    title: job.title,
    position: job.position,
    date: job.date.toString(),
    status: job.status,
    location: job.location || 'Unknown',
  }))

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main content area */}
      <div className="flex flex-1 relative">
        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden fixed top-20 left-4 z-50 p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle menu"
        >
          <RxHamburgerMenu className="text-2xl" />
        </button>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-16 z-40 h-[calc(100vh-4rem)] transition-transform duration-300 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 w-64 bg-white shadow-xl`}
        >
          <Sidebar
            currentTab={currentTab}
            setCurrentTab={handleTabChange}
            setSidebarOpen={setSidebarOpen}
            isPaidUser={isPaidUser}
            sidebarOpen={sidebarOpen}
            className="h-full"
          />
        </aside>

        {/* Main content */}
        <main className="flex-1 flex flex-col min-h-0">
          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
              {currentTab === 'dashboard' && <DashboardMain isPaidUser={isPaidUser} />}
              {currentTab === 'profile' && <Resume resume={resume} cover={cover} />}
              {currentTab === 'jobs' && isPaidUser && <JobsMain />}
              {currentTab === 'interview' && <Warmup />}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}