'use client';
import React, { SVGProps, useEffect, useState } from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HiredEasy - Wall of Love | Client Testimonials',
  description:
    'Read success stories from our clients who landed their dream jobs with the help of HiredEasy.',
  keywords:
    'HiredEasy, client testimonials, success stories, job applications, career services, job seekers',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  authors: [{ name: 'HiredEasy' }],
  openGraph: {
    type: 'website',
    url: 'https://hiredeasy.com/walloflove',
    title: 'HiredEasy - Wall of Love | Client Testimonials',
    description:
      'Read success stories from our clients who landed their dream jobs with the help of HiredEasy.',
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
    title: 'HiredEasy - Wall of Love | Client Testimonials',
    description:
      'Read success stories from our clients who landed their dream jobs with the help of HiredEasy.',
    images: [
      {
        url: 'https://hiredeasy.com/Hiredeasy.png',
        alt: 'HiredEasy Logo',
      },
    ],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'HiredEasy Wall of Love',
  url: 'https://hiredeasy.com/walloflove',
  description:
    'Read success stories from our clients who landed their dream jobs with the help of HiredEasy.',
  testimonial: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Vartika P',
      },
      reviewBody:
        "After months of job hunting with no success, I was feeling defeated. I had applied to countless positions but hadn't received any positive responses. Then I discovered HiredEasy. They revamped my resume, crafted tailored cover letters, and handled the application process for me. Within a few weeks, I had two job offers. Their service was a game-changer, helping me secure a fantastic full-time job that meets my financial needs and offers career growth opportunities.",
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Visa',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Yogalakshmi V',
      },
      reviewBody:
        "As I work full time and could not spare much time for applying jobs. Applying each job is such a painful process sometimes it takes more than 15 minutes for one application. I got tired and demotivated after a week of applying by myself. I heard of 'HiredEasy.com' where they apply for your jobs online. Team did a great help in applying jobs and always available to talk. They followed my priority in applying jobs as well.",
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
      publisher: {
        '@type': 'Organization',
        name: 'SGS',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Siddharth J',
      },
      reviewBody:
        'After not getting a PPO from AMD, I fell into a deep depression. I wasted a year, and my OPT was about to expire and I was ready to go back to India. My situation seemed hopeless. 🛫 Hiredeasy helped me in filtering and applying applications using referrals and cold emails. I received 4 offer from all the tech companies',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Meta',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Anshul J',
      },
      reviewBody:
        'I was looking for an internship and applied to over 300 positions on my own, but nothing worked out. Then I found HiredEasy. They updated my resume, wrote cover letters, and applied for jobs for me. Soon, I received two offer letters. Investing in their service was worth it because I got a great internship that covers both my student loan and living expenses.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
      publisher: {
        '@type': 'Organization',
        name: 'WEX',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Sagar Soni',
      },
      reviewBody:
        'I have known Hiredeasy for a long time, and they have helped me secure two positions. Initially, I joined Capital One, and after a year, I transitioned to EMS Pro with their support. I truly appreciate and admire the work they do. Their dedication and expertise in job placement are unparalleled, and I am incredibly grateful for their assistance in advancing my career.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
      publisher: {
        '@type': 'Organization',
        name: 'EMS Pro',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Gaurav Jain',
      },
      reviewBody:
        "The current job market in Canada is tough, especially with the ongoing recession. I needed to switch jobs to get my visa sponsored, but my full-time job left me with no time to job hunt. That's when I discovered HiredEasy. They took over the application process for me and provided invaluable support. Thanks to their help, I was able to secure a job that sponsors my visa.",
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
      publisher: {
        '@type': 'Organization',
        name: 'FIS',
      },
    },
  ],
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
      name: 'Wall of Love',
      item: 'https://hiredeasy.com/walloflove',
    },
  ],
};

type WindowSize = {
  width: number | undefined;
};

