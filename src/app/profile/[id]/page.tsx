'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { AlertCircle } from 'lucide-react';
import Sidebar from '../../../components/SideBar/sideBar';
import PersonalInfo from '../../../components/profileTest/personal-info';
import RolesSkills from '../../../components/profileTest/roles-skills';
import Expectations from '../../../components/profileTest/expectations';
import Experience from '../../../components/profileTest/experience';
import CV from '../../../components/profileTest/cv';
import DiversityInclusion from '../../../components/profileTest/diversity-inclusion';
import SectionNavigation from './SectionNavigation';
import ProfileStrength from './ProfileStrength';
import { Section } from '@/types';
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';

const sections: Section[] = [
  {
    id: 'personalInfo',
    label: 'Personal info',
    fields: [
      { id: 'fullName', required: true },
      { id: 'email', required: true },
      { id: 'location', required: true },
      { id: 'profilePhoto', required: true },
      { id: 'postcode', required: true },
      { id: 'englishLevel', required: true },
    ],
    Component: PersonalInfo,
  },
  {
    id: 'rolesSkills',
    label: 'Roles and skills',
    fields: [
      { id: 'roles', required: true },
      { id: 'skills', required: true },
    ],
    Component: RolesSkills,
  },
  {
    id: 'expectations',
    label: 'Expectations',
    fields: [
      { id: 'hourlyRate', required: true },
      { id: 'availability', required: true },
      { id: 'workPreference', required: true },
      { id: 'rightToWork', required: true },
      { id: 'securityClearance', required: true },
    ],
    Component: Expectations,
  },
  {
    id: 'experience',
    label: 'Experience',
    fields: [
      { id: 'title', required: true },
      { id: 'company', required: true },
      { id: 'startDate', required: true },
      { id: 'endDate', required: true },
      { id: 'current', required: true },
      { id: 'description', required: true },
    ],
    Component: Experience,
  },
  {
    id: 'cv',
    label: 'CV',
    fields: [{ id: 'cv', required: true }],
    Component: CV,
  },
  {
    id: 'diversityInclusion',
    label: 'Diversity & Inclusion',
    fields: [
      { id: 'gender', required: true },
      { id: 'pronouns', required: true },
      { id: 'ethnicity', required: true },
      { id: 'disability', required: true },
      { id: 'veteranStatus', required: true },
    ],
    Component: DiversityInclusion,
  },
];

interface ProfileData {
  personalInfo?: any;
  rolesSkills?: any;
  expectations?: any;
  experience?: any;
  cv?: any;
  diversityInclusion?: any;
}

export default function ProfilePage({ params }: { params: { id: string } }) {
  const [activeSection, setActiveSection] = useState('personalInfo');
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [currentTab, setCurrentTab] = useState('profile');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!params?.id) {
      setError('Profile ID is required');
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      setLoading(true);
      try {
        console.log('Fetching profile with URL:', `/api/profile/${params.id}`);
        const response = await fetch(`/api/profile/${params.id}`);
        console.log('API response:', response);

        if (!response.ok) {
          throw new Error(`Failed to fetch profile: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Fetched profile data:', data);

        if (!data?.profiles || !data.profiles[0]) {
          throw new Error('No profile data available');
        }

        setProfileData(data.profiles[0]);
      } catch (err: any) {
        console.error('Error fetching profile:', err);
        setError(err.message);
        toast({
          title: 'Error',
          description: 'Failed to load profile data',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [params?.id, toast]);

  const handleUpdateProfile = async (section: string, data: any) => {
    if (!params?.id) {
      toast({
        title: 'Error',
        description: 'Profile ID is required',
        variant: 'destructive',
      });
      return;
    }

    try {
      console.log('Updating section:', section);
      console.log('Data to update:', data);

      const response = await fetch(`/api/profile/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [section]: data }),
      });

      console.log('API response:', response);

      if (!response.ok) {
        throw new Error(`Failed to update profile: ${response.statusText}`);
      }

      const updatedProfile = await response.json();
      console.log('Updated profile data:', updatedProfile);

      setProfileData((prevProfile) => ({
        ...prevProfile,
        [section]: updatedProfile,
      }));

      toast({
        title: 'Success',
        description: 'Profile updated successfully',
      });
    } catch (err: any) {
      console.error('Error updating profile:', err);
      toast({
        title: 'Error',
        description: err.message || 'Failed to update profile',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <AlertCircle className="h-10 w-10 text-destructive mx-auto mb-4" />
          <h2 className="text-lg font-semibold mb-2">Error Loading Profile</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  if (!profileData) return null;

  const ActiveSection = sections.find(
    (section) => section.id === activeSection
  );
  const sectionInfo = sections.map(({ id, label }) => ({ id, label }));

  return (
    <div className="min-h-screen bg-background">
      {/* New Header Design */}
      <header className="fixed top-0 left-0 right-0 h-16 border-b bg-white z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="lg:hidden p-2"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">Hire Eazy</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="text-right hidden sm:block">
                <div className="text-sm text-gray-600">Signed in as</div>
                <div className="font-medium">
                  {profileData?.personalInfo?.fullName || 'User'}
                </div>
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src={profileData?.personalInfo?.profilePhoto} />
                <AvatarFallback>
                  {profileData?.personalInfo?.fullName?.[0] || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm hidden sm:flex items-center gap-1">
                <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
                Live
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-white/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row pt-16">
        {/* Sidebar */}
        <div
          className={`fixed lg:relative top-0 left-0 h-full w-64 bg-[#fffefe] z-40 transform transition-transform duration-300 ease-in-out lg:transform-none ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <button
            className="lg:hidden absolute top-4 right-4 p-2 text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>

          <Sidebar
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            setSidebarOpen={setSidebarOpen}
            isPaidUser={true}
            sidebarOpen={sidebarOpen}
            className=""
            paramsId={params.id}
          />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-screen">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-2">Profile</h1>
            <p className="text-gray-600 mb-6">
              This is where you'll find all of the information about yourself
            </p>

            <div className="flex flex-col lg:flex-row gap-6">
              <SectionNavigation
                sections={sections}
                activeSection={activeSection}
                onSectionChange={(section) => {
                  console.log('Active section changed to:', section);
                  setActiveSection(section);
                }}
                className={''}
              />

              <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
                {ActiveSection && (
                  <>
                    <ActiveSection.Component
                      id={ActiveSection.id}
                      data={profileData[ActiveSection.id as keyof ProfileData]}
                      onUpdate={(data: any) =>
                        handleUpdateProfile(ActiveSection.id, data)
                      }
                    />
                  </>
                )}
              </div>

              <div className="hidden lg:block lg:w-1/4">
                <ProfileStrength profileData={profileData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
