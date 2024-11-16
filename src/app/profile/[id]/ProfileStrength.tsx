import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Check, AlertCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProfileData {
  personalInfo?: {
    fullName?: string;
    email?: string;
    location?: string;
    phone?: string;
    profilePhoto?: string;
    postcode?: string;
  };
  rolesSkills?: {
    roles?: string[];
    skills?: string[];
  };
  expectations?: {
    hourlyRate?: string;
    availability?: string;
    workPreference?: string[];
    rightToWork?: string;
    securityClearance?: string;
  };
  experience?: Array<{
    title?: string;
    company?: string;
    startDate?: string;
    endDate?: string;
    current?: boolean;
    description?: string;
  }>;
  cv?: string;
  diversityInclusion?: {
    gender?: string;
    pronouns?: string;
    ethnicity?: string;
    disability?: string;
    veteranStatus?: string;
  };
}

interface SectionConfig {
  id: string;
  label: string;
  requiredFields: string[];
}

const sections: SectionConfig[] = [
  {
    id: 'personalInfo',
    label: 'Personal Info',
    requiredFields: ['fullName', 'email']
  },
  {
    id: 'rolesSkills',
    label: 'Roles & Skills',
    requiredFields: ['roles', 'skills']
  },
  {
    id: 'expectations',
    label: 'Expectations',
    requiredFields: ['hourlyRate', 'availability', 'rightToWork']
  },
  {
    id: 'experience',
    label: 'Experience',
    requiredFields: ['title', 'company', 'startDate']
  },
  {
    id: 'cv',
    label: 'CV',
    requiredFields: ['cv']
  },
  {
    id: 'diversityInclusion',
    label: 'Diversity & Inclusion',
    requiredFields: [] // Optional section
  }
];

interface ProfileStrengthProps {
  profileData: ProfileData;
  onSectionClick?: (sectionId: string) => void;
}

const ProfileStrength = ({ profileData, onSectionClick }: ProfileStrengthProps) => {
  const [strength, setStrength] = useState(0);
  const [analytics, setAnalytics] = useState({
    totalFields: 0,
    completedFields: 0,
    requiredRemaining: 0
  });

  const isFieldComplete = (sectionId: string, field: string, data: any) => {
    if (!data) return false;
    
    const value = data[field];
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    if (sectionId === 'experience') {
      return data.length > 0 && data[0][field];
    }
    return value !== undefined && value !== null && value !== '';
  };

  const calculateProfileStrength = () => {
    let totalRequired = 0;
    let completed = 0;

    sections.forEach(section => {
      const sectionData = profileData[section.id as keyof ProfileData];
      
      section.requiredFields.forEach(field => {
        totalRequired++;
        if (isFieldComplete(section.id, field, sectionData)) {
          completed++;
        }
      });
    });

    const remaining = totalRequired - completed;
    setAnalytics({
      totalFields: totalRequired,
      completedFields: completed,
      requiredRemaining: remaining
    });

    return totalRequired === 0 ? 0 : (completed / totalRequired) * 100;
  };

  useEffect(() => {
    const profileStrength = calculateProfileStrength();
    setStrength(profileStrength);
  }, [profileData]);

  const getStrengthColor = (strengthValue: number) => {
    if (strengthValue < 40) return 'bg-red-400';
    if (strengthValue < 70) return 'bg-yellow-400';
    return 'bg-emerald-400';
  };

  const getSectionStatus = (section: SectionConfig) => {
    const sectionData = profileData[section.id as keyof ProfileData];
    let completed = 0;

    section.requiredFields.forEach(field => {
      if (isFieldComplete(section.id, field, sectionData)) {
        completed++;
      }
    });

    return {
      total: section.requiredFields.length,
      completed,
      isComplete: completed === section.requiredFields.length
    };
  };

  return (
    <div className="font-bebas w-72">
      <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardHeader className="pb-2">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bebas text-5xl font-bold text-neutral-900">
                {strength.toFixed(0)}%
              </span>
              {analytics.requiredRemaining > 0 && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <AlertCircle className="h-5 w-5 text-yellow-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{analytics.requiredRemaining} required fields remaining</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            <CardTitle className="text-lg font-medium text-neutral-900">
              Profile Strength
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <Progress 
            value={strength} 
            className={`h-2 mb-8 bg-neutral-100 [&>div]:${getStrengthColor(strength)}`} 
          />

          <div className="space-y-4">
            {sections.map((section) => {
              const status = getSectionStatus(section);
              const sectionClasses = `flex items-center gap-3 p-2 rounded-lg transition-colors duration-200
                ${onSectionClick ? 'cursor-pointer hover:bg-neutral-50' : ''}`;

              return (
                <div
                  key={section.id}
                  className={sectionClasses}
                  onClick={() => onSectionClick?.(section.id)}
                  role={onSectionClick ? "button" : undefined}
                  tabIndex={onSectionClick ? 0 : undefined}
                >
                  <div
                    className={`h-5 w-5 rounded-full flex items-center justify-center
                      ${status.isComplete 
                        ? getStrengthColor(strength)
                        : 'bg-white border-2 border-neutral-200'
                      }`}
                  >
                    {status.isComplete && (
                      <Check className="h-3.5 w-3.5 text-white stroke-[3]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-neutral-700">{section.label}</span>
                    {status.total > 0 && (
                      <div className="text-xs text-neutral-500">
                        {status.completed}/{status.total} required fields
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileStrength;