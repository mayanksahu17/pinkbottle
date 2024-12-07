import React, { useState, useEffect, useMemo } from 'react';

interface Job {
  _id?: string;
  image: string;
  title: string;
  position: string;
  date: string;
  status: string;
  location: string;
}

interface JobTableProps {
  jobData?: Job[]; // Optional to accommodate both fetched and passed data
}

const SavedJobsTable: React.FC<JobTableProps> = ({ jobData = [] }) => {
  //const [jobs, setJobs] = useState<Job[]>(jobData);//use this later
  const [jobs, setJobs] = useState<Job[]>(Array.isArray(jobData) ? jobData : []);//
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

 /* useEffect(() => {
    // Fetch jobs only if jobData is not passed or is empty
    if (jobData.length === 0) {
      async function fetchJobs() {
        try {
          const response = await fetch('/api/savedjobs'); // This will default to GET method
          const data = await response.json();
          setJobs(data);
          console.log("data of saved jobs :",data)
          console.log("data of saved jobs data:",jobData)
        } catch (error) {
          console.error('Failed to fetch jobs:', error);
        }
      }

      fetchJobs();
    }
  }, [jobData]);*/

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch('/api/savedjobs');
        const data = await response.json();
        console.log('API Response Data:', data);
        if (Array.isArray(data)) {
          setJobs(data);
        } else {
          console.error('Unexpected response format:', data);
          setJobs([]);
        }
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
        setJobs([]);
      }
    }

    fetchJobs();
  }, []); // Fetch jobs on initial render only

  const filteredJobs = useMemo(
    () =>
      jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.date.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [jobs, searchTerm]
  );

  const sortedJobs = useMemo(() => {
    return [...filteredJobs].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }, [filteredJobs, sortOrder]);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = sortedJobs.slice(indexOfFirstJob, indexOfLastJob);

  const pageCount = Math.ceil(filteredJobs.length / jobsPerPage);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString();

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
      {/* Search Bar */}
      <div className="flex flex-col items-center w-full mb-4">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-full max-w-md border rounded shadow mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>
  
      {/* Table */}
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg bg-white">
        <table className="w-full text-sm text-left text-gray-500 bg-white">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="py-3 px-6">
                <input type="checkbox" />
              </th>
              <th className="py-3 px-6">Title</th>
              <th className="py-3 px-6">Position</th>
              <th className="py-3 px-6">Location</th>
              <th
                className="py-3 px-6 cursor-pointer"
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              >
                Date <span>{sortOrder === 'asc' ? '⇅' : '⇅'}</span>
              </th>
              <th className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {currentJobs.length > 0 ? (
              currentJobs.map((job) => (
                <tr key={job._id} className="border-b hover:bg-gray-100">
                  <td className="py-4 px-6 bg-white">
                    <input type="checkbox" />
                  </td>
                  <td className="py-4 px-6 bg-white">{job.title}</td>
                  <td className="py-4 px-6 bg-white">{job.position}</td>
                  <td className="py-4 px-6 bg-white">{job.location}</td>
                  <td className="py-4 px-6 bg-white">{formatDate(job.date)}</td>
                  <td className="py-4 px-6 bg-white">
                    <select
                      value={job.status}
                      onChange={async (e) => {
                        const newStatus = e.target.value;
                        try {
                          const response = await fetch(`/api/updatejobstatus`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                              id: job._id,
                              status: newStatus,
                            }),
                          });
                          if (response.ok) {
                            setJobs((prevJobs) =>
                              prevJobs.map((j) =>
                                j._id === job._id
                                  ? { ...j, status: newStatus }
                                  : j
                              )
                            );
                          } else {
                            console.error('Failed to update job status');
                          }
                        } catch (error) {
                          console.error('Error updating job status:', error);
                        }
                      }}
                      className="px-2 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Applied">Applied</option>
                      <option value="Interviewed">Interviewed</option>
                      <option value="Offer">Offer</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4 bg-white">
                  No results.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
  
      {/* Pagination & Options */}
      <div className="flex justify-between items-center mt-4 flex-col sm:flex-row bg-white p-4 rounded shadow-md">
        <div className="text-sm text-gray-500">
          {filteredJobs.length} result(s) found.
        </div>
        <div className="flex items-center space-x-4">
          <div>
            Rows per page:
            <select
              value={jobsPerPage}
              onChange={(e) => {
                setJobsPerPage(Number(e.target.value));
                setCurrentPage(1); // Reset to first page on change
              }}
              className="ml-2 p-1 border rounded bg-white"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div className="flex items-center">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`px-3 py-2 border rounded ${
                currentPage === 1
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-100'
              } bg-white`}
            >
              &laquo;
            </button>
            <div className="mx-2 px-3 py-2 border rounded bg-gray-200">
              Page {currentPage} of {pageCount}
            </div>
            <button
              disabled={currentPage === pageCount}
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`px-3 py-2 border rounded ${
                currentPage === pageCount
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-100'
              } bg-white`}
            >
              &raquo;
            </button>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default SavedJobsTable;
