'use client';

import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Sidebar from '../SideBar/sideBar';
import DashboardMain from './dashboard-main';
import Warmup from '../Interview/warmup';
import JobsMain from '../jobs/jobs-main';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from '@clerk/nextjs';
import ProfilePage from '@/app/profile/page';

export default function DashboardPage() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();
  const { isLoaded, userId, sessionId, getToken } = useAuth();

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

  useEffect(() => {
    // Prevent scrolling behind the sidebar
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [sidebarOpen]);

  const handleTabChange = async (tab: string) => {
    setIsLoading(true);
    try {
      setCurrentTab(tab);
      setSidebarOpen(false);
    } catch (error) {
      console.error('Error while changing tab:', error);
      toast({
        title: "Error",
        description: "Failed to change tab.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex flex-1 relative">
        {/* Hamburger Menu */}
        <button
          className="lg:hidden fixed top-20 left-4 z-[60] p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle menu"
          disabled={isLoading}
        >
          <RxHamburgerMenu className="text-2xl" />
        </button>

        {/* Background overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[50] lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-16 z-[55] h-[calc(100vh-4rem)] transition-transform duration-300 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 w-64 bg-white shadow-xl`}
        >
          <Sidebar
            currentTab={currentTab}
            setCurrentTab={handleTabChange}
            setSidebarOpen={setSidebarOpen}
            isPaidUser={true} // Use actual paid user logic
            sidebarOpen={sidebarOpen}
            className="h-full"
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-h-0">
          {isLoading && (
            <div className="absolute inset-0 bg-white bg-opacity-50 z-[70] flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          )}

          <div className="flex-1 overflow-y-auto">
            <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
              {currentTab === 'dashboard' && <DashboardMain isPaidUser={false} />}
              {currentTab === 'profile' && <ProfilePage />}
              {currentTab === 'jobs' && <JobsMain />}
              {currentTab === 'interview' && <Warmup />}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
