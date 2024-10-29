import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PersonalInfo from './steps/PersonalInfo';
import RolesSkills from './steps/RolesSkills';
import Expectations from './steps/Expectations';
import ExperienceSection from './steps/Experience';
import CVSection from './steps/CV';
import DiversityInclusion from './steps/DiversityInclusion';
import type { FormData } from './types';

const steps = [
  { id: 'personal', title: 'Personal Information', component: PersonalInfo },
  { id: 'roles', title: 'Roles & Skills', component: RolesSkills },
  { id: 'expectations', title: 'Expectations', component: Expectations },
  { id: 'experience', title: 'Experience', component: ExperienceSection },
  { id: 'cv', title: 'CV', component: CVSection },
  { id: 'diversity', title: 'Diversity & Inclusion', component: DiversityInclusion }
];

export default function MultiStepForm({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<FormData>>({}); // Maintain central form data
  const form = useForm<FormData>();
  const { handleSubmit } = form;

  const onSubmit = async (data: FormData) => {
    try {
      await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      onClose();
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const handleNext = (stepData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...stepData })); // Merge new step data with existing data
    setCurrentStep(prev => prev + 1);
  };

  const handleFinalSubmit = handleSubmit(async (data: FormData) => {
    await onSubmit({ ...formData, ...data }); // Include accumulated formData in final submit
  });

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{steps[currentStep].title}</h2>
        <Progress value={(currentStep / (steps.length - 1)) * 100} />
      </div>

      <form onSubmit={currentStep === steps.length - 1 ? handleFinalSubmit : undefined}>
        <Card className="p-6">
          <CurrentStepComponent form={form} />

          <div className="flex justify-between mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep(prev => prev - 1)}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button type="submit">Complete Profile</Button>
            ) : (
              <Button
                type="button"
                onClick={handleSubmit(handleNext)} 
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </Card>
      </form>
    </div>
  );
}
