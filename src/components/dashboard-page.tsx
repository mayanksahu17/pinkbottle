import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { UserButton, auth, currentUser } from "@clerk/nextjs";
import styles from './Button.module.css';

export async function DashboardPage() {
    const { userId } = auth();
    const user = await currentUser();

    if(!userId || !user){
        return(
      <div className="bg-white min-h-screen flex items-center justify-center">
        You are not logged in
      </div>
        ) 
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
            <div className="flex">
              <aside className="w-64 px-4 py-6">
                <nav className="flex flex-col space-y-1">
                  <Button className="justify-start text-sm text-black" variant="ghost">
                    Dashboard
                  </Button>
                  <Link href="/Jobs">
                  <Button className="justify-start text-sm text-black" variant="ghost">
                    Jobs
                  </Button>
                  </Link>
                  <Link href="/profile">
                  <Button className="justify-start text-sm text-black" variant="ghost">
                    Profile
                  </Button>
                  </Link>
                  <Button className="justify-start text-sm text-black" variant="ghost">
                    Preferences
                  </Button>
                  <Button className="justify-start text-sm text-black" variant="ghost">
                    Add to chrome
                  </Button>
                </nav>
              </aside>
              <main className="flex-1 px-4 py-6">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage alt="Profile picture" src="https://github.com/shadcn.png" />
                    <AvatarFallback>AN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h1 className="text-2xl font-bold text-black">Hey {user.firstName}, You are almost there!</h1>
                    <p className="text-sm text-black">Select a plan, team up with your associate, and start saving time right away.</p>
                  </div>
                </div>
                <div className="mt-6 flex space-x-4">
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800">
    Explore Platform
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="md:ml-1 h-5 w-5 text-gray-400  animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="-ml-3 h-5 w-5 animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
</button>
<a href="https://apply.neetocal.com/meeting-with-anshul-jain" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12" aria-haspopup="dialog" aria-expanded="false">
  <span className="absolute animate-pulse bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-primary p-1.5 text-xs"></span>
  Talk to founder<span className="group-hover:animate-bounce ml-2">👋</span>
</a>

                </div>
                <div className="mt-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-black text-[#bd1e59]">1</span>
                    <div className="flex-1 ml-4 border-t-2 border-dashed border-gray-300" />
                  </div>
                  <h2 className="text-xl font-semibold text-black">Unlock Access to your Associate</h2>
                  <p className="mt-1 text-sm text-black">
                    See our impact on other clients,{" "}
                    <Link className="text-[#bd1e59] text-black" href="#">
                      Testimonials
                    </Link>
                  </p>
                  <Button className="mt-4 text-black" variant="secondary">
                  <a href="/pricing" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800">
                      Check Plan
                  </a>
                  </Button>
                </div>
                <div className="mt-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-black text-[#bd1e59]">2</span>
                    <div className="flex-1 ml-4 border-t-2 border-dashed border-gray-300" />
                  </div>
                  <h2 className="text-xl font-semibold text-black">Onboarding Call</h2>
                  <p className="mt-1 text-sm text-black">You will be greeted by your dedicated assistant</p>
                  <Button className="mt-4 text-black">
                  
                  <a href="https://apply.neetocal.com/meeting-with-anshul-jain" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800">
  Pick a splot
</a>

                  </Button>
                </div>
              </main>
            </div>
          </div>
        )
      }