import React, { useState, useEffect } from 'react';
import SavedJobsTable from './SavedJobsTable';
import DelegatedJobsTable from './DelegatedJobsTable';
import FAQTable from './FAQTable';

// Define the Job interface to match the data structure
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

  useEffect(() => {
    async function fetchSavedJobs() {
      try {
        const response = await fetch('/api/savedjobs');
        const data = await response.json();
        console.log('Fetched Saved Jobs:', data);
        setSavedJobs(data);
      } catch (error) {
        console.error('Failed to fetch saved jobs:', error);
      }
    }

    async function fetchDelegatedJobs() {
      try {
        const response = await fetch('/api/delegatedjobs');
        const data = await response.json();
        console.log('Fetched Delegated Jobs:', data);
        setDelegatedJobs(data);
      } catch (error) {
        console.error('Failed to fetch delegated jobs:', error);
      }
    }

    fetchSavedJobs();
    fetchDelegatedJobs();
  }, []);

  return (
    <main className="flex flex-col w-full p-6 pt-16 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <button
            onClick={() => setCurrentTable('jobs1')}
            className={`px-6 py-2 text-sm font-semibold rounded-full ${
              currentTable === 'jobs1'
                ? 'bg-white text-gray-900 border border-gray-300 shadow-md'
                : 'text-gray-500 bg-gray-100'
            } transition ease-in-out duration-300 hover:bg-white hover:text-gray-900`}
          >
            Saved ({savedJobs.length})
          </button>
          <button
            onClick={() => setCurrentTable('jobs2')}
            className={`px-6 py-2 text-sm font-semibold rounded-full ${
              currentTable === 'jobs2'
                ? 'bg-white text-gray-900 border border-gray-300 shadow-md'
                : 'text-gray-500 bg-gray-100'
            } transition ease-in-out duration-300 hover:bg-white hover:text-gray-900`}
          >
            Delegated ({delegatedJobs.length})
          </button>
          <button
            onClick={() => setCurrentTable('faqs')}
            className={`px-6 py-2 text-sm font-semibold rounded-full ${
              currentTable === 'faqs'
                ? 'bg-white text-gray-900 border border-gray-300 shadow-md'
                : 'text-gray-500 bg-gray-100'
            } transition ease-in-out duration-300 hover:bg-white hover:text-gray-900`}
          >
            Email Responses
          </button>
        </div>
        <div className="flex items-center text-sm font-semibold text-gray-500">
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

      <div className="bg-white rounded-lg shadow-lg p-6">
        {currentTable === 'jobs1' && <SavedJobsTable jobData={savedJobs} />}
        {currentTable === 'jobs2' && <DelegatedJobsTable jobData={delegatedJobs} />}
        {currentTable === 'faqs' && <FAQTable />}
      </div>
    </main>
  );
};

export default JobsMain;
