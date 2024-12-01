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
}

const DelegatedJobsTable: React.FC<DelegatedJobsTableProps> = ({ jobData }) => {
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

      setJobs((prevJobs) => prevJobs.filter((job) => !selectedJobs.includes(`${job.title}-${job.company}`)));
      setSelectedJobs([]);
    } catch (error) {
      console.error('Error deleting jobs:', error);
    }
  }, [selectedJobs]);

  return (
    <>
      <div className="flex flex-col items-center w-full mb-4">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-full max-w-md border rounded shadow mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6">
                <input
                  type="checkbox"
                  checked={selectedJobs.length === currentJobs.length && currentJobs.length > 0}
                  onChange={handleSelectAll}
                />
              </th>
              <th scope="col" className="py-3 px-6">Title</th>
              <th scope="col" className="py-3 px-6">Company</th>
              <th scope="col" className="py-3 px-6">Location</th>
              <th scope="col" className="py-3 px-6">Date</th>
              <th scope="col" className="py-3 px-6">Link</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} className="text-center py-4">Loading...</td>
              </tr>
            ) : currentJobs.length > 0 ? (
              currentJobs.map((job) => (
                <tr key={job._id || `${job.title}-${job.company}`}>
                  <td className="py-4 px-6">
                    <input
                      type="checkbox"
                      checked={selectedJobs.includes(job._id || `${job.title}-${job.company}`)}
                      onChange={(e) => handleSelectRow(e, job)}
                    />
                  </td>
                  <td className="py-4 px-6">{job.title}</td>
                  <td className="py-4 px-6">{job.company}</td>
                  <td className="py-4 px-6">{job.location}</td>
                  <td className="py-4 px-6">{formatDate(job.date)}</td>
                  <td className="py-4 px-6">
                    <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      Apply
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4">No results.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mt-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="text-sm text-gray-500 text-center sm:text-left">
            {filteredJobs.length} result(s) found.
          </div>

          <button
            onClick={handleDelete}
            disabled={selectedJobs.length === 0}
            className="bg-red-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-600 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            🗑️ Trash
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto justify-center sm:justify-end space-y-4 sm:space-y-0">
          <div className="flex items-center justify-center sm:justify-start">
            <span className="mr-2 text-sm">Rows per page:</span>
            <select
              value={jobsPerPage}
              onChange={(e) => {
                setJobsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="p-2 border rounded"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={50}>50</option>
            </select>
          </div>

          <div className="flex items-center justify-center sm:justify-end space-x-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`px-3 py-2 border rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            >
              &laquo;
            </button>
            <div className="px-4 py-2 border rounded bg-gray-200 text-center">
              Page {currentPage} of {pageCount}
            </div>
            <button
              disabled={currentPage === pageCount}
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`px-3 py-2 border rounded ${currentPage === pageCount ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            >
              &raquo;
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default DelegatedJobsTable;
