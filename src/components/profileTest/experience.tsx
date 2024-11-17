import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Plus, Trash, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

interface ExperienceProps {
  profileId: string;
  data: Experience[];
  onUpdate: (data: Experience[]) => Promise<void>;
}

export default function ExperienceSection({ profileId, data, onUpdate }: ExperienceProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [experiences, setExperiences] = useState<Experience[]>(data || []);
  const [newExperience, setNewExperience] = useState<Experience>({
    id: '',
    title: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
  });
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);
  const [hourlyRate, setHourlyRate] = useState(30); // Default hourly rate (can be dynamic)

  useEffect(() => {
    setExperiences(data || []);
  }, [data]);

  const toggleExpand = (id: string) => {
    setExpandedExperience((prev) => (prev === id ? null : id));
  };

  const handleAddExperience = () => {
    if (newExperience.title && newExperience.company && newExperience.startDate) {
      const experienceWithId = { ...newExperience, id: Date.now().toString() };
      setExperiences((prev) => [...prev, experienceWithId]);
      setNewExperience({
        id: '',
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
      });
    }
  };

  const handleRemoveExperience = (id: string) => {
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
  };

  const handleUpdateExperience = (id: string, field: keyof Experience, value: string) => {
    setExperiences((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onUpdate(experiences);
      setIsEditing(false);
    } catch (err) {
      console.error('Error updating experience:', err);
    }
  };

  // Handle slider change for hourly rate
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHourlyRate(Number(e.target.value));
  };

  return (
    <div className="space-y-8">
      {/* Header Section with Edit/Save/Cancel Icons */}
      <div className="bg-white shadow-sm rounded-lg p-5 border-b-2 border-gray-300 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Experience</h2>
          <p className="text-muted-foreground text-sm">
            Outline your professional experience to help employers understand your background.
          </p>
        </div>
        <div>
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)} variant="default" className="flex items-center gap-2">
              <Pencil className="h-4 w-4" />
              Edit
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button onClick={handleSubmit} variant="default" className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                Save
              </Button>
              <Button onClick={() => setIsEditing(false)} variant="destructive" className="flex items-center gap-2">
                <X className="h-4 w-4" />
                Cancel
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* List of Experiences */}
      <div className="space-y-4">
        {experiences.map((exp) => (
          <Card
            key={exp.id}
            className="bg-white shadow-md rounded-lg p-5 space-y-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-muted-foreground text-sm">{exp.company}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => toggleExpand(exp.id)}
                >
                  {expandedExperience === exp.id ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </Button>
                {isEditing && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-gray-100 transition-colors duration-300"
                    onClick={() => handleRemoveExperience(exp.id)}
                  >
                    <Trash className="h-5 w-5" />
                  </Button>
                )}
              </div>
            </div>

            {expandedExperience === exp.id && (
              <div className="space-y-2">
                <div>
                  <span className="text-muted-foreground text-sm font-medium">Dates:</span>
                  <div className="text-sm text-muted-foreground">{exp.startDate} - {exp.endDate || 'Present'}</div>
                </div>
                {exp.description && (
                  <div>
                    <span className="text-muted-foreground text-sm font-medium">Description:</span>
                    <p className="text-sm text-muted-foreground mt-1">{exp.description}</p>
                  </div>
                )}

                {isEditing && (
                  <>
                    <Input
                      value={exp.title}
                      onChange={(e) => handleUpdateExperience(exp.id, 'title', e.target.value)}
                      placeholder="Position"
                      className="mt-4"
                    />
                    <Input
                      value={exp.company}
                      onChange={(e) => handleUpdateExperience(exp.id, 'company', e.target.value)}
                      placeholder="Company"
                      className="mt-2"
                    />
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <Input
                        type="date"
                        value={exp.startDate}
                        onChange={(e) => handleUpdateExperience(exp.id, 'startDate', e.target.value)}
                        placeholder="Start Date"
                      />
                      <Input
                        type="date"
                        value={exp.endDate}
                        onChange={(e) => handleUpdateExperience(exp.id, 'endDate', e.target.value)}
                        placeholder="End Date"
                      />
                    </div>
                    <Textarea
                      value={exp.description}
                      onChange={(e) => handleUpdateExperience(exp.id, 'description', e.target.value)}
                      placeholder="Description"
                      className="mt-2 min-h-[80px]"
                    />
                  </>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Add New Experience Section */}
      {isEditing && (
        <div className="border-2 border-black p-5 rounded-lg mt-6">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Add New Experience
          </h3>
          <Input
            value={newExperience.title}
            onChange={(e) => setNewExperience(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Position"
            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
          <Input
            value={newExperience.company}
            onChange={(e) => setNewExperience(prev => ({ ...prev, company: e.target.value }))}
            placeholder="Company"
            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Input
              type="date"
              value={newExperience.startDate}
              onChange={(e) => setNewExperience(prev => ({ ...prev, startDate: e.target.value }))}
              placeholder="Start Date"
            />
            <Input
              type="date"
              value={newExperience.endDate}
              onChange={(e) => setNewExperience(prev => ({ ...prev, endDate: e.target.value }))}
              placeholder="End Date"
            />
          </div>
          <Textarea
            value={newExperience.description}
            onChange={(e) => setNewExperience(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Description"
            className="mt-2 min-h-[80px] border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
          <div className="mt-4 flex justify-end">
            <Button onClick={handleAddExperience} variant="destructive" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Experience
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
