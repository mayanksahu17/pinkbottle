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
  jobData: Job[]; // Keep the original props
}

const SavedJobsTable: React.FC<JobTableProps> = ({ jobData }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch('/api/savedjobs'); // This will default to GET method
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      }
    }

    fetchJobs();
  }, []);

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

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const pageCount = Math.ceil(filteredJobs.length / jobsPerPage);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString();

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
                <input type="checkbox" />
              </th>
              <th scope="col" className="py-3 px-6">
                Title
              </th>
              <th scope="col" className="py-3 px-6">
                Company
              </th>
              <th scope="col" className="py-3 px-6">
                Location
              </th>
              <th scope="col" className="py-3 px-6">
                Date <span className="ml-1">⇅</span>
              </th>
              <th scope="col" className="py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentJobs.length > 0 ? (
              currentJobs.map((job) => (
                <tr key={job._id}>
                  <td className="py-4 px-6">
                    <input type="checkbox" />
                  </td>
                  <td className="py-4 px-6">{job.title}</td>
                  <td className="py-4 px-6">{job.position}</td>
                  <td className="py-4 px-6">{job.location}</td>
                  <td className="py-4 px-6">{formatDate(job.date)}</td>
                  <td className="py-4 px-6">
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
                <td colSpan={6} className="text-center py-4">
                  No results.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 flex-col sm:flex-row">
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
              className="ml-2 p-1 border rounded"
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
              className={`px-3 py-2 border rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            >
              &laquo;
            </button>
            <div className="mx-2 px-3 py-2 border rounded bg-gray-200">
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

export default SavedJobsTable;
