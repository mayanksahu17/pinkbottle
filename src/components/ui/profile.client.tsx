"use client"
import React, { ChangeEvent } from 'react';
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const { isSignedIn, user } = useUser();

  // Handle file upload
  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/uploadResume/route', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data); // You can replace this with any action based on the response
      alert('Resume uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading resume');
    }
  };

  return (
    <div className="bg-white min-h-screen">
     <header className="flex items-center justify-between p-4 border-b border-gray-200">
     <Link href="/">
  <img
    alt="Your Logo"
    className="cursor-pointer h-8 md:h-10 transform scale-110 ml-4 md:ml-6" // Adjusted with margin-left classes
    src="/Jobify.png"
    style={{ transform: 'scale(1.9)' }} // Scaling up by 180%
  />
</Link>
        <nav className="flex gap-4 items-center">
          <Link href="/about" passHref><span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer">About Us</span></Link>
          <Link href="/how-it-works" passHref><span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer">How it works</span></Link>
          <Link href="/pricing" passHref><span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer">Pricing</span></Link>
          <Link href="/trial" passHref><span className="text-sm bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 cursor-pointer">Try the Copilot Free</span></Link>
        </nav>
        <div>
          {user ? (
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

      <div className="flex">
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
                  <div className="text-xl font-bold text-gray-900">{user ? user.firstName : 'Guest'}</div>
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
                  <input type="file" className="hidden" onChange={handleFileUpload}/>
                </label>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Profile;
