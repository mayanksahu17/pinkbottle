'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Pencil, Plus, Trash } from 'lucide-react'

interface Experience {
  id: string
  title: string
  company: string
  startDate: string
  endDate?: string
  description?: string
}

interface ExperienceProps {
  profileId: string
  data: Experience[]
  onUpdate: (data: Experience[]) => Promise<void>
}

export default function ExperienceSection({ profileId, data, onUpdate }: ExperienceProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [experiences, setExperiences] = useState<Experience[]>(data || [])
  const [newExperience, setNewExperience] = useState<Experience>({
    id: '',
    title: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
  })

  useEffect(() => {
    setExperiences(data || [])
  }, [data])

  const handleAddExperience = () => {
    if (newExperience.title && newExperience.company && newExperience.startDate) {
      const experienceWithId = { ...newExperience, id: Date.now().toString() }
      setExperiences(prev => [...prev, experienceWithId])
      setNewExperience({
        id: '',
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
      })
    }
  }

  const handleRemoveExperience = (id: string) => {
    setExperiences(prev => prev.filter(exp => exp.id !== id))
  }

  const handleUpdateExperience = (id: string, field: keyof Experience, value: string) => {
    setExperiences(prev => prev.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await onUpdate(experiences)
      setIsEditing(false)
    } catch (err) {
      console.error('Error updating experience:', err)
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Experience</h2>
          <p className="text-muted-foreground text-sm">
            Outline your professional experience to help employers understand your background.
          </p>
        </div>
        <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Cancel' : <><Plus className="h-4 w-4 mr-2" /> Add Experience</>}
        </Button>
      </div>

      {/* Experience List */}
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white shadow-sm rounded-lg p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
              </div>
              {isEditing && (
                <Button variant="ghost" size="icon" onClick={() => handleRemoveExperience(exp.id)}>
                  <Trash className="h-4 w-4" />
                </Button>
              )}
            </div>

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
            </div>

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
        ))}
      </div>

      {/* Add New Experience Form */}
      {isEditing && (
        <div className="bg-white shadow-sm rounded-lg p-5 space-y-4">
          <h3 className="text-lg font-semibold">Add New Experience</h3>
          <Input
            value={newExperience.title}
            onChange={(e) => setNewExperience(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Position"
          />
          <Input
            value={newExperience.company}
            onChange={(e) => setNewExperience(prev => ({ ...prev, company: e.target.value }))}
            placeholder="Company"
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
            className="mt-2 min-h-[80px]"
          />
          <Button onClick={handleAddExperience} className="w-full mt-4">
            Add Experience
          </Button>
        </div>
      )}
      
      {/* Save Button */}
      {isEditing && (
        <div className="flex justify-end mt-6">
          <Button onClick={handleSubmit} variant="default">
            Save Changes
          </Button>
        </div>
      )}
    </div>
  )
}
