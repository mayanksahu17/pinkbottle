import { Button } from "@/components/ui/button"
import styles from './Button.module.css';
import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import { handleCheckout } from './ui/pricing';

export async function PricingUser() {
  const { userId } = auth()
  return (
    <div className="bg-white text-gray-900">
      <header className="flex items-center justify-between p-4 border-b border-gray-200">

<img
  alt="Scale.jobs Logo"
  className="h-10"
  src="/Clarksonlogo.png"
  style={{ aspectRatio: "120/40", objectFit: "cover" }}
/>
<nav className="flex gap-4 items-center">
  <a className="text-sm font-medium text-gray-500 hover:text-green-600" href="/about">
    About Us
  </a>
  <a className="text-sm font-medium text-gray-500 hover:text-green-600" href="#">
    How it works
  </a>
  <a className="text-sm font-medium text-gray-500 hover:text-green-600" href="/pricing">
    Pricing
  </a>
  <a href="/trial" className="text-sm bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700">
    Try the Copilot Free
  </a>
</nav>
<div>
  {userId ? (
    <div className="flex gap-4 items-center">
      <Link href="/dashboard">Dashboard</Link>
      <UserButton afterSignOutUrl="/" />
    </div>
  ) : (
    <div className="space-x-4">
      <a href='/sign-in' className="text-sm">
        Login
      </a>
      <a href='/sign-up' className="text-sm">Sign Up</a>
    </div>
  )}
</div>
</header>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center">Pricing Plans</h2>
        {/* <p className="mt-2 text-center text-sm text-gray-600">
          Split into 4 installments with
          <a className="font-medium text-green-600 hover:text-green-500" href="#">
            Klarna
          </a>
          {"\n"}
        </p> */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Basic</h3>
            <p className="mt-4 text-4xl font-extrabold text-gray-900">$40</p>
            <p className="mt-4">
              <ul className="list-disc pl-6 space-y-4 text-sm">
                <li>200 Job applications</li>
                <li>1 Assistant</li>
                <li className="text-black text-opacity-50">Custom Cover Letters</li>
                <li className="text-black text-opacity-50">Custom Resumes</li>
                <li className="text-black text-opacity-50">LinkedIn Makeover</li>
                <li className="text-black text-opacity-50">Resume Review</li>
                <li className="text-black text-opacity-50">2 Mock Interviews</li>
              </ul>
            </p>
            <Link href="https://buy.stripe.com/test_6oEeXQboMc8X8tG6oo">
            <button className={styles.getStartedButtonother}>Get started</button>
            </Link>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Standard</h3>
            <p className="mt-4 text-4xl font-extrabold text-gray-900">$99</p>
            <p className="mt-4">
              <ul className="list-disc pl-6 space-y-4 text-sm">
                <li>500 Job applications</li>
                <li>1 Assistant</li>
                <li>Custom Cover Letters</li>
                <li className="text-black text-opacity-50">Custom Resumes</li>
                <li className="text-black text-opacity-50">LinkedIn Makeover</li>
                <li className="text-black text-opacity-50">Resume Review</li>
                <li className="text-black text-opacity-50">2 Mock Interviews</li>
              </ul>
            </p>
            <Link href="https://buy.stripe.com/test_fZeaHAgJ64GvbFS9AB">
            <button className={styles.getStartedButtonother}>Get started</button>
            </Link>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Best Value</h3>
            <p className="mt-4 text-4xl font-extrabold text-gray-900">$249</p>
            <p className="mt-4">
              <ul className="list-disc pl-6 space-y-4 text-sm">
                <li>1000 Job applications</li>
                <li>Up to 2 Assistants</li>
                <li>Custom Cover Letters</li>
                <li>Custom Resumes</li>
                <li>2 Mock Interviews</li>
                <li className="text-black text-opacity-50">LinkedIn Makeover</li>
                <li className="text-black text-opacity-50">Resume Review</li>
               
              </ul>
            </p>
            <Link href="https://buy.stripe.com/test_7sI1702Sgdd15hu3ce">
            <button className={styles.getStartedButtonother}>Get started</button>
            </Link>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Ultimate Bundle</h3>
            <p className="mt-4 text-4xl font-extrabold text-gray-900">$299</p>
            <p className="mt-4">
              <ul className="list-disc pl-6 space-y-4 text-sm">
                <li>1000 Job applications</li>
                <li>Up to 2 Assistants</li>
                <li>Custom Cover Letters</li>
                <li>Custom Resumes</li>
                <li>LinkedIn Makeover</li>
                <li>Resume Review</li>
                <li>5 Mock Interviews</li>
              </ul>
            </p>
            <Link href="https://buy.stripe.com/test_cN29DwboMfl911e8wz">
            <button className={styles.getStartedButtonother}>Get started</button>
            </Link>
          </div>
        </div>
      </div>
    
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center">To put things into perspective</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center space-x-4">
              <CircleIcon className="text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">Resume consultation costs you $500/hour</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MusicIcon className="text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">Taylor Swift Concert will cost you $1200</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <BriefcaseIcon className="text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">A Long Weekend Trip costs you $300</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <GraduationCapIcon className="text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">A Univ Lecture costs $300/hour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl font-extrabold text-center text-gray-800">Let's do a Cost-Benefit Analysis</h2>
  <p className="mt-4 text-center text-base font-light text-gray-600">
    We know that you would want to evaluate the value add that we bring to the table for the investment you make.
    See how productively can you use that time and how we fare with the standard plan.
  </p>
  <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full">
    <div className="col-span-1 bg-white shadow-lg rounded-lg p-6 flex items-center justify-center">
      <p className="text-md font-semibold text-gray-800">You're paying us $3.75/hour</p>
    </div>
    <div className="col-span-1 bg-white shadow-lg rounded-lg p-6 flex items-center justify-center">
      <p className="text-md font-semibold text-gray-800">Increase in interviews 5x</p>
    </div>
    <div className="col-span-1 bg-white shadow-lg rounded-lg p-6 flex items-center justify-center">
      <p className="text-md font-semibold text-gray-800">Advantage in interviews 3x</p>
    </div>
    <div className="col-span-1 bg-white shadow-lg rounded-lg p-6 flex items-center justify-center">
      <p className="text-md font-semibold text-gray-800">Full-time Pay Range $50 - $150/hour</p>
    </div>
  </div>
</div>
<div className="bg-gradient-to-b from-gray-100 to-gray-200">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-extrabold text-center text-blue-900 drop-shadow-md">
      Cancellation Policy
    </h2>
    <p className="mt-6 text-center text-lg font-light text-blue-800">
      We follow a Pro Rata Cancellation Policy and you can cancel your plan anytime. No questions asked.
    </p>
    <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
      <p className="text-md text-gray-800">
        <span className="font-semibold">Refund Amount:</span> Plan Price - (Pro Rata Cost + Payment Gateway Fee + Turnaround Fee)
      </p>
      <p className="text-md text-gray-800">
        <span className="font-semibold">Payment Gateway Fee</span> stands at 3% and <span className="font-semibold">Turnaround Fee</span> is $30 for all plans.
      </p>
      <div className="mt-6 py-4 px-6 bg-blue-50 rounded-lg">
        <p className="text-lg text-gray-800 font-semibold">Detailed Explanation</p>
        <p className="text-md text-gray-700">
          Let's say you took our $399 plan for 1000 applications and started our service. 5 days and 100 submitted applications later you decide to cancel our service, then the refund amount is:
        </p>
        <p className="text-md text-gray-700 mt-4">
          Refund Amount = 399 - (39.9 + 3% of 399 + 30)
        </p>
        <p className="text-md text-gray-700">
          = 399 - (39.9 + 11.97 + 30)
        </p>
        <p className="text-lg text-gray-800 font-semibold">
          = $317.13
        </p>
      </div>
    </div>
  </div>
</div>

      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">AI Copilot Premium</h3>
            <p className="mt-4 text-sm text-gray-600">
              Get assistance from our purpose built AI tools while you apply on your own. Increase your Productivity.
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-4 text-sm">
              <li>Keyword based Job Board</li>
              <li>AI Cover Letter Generator</li>
              <li>Cold Email/InMail drafts</li>
              <li>AI Application Responses</li>
              <li>Referral Request Drafts</li>
              <li>Chrome extension</li>
              <li>Unlimited Applications</li>
            </ul>
            <p className="mt-4 text-4xl font-extrabold text-gray-900">$9/month</p>
            <Button className="mt-6 w-full" variant="default">
              Try For Free
            </Button>
          </div>
        </div>
      </div>
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Made with <HeartIcon className="text-red-500 inline" /> by 2 laid off guys in{""}
                <BriefcaseIcon className="text-blue-500 inline" /> and{""}
                <GraduationCapIcon className="text-green-500 inline" />
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                      Wall of Love
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                      Join as an Affiliate
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Resources</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                      AI copilot
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Follow Us On:</h3>
              <div className="mt-4 flex space-x-6">
                <a className="text-gray-400 hover:text-gray-500" href="#">
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a className="text-gray-400 hover:text-gray-500" href="#">
                  <LinkedinIcon className="h-6 w-6" />
                </a>
                <a className="text-gray-400 hover:text-gray-500" href="#">
                  <TwitterIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


function CircleIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function MusicIcon(props) {
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
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}


function BriefcaseIcon(props) {
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
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}


function GraduationCapIcon(props) {
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
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}


function HeartIcon(props) {
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
  )
}


function InstagramIcon(props) {
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
  )
}


function LinkedinIcon(props) {
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
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
