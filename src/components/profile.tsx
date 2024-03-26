import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Tabs } from "@/components/ui/tabs"
import { UserButton, auth, currentUser } from "@clerk/nextjs"
import Link from "next/link"

export async function Profile() {
  const { userId } = auth();
  const user = await currentUser();
  return (
    <div className="bg-white min-h-screen">
      {/* Updated Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <Link href="/" passHref>
          <img
            alt="Scale.jobs Logo"
            className="h-10 cursor-pointer"
            src="/Clarksonlogo.png"
            style={{ aspectRatio: "120/40", objectFit: "cover" }}
          />
        </Link>
        <nav className="flex gap-4 items-center">
          <Link href="/about" passHref><span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer">About Us</span></Link>
          <Link href="/how-it-works" passHref><span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer">How it works</span></Link>
          <Link href="/pricing" passHref><span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer">Pricing</span></Link>
          <Link href="/trial" passHref><span className="text-sm bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 cursor-pointer">Try the Copilot Free</span></Link>
        </nav>
        <div>
          {userId ? (
            <div className="flex gap-4 items-center">
              <Link href="/dashboard" passHref>
                <span className="text-sm font-medium cursor-pointer">Dashboard</span>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="space-x-4">
              <Link href="/sign-in" passHref><span className="text-sm cursor-pointer">Login</span></Link>
              <Link href="/sign-up" passHref><span className="text-sm cursor-pointer">Sign Up</span></Link>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Updated Aside */}
        <aside className="w-64 px-4 py-6 border-r border-gray-200">
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
        <main className="flex-1 ml-8">
          <div className="flex justify-center items-start pt-16 min-h-screen bg-gray-100">
  <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
    <div className="flex justify-between items-center mb-4">
      <div>
        <div className="text-xl font-bold text-gray-900">Anshul</div>
        <div className="text-gray-500">Resume</div>
      </div>
      <div>

        <span className="p-2 rounded-full bg-gray-200 text-gray-500">&#128203;</span>
      </div>
    </div>
    
    <div className="mb-4 p-4 bg-gray-100 rounded-md flex justify-between items-center">
      <div className="flex items-center space-x-2">
   
        <span className="text-gray-500">&#128187;</span>
        <span className="text-gray-700 text-sm">164 keywords</span>
      </div>
      <span className="text-gray-700 text-sm">Wed Mar 13 2024</span>
    </div>
    
    <div className="flex space-x-2 mb-4">
      <button className="flex-1 text-sm bg-gray-200 text-gray-700 py-2 px-4 rounded-md">
        Keywords
      </button>
      <button className="flex-1 text-sm bg-green-600 text-white py-2 px-4 rounded-md">
        Open
      </button>
    </div>
    
    <div className="flex justify-center">
      <label className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md cursor-pointer flex items-center">
        <span className="mr-2">+</span> Upload Resume
        <input type="file" className="hidden"/>
      </label>
    </div>
  </div>
</div>

        </main>
      </div>
    </div>
  )
}


function LayoutDashboardIcon(props) {
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
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
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


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function CogIcon(props) {
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
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  )
}


function PuzzleIcon(props) {
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
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  )
}


function TextIcon(props) {
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
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  )
}


function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
