import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link"; // Assuming you're using Next.js for routing

export async function ChatBox() {
  const { userId } = auth()

  return (
    <div key="1" className="bg-white text-gray-900 min-h-screen"> {/* Ensure full page is covered */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <img
          alt="Scale.jobs Logo"
          className="h-10"
          src="/Clarksonlogo.png"
          style={{ aspectRatio: "120/40", objectFit: "cover" }}
        />
        <nav className="flex gap-4 items-center">
          <a className="text-sm font-medium text-gray-500 hover:text-green-600" href="/about">About Us</a>
          <a className="text-sm font-medium text-gray-500 hover:text-green-600" href="#">How it works</a>
          <a className="text-sm font-medium text-gray-500 hover:text-green-600" href="/pricing">Pricing</a>
          <a href="/chatBox" className="text-sm bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700">Try the Copilot Free</a>
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
<div className="mt-8 flex flex-grow justify-center items-center px-4"> {/* Increased gap between header and chatbox */}
<div className="max-w-4xl w-full h-auto flex flex-col items-center space-y-6 p-8 border border-gray-300 rounded-lg shadow-lg bg-white"> {/* Adjusted size for responsiveness */}
  {/* ChatGPT heading on the top left with smaller text */}
  <h1 className="self-start text-xl font-bold text-black">ChatGPT 4</h1> 

  <main className="flex w-full flex-col items-center justify-center space-y-4">
  <BrainIcon className="h-14 w-14 text-gray-600" />
    <h2 className="text-center text-2xl font-semibold text-black">How can I help you today?</h2>
  </main>

  <footer className="flex w-full items-center p-4">
  <Input
   className="w-full h-14 rounded-lg bg-white p-4 text-base border border-gray-300 text-black"
   placeholder="Message ChatGPT..."/>
      <UploadIcon className="h-8 w-8 text-gray-600 ml-4" />
      <PlaneIcon className="h-8 w-8 text-gray-600 ml-4" />
    {/* Include UploadIcon and PlaneIcon here */}
  </footer>
</div>
</div>
</div>
  );
}

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function BrainIcon(props) {
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
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  )
}


function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}


function PlaneIcon(props) {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}