// Custom hook to check window width
const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    // Set the size initially on client-side
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const Walloflove = () => {
  const { width } = useWindowSize();
  const isMobile = width !== undefined && width < 768;
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div
      className="min-h-screen text-black"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <Navbar />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <main style={{ paddingTop: '4rem' }}>
        <div className="bg-white py-12">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Our clients <span className="text-red-500">❤️</span> us
          </h2>
          <p className="text-center mt-8 text-gray-600 text-sm mb-10">
            We've worked with thousand fellows and counting. Read some of their
            stories
          </p>
          <br />

          <div className="flex flex-wrap justify-center gap-8 px-4">
            <div className="max-w-sm w-full md:w-1/3">
              <img
                className="w-24 md:w-24 lg:w-24 p-4"
                src="Visa.png"
                alt="Visa"
                loading="lazy"
              />
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="/vartika.png?height=40&width=40"
                  alt="Shubhang Mall"
                  className="w-10 h-10 rounded-full"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    Vartika P |{' '}
                    <a
                      href="https://www.linkedin.com/in/vartikajai/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinIcon className="inline ml-1" />
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">
                    Software Engineer, USA
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                After months of job hunting with no success, I was feeling
                defeated. I had applied to countless positions but hadn't
                received any positive responses. Then I discovered HiredEasy.
                They revamped my resume, crafted tailored cover letters, and
                handled the application process for me. Within a few weeks, I
                had two job offers. Their service was a game-changer, helping me
                secure a fantastic full-time job that meets my financial needs
                and offers career growth opportunities.
              </p>
            </div>
            <div className="max-w-sm w-full md:w-1/3">
              <img
                className="w-32 md:w-32 lg:w-32 p-4"
                src="sgs.png"
                alt="SGS"
                loading="lazy"
              />
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="/yoag.png?height=50&width=50"
                  alt="Yogalakshmi V"
                  className="w-10 h-10 rounded-full"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    Yogalakshmi V |{' '}
                    <a
                      href="https://www.linkedin.com/in/vyoag/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinIcon className="inline ml-1" />
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">
                    Backend Software Engineer Intern, USA
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                I had a tough time finding an internship this summer and was
                really worried as the end of summer got closer. Despite my
                efforts, I just couldn't secure anything. Then I found HireEasy,
                and they helped me out a lot. Within 10 days of working with
                them, I got an internship. I'm so grateful for their support.
                Thank you, HireEasy, for turning things around for me.
              </p>
            </div>
            <div className="max-w-sm w-full md:w-1/3">
              <img
                className="w-24 md:w-24 lg:w-24 p-4"
                src="Meta.png"
                alt="Meta"
                loading="lazy"
              />
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="/nannu.png?height=40&width=40"
                  alt="Siddharth Jain"
                  className="w-10 h-10 rounded-full"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    Siddharth J |{' '}
                    <a
                      href="https://www.linkedin.com/in/siddharth-j-795020208/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinIcon className="inline ml-1" />
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">
                    Software Engineer, USA
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                After not getting a PPO from AMD, I fell into a deep depression.
                I wasted a year, and my OPT was about to expire and I was ready
                to go back to India. My situation seemed hopeless. 🛫 Hiredeasy
                helped me in filtering and applying applications using referrals
                and cold emails. I received 4 offer from all the tech companies
              </p>
            </div>
            <div className="max-w-sm w-full md:w-1/3">
              <img
                className="w-32 md:w-32 lg:w-32 p-4"
                src="wex.svg"
                alt="WEX"
                loading="lazy"
              />
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="/Anshul.jpeg?height=40&width=40"
                  alt="Anshul Jain"
                  className="w-10 h-10 rounded-full"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    Anshul J |{' '}
                    <a
                      href="https://www.linkedin.com/in/zanshul/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinIcon className="inline ml-1" />
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">
                    Software Engineer, USA
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                I was looking for an internship and applied to over 300
                positions on my own, but nothing worked out. Then I found
                HiredEasy. They updated my resume, wrote cover letters, and
                applied for jobs for me. Soon, I received two offer letters.
                Investing in their service was worth it because I got a great
                internship that covers both my student loan and living expenses.
              </p>
            </div>
            <div className="max-w-sm w-full md:w-1/3">
              <img
                className="w-32 md:w-32 lg:w-32 p-4"
                src="EMS.png"
                alt="EMS Pro"
                loading="lazy"
              />
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="/Sagar.jpeg?height=40&width=40"
                  alt="Bhavesh Kewalramani"
                  className="w-10 h-10 rounded-full"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    Sagar Soni |{' '}
                    <a
                      href="https://www.linkedin.com/in/sagarsoni2611/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinIcon className="inline ml-1" />
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">
                    Business Intelligence Engineer, USA
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                I have known Hiredeasy for a long time, and they have helped me
                secure two positions. Initially, I joined Capital One, and after
                a year, I transitioned to EMS Pro with their support. I truly
                appreciate and admire the work they do. Their dedication and
                expertise in job placement are unparalleled, and I am incredibly
                grateful for their assistance in advancing my career.
              </p>
            </div>
            {/* <div className="max-w-sm w-full md:w-1/3">
              <img
                className="w-32 md:w-32 lg:w-32 p-4"
                src="microsoft.png"
                alt="Microsoft"
                loading="lazy"
              />
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="/axel_fratoni.jpeg?height=40&width=40"
                  alt="Axel Fratoni"
                  className="w-10 h-10 rounded-full"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-semibold">Axel Fratoni</h3>
                  <p className="text-sm text-gray-500">
                    Software Developer II, USA
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                Due to my demanding job, I didn't have the time to apply for new
                positions. HiredEasy's assistance was invaluable. They helped me
                filter opportunities and made sure to match my preferences.
                Their support allowed me to focus on my career while they
                handled the job search process.
              </p>
            </div> */}
            <div className="max-w-sm w-full md:w-1/3">
              <img
                className="w-24 md:w-24 lg:w-24 p-4"
                src="FIS.png"
                alt="FIS"
                loading="lazy"
              />
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="/Gaurav.png?height=40&width=40"
                  alt="Gaurav Gupta"
                  className="w-10 h-10 rounded-full"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-semibold">Gaurav Gupta</h3>
                  <p className="text-sm text-gray-500">Consultant, Canada</p>
                </div>
              </div>
              <p className="text-gray-600">
                The current job market in Canada is tough, especially with the
                ongoing recession. I needed to switch jobs to get my visa
                sponsored, but my full-time job left me with no time to job
                hunt. That's when I discovered HiredEasy. They took over the
                application process for me and provided invaluable support.
                Thanks to their help, I was able to secure a job that sponsors
                my visa.
              </p>
            </div>
            {/* <div className="max-w-sm w-full md:w-1/3">
              <img
                className="w-32 md:w-32 lg:w-32 p-4"
                src="servicenow.svg"
                alt="Service Now"
                loading="lazy"
              />
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="/Eswar.jpeg?height=40&width=40"
                  alt="Eswar Ramani"
                  className="w-10 h-10 rounded-full"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-semibold">Eswar Ramani</h3>
                  <p className="text-sm text-gray-500">Consultant, USA</p>
                </div>
              </div>
              <p className="text-gray-600">
                When I graduated, the recession had just started, making the job
                market incredibly tough. Balancing my job search with the
                challenging economic climate was overwhelming. That's when I
                found HiredEasy. They created custom resumes and cover letters
                for me, tailored to each job I applied for. Their help was
                invaluable and made a huge difference. Thanks to HiredEasy, I
                managed to secure a job even during the recession.
              </p>
            </div> */}
          </div>
        </div>
      </main>

      <section
        className="bg-white py-16"
        style={{ fontFamily: 'Calibri, sans-serif' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid Layout for All Screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Aadvik */}
            <div className="text-center">
              <h3 className="text-green-600 font-bold text-lg">Aadvik</h3>
              <p className="text-black font-semibold">Student to Full-time</p>
              <p className="text-gray-700 mb-4">
                Aadvik received offer letter from FAANG and ready for next round
                at Spotify
              </p>
              <img
                src="Testimonial6.jpeg"
                alt="Sunny Testimonial"
                className="shadow-lg rounded-lg w-2/3 mx-auto"
              />
            </div>

            {/* Yash */}
            <div className="text-center">
              <h3 className="text-green-600 font-bold text-lg">Yash</h3>
              <p className="text-black font-semibold">Interview with Netflix</p>
              <p className="text-gray-700 mb-4">
                Yash received Interview from Netflix for Data Analyst
              </p>
              <img
                src="Testimonial15.jpeg"
                alt="Surabhi Testimonial"
                className="shadow-lg rounded-lg w-full h-auto mb-10"
                style={{ maxWidth: '100%', maxHeight: '1000px' }}
              />
              {/* Pratik */}
              <div className="text-center">
                <h3 className="text-green-600 font-bold text-lg">Atharva</h3>
                <p className="text-black font-semibold">
                  Interview with First Help Financial
                </p>
                <p className="text-gray-700 mb-4">
                  Atharva received Interview from First Help Financial
                </p>
                <img
                  src="Testimonial16.jpeg"
                  alt="Pratik Testimonial"
                  className="shadow-lg rounded-lg w-full"
                />
              </div>
            </div>

            {/* Ashutosh */}
            <div className="text-center">
              <h3 className="text-green-600 font-bold text-lg">Nihar</h3>
              <p className="text-black font-semibold">
                Received interview from Netflix
              </p>
              <p className="text-gray-700 mb-4">
                Nihar received interview call from Netflix
              </p>
              <img
                src="Testimonial18.jpeg"
                alt="Anjali Testimonial"
                className="shadow-lg rounded-lg w-full mb-10"
              />
              <div className="text-center">
                <h3 className="text-green-600 font-bold text-lg">Anshul</h3>
                <p className="text-black font-semibold">
                  Received referral at Microsoft and Amazon
                </p>
                <p className="text-gray-700 mb-4">
                  Anshul received multiple referrals from Tech companies
                </p>
                <img
                  src="Testimonial17.jpeg"
                  alt="Anshul Testimonial"
                  className="shadow-lg rounded-lg w-full mb-1"
                />
                <img
                  src="Testimonial13.png"
                  alt="Anshul Testimonial"
                  className="shadow-lg rounded-lg w-full mb-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-white py-16"
        style={{ fontFamily: 'Calibri, sans-serif' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid Layout for All Screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Clint */}
            <div className="text-center">
              <h3 className="text-green-600 font-bold text-lg">Clint</h3>
              <p className="text-black font-semibold">
                Received call in Free Trial
              </p>
              <p className="text-gray-700 mb-4">
                Clint received the call very next day after joining free trial.
              </p>
              <img
                src="Testimonial5.jpeg"
                alt="Sunny Testimonial"
                className="shadow-lg rounded-lg w-2/3 mx-auto"
              />
            </div>

            {/* Riya */}
            <div className="text-center">
              <h3 className="text-green-600 font-bold text-lg">Riya</h3>
              <p className="text-black font-semibold">Interview with G2I</p>
              <p className="text-gray-700 mb-4">
                Riya received final interview
              </p>
              <img
                src="Testimonial10.png"
                alt="Surabhi Testimonial"
                className="shadow-lg rounded-lg w-full h-auto mb-10"
                style={{ maxWidth: '100%', maxHeight: '1000px' }}
              />
              {/* Banu */}
              <div className="text-center">
                <h3 className="text-green-600 font-bold text-lg">Banu</h3>
                <p className="text-black font-semibold">
                  Reached to Hiring Managers via cold emails
                </p>
                <p className="text-gray-700 mb-4">Cold emails</p>
                <img
                  src="Testimonial11.png"
                  alt="Pratik Testimonial"
                  className="shadow-lg rounded-lg w-full"
                />
              </div>
            </div>

            {/* Ashutosh */}
            <div className="text-center">
              <h3 className="text-green-600 font-bold text-lg">Ashutosh</h3>
              <p className="text-black font-semibold">
                Received interview from Franklin Covey
              </p>
              <p className="text-gray-700 mb-4">
                Ashustosh received interview call from Franklin Covey
              </p>
              <img
                src="Testimonial12.png"
                alt="Anjali Testimonial"
                className="shadow-lg rounded-lg w-full mb-10"
              />
              <div className="text-center">
                <h3 className="text-green-600 font-bold text-lg">Deepshi</h3>
                <p className="text-black font-semibold">
                  Deepshi received two offers
                </p>
                <p className="text-gray-700 mb-4">
                  Deepshi received offers from Workday and Ramp
                </p>
                <img
                  src="Testimonial19.jpeg"
                  alt="Anshul Testimonial"
                  className="shadow-lg rounded-lg w-2/3 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Walloflove;

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
