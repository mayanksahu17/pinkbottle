'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { useUser } from '@clerk/nextjs';
import { CiLock } from 'react-icons/ci';
import FormModal from '../formTest/ProfileForm/FormModal'; 

const DashboardMain = ({ isPaidUser }: { isPaidUser: boolean }) => {
  const { user } = useUser();
  const [isProfileFormOpen, setIsProfileFormOpen] = useState(false);

  return (
    <main className="w-full p-6 bg-white rounded-lg shadow-md mt-10">
      <div className="flex items-center space-x-4">
        <Avatar className="w-16 h-16">
          <AvatarImage
            alt="Profile picture"
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Hey {user?.firstName}, You're almost there!
          </h1>
          <p className="text-sm text-gray-600">
            Select a plan, team up with your associate, and start saving time
            right away.
          </p>
        </div>
      </div>

      <div className="mt-6 space-x-4">
        <Link href="/">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 shadow-md rounded-lg px-6 py-3">
            Explore Platform
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-5 w-5"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </Button>
        </Link>
      </div>

      <div className="mt-6">
        <div className="flex items-center mb-4">
          <span className="text-3xl font-bold text-blue-600">1</span>
          <div className="flex-1 ml-4 border-t-2 border-dashed border-gray-300"></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">
          Unlock Access to Your Associate
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          See our impact on other clients,{' '}
          <Link className="text-blue-600" href="#">
            Testimonials
          </Link>
        </p>
        <Button className="mt-4 bg-green-600 text-white hover:bg-green-700 shadow-md rounded-lg px-6 py-3">
          <a href="/pricing">Check Plan</a>
        </Button>
      </div>

      <div className="mt-6">
        <div className="flex items-center mb-4">
          <span className="text-3xl font-bold text-blue-600">2</span>
          <div className="flex-1 ml-4 border-t-2 border-dashed border-gray-300"></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Onboarding Call</h2>
        <p className="mt-1 text-sm text-gray-600">
          You will be greeted by your dedicated assistant
        </p>
        <Button
          disabled={!isPaidUser}
          className={`mt-4 ${
            !isPaidUser
              ? 'bg-gray-200 text-gray-500 border-gray-300'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          } shadow-md rounded-lg px-6 py-3 flex items-center`}
        >
          <a
            href="https://apply.neetocal.com/meeting-with-nikhil-jain"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pick a Slot
            {!isPaidUser && <CiLock className="ml-2" />}
          </a>
        </Button>
      </div>

      {/* New Step with Complete Profile Button */}
      <div className="mt-6">
        <div className="flex items-center mb-4">
          <span className="text-3xl font-bold text-blue-600">3</span>
          <div className="flex-1 ml-4 border-t-2 border-dashed border-gray-300"></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Complete Your Profile</h2>
        <p className="mt-1 text-sm text-gray-600">
          Make sure your profile is complete to get the most out of our platform.
        </p>
        <Button
          onClick={() => setIsProfileFormOpen(true)}
          className="mt-4 bg-blue-600 text-white hover:bg-blue-700 shadow-md rounded-lg px-6 py-3"
        >
          Complete Profile
        </Button>
      </div>

      {/* Profile Completion Modal */}
      <FormModal
        isOpen={isProfileFormOpen}
        onClose={() => setIsProfileFormOpen(false)}
      />
    </main>
  );
};

export default DashboardMain;
