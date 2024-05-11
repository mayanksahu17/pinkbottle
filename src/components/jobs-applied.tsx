import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { UserButton, auth, currentUser } from "@clerk/nextjs";
import { JSX, SVGProps } from "react";

export async function JobsApplied() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        You are not logged in
      </div>
    );
  }
  return (
    <div
      className="min-h-screen text-black"
      style={{ backgroundColor: "#FAF6F6" }}
    >
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <img
          alt="Scale.jobs Logo"
          className="h-10"
          src="/Clarksonlogo.png"
          style={{ aspectRatio: "120/40", objectFit: "cover" }}
        />
        <nav className="flex gap-4 items-center">
          <a
            className="text-sm font-medium text-gray-500 hover:text-green-600"
            href="/about"
          >
            About Us
          </a>
          <a
            className="text-sm font-medium text-gray-500 hover:text-green-600"
            href="#"
          >
            How it works
          </a>
          <a
            className="text-sm font-medium text-gray-500 hover:text-green-600"
            href="/pricing"
          >
            Pricing
          </a>
          <a
            href="/trial"
            className="text-sm bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700"
          >
            Try the Copilot Free
          </a>
        </nav>
        <div>
          {userId ? (
            <div className="flex gap-4 items-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800"
              >
                Dashboard
              </Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="space-x-4">
              <a href="/sign-in" className="text-sm">
                Login
              </a>
              <a href="/sign-up" className="text-sm">
                Sign Up
              </a>
            </div>
          )}
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center">
          <h1 className="font-semibold text-lg md:text-2xl">
            Hey {user.firstName}, Here are the jobs we have Applied
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
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="py-4 px-6">
                  <img
                    alt="Company logo"
                    className="h-10 w-10 rounded-full"
                    src="/amazon.jpeg"
                  />
                </td>
                <td className="py-4 px-6">Amazon</td>
                <td className="py-4 px-6 hidden md:table-cell">
                  Software Developer Intern
                </td>
                <td className="py-4 px-6">03/23/2024</td>
                <td className="py-4 px-6">Applied</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="py-4 px-6">
                  <img
                    alt="Company logo"
                    className="h-10 w-10 rounded-full"
                    src="/microsoft.avif"
                  />
                </td>
                <td className="py-4 px-6">Amazon</td>
                <td className="py-4 px-6 hidden md:table-cell">
                  Hardware Design Intern
                </td>
                <td className="py-4 px-6">03/23/2024</td>
                <td className="py-4 px-6">Applied</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="py-4 px-6">
                  <img
                    alt="Company logo"
                    className="h-10 w-10 rounded-full"
                    src="/netflix.png"
                  />
                </td>
                <td className="py-4 px-6">Netlix</td>
                <td className="py-4 px-6 hidden md:table-cell">
                  Machine Learning Intern
                </td>
                <td className="py-4 px-6">03/23/2024</td>
                <td className="py-4 px-6">Applied</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="py-4 px-6">
                  <img
                    alt="Company logo"
                    className="h-10 w-10 rounded-full"
                    src="/amazon.jpeg"
                  />
                </td>
                <td className="py-4 px-6">Amazon</td>
                <td className="py-4 px-6 hidden md:table-cell">
                  UI/UX Developer Intern
                </td>
                <td className="py-4 px-6">03/23/2024</td>
                <td className="py-4 px-6">Applied</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
