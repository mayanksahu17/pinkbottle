'use client'

import { FloatingIcons } from './floating-icon'
import { JobCard } from './job-card'
import Marquee from 'react-fast-marquee'

const jobCategories = [
  {
    title: 'Senior Roles in Digital Marketing',
    companies: [
      { logo: '/float/google.png', name: 'Google' },
      { logo: '/float/meta.png', name: 'Meta' },
      { logo: '/float/amazon.png', name: 'Amazon' },
    ],
  },
  {
    title: 'New Grad Product Management Jobs',
    companies: [
      { logo: '/float/netflix.png', name: 'Netflix' },
      { logo: '/float/spotify.png', name: 'Spotify' },
      { logo: '/float/apple.png', name: 'Apple' },
    ],
  },
  {
    title: 'Internships at Unicorn Startups',
    companies: [
      { logo: '/float/stripe.png', name: 'Stripe' },
      { logo: '/float/notion.png', name: 'Notion' },
      { logo: '/float/vercel.png', name: 'Vercel' },
    ],
  },
]

function LeftContent() {
  return (
    <div className="space-y-8 sm:space-y-12 w-full max-w-[340px] sm:max-w-xl mx-auto lg:mx-0">
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-3 py-1">
          <span className="text-xs sm:text-sm font-medium text-blue-600">Job Search Assistance</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
          We're here for{' '}
          <span className="relative">
            every step
            <span className="absolute bottom-2 left-0 w-full h-2 bg-blue-200/60 -z-10"></span>
          </span>
          {' '}of your search.
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-lg">
          Tell us about your career history and goals. We'll help you craft a standout profile and help you land your dream job.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-3 py-1">
          <span className="text-xs sm:text-sm font-medium text-green-600">Success Rate</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
          <span className="relative">
            91% Increase
            <span className="absolute bottom-2 left-0 w-full h-2 bg-green-200/60 -z-10"></span>
          </span>
          {' '}in Calls with HiredEasy
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-lg">
          Our clients start receiving calls within the first month of having our assistants apply.
        </p>
        <div className="flex items-center space-x-2">
          <span className="text-3xl sm:text-4xl font-bold text-green-600">70%</span>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            secure a job within one month of joining HiredEasy.
          </p>
        </div>
      </div>
    </div>
  )
}

function JobMatches() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-xl lg:max-w-2xl mx-auto lg:ml-auto">
      <div className="absolute inset-0 rounded-2xl bg-gray-50/80 backdrop-blur-sm shadow-xl" />
      <div className="relative p-3 sm:p-4 lg:p-6">
        <FloatingIcons />
        <div className="mt-4 overflow-hidden">
          <Marquee gradient={false} speed={20} className="overflow-hidden">
            <div className="flex">
              {jobCategories.map((category, index) => (
                <div key={`${category.title}-${index}`} className="flex-shrink-0 px-1.5">
                  <JobCard
                    title={category.title}
                    companies={category.companies}
                  />
                </div>
              ))}
            </div>
            <div className="flex">
              {jobCategories.map((category, index) => (
                <div key={`${category.title}-repeat-${index}`} className="flex-shrink-0 px-1.5">
                  <JobCard
                    title={category.title}
                    companies={category.companies}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default function JobMatcher() {
  return (
    <section className="min-h-screen w-full bg-transparent">
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <LeftContent />
          <JobMatches />
        </div>
      </div>
    </section>
  )
}

