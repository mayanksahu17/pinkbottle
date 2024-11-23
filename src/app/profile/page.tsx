'use client';

import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { AlertCircle } from 'lucide-react';
import PersonalInfo from '../../components/profile/personal-info';
import RolesSkills from '../../components/profile/roles-skills';
import Expectations from '../../components/profile/expectations';
import Experience from '../../components/profile/experience';
import CV from '../../components/profile/cv';
import DiversityInclusion from '../../components/profile/diversity-inclusion';
import SectionNavigation from './SectionNavigation';
import ProfileStrength from './ProfileStrength';
import { Section } from '@/types';
import { useAuth } from '@clerk/nextjs';  // Import Clerk's auth

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

/*export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState('personalInfo');
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

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
  }, [isLoaded, userId, toast]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">Loading...</div>
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

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row pt-16 gap-4">

        <div className="flex w-full lg:w-1/4 order-1">
          <SectionNavigation
            sections={sections}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
            className="flex-row lg:flex-col"
          />
        </div>

        <div className="flex-1 bg-white rounded-lg p-6 shadow-sm order-2">
          {ActiveSection && (
            <ActiveSection.Component
              id={ActiveSection.id}
              data={profileData[ActiveSection.id as keyof ProfileData]}
              onUpdate={(data: any) => {
                console.log(`Updating ${ActiveSection.id} with data`, data);
              }}
            />
          )}
        </div>

        <div className="hidden lg:block lg:w-1/4 order-3">
          <ProfileStrength profileData={profileData} />
        </div>
      </div>
    </div>
  );
}
*/
export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState('personalInfo');
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [currentTab, setCurrentTab] = useState('profile');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // Use useAuth hook to get authentication data
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  useEffect(() => {
    if (!isLoaded || !userId) {
      setError('User is not authenticated');
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      setLoading(true);
      try {
        console.log('Fetching profile for userId:', userId);
        const response = await fetch(`/api/profile`, {
          method: 'GET',
          headers: { 'X-User-Id': userId }// Pass userId in headers
        });

        if (!response.ok) {
          const errorText = await response.text(); 
          throw new Error(`Failed to update profile: ${response.statusText}. ${errorText}`);
        }

        const data = await response.json();
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
  }, [isLoaded, userId, toast]); 

  const handleUpdateProfile = async (section: string, data: any) => {
    if (!userId) {
      toast({
        title: 'Error',
        description: 'User is not authenticated',
        variant: 'destructive',
      });
      return;
    }
  
    const payload = section === "experiences" ? { experiences: data } : { [section]: data };
  
    console.log("Payload being sent to backend:", payload);
  
    try {
      const response = await fetch(`/api/profile`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Id': userId, // Pass userId in the header
        },
        body: JSON.stringify(payload), // Send corrected payload
      });
  
      if (!response.ok) {
        throw new Error(`Failed to update profile: ${response.statusText}`);
      }
  
      const updatedProfile = await response.json();
      console.log("Updated profile from backend:", updatedProfile);
  
      setProfileData((prevProfile) => ({
        ...prevProfile,
        [section]: updatedProfile.profiles[0][section], 
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

      <div className="flex flex-col lg:flex-row pt-16">

        <div className="flex-1 flex flex-col min-h-screen">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-2">Profile</h1>
            <p className="text-gray-600 mb-6">This is where you'll find all of the information about yourself.</p>

            <div className="flex flex-col lg:flex-row gap-6">
              <SectionNavigation
                sections={sections}
                activeSection={activeSection}
                onSectionChange={(section) => {
                  console.log('Active section changed to:', section);
                  setActiveSection(section);
                } }/>

              <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
                {ActiveSection && (
                  <ActiveSection.Component
                    id={ActiveSection.id}
                    data={profileData[ActiveSection.id as keyof ProfileData]}
                    onUpdate={(data: any) =>
                      handleUpdateProfile(ActiveSection.id, data)
                    }
                  />
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