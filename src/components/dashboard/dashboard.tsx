"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import DashboardMain from "./dashboard-main";
import Warmup from "../Interview/warmup";
import JobsMain from "../jobs/jobs-main";
import { Jobs } from "@/lib/database/models/User/types";
import { useRouter } from "next/navigation";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Resume from "../profile/resume";

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
  const [currentTab, setCurrentTab] = useState("dashboard");
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
        <aside
          className="fixed inset-y-0 left-0 z-40 w-64 bg-white p-4 transform transition-transform duration-300 ease-in-out h-screen md:relative md:translate-x-0 md:block shadow-xl"
        >
          <nav className="mt-16 flex flex-col space-y-1">
            <Button
              className={`justify-center text-sm text-black ${
                currentTab === "dashboard" && "bg-gray-200"
              }`}
              variant="ghost"
              onClick={() => setCurrentTab("dashboard")}
            >
              Dashboard
            </Button>
            <Button
              className={`justify-center text-sm text-black ${
                currentTab === "call" && "bg-gray-200"
              }`}
              variant="ghost"
              onClick={() =>
                router.push(
                  "https://apply.neetocal.com/meeting-with-nikhil-jain"
                )
              }
            >
              Call with Founders
            </Button>
            <Button
              className={`justify-center text-sm text-black ${
                currentTab === "interview" && "bg-gray-200"
              }`}
              variant="ghost"
              onClick={() => setCurrentTab("interview")}
            >
              Interview Warmup
            </Button>
            <div className="flex items-center">
              <Button
                disabled={!isPaidUser}
                className={`justify-center w-full disabled:cursor-not-allowed flex items-center text-sm text-black ${
                  currentTab === "jobs" && "bg-gray-200"
                }`}
                variant="ghost"
                onClick={() => setCurrentTab("jobs")}
              >
                Jobs
              </Button>
              {!isPaidUser && <CiLock />}
            </div>
            <div className="flex items-center">
              <Button
                disabled={!isPaidUser}
                className={`justify-center w-full disabled:cursor-not-allowed flex items-center text-sm text-black ${
                  currentTab === "profile" && "bg-gray-200"
                }`}
                variant="ghost"
                onClick={() => setCurrentTab("profile")}
              >
                Profile
              </Button>
              {!isPaidUser && <CiLock />}
            </div>
          </nav>
        </aside>
        <div className="flex-1 p-6 overflow-y-auto">
          {currentTab === "dashboard" && (
            <DashboardMain isPaidUser={isPaidUser} />
          )}
          {currentTab === "profile" && (
            <Resume resume={resume} cover={cover} />
          )}
          {currentTab === "jobs" && isPaidUser && (
            <JobsMain jobs={transformedJobs} firstName={firstName} />
          )}
          {currentTab === "interview" && <Warmup />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
