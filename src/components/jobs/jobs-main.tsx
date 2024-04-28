"use client"
import { getStudentById } from "@/lib/actions/users/user.actions";
import { Jobs } from "@/lib/database/models/User/types";
import { auth, currentUser } from "@clerk/nextjs";
import React from "react";

const JobsMain = ({jobs, firstName}:{jobs:Jobs[], firstName:string}) => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 pt-[4rem]">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">
          Hey {firstName}, We are still working on this. Soon you can
          checkout jobs we applied here!
        </h1>
      </div>

      <div className="flex items-center justify-center p-4">
        <div className="relative flex-1 max-w-lg">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-5-8a5 5 0 1110 0 5 5 0 01-10 0z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M12.293 12.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414-1.414l4-4z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM10 4a6 6 0 100 12 6 6 0 000-12z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            className="block w-full bg-white text-gray-700 border border-gray-300 rounded-md py-2 pl-10 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm"
            placeholder="Search job..."
            type="search"
            name="search"
          />
        </div>
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Image
              </th>
              <th scope="col" className="py-3 px-6">
                Job Title
              </th>
              <th scope="col" className="py-3 px-6 hidden md:table-cell">
                Applied
              </th>
              <th scope="col" className="py-3 px-6 hidden md:table-cell">
                Date
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs && jobs.length > 0 ? (
              jobs.map((job:Jobs) => {
                return (
                  <tr
                    key={job._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="py-4 px-6">
                      <img
                        alt="Company logo"
                        className="h-10 w-10 rounded-full"
                        src="/amazon.jpeg"
                      />
                    </td>
                    <td className="py-4 px-6">{job.title}</td>
                    <td className="py-4 px-6 hidden md:table-cell">
                      {job.position}
                    </td>
                    <td className="py-4 px-6">03/23/2024</td>
                    <td className="py-4 px-6">{job.status}</td>
                  </tr>
                );
              })
            ) : (
              <div className=" w-full">
                <p className="text-black p-6 text-lg font-medium">
                  No Jobs are available
                </p>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default JobsMain;
