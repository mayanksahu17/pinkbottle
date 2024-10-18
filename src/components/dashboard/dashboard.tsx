'use client';

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Sidebar from '../SideBar/sideBar';
import DashboardMain from './dashboard-main';
import Warmup from '../Interview/warmup';
import JobsMain from '../jobs/jobs-main';
import Resume from '../profile/resume';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Jobs } from '@/lib/database/models/User/types';

interface Job {
  _id?: string;
  image: string;
  title: string;
  position: string;
  date: string;
  status: string;
  location: string; // Added field
}

const DashboardPage = ({
  isPaidUser,
  jobs,
  firstName,
  resume,
  cover,
}: {
  isPaidUser: boolean;
  jobs: Jobs[];
  firstName: string;
  resume: string;
  cover: string;
}) => {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const transformedJobs: Job[] = (jobs || []).map((job) => ({
    _id: job._id,
    image: job.image,
    title: job.title,
    position: job.position,
    date: job.date.toString(),
    status: job.status,
    location: job.location || 'Unknown',
  }));

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen pt-8 relative">
        {/* Sidebar */}
        <Sidebar
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          setSidebarOpen={setSidebarOpen}
          isPaidUser={isPaidUser}
          sidebarOpen={sidebarOpen}
        />

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto md:ml-64">
          <div className="md:hidden flex justify-between items-center mb-4">
            <Button
              className="text-xl"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </Button>
          </div>
          {currentTab === 'dashboard' && <DashboardMain isPaidUser={isPaidUser} />}
          {currentTab === 'profile' && <Resume resume={resume} cover={cover} />}
          {currentTab === 'jobs' && isPaidUser && <JobsMain />}
          {currentTab === 'interview' && <Warmup />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
