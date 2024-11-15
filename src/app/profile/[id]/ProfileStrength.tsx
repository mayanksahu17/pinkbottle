import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Check } from 'lucide-react';

interface SectionField {
  id: string;
  required: boolean;
}

interface SectionType {
  id: string;
  label: string;
  fields?: SectionField[];
}

interface ProfileStrengthProps {
  sections: SectionType[];
  profileData: Record<string, any>;
}

const ProfileStrength = ({ sections, profileData }: ProfileStrengthProps) => {
  const [strength, setStrength] = useState(0);

  const calculateProfileStrength = () => {
    let totalRequiredFields = 0;
    let completedFields = 0;

    sections.forEach((section) => {
      const fields = section.fields || [];
      totalRequiredFields += fields.filter((f) => f.required).length;

      fields.forEach((field) => {
        if (field.required) {
          const sectionData = profileData[section.id] || {};
          const value = sectionData[field.id];

          if (Array.isArray(value)) {
            if (value.length > 0) {
              completedFields += 1;
            }
          } else if (value !== undefined && value !== null && value !== '') {
            completedFields += 1;
          }
        }
      });
    });

    return totalRequiredFields === 0 ? 0 : (completedFields / totalRequiredFields) * 100;
  };

  useEffect(() => {
    const profileStrength = calculateProfileStrength();
    setStrength(profileStrength);
  }, [profileData, sections]);

  return (
    <div className="font-bebas w-72">
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-2">
          <div className="space-y-1.5">
            <span className="font-bebas text-5xl font-bold text-neutral-900">
              {strength.toFixed(0)}%
            </span>
            <CardTitle className="text-lg font-medium text-neutral-900">
              Profile strength
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <Progress value={strength} className="h-2 mb-8 bg-neutral-100 [&>div]:bg-emerald-400" />
          <div className="space-y-4">
            {sections.map((section) => {
              const fields = section.fields || [];
              const isSectionComplete = fields.every((field) => {
                if (!field.required) return true;
                const sectionData = profileData[section.id] || {};
                const value = sectionData[field.id];
                return value !== undefined && value !== null && value !== '';
              });
              return (
                <div key={section.id} className="flex items-center gap-3">
                  <div
                    className={`h-5 w-5 rounded-full flex items-center justify-center ${
                      isSectionComplete
                        ? 'bg-emerald-400'
                        : 'bg-white border-2 border-neutral-200'
                    }`}
                  >
                    {isSectionComplete && (
                      <Check className="h-3.5 w-3.5 text-white stroke-[3]" />
                    )}
                  </div>
                  <span className="text-sm text-neutral-700">{section.label}</span>
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
