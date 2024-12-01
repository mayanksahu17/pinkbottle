import React, { useState, useEffect } from 'react';
import SavedJobsTable from './SavedJobsTable';
import DelegatedJobsTable from './DelegatedJobsTable';
import FAQTable from './FAQTable';

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
  const [currentTable, setCurrentTable] = useState<'jobs1' | 'jobs2' | 'faqs'>('jobs1');
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    async function fetchSavedJobs() {
      try {
        const response = await fetch('/api/savedjobs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache', // Ensure no caching
          },
        });
        const data = await response.json();
        console.log('Fetched Saved Jobs:', data);
        setSavedJobs(data);
      } catch (error) {
        console.error('Failed to fetch saved jobs:', error);
      }
    }
    fetchSavedJobs();
  }, []); // Only runs once when the component mounts

  useEffect(() => {
    async function fetchDelegatedJobs() {
      try {
        const response = await fetch('/api/delegatedjobs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache', // Ensure no caching
          },
        });
        const data = await response.json();
        console.log('Fetched Delegated Jobs:', data);
        setDelegatedJobs(Array.isArray(data) ? data : []); // Ensures data is an array
      } catch (error) {
        console.error('Failed to fetch delegated jobs:', error);
        setDelegatedJobs([]); // Handle the case where the fetch fails
      }
    }
    fetchDelegatedJobs();
  }, []); // Only runs once when the component mounts

  useEffect(() => {
    const totalJobs = savedJobs.length + delegatedJobs.length;
    if (totalJobs > 1200) {
      setShowNotification(true);
    } else {
      setShowNotification(false);
    }
  }, [savedJobs, delegatedJobs]); // Runs whenever savedJobs or delegatedJobs changes

  return (
    <main className="flex flex-col w-full p-4 sm:p-6 pt-16 bg-gray-50">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 mt-10">
        <div className="flex flex-wrap space-x-2 sm:space-x-4 w-full sm:w-auto justify-center sm:justify-start">
          <button
            onClick={() => setCurrentTable('jobs1')}
            className={`px-4 sm:px-6 py-2 text-sm font-semibold rounded-full ${
              currentTable === 'jobs1'
                ? 'bg-white text-gray-900 border border-gray-300 shadow-md'
                : 'text-gray-500 bg-gray-100'
            } transition ease-in-out duration-300 hover:bg-white hover:text-gray-900`}
          >
            Saved ({savedJobs.length})
          </button>
          <button
            onClick={() => setCurrentTable('jobs2')}
            className={`px-4 sm:px-6 py-2 text-sm font-semibold rounded-full ${
              currentTable === 'jobs2'
                ? 'bg-white text-gray-900 border border-gray-300 shadow-md'
                : 'text-gray-500 bg-gray-100'
            } transition ease-in-out duration-300 hover:bg-white hover:text-gray-900`}
          >
            Delegated ({delegatedJobs.length})
          </button>
          <button
            onClick={() => setCurrentTable('faqs')}
            className={`px-4 sm:px-6 py-2 text-sm font-semibold rounded-full ${
              currentTable === 'faqs'
                ? 'bg-white text-gray-900 border border-gray-300 shadow-md'
                : 'text-gray-500 bg-gray-100'
            } transition ease-in-out duration-300 hover:bg-white hover:text-gray-900`}
          >
            Email Responses
          </button>
        </div>
        <div className="flex items-center text-sm font-semibold text-gray-500 w-full sm:w-auto justify-center sm:justify-end mt-4 sm:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-red-500 mr-1"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          Refer & Earn $100
        </div>
      </div>

      {showNotification && (
        <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-4 rounded-lg mb-6 flex flex-col sm:flex-row justify-between items-center shadow-lg">
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="font-medium text-lg">
              Subscription Limit Reached!
            </span>
          </div>
          <span className="text-sm text-center sm:text-left mt-2 sm:mt-0">
            Your subscription has exceeded the limit. Please renew to continue applying for more jobs.
          </span>
          <button
            className="bg-white text-red-700 px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition ease-in-out duration-300 mt-2 sm:mt-0"
            onClick={() => alert('Redirecting to renew subscription')}
          >
            Renew Now
          </button>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        {currentTable === 'jobs1' && <SavedJobsTable jobData={savedJobs} />}
        {currentTable === 'jobs2' && <DelegatedJobsTable jobData={delegatedJobs} />}
        {currentTable === 'faqs' && <FAQTable />}
      </div>
    </main>
  );
};

export default JobsMain;
