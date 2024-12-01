import React, { useState, useEffect, useCallback, useMemo } from 'react';

interface Job {
  _id?: string;
  title: string;
  company: string;
  location: string;
  date: string;
  applyLink: string;
}

interface DelegatedJobsTableProps {
  jobData: Job[];
  onDeleteJobs?: (jobIds: string[]) => void;
}

const DelegatedJobsTable: React.FC<DelegatedJobsTableProps> = ({ jobData , onDeleteJobs }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/delegatedjobs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        },
      });
      const data = await response.json();
      if (Array.isArray(data)) {
        setJobs(data);
      } else {
        console.error('Received data is not an array:', data);
        setJobs([]);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setJobs([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(); // Fetch jobs when the component mounts
  }, [fetchData]);

  useEffect(() => {
    if (Array.isArray(jobData)) {
      setJobs(jobData);
    } else {
      console.error('Invalid jobData prop:', jobData);
      setJobs([]);
    }
  }, [jobData]);

  const filteredJobs = useMemo(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(lowercasedSearchTerm) ||
        job.company.toLowerCase().includes(lowercasedSearchTerm) ||
        job.location.toLowerCase().includes(lowercasedSearchTerm)
    );
  }, [jobs, searchTerm]);

  const currentJobs = useMemo(() => {
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    return filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  }, [filteredJobs, currentPage, jobsPerPage]);

  const pageCount = useMemo(() => Math.ceil(filteredJobs.length / jobsPerPage), [filteredJobs.length, jobsPerPage]);

  const formatDate = useCallback((dateString: string) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? 'N/A' : date.toLocaleDateString();
  }, []);

  const handleSelectAll = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allJobIds = currentJobs.map((job) => job._id || `${job.title}-${job.company}`);
      setSelectedJobs(allJobIds);
    } else {
      setSelectedJobs([]);
    }
  }, [currentJobs]);

  const handleSelectRow = useCallback((e: React.ChangeEvent<HTMLInputElement>, job: Job) => {
    const jobId = `${job.title}-${job.company}`;
    if (e.target.checked) {
      setSelectedJobs((prevSelectedJobs) => [...prevSelectedJobs, jobId]);
    } else {
      setSelectedJobs((prevSelectedJobs) => prevSelectedJobs.filter((id) => id !== jobId));
    }
  }, []);

  const handleDelete = useCallback(async () => {
    if (onDeleteJobs) {
      // If onDeleteJobs prop is provided, use it
      onDeleteJobs(selectedJobs);
      setSelectedJobs([]);
    } else {
      // Fallback to original delete method if prop is not provided
      try {
        const response = await fetch('/api/deletejobs', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ jobIds: selectedJobs }),
        });

        if (!response.ok) {
          throw new Error('Failed to delete jobs');
        }

        setJobs((prevJobs) => 
          prevJobs.filter((job) => 
            !selectedJobs.includes(job._id || `${job.title}-${job.company}`)
          )
        );
        setSelectedJobs([]);
      } catch (error) {
        console.error('Error deleting jobs:', error);
      }
    }
  }, [selectedJobs, onDeleteJobs]);

  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Search Bar */}
      <div className="flex justify-center w-full">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 w-full max-w-md border rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      {/* Jobs Table */}
      <div className="overflow-x-auto bg-white rounded-md shadow-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="p-4 w-12">
                <input
                  type="checkbox"
                  checked={selectedJobs.length === currentJobs.length && currentJobs.length > 0}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="p-4 w-1/4">Title</th>
              <th className="p-4 w-1/4">Company</th>
              <th className="p-4 w-1/4">Location</th>
              <th className="p-4 w-1/6">Date</th>
              <th className="p-4 w-1/6">Link</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-600">
                  Loading...
                </td>
              </tr>
            ) : currentJobs.length > 0 ? (
              currentJobs.map((job) => (
                <tr
                  key={job._id || `${job.title}-${job.company}`}
                  className="border-b hover:bg-gray-50 transition duration-200"
                >
                  <td className="py-4 px-4">
                    <input
                      type="checkbox"
                      checked={selectedJobs.includes(job._id || `${job.title}-${job.company}`)}
                      onChange={(e) => handleSelectRow(e, job)}
                    />
                  </td>
                  <td className="p-4 truncate">{job.title}</td>
                  <td className="p-4 truncate">{job.company}</td>
                  <td className="p-4 truncate">{job.location}</td>
                  <td className="p-4">{formatDate(job.date)}</td>
                  <td className="p-4">
                    <a
                      href={job.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Apply
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-600">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
  
      {/* Footer Controls: Rows Per Page, Delete Button, and Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Info and Delete Button */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <span className="text-sm text-gray-600">
            {filteredJobs.length} result(s) found.
          </span>
          <button
            onClick={handleDelete}
            disabled={selectedJobs.length === 0}
            className="bg-red-500 text-white px-6 py-2 rounded shadow-md hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            🗑️ Delete Selected
          </button>
        </div>
  
        {/* Pagination Controls */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm">Rows per page:</span>
            <select
              value={jobsPerPage}
              onChange={(e) => {
                setJobsPerPage(Number(e.target.value));
                setCurrentPage(1); // Reset to first page on change
              }}
              className="p-2 border rounded"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`px-3 py-2 border rounded ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
              }`}
            >
              &laquo;
            </button>
            <span className="px-4 py-2 border rounded bg-gray-100">
              Page {currentPage} of {pageCount}
            </span>
            <button
              disabled={currentPage === pageCount}
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`px-3 py-2 border rounded ${
                currentPage === pageCount ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
              }`}
            >
              &raquo;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  };

export default DelegatedJobsTable;
