import { UserButton, auth, currentUser } from "@clerk/nextjs";
import Link from "next/link"

export async function JobComingSoon() {
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
      <div className="min-h-screen text-black" style={{ backgroundColor: '#FAF6F6' }}>
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
              <Link href="/dashboard" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800">Dashboard</Link>
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
      <main className="bg-white min-h-screen flex flex-col items-center justify-center p-10">
  <div className="container mx-auto px-6 text-center space-y-6">
    <h2 className="text-3xl text-gray-800">Great things coming soon.</h2>
    <p className="text-md text-gray-600">We are a small and growing firm with big ideas.</p>
    <div className="space-y-4">
    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800">
    Explore Platform
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="md:ml-1 h-5 w-5 text-gray-400  animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="-ml-3 h-5 w-5 animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
</button>
    </div>
  </div>
  <br />
  <div className="bg-white py-10">
  <div className="text-center mb-8">
    <p className="text-md text-gray-600 mx-auto max-w-xl">
      Take a sneak peek at what we're building. We're excited to show you a preview of the upcoming page.
    </p>
  </div>
  <div className="w-full max-w-6xl mx-auto mt-8 overflow-hidden rounded-lg shadow-lg">
    <img
      className="w-full h-auto transform hover:scale-105 transition-transform duration-500 ease-in-out"
      alt="After build preview"
      src="/afterbuildjob.png" // Replace with your image path
    />
  </div>
</div>

</main>

      </div>
  )
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function GroupIcon(props) {
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
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}


function FolderIcon(props) {
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
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  )
}


function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}
