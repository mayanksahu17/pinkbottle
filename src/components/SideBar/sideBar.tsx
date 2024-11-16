'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { CiLock } from 'react-icons/ci';
import { FaHome, FaCalendarAlt, FaLaptopCode, FaBriefcase, FaFileAlt } from 'react-icons/fa';
import { AiOutlineChrome } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  setSidebarOpen: (open: boolean) => void;
  isPaidUser: boolean;
  sidebarOpen: boolean;
  className:string;
}

function Sidebar({
  currentTab,
  setCurrentTab,
  setSidebarOpen,
  isPaidUser,
  sidebarOpen,
}: SidebarProps) {
  const router = useRouter();

  return (
    <aside
      className={`relative top-16 z-1 w-64 bg-white p-4 h-screen shadow-xl `}
      style={{ minHeight: '100vh' }} // Ensures the sidebar has the full viewport height
    >
      <nav className="mt-16 flex flex-col space-y-4">
        <Button
          className={`flex items-center justify-start text-base font-medium text-black rounded-lg py-2.5 transition-transform duration-300 ${
            currentTab === 'dashboard' && 'bg-gray-200 shadow-lg'
          } hover:bg-gray-100 hover:scale-105`}
          variant="ghost"
          onClick={() => {
            setCurrentTab('dashboard');
            setSidebarOpen(false);
          }}
        >
          <FaHome className="text-xl mr-2" />
          Dashboard
        </Button>

        <Button
          className={`flex items-center justify-start text-base font-medium text-black rounded-lg py-2.5 transition-transform duration-300 ${
            currentTab === 'call' && 'bg-gray-200 shadow-lg'
          } hover:bg-gray-100 hover:scale-105`}
          variant="ghost"
          onClick={() => {
            router.push('https://apply.neetocal.com/meeting-with-nikhil-jain');
            setSidebarOpen(false);
          }}
        >
          <FaCalendarAlt className="text-xl mr-2" />
          Call with Founders
        </Button>

        <Button
          className={`flex items-center justify-start text-base font-medium text-black rounded-lg py-2.5 transition-transform duration-300 ${
            currentTab === 'interview' && 'bg-gray-200 shadow-lg'
          } hover:bg-gray-100 hover:scale-105`}
          variant="ghost"
          onClick={() => {
            setCurrentTab('interview');
            setSidebarOpen(false);
          }}
        >
          <FaLaptopCode className="text-xl mr-2" />
          Interview Warmup
        </Button>

        <div className="flex items-center">
          <Button
            disabled={!isPaidUser}
            className={`flex items-center justify-start w-full disabled:cursor-not-allowed text-base font-medium text-black rounded-lg py-2.5 transition-transform duration-300 ${
              currentTab === 'jobs' && 'bg-gray-200 shadow-lg'
            } hover:bg-gray-100 hover:scale-105`}
            variant="ghost"
            onClick={() => {
              setCurrentTab('jobs');
              setSidebarOpen(false);
            }}
          >
            <FaBriefcase className="text-xl mr-2" />
            Jobs
          </Button>
          {!isPaidUser && <CiLock className="ml-2 text-xl" />}
        </div>

        <div className="flex items-center">
          <Button
            disabled={!isPaidUser}
            className={`flex items-center justify-start w-full disabled:cursor-not-allowed text-base font-medium text-black rounded-lg py-2.5 transition-transform duration-300 ${
              currentTab === 'profile' && 'bg-gray-200 shadow-lg'
            } hover:bg-gray-100 hover:scale-105`}
            variant="ghost"
            onClick={() => {
              setCurrentTab('profile');
              setSidebarOpen(false);
            }}
          >
            <FaFileAlt className="text-xl mr-2" />
            Profile
          </Button>
          {!isPaidUser && <CiLock className="ml-2 text-xl" />}
        </div>

        <Button
          className="flex items-center justify-center text-base font-medium text-black rounded-lg py-2.5 border border-gray-300 hover:bg-gray-100 transition-all duration-300"
          onClick={() => {
            router.push('https://chromewebstore.google.com/detail/hiredeasy/lklnlahilalmcnhgdkghjkcjiokggnkp');
            setSidebarOpen(false);
          }}
        >
          <AiOutlineChrome className="text-xl mr-2" />
          Add to Chrome
        </Button>
      </nav>
    </aside>
  );
}

export default Sidebar;