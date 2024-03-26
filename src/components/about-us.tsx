import { Button } from "@/components/ui/button"
import { UserButton, auth } from "@clerk/nextjs"
import Link from "next/link"

export function AboutUs() {
  const { userId } = auth()
  return (
    <div className="bg-white">
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
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">We understand you better than anyone</h1>
          <p className="text-lg text-gray-600 mb-6">
            We have been in your shoes and understand the challenges of job hunting. Our mission is to help job seekers
            find their dream jobs.
          </p>
          <button className="text-base border-2 rounded-lg px-8 py-3 font-semibold border-gray-800 text-gray-800 bg-white hover:bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl ml-4">
  Talk to founder 👋
</button>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center text-center">
            <img
              alt="Leela Yanamaddi"
              className="mb-4 rounded-full"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h2 className="font-bold text-2xl mb-2">Anshul Jain</h2>
            <p className="text-gray-700 mb-4">
              Co-Founder | Tech | <LinkedinIcon className="inline ml-1" />
            </p>
            <p className="text-gray-600 mb-4">
              I love building tech products and services keeping users at the center and shipping them to market. I
              derive pleasure from hustle and building tech products that minimizes human efforts. Clarkson University and
              Ex-PhonePe Employee
            </p>
            <div className="flex space-x-2">
              <img
                alt="Carnegie Mellon University logo"
                height="40"
                src="/Clarksonlogo.png"
                style={{
                  aspectRatio: "120/40",
                  objectFit: "cover",
                }}
                width="120"
              />
              <img
                alt="Ashoka University logo"
                height="150"
                src="/svvv.jpeg"
                style={{
                  aspectRatio: "120/40",
                  objectFit: "contain",
                }}
                width="140"
              />
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              alt="Balaji Kummar"
              className="mb-4 rounded-full"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h2 className="font-bold text-2xl mb-2">Balaji Kummar</h2>
            <p className="text-gray-700 mb-4">
              Co-Founder | Tech <LinkedinIcon className="inline ml-1" />
            </p>
            <p className="text-gray-600 mb-4">
              From building Pulsejet engines to coding full-stack Apps, I love tinkering and building stuff. Launched a
              couple of startups and failed better each time, now trying to be the best tech wingman.
            </p>
            <div className="flex space-x-2">
              <img
                alt="Northeastern University logo"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/40",
                  objectFit: "cover",
                }}
                width="120"
              />
              <img
                alt="VRSREC logo"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/40",
                  objectFit: "cover",
                }}
                width="120"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#F8F8F8] px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img
              alt="scale.jobs logo"
              className="h-10"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <span className="font-bold text-xl">scale.jobs</span>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="mb-4 md:mb-0">
              <h3 className="font-bold mb-2">Company</h3>
              <ul className="space-y-1">
                <li>
                  <a className="text-gray-700 hover:text-gray-900" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 hover:text-gray-900" href="#">
                    Wall of Love
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 hover:text-gray-900" href="#">
                    Join as an Affiliate
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <a className="text-gray-700 hover:text-gray-900" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 hover:text-gray-900" href="#">
                    AI copilot
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-4">
            <a className="text-gray-700 hover:text-gray-900" href="#">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a className="text-gray-700 hover:text-gray-900" href="#">
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}


function HeartHandshakeIcon(props) {
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
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
      <path d="m18 15-2-2" />
      <path d="m15 18-2-2" />
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
