import React, { useState } from "react";
import { saveAs } from 'file-saver';

interface Job {
  _id: string;
  image: string;
  title: string;
  position: string;
  date: string;
  status: string;
}

interface JobsMainProps {
  jobs: (Job | { _id?: string })[]; // Allow for optional _id
  firstName: string;
}

const JobsMain: React.FC<JobsMainProps> = ({ jobs, firstName }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(7); // Number of jobs per page
  const [searchTerm, setSearchTerm] = useState('');

  // Transform jobs to ensure `_id` is always a string
  const transformedJobs: Job[] = jobs.map(job => ({
    _id: job._id ?? 'N/A',
    image: (job as Job).image ?? '',
    title: (job as Job).title ?? '',
    position: (job as Job).position ?? '',
    date: (job as Job).date ?? '',
    status: (job as Job).status ?? ''
  }));

  // Filter jobs based on the search term
  const filteredJobs = transformedJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const pageCount = Math.ceil(filteredJobs.length / jobsPerPage);
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

  // Helper function to format date
  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString();

  const downloadCSV = () => {
    const header = "ID,Image,Title,Position,Date,Status\n";
    const rows = filteredJobs.map(job => 
      `${job._id},${job.image},${job.title},${job.position},${formatDate(job.date)},${job.status}`
    ).join("\n");
    
    const csvContent = "data:text/csv;charset=utf-8," + header + rows;
    const encodedUri = encodeURI(csvContent);
    saveAs(encodedUri, "jobs_export.csv");
  };

  return (
    <main className="flex flex-col w-full p-4 md:p-6 pt-16">
      <div className="flex flex-col items-center w-full mb-4">
        <h1 className="font-semibold text-lg md:text-2xl text-gray-800 dark:text-white">
          Hey {firstName}, here's a list of the jobs you've applied for 🧑‍💻
        </h1>
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-full max-w-md border rounded shadow mt-4"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full mb-5">
        <button onClick={downloadCSV} className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow transition duration-150 ease-in-out">
          Export to CSV
        </button>
        <div className="text-lg text-gray-800 dark:text-white underline w-full md:w-auto text-center md:text-right">
          Total Applications: {filteredJobs.length}
        </div>
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
            <tr>
              <th scope="col" className="py-3 px-6">Image</th>
              <th scope="col" className="py-3 px-6">Job Title</th>
              <th scope="col" className="py-3 px-6">Company</th>
              <th scope="col" className="py-3 px-6">Date</th>
              <th scope="col" className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentJobs.length > 0 ? currentJobs.map(job => (
              <tr key={job._id}>
                <td className="py-4 px-6">
                  <img alt="Company logo" className="h-10 w-10 rounded-full" src={job.image} />
                </td>
                <td className="py-4 px-6">{job.title}</td>
                <td className="py-4 px-6">{job.position}</td>
                <td className="py-4 px-6">{formatDate(job.date)}</td>
                <td className="py-4 px-6">{job.status}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan={5} className="text-center py-4">No Jobs are available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`px-4 py-2 border rounded text-sm ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500 hover:text-white'}`}
        >
          Prev
        </button>
        {pageNumbers.map((number: number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`mx-1 px-4 py-2 border rounded text-sm ${number === currentPage ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}
          >
            {number}
          </button>
        ))}
        <button
          disabled={currentPage === pageCount}
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`px-4 py-2 border rounded text-sm ${currentPage === pageCount ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500 hover:text-white'}`}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default JobsMain;
