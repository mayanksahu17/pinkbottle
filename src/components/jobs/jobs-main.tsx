import React, { useState } from 'react';
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
}

interface JobsMainProps {
  jobs: Job[];
  firstName: string;
}

const JobsMain: React.FC<JobsMainProps> = ({ jobs, firstName }) => {
  const [currentTable, setCurrentTable] = useState<'jobs1' | 'jobs2' | 'faqs'>('jobs1');

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
            Saved ({jobs.filter(job => job.status === 'Saved').length})
          </button>
          <button
            onClick={() => setCurrentTable('jobs2')}
            className={`px-6 py-2 text-sm font-semibold rounded-full ${
              currentTable === 'jobs2'
                ? 'bg-white text-gray-900 border border-gray-300 shadow-md'
                : 'text-gray-500 bg-gray-100'
            } transition ease-in-out duration-300 hover:bg-white hover:text-gray-900`}
          >
            Delegated ({jobs.filter(job => job.status === 'Delegated').length})
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
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        {currentTable === 'jobs1' && <SavedJobsTable jobData={jobs.filter(job => job.status === 'Saved')} />}
        {currentTable === 'jobs2' && <DelegatedJobsTable jobData={jobs.filter(job => job.status === 'Delegated')} />}
        {currentTable === 'faqs' && <FAQTable />}
      </div>
    </main>
  );
};

export default JobsMain;
