'use client'
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

interface ProfileData {
  personalInfo?: any;
  rolesSkills?: any;
  expectations?: any;
  experience?: any;
  cv?: any;
  diversityInclusion?: any;
}

interface Section {
  id: string;
  label: string;
  Component: React.ComponentType<any>;
}

const sections: Section[] = [
  { id: 'personalInfo', label: 'Personal info', Component: PersonalInfo },
  { id: 'rolesSkills', label: 'Roles and skills', Component: RolesSkills },
  { id: 'expectations', label: 'Expectations', Component: Expectations },
  { id: 'experience', label: 'Experience', Component: Experience },
  { id: 'cv', label: 'CV', Component: CV },
  { id: 'diversityInclusion', label: 'Diversity & Inclusion', Component: DiversityInclusion },
];

export default function ProfilePage({ params }: { params: { id: string } }) {
  const [activeSection, setActiveSection] = useState('personalInfo');
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [currentTab, setCurrentTab] = useState('profile');
  const [sidebarOpen, setSidebarOpen] = useState(true);
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
      setProfileData(updatedProfile);

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
      <div className=" font-bebas flex items-center justify-center min-h-screen">
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

  const ActiveSection = sections.find(section => section.id === activeSection);

  // Create a simplified version of sections for the navigation and strength components
  const sectionInfo = sections.map(({ id, label }) => ({ id, label }));

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        setSidebarOpen={setSidebarOpen}
        isPaidUser={true}
        sidebarOpen={sidebarOpen}
      />

      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b bg-background z-10">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Profile</h1>
              <p className="text-sm text-muted-foreground">
                This is where you'll find all of the information about yourself
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Signed in as</span>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={profileData?.personalInfo?.profilePhoto || '/placeholder.svg'}
                  />
                  <AvatarFallback>
                    {profileData?.personalInfo?.fullName
                      ?.split(' ')
                      .map((n: string) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">
                  {profileData?.personalInfo?.fullName}
                </span>
                <Button variant="outline" size="sm" className="bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700">
                  Live
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-row gap-6 p-8">
          <SectionNavigation
            sections={sectionInfo}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          <div className="flex-1 bg-white rounded-lg p-6">
            {ActiveSection && (
              <ActiveSection.Component
                id={ActiveSection.id}
                data={profileData[ActiveSection.id as keyof ProfileData]}
                initialData={profileData[ActiveSection.id as keyof ProfileData]}
                onUpdate={(data: any) => handleUpdateProfile(ActiveSection.id, data)}
              />
            )}
          </div>

          {/* Pass profileData to ProfileStrength */}
          <ProfileStrength 
            sections={sections} 
            profileData={profileData}  // Pass profileData directly
          />
        </div>
      </div>
    </div>
  );
}
