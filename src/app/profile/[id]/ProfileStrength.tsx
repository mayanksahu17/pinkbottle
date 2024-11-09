import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SectionType {
  id: string;
  label: string;
}

interface ProfileStrengthProps {
  sections: SectionType[];
  profileData: Record<string, any>;
}

const ProfileStrength = ({ sections, profileData }: ProfileStrengthProps) => {
  const calculateProfileStrength = () => {
    const completedSections = sections.filter(section => 
      profileData[section.id] && Object.keys(profileData[section.id] || {}).length > 0
    );
    return (completedSections.length / sections.length) * 100;
  };

  return (
    <div className="w-72">
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-2">
          <div className="space-y-1.5">
            <span className="text-5xl font-bold text-neutral-900">
              {calculateProfileStrength().toFixed(0)}%
            </span>
            <CardTitle className="text-lg font-medium text-neutral-900">Profile strength</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <Progress 
            value={calculateProfileStrength()} 
            className="h-2 mb-8 bg-neutral-100 [&>div]:bg-emerald-400"
          />
          <div className="space-y-4">
            {sections.map((section) => {
              const isCompleted = profileData[section.id] && 
                                Object.keys(profileData[section.id] || {}).length > 0;
              return (
                <div key={section.id} className="flex items-center gap-3">
                  <div
                    className={`h-5 w-5 rounded-full flex items-center justify-center ${
                      isCompleted
                        ? 'bg-emerald-400'
                        : 'bg-white border-2 border-neutral-200'
                    }`}
                  >
                    {isCompleted && (
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-neutral-700">
                    {section.label}
                  </span>
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