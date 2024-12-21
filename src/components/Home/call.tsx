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
    cardLogo: '/try.jpg',
  },
  {
    title: 'New Product Management Jobs',
    companies: [
      { logo: '/float/netflix.png', name: 'Netflix' },
      { logo: '/float/spotify.png', name: 'Spotify' },
      { logo: '/float/apple.png', name: 'Apple' },
    ],
    cardLogo: '/try.jpg',
  },
  {
    title: 'Internships at Unicorn Startups',
    companies: [
      { logo: '/float/stripe.png', name: 'Stripe' },
      { logo: '/float/notion.png', name: 'Notion' },
      { logo: '/float/vercel.png', name: 'Vercel' },
    ],
    cardLogo: '/try.jpg',
  },
]

function HeroSection() {
  return (
    <div className="text-center max-w-5xl mx-auto mb-24 space-y-8">
      <h1 className="space-y-2 text-[2.30rem] sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900">
        <div>We're here for</div>
        <div>
          <span className="relative inline-block">
            every step
            <svg
              className="absolute -bottom-4 left-0 w-full h-2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 242 6"
            >
              <path
                d="M4.10469 3.70282C9.9443 3.017 42.5812 1.44003 69.3237 0.550646C102.418 -0.549285 209.303 0.112961 226.986 1.52828C249.064 3.29481 246.738 4.59483 220.374 5.22212C175.88 6.28186 -0.00182429 6.24952 0 5.18191C0 4.63413 1.84802 3.96841 4.10469 3.70282Z"
                fill="#3EC0DD"
              />
            </svg>
          </span>
          {' '}of your search.
        </div>
      </h1>
      <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto font-medium">
        Tell us about your career history and goals. We'll help you craft a standout profile and help you land your dream job.
      </p>
    </div>
  )
}

function LeftContent() {
  return (
    <div className="space-y-8 sm:space-y-12 w-full max-w-[340px] sm:max-w-xl mx-auto lg:mx-0">
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-3 py-1">
          <span className="text-xs sm:text-sm font-medium text-green-600">Success Rate</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
          <span className="relative">
            91% Increase
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
                    cardLogo={category.cardLogo}
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
        <HeroSection />
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <LeftContent />
          <JobMatches />
        </div>
      </div>
    </section>
  )
}
