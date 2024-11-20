"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Plus, Trash, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Experience {
  _id?: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface ExperienceProps {
  // Modified to accept both nested and direct array structures
  data: Experience[] | { experiences?: Experience[] };
  onUpdate: (data: { experiences: Experience[] }) => Promise<void>;
}

export default function ExperienceSection({ data, onUpdate }: ExperienceProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [newExperience, setNewExperience] = useState<Experience>({
    title: '',
    company: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
  });
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);

  useEffect(() => {
    console.log("Incoming data:", data);
    
    let experiencesArray: Experience[] = [];
    
    if (Array.isArray(data)) {
      // If data is directly an array of experiences
      experiencesArray = data;
    } else if (data && 'experiences' in data && Array.isArray(data.experiences)) {
      // If data has an experiences property that is an array
      experiencesArray = data.experiences;
    } else if (data && 'profiles' in data && 
               data.profiles[0] && 
               data.profiles[0].experiences && 
               Array.isArray(data.profiles[0].experiences)) {
      // Handle the specific nested structure you're seeing
      experiencesArray = data.profiles[0].experiences;
    }
    
    console.log("Setting experiences:", experiencesArray);
    setExperiences(experiencesArray);
  }, [data]);

  // Expand or collapse an experience card
  const toggleExpand = (id: string) => {
    setExpandedExperience((prev) => (prev === id ? null : id));
  };

  // Add a new experience to the list (for local state)
  const handleAddExperience = () => {
    if (newExperience.title && newExperience.company && newExperience.startDate) {
      const newExp = { ...newExperience, _id: Date.now().toString() }; // Temporary unique ID
      setExperiences((prev) => [...prev, newExp]);
      setNewExperience({
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
      });
    } else {
      console.error("All required fields must be filled to add a new experience.");
    }
  };

  // Remove an experience by ID
  const handleRemoveExperience = (id: string) => {
    setExperiences((prev) => prev.filter((exp) => exp._id !== id));
  };

  // Update a specific field in an experience
  const handleUpdateExperience = (id: string, field: keyof Experience, value: string | boolean) => {
    setExperiences((prev) =>
      prev.map((exp) => (exp._id === id ? { ...exp, [field]: value } : exp))
    );
  };

  // Submit changes to the parent component
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onUpdate({ experiences }); // Pass updated experiences to parent
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating experiences:", err);
    }
  };

  // Debug logs for testing
  console.log("Rendered experiences:", experiences);

  return (
    <div className="space-y-8">
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

      <div className="space-y-4">
        {experiences.length > 0 ? (
          experiences.map((exp) => (
            <Card
              key={exp._id}
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
                    onClick={() => toggleExpand(exp._id!)}
                  >
                    {expandedExperience === exp._id ? (
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
                      onClick={() => handleRemoveExperience(exp._id!)}
                    >
                      <Trash className="h-5 w-5" />
                    </Button>
                  )}
                </div>
              </div>

              {expandedExperience === exp._id && (
                <div className="space-y-2">
                  <div>
                    <span className="text-muted-foreground text-sm font-medium">Dates:</span>
                    <div className="text-sm text-muted-foreground">
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </div>
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
                        onChange={(e) => handleUpdateExperience(exp._id!, "title", e.target.value)}
                        placeholder="Position"
                        className="mt-4 w-full max-w-md"
                      />
                      <Input
                        value={exp.company}
                        onChange={(e) => handleUpdateExperience(exp._id!, "company", e.target.value)}
                        placeholder="Company"
                        className="mt-2 w-full max-w-md"
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <Input
                          type="date"
                          value={exp.startDate}
                          onChange={(e) => handleUpdateExperience(exp._id!, "startDate", e.target.value)}
                          placeholder="Start Date"
                        />
                        <Input
                          type="date"
                          value={exp.endDate}
                          onChange={(e) => handleUpdateExperience(exp._id!, "endDate", e.target.value)}
                          placeholder="End Date"
                          disabled={exp.current}
                        />
                      </div>
                      <div className="flex items-center mt-2">
                        <input
                          type="checkbox"
                          id={`current-${exp._id}`}
                          checked={exp.current}
                          onChange={(e) => handleUpdateExperience(exp._id!, "current", e.target.checked)}
                          className="mr-2"
                        />
                        <label htmlFor={`current-${exp._id}`}>Current position</label>
                      </div>
                      <Textarea
                        value={exp.description}
                        onChange={(e) => handleUpdateExperience(exp._id!, "description", e.target.value)}
                        placeholder="Description"
                        className="mt-2 min-h-[80px] w-full max-w-md"
                      />
                    </>
                  )}
                </div>
              )}
            </Card>
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            No experience entries yet. Click Edit to add your first experience.
          </div>
        )}
      </div>

      {isEditing && (
        <div className="border-2 border-black p-5 rounded-lg mt-6">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Add New Experience
          </h3>
          <Input
            value={newExperience.title}
            onChange={(e) => setNewExperience((prev) => ({ ...prev, title: e.target.value }))}
            placeholder="Position"
            className="mt-4 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 w-full max-w-md"
          />
          <Input
            value={newExperience.company}
            onChange={(e) => setNewExperience((prev) => ({ ...prev, company: e.target.value }))}
            placeholder="Company"
            className="mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 w-full max-w-md"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <Input
              type="date"
              value={newExperience.startDate}
              onChange={(e) => setNewExperience((prev) => ({ ...prev, startDate: e.target.value }))}
              placeholder="Start Date"
            />
            <Input
              type="date"
              value={newExperience.endDate}
              onChange={(e) => setNewExperience((prev) => ({ ...prev, endDate: e.target.value }))}
              placeholder="End Date"
              disabled={newExperience.current}
            />
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="new-current"
              checked={newExperience.current}
              onChange={(e) => setNewExperience((prev) => ({ ...prev, current: e.target.checked }))}
              className="mr-2"
            />
            <label htmlFor="new-current">Current position</label>
          </div>
          <Textarea
            value={newExperience.description}
            onChange={(e) => setNewExperience((prev) => ({ ...prev, description: e.target.value }))}
            placeholder="Description"
            className="mt-2 min-h-[80px] w-full max-w-md"
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
