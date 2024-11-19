'use client';

import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Sidebar from '../SideBar/sideBar';
import DashboardMain from './dashboard-main';
import Warmup from '../Interview/warmup';
import JobsMain from '../jobs/jobs-main';
import Resume from '../profile/resume';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Jobs } from '@/lib/database/models/User/types';
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '@clerk/nextjs'


interface Job {
  _id?: string;
  image: string;
  title: string;
  position: string;
  date: string;
  status: string;
  location: string;
}

export default function DashboardPage() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { id } = useParams();
// const userId = Array.isArray(id) ? id[0] : id;
  // const userId = Array.isArray(id) ? id[0] : id;
  const { toast } = useToast();
  const { isLoaded, userId, sessionId, getToken } = useAuth()
  console.log(userId);

  // Effect for userId validation
  useEffect(() => {
    if (!userId) {
      console.warn('No user ID provided to DashboardPage');
      toast({
        title: "Warning",
        description: "User ID is missing. Some features may be limited.",
        variant: "destructive",
      });
    }
  }, [userId, toast]);

  const handleTabChange = async (tab: string) => {
    setIsLoading(true);
    try {
      setCurrentTab(tab);
      setSidebarOpen(false);

      // Navigate to dynamic profile route
      if (tab === 'profile') {
        if (!userId) {
          toast({
            title: "Error",
            description: "User ID is missing. Unable to navigate to the profile.",
            variant: "destructive",
          });
          return;
        }
        await router.push(`/dashboard/${userId}/profile`);
      }
    } catch (error) {
      console.error('Navigation error:', error);
      toast({
        title: "Error",
        description: "Failed to navigate to the selected tab",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Main content area */}
      <div className="flex flex-1 relative">
        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden fixed top-20 left-4 z-50 p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle menu"
          disabled={isLoading}
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
            isPaidUser={true} // Replace with actual paid user logic
            sidebarOpen={sidebarOpen}
            className="h-full"
            paramsId={userId} // Ensure the userId is passed correctly
          />
        </aside>

        {/* Main content */}
        <main className="flex-1 flex flex-col min-h-0">
          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 bg-white bg-opacity-50 z-50 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          )}

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
              {currentTab === 'dashboard' && (
                <DashboardMain isPaidUser={true /* Replace with actual value */} />
              )}
              {currentTab === 'profile' && userId && (
                <Resume 
                  resume="user_resume_placeholder" 
                  cover="user_cover_placeholder" 
                />
              )}
              {currentTab === 'jobs' && (
                <JobsMain />
              )}
              {currentTab === 'interview' && (
                <Warmup />
              )}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
