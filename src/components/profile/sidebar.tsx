import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const ProfileSidebar = () => {
  return (
    <aside className="w-64 px-4 py-6 border-r border-gray-200">
          <nav className="flex flex-col space-y-1">
            <Button
              className="justify-start text-sm text-black"
              variant="ghost"
            >
              Dashboard
            </Button>
            <Link href="/Jobs">
              <Button
                className="justify-start text-sm text-black"
                variant="ghost"
              >
                Jobs
              </Button>
            </Link>
            <Link href="/profile">
              <Button
                className="justify-start text-sm text-black"
                variant="ghost"
              >
                Profile
              </Button>
            </Link>
            <Button
              className="justify-start text-sm text-black"
              variant="ghost"
            >
              Preferences
            </Button>
            <Button
              className="justify-start text-sm text-black"
              variant="ghost"
            >
              Add to chrome
            </Button>
          </nav>
        </aside>
  )
}

export default ProfileSidebar
