'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AlertCircle } from 'lucide-react';
import PersonalInfo from '../../components/profile/personal-info';
import RolesSkills from '../../components/profile/roles-skills';
import Expectations from '../../components/profile/expectations';
import Experience from '../../components/profile/experience';
import CV from '../../components/profile/cv';
import DiversityInclusion from '../../components/profile/diversity-inclusion';
import SectionNavigation from './SectionNavigation';
import ProfileStrength from './ProfileStrength';
import CompleteProfileButton from '../../components/buttons/completeProfileButton';
import { Section } from '@/types';
import { useAuth } from '@clerk/nextjs';

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
    id: 'experiences',
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
  experiences?: any[];
  cv?: any;
  diversityInclusion?: any;
}

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState('personalInfo');
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Track if an update is already in progress
  const isUpdating = useRef(false);

  const { isLoaded, userId } = useAuth();

  useEffect(() => {
    if (!isLoaded || !userId) {
      setError('User is not authenticated');
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/profile`, {
          method: 'GET',
          headers: { 'X-User-Id': userId }, 
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to update profile: ${response.statusText}. ${errorText}`);
        }

        const data = await response.json();
        if (!data?.profiles || !data.profiles[0]) {
          setProfileData(null);
        } else {
          setProfileData(data.profiles[0]);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [isLoaded, userId]);

  const handleUpdateProfile = async (section: string, data: any) => {
    if (!userId || isUpdating.current) {
      return;
    }

    // Check if the data has actually changed before making an API call
    if (JSON.stringify(profileData?.[section]) === JSON.stringify(data)) {
      return;
    }

    isUpdating.current = true;

    const payload = section === 'experiences' ? { experiences: data } : { [section]: data };

    try {
      const response = await fetch(`/api/profile`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Id': userId, 
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Failed to update profile: ${response.statusText}`);
      }

      const updatedProfile = await response.json();

      setProfileData((prevProfile) => ({
        ...prevProfile,
        [section]: updatedProfile.profiles[0][section],
      }));
    } catch (err: any) {
      console.error('Error updating profile:', err);
    } finally {
      isUpdating.current = false;
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
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

  if (!profileData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <CompleteProfileButton profileData={profileData} isLoading={loading} />
      </div>
    );
  }

  const ActiveSection = sections.find((section) => section.id === activeSection);
  
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row pt-16">
        <div className="flex-1 flex flex-col min-h-screen">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-2">Profile</h1>
            <p className="text-gray-600 mb-6">This is where you'll find all of the information about yourself.</p>

            <div className="flex flex-col lg:flex-row gap-6">
              <SectionNavigation
                sections={sections}
                activeSection={activeSection}
                onSectionChange={(section) => setActiveSection(section)}
              />

              <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
                {ActiveSection && (
                  <ActiveSection.Component
                    id={ActiveSection.id}
                    data={profileData[ActiveSection.id as keyof ProfileData]}
                    onUpdate={(data: any) => handleUpdateProfile(ActiveSection.id, data)}
                  />
                )}
              </div>

              <div className="hidden lg:block lg:w-1/4">
                <ProfileStrength profileData={profileData} />
                <div className="mt-6">
                  <CompleteProfileButton profileData={profileData} isLoading={loading} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
