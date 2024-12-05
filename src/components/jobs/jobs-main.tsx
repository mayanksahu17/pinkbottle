"use client";

import React, { useState, useEffect, useCallback } from "react";
import SavedJobsTable from "./SavedJobsTable";
import DelegatedJobsTable from "./DelegatedJobsTable";
import FAQTable from "./FAQTable";
import { Tabs } from "@/components/ui/tabs";

interface Job {
  _id?: string;
  image: string;
  title: string;
  position: string;
  date: string;
  status: string;
  location: string;
  company: string;
  applyLink: string;
}

const JobsMain: React.FC = () => {
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [delegatedJobs, setDelegatedJobs] = useState<Job[]>([]);
  const [showNotification, setShowNotification] = useState(false);

  const fetchSavedJobs = useCallback(async () => {
    try {
      const response = await fetch("/api/savedjobs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      });
      const data = await response.json();
      setSavedJobs(data);
    } catch (error) {
      console.error("Failed to fetch saved jobs:", error);
    }
  }, []);

  const fetchDelegatedJobs = useCallback(async () => {
    try {
      const response = await fetch("/api/delegatedjobs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      });
      const data = await response.json();
      setDelegatedJobs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch delegated jobs:", error);
      setDelegatedJobs([]);
    }
  }, []);

  useEffect(() => {
    fetchSavedJobs();
    fetchDelegatedJobs();
  }, [fetchSavedJobs, fetchDelegatedJobs]);

  useEffect(() => {
    const totalJobs = savedJobs.length + delegatedJobs.length;
    setShowNotification(totalJobs > 1200);
  }, [savedJobs, delegatedJobs]);

  const handleDeleteDelegatedJobs = useCallback(
    async (jobsToDelete: string[]) => {
      try {
        const response = await fetch("/api/deletejobs", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ jobIds: jobsToDelete }),
        });

        if (!response.ok) {
          throw new Error("Failed to delete jobs");
        }

        // Update delegatedJobs state after successful deletion
        setDelegatedJobs((prevJobs) =>
          prevJobs.filter(
            (job) => !jobsToDelete.includes(job._id || `${job.title}-${job.company}`)
          )
        );
      } catch (error) {
        console.error("Error deleting jobs:", error);
      }
    },
    []
  );

  const handleJobsUpdated = useCallback(() => {
    fetchDelegatedJobs();
  }, [fetchDelegatedJobs]);

  const tabs = [
    {
      title: `Saved (${savedJobs.length})`,
      value: "jobs1",
      content: <SavedJobsTable jobData={savedJobs} />,
    },
    {
      title: `Delegated (${delegatedJobs.length})`,
      value: "jobs2",
      content: (
        <DelegatedJobsTable
          jobData={delegatedJobs}
          onDeleteJobs={handleDeleteDelegatedJobs}
          onJobsUpdated={handleJobsUpdated}
        />
      ),
    },
    {
      title: "Email Responses",
      value: "faqs",
      content: <FAQTable />,
    },
  ];

  return (
    <main className="flex flex-col w-full p-4 sm:p-6 pt-16 bg-gray-50">
      {showNotification && (
        <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-4 rounded-lg mb-6 flex flex-col sm:flex-row justify-between items-center shadow-lg">
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="font-medium text-lg">Subscription Limit Reached!</span>
          </div>
          <span className="text-sm text-center sm:text-left mt-2 sm:mt-0">
            Your subscription has exceeded the limit. Please renew to continue applying for more jobs.
          </span>
          <button
            className="bg-white text-red-700 px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition ease-in-out duration-300 mt-2 sm:mt-0"
            onClick={() => alert("Redirecting to renew subscription")}
          >
            Renew Now
          </button>
        </div>
      )}

      <Tabs
        tabs={tabs}
        containerClassName="w-full"
        tabClassName="text-gray-500 bg-gray-100"
        activeTabClassName="bg-white text-gray-900 border border-gray-300 shadow-md"
        contentClassName="mt-8"
      />
    </main>
  );
};

export default JobsMain;

