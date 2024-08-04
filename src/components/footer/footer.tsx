'use client';

import { SVGProps } from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f7fafc] py-16 shadow-lg" style={{ fontFamily: 'Calibri, sans-serif', boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-2     sm:px-6 lg:px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start md:w-1/3 space-y-4">
            <img src="Hiredeasy.png" alt="Scale.jobs Logo" className="h-20" />
            <p className="text-gray-600 text-sm">
              Empowering job seekers with smart and efficient tools to land their dream job.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/hiredeasy/" target="_blank" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" className="text-gray-600 hover:text-blue-700 transition-colors duration-300">
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" className="text-gray-600 hover:text-red-500 transition-colors duration-300">
                <YouTubeIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12 md:w-1/3">
            <div>
              <h4 className="text-gray-800 text-lg font-semibold">COMPANY</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href="/pricing">Pricing</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href="/Wall">Wall of Love</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href="https://hiredeasyco.trackdesk.com/sign-up">Join as an Affiliate</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-800 text-lg font-semibold">RESOURCES</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  {/* <a className="text-gray-600 hover:text-gray-800" href="/blog">Blog</a> */}
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-1/3 text-center md:text-right">
            <h4 className="text-gray-800 text-lg font-semibold">OUR STORY</h4>
            <p className="mt-4 text-gray-600 text-sm">
              Created by two corporate professionals guys who understand the challenges of today's job market.
              <br />
                Made without a choice in 
                  <span className="inline-flex items-center">
                    <span className="fi fi-us mx-1" style={{ fontSize: '16px' }}>🇺🇸</span>
                    <span className="fi fi-in mx-1" style={{ fontSize: '16px' }}>🇮🇳</span>
                  </span>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2023 HiredEasy.com. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* <a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Terms of Service</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YouTubeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 0 0 1.46 6.42 29.32 29.32 0 0 0 1 12a29.32 29.32 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29.32 29.32 0 0 0 23 12a29.32 29.32 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}
