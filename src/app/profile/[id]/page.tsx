'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
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
  const [sidebarOpen, setSidebarOpen] = useState(false); // Start with closed sidebar for mobile
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!params.id) return;

    const fetchProfile = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/profile/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError(err.message);
        toast({
          title: "Error",
          description: "Failed to load profile data",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [params.id, toast]);

  const handleUpdateProfile = async (section: string, data: any) => {
    try {
      console.log("Updating section:", section);

      const response = await fetch(`/api/profile/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          [section]: data,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedProfile = await response.json();

      setProfileData((prevProfile) => ({
        ...prevProfile,
        [section]: section === 'experience'
          ? [...(prevProfile?.experience || []), ...data]
          : updatedProfile[section],
      }));

      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
    } catch (err) {
      console.error('Error updating profile:', err);
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="font-bebas flex items-center justify-center min-h-screen">
        <div className="text-center">
          <AlertCircle className="h-10 w-10 text-destructive mx-auto mb-4" />
          <h2 className="text-lg font-semibold mb-2">Error Loading Profile</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  if (!profileData) {
    return null;
  }

  const ActiveSection = sections.find((section) => section.id === activeSection);

  const sectionInfo = sections.map(({ id, label }) => ({ id, label }));

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Sidebar: Hidden on mobile */}
      <Sidebar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        setSidebarOpen={setSidebarOpen}
        isPaidUser={true}
        sidebarOpen={sidebarOpen}
        className="hidden lg:block"
      />

      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="h-16 border-b bg-background z-10">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Profile</h1>
            <Button
              variant="ghost"
              className="lg:hidden"
              onClick={() => setSidebarOpen((prev) => !prev)}
            >
              ☰
            </Button>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-8">
          {/* Section Navigation: Stacked on mobile */}
          <SectionNavigation
            sections={sectionInfo}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
            className="lg:w-1/4"
          />

          {/* Active Section */}
          <div className="flex-1 bg-white rounded-lg p-4 lg:p-6">
            {ActiveSection && (
              <ActiveSection.Component
                id={ActiveSection.id}
                data={profileData[ActiveSection.id as keyof ProfileData]}
                onUpdate={(data: any) => handleUpdateProfile(ActiveSection.id, data)}
              />
            )}
          </div>

          {/* Profile Strength: Hidden on mobile */}
          <div className="hidden lg:block lg:w-1/4">
            <ProfileStrength profileData={profileData} />
          </div>
        </div>
      </div>
    </div>
  );
}
