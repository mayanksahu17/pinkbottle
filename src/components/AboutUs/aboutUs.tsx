'use client';
import React, { SVGProps } from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HiredEasy - About Us | Simplifying Job Applications',
  description:
    'Learn more about HiredEasy and our mission to simplify job applications, and meet our founders dedicated to helping job seekers find their dream jobs.',
  keywords:
    'HiredEasy, About HiredEasy, job applications, career services, job seekers, Nikhil Jain, Anuj Jain',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  authors: [{ name: 'HiredEasy' }],
  openGraph: {
    type: 'website',
    url: 'https://hiredeasy.com/about',
    title: 'HiredEasy - About Us | Simplifying Job Applications',
    description:
      'Learn more about HiredEasy and our mission to simplify job applications, and meet our founders dedicated to helping job seekers find their dream jobs.',
    images: [
      {
        url: 'https://hiredeasy.com/Hiredeasy.png',
        width: 800,
        height: 600,
        alt: 'HiredEasy Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HiredEasy - About Us | Simplifying Job Applications',
    description:
      'Learn more about HiredEasy and our mission to simplify job applications, and meet our founders dedicated to helping job seekers find their dream jobs.',
    images: [
      {
        url: 'https://hiredeasy.com/Hiredeasy.png',
        alt: 'HiredEasy Logo',
      },
    ],
  },
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://hiredeasy.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About Us',
      item: 'https://hiredeasy.com/about',
    },
  ],
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'HiredEasy About Us',
  url: 'https://hiredeasy.com/about',
  description:
    'Learn more about HiredEasy and our mission to simplify job applications.',
};

const Aboutus = () => {
  return (
    <div
      className="min-h-screen text-black"
      style={{ backgroundColor: '#FAF6F6' }}
    >
      <Navbar />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </head>
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            We understand you better than anyone
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We have been in your shoes and understand the challenges of job
            hunting. Our mission is to help job seekers find their dream jobs.
          </p>
          <a
            href="https://apply.neetocal.com/meeting-with-nikhil-jain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base border-2 rounded-lg px-8 py-3 font-semibold border-gray-800 text-gray-800 bg-white hover:bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl ml-4"
          >
            Talk to founder 👋
          </a>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center text-center">
            <img
              alt="Nikhil Jain"
              className="mb-4 rounded-xl shadow-lg "
              height="200"
              src="/Nikhil.jpeg"
              style={{
                aspectRatio: '1/1',
                objectFit: 'cover',
              }}
              width="200"
              loading="lazy"
            />

            <h2 className="font-bold text-2xl mb-2">Nikhil Jain</h2>
            <p className="text-gray-700 mb-4">
              Co-Founder | Product |{' '}
              {/* <a
                href="https://www.linkedin.com/in/wnikhil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="inline ml-1" />
              </a> */}
            </p>
            <p className="text-gray-600 mb-4">
              I co-founded a startup that helps students and professionals by
              applying for jobs on their behalf, crafting resumes, and updating
              cover letters. As an IIM Kolkata alumnus with experience at S&P
              Global, I'm dedicated to enhancing user experiences and
              simplifying the job application process.
            </p>
            <div className="flex space-x-2">
              <img
                alt="IIM Kolkata logo"
                height="70"
                src="/IIM.png"
                style={{
                  aspectRatio: '120/40',
                  objectFit: 'contain',
                }}
                width="210"
                loading="lazy"
              />
              <img
                alt="S&P Global"
                height="150"
                src="/spglobal.svg"
                style={{
                  aspectRatio: '120/40',
                  objectFit: 'contain',
                }}
                width="140"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              alt="Kshitij Salecha"
              className="mb-4 rounded-xl shadow-lg"
              height="200"
              src="/Kshitj.png"
              style={{
                aspectRatio: '1/1',
                objectFit: 'cover',
              }}
              width="200"
              loading="lazy"
            />

            <h2 className="font-bold text-2xl mb-2">Kshitij Salecha</h2>
            <p className="text-gray-700 mb-4">
              Co-Founder | Operations |{' '}
              <a
                href="https://www.linkedin.com/in/kshitij-salecha-14237b1b1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="inline ml-1" />
              </a>
            </p>
            <p className="text-gray-600 mb-4">
              I have recruiting experience of 3+ years. I know how hiring works
              as I have hired more than 2000+ candidates for multiple companies.
              My goal is to leverage my experience to create efficient and
              effective hiring strategies that benefit both employers and job
              seekers.
            </p>
            <div className="flex space-x-2">
              <img
                alt="DAVV logo"
                height="70"
                src="/davv.png"
                style={{
                  aspectRatio: '120/40',
                  objectFit: 'contain',
                }}
                width="210"
                loading="lazy"
              />
              <img
                alt="Mindtek"
                height="150"
                src="/mindtek.jpg"
                style={{
                  aspectRatio: '120/40',
                  objectFit: 'contain',
                }}
                width="140"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Aboutus;

function InstagramIcon(
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

function LinkedinIcon(
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
