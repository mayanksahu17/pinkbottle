'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
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
      <div className="flex flex-1">
        {/* Sidebar - Removed margin classes */}
        <Sidebar
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          setSidebarOpen={setSidebarOpen}
          isPaidUser={isPaidUser}
          sidebarOpen={sidebarOpen}
        />

        {/* Main Content - Removed margin and adjusted padding */}
        <div className="flex-1 bg-background">
          <div className="md:hidden flex justify-between items-center p-4 border-b">
            <Button
              variant="ghost"
              size="icon"
              className="text-xl"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </Button>
          </div>
          <div className="p-4">
            {currentTab === 'dashboard' && <DashboardMain isPaidUser={isPaidUser} />}
            {currentTab === 'profile' && <Resume resume={resume} cover={cover} />}
            {currentTab === 'jobs' && isPaidUser && <JobsMain />}
            {currentTab === 'interview' && <Warmup />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}