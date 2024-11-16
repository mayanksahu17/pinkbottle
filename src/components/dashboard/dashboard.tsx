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
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
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
      if (window.innerWidth >= 768) {
        setSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab)
    if (window.innerWidth < 768) {
      setSidebarOpen(false)
    }
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
      <div className="flex flex-1">
        {/* Sidebar */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-20 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <aside
          className={`fixed md:sticky top-0 z-30 h-screen ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-200 ease-in-out w-64 bg-white border-r`}
        >
          <Sidebar
            currentTab={currentTab}
            setCurrentTab={handleTabChange}
            setSidebarOpen={setSidebarOpen}
            isPaidUser={isPaidUser}
            sidebarOpen={sidebarOpen}
          />
        </aside>
  
        {/* Main content */}
        <main className="flex-1 flex flex-col">
          {/* Mobile Header */}
          <div className="sticky top-0 z-10 md:hidden flex items-center justify-between p-4 bg-white border-b">
            <Button
              variant="ghost"
              size="icon"
              className="text-xl hover:bg-gray-100"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
            >
              {sidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </Button>
            <span className="font-semibold">
              {currentTab.charAt(0).toUpperCase() + currentTab.slice(1)}
            </span>
            <div className="w-10" />
          </div>
  
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
  
      {/* Footer */}
      <Footer />
    </div>
  );
}  