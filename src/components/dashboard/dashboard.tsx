'use client';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import React, { useState } from 'react';
import { CiLock } from 'react-icons/ci';
import DashboardMain from './dashboard-main';
import Warmup from '../Interview/warmup';
import JobsMain from '../jobs/jobs-main';
import { Jobs } from '@/lib/database/models/User/types';
import { useRouter } from 'next/navigation';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Resume from '../profile/resume';
import { FaHome, FaCalendarAlt, FaLaptopCode, FaBriefcase, FaFileAlt } from "react-icons/fa"
import { AiOutlineChrome } from "react-icons/ai";

interface Job {
  _id?: string;
  image: string;
  title: string;
  position: string;
  date: string;
  status: string;
  location: string; // Add this field to match the expected type in JobsMain
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
  const router = useRouter();

  // Transform the jobs data to include the required location field
  const transformedJobs: Job[] = (jobs || []).map((job) => ({
    _id: job._id,
    image: job.image,
    title: job.title,
    position: job.position,
    date: job.date.toString(), // Convert date to string if necessary
    status: job.status,
    location: job.location || 'Unknown', // Add a default or actual location here
  }));

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen pt-8">
        <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-white p-4 transform transition-transform duration-300 ease-in-out h-screen md:relative md:translate-x-0 md:block shadow-xl">
        <nav className="mt-16 flex flex-col space-y-4">
  <Button
    className={`flex items-center justify-start text-base font-medium text-black rounded-lg py-2.5 transition-transform duration-300 ${
      currentTab === "dashboard" && "bg-gray-200 shadow-lg"
    } hover:bg-gray-100 hover:scale-105`}
    variant="ghost"
    onClick={() => setCurrentTab("dashboard")}
  >
    <FaHome className="text-xl mr-2" />
    Dashboard
  </Button>
  <Button
    className={`flex items-center justify-start text-base font-medium text-black rounded-lg py-2.5 transition-transform duration-300 ${
      currentTab === "call" && "bg-gray-200 shadow-lg"
    } hover:bg-gray-100 hover:scale-105`}
    variant="ghost"
    onClick={() =>
      router.push(
        "https://apply.neetocal.com/meeting-with-nikhil-jain"
      )
    }
  >
    <FaCalendarAlt className="text-xl mr-2" />
    Call with Founders
  </Button>
  <Button
    className={`flex items-center justify-start text-base font-medium text-black rounded-lg py-2.5 transition-transform duration-300 ${
      currentTab === "interview" && "bg-gray-200 shadow-lg"
    } hover:bg-gray-100 hover:scale-105`}
    variant="ghost"
    onClick={() => setCurrentTab("interview")}
  >
    <FaLaptopCode className="text-xl mr-2" />
    Interview Warmup
  </Button>
  <div className="flex items-center">
    <Button
      disabled={!isPaidUser}
      className={`flex items-center justify-start w-full disabled:cursor-not-allowed text-base font-medium text-black rounded-lg py-2.5 transition-transform duration-300 ${
        currentTab === "jobs" && "bg-gray-200 shadow-lg"
      } hover:bg-gray-100 hover:scale-105`}
      variant="ghost"
      onClick={() => setCurrentTab("jobs")}
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
        currentTab === "profile" && "bg-gray-200 shadow-lg"
      } hover:bg-gray-100 hover:scale-105`}
      variant="ghost"
      onClick={() => setCurrentTab("profile")}
    >
      <FaFileAlt className="text-xl mr-2" />
      Profile
    </Button>
    {!isPaidUser && <CiLock className="ml-2 text-xl" />}
  </div>
  <Button
    className="flex items-center justify-center text-base font-medium text-black rounded-lg py-2.5 border border-gray-300 hover:bg-gray-100 transition-all duration-300"
    onClick={() => router.push("https://chrome.google.com/webstore")}
  >
    <AiOutlineChrome className="text-xl mr-2" />
    Add to Chrome
  </Button>
</nav>
        </aside>
        <div className="flex-1 p-6 overflow-y-auto">
          {currentTab === 'dashboard' && (
            <DashboardMain isPaidUser={isPaidUser} />
          )}
          {currentTab === 'profile' && <Resume resume={resume} cover={cover} />}
          {currentTab === 'jobs' && isPaidUser && (
            <JobsMain jobs={transformedJobs} firstName={firstName} />
          )}
          {currentTab === 'interview' && <Warmup />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
