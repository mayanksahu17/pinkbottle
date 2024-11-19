'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { CiLock } from 'react-icons/ci';
import { FaHome, FaCalendarAlt, FaLaptopCode, FaBriefcase, FaFileAlt } from 'react-icons/fa';
import { AiOutlineChrome } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface SidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  setSidebarOpen: (open: boolean) => void;
  isPaidUser: boolean;
  sidebarOpen: boolean;
  className: string;
  paramsId?: string; 
}

function Sidebar({
  currentTab,
  setCurrentTab,
  setSidebarOpen,
  isPaidUser,
  sidebarOpen,
  className,
  paramsId = "" ,
}: SidebarProps) {
  const router = useRouter();

  // Profile navigation handler with improved error checking
  const handleProfileClick = () => {
    if (!isPaidUser) {
      toast.error('Please upgrade to access your profile');
      return;
    }
    
    if (!paramsId?.trim()) {
      toast.error('Unable to access profile. Please try logging in again');
      return;
    }

    try {
      router.push(`/profile/${paramsId}`);
      setSidebarOpen(false);
    } catch (error) {
      console.error('Navigation error:', error);
      toast.error('Failed to navigate to profile. Please try again');
    }
  };

  const handleExternalNavigation = (url: string) => {
    try {
      router.push(url);
      setSidebarOpen(false);
    } catch (error) {
      console.error('External navigation error:', error);
      toast.error('Failed to open external link. Please try again');
    }
  };

  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <FaHome className="text-xl mr-2" />,
      requiresPaid: false,
      onClick: () => {
        setCurrentTab('dashboard');
        setSidebarOpen(false);
      }
    },
    {
      id: 'call',
      label: 'Call with Founders',
      icon: <FaCalendarAlt className="text-xl mr-2" />,
      requiresPaid: false,
      onClick: () => handleExternalNavigation('https://apply.neetocal.com/meeting-with-nikhil-jain')
    },
    {
      id: 'interview',
      label: 'Interview Warmup',
      icon: <FaLaptopCode className="text-xl mr-2" />,
      requiresPaid: false,
      onClick: () => {
        setCurrentTab('interview');
        setSidebarOpen(false);
      }
    },
    {
      id: 'jobs',
      label: 'Jobs',
      icon: <FaBriefcase className="text-xl mr-2" />,
      requiresPaid: true,
      onClick: () => {
        setCurrentTab('jobs');
        setSidebarOpen(false);
      }
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <FaFileAlt className="text-xl mr-2" />,
      requiresPaid: true,
      onClick: handleProfileClick
    }
  ];

  return (
    <aside
      className={`relative top-16 z-1 w-64 bg-white p-4 h-screen shadow-xl ${
        sidebarOpen ? 'block' : 'hidden'
      } lg:block ${className}`}
      style={{ minHeight: '100vh' }}
    >
      <nav className="mt-16 flex flex-col space-y-4 z-1">
        {navigationItems.map((item) => (
          <div key={item.id} className="flex items-center">
            <Button
              disabled={item.requiresPaid && !isPaidUser}
              className={`flex items-center justify-start w-full disabled:cursor-not-allowed text-base font-medium text-black rounded-lg py-2.5 transition-transform duration-300 ${
                currentTab === item.id && 'bg-gray-200 shadow-lg'
              } hover:bg-gray-100 hover:scale-105`}
              variant="ghost"
              onClick={item.onClick}
            >
              {item.icon}
              {item.label}
            </Button>
            {item.requiresPaid && !isPaidUser && <CiLock className="ml-2 text-xl" />}
          </div>
        ))}

        <Button
          className="flex items-center justify-center text-base font-medium text-black rounded-lg py-2.5 border border-gray-300 hover:bg-gray-100 transition-all duration-300"
          onClick={() => handleExternalNavigation('https://chromewebstore.google.com/detail/hiredeasy/lklnlahilalmcnhgdkghjkcjiokggnkp')}
        >
          <AiOutlineChrome className="text-xl mr-2" />
          Add to Chrome
        </Button>
      </nav>
    </aside>
  );
}

export default Sidebar;