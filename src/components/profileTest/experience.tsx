'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Pencil, Plus } from 'lucide-react'

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

export default function Component({ profileId, data, onUpdate }: ExperienceProps) {
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
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-2xl font-semibold">Education</h2>
            <p className="text-muted-foreground">
              This helps employers understand your education history
            </p>
          </div>
          <div className="flex items-center gap-2">
            {isEditing ? (
              <Button onClick={handleSubmit} variant="outline">
                Save changes
              </Button>
            ) : (
              <>
                <Button variant="outline" onClick={() => setIsEditing(true)}>
                  <Plus className="h-4 w-4 mr-2" /> Add new
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
                  <Pencil className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Experience List */}
      <div className="space-y-6">
        {experiences.length > 0 ? (
          experiences.map((exp) => (
            <div key={exp.id} className="bg-white rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                {isEditing && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveExperience(exp.id)}
                  >
                    Remove
                  </Button>
                )}
              </div>

              <div className="space-y-4">
                {isEditing ? (
                  <>
                    <Input
                      value={exp.title}
                      onChange={(e) => handleUpdateExperience(exp.id, 'title', e.target.value)}
                      placeholder="Position"
                    />
                    <Input
                      value={exp.company}
                      onChange={(e) => handleUpdateExperience(exp.id, 'company', e.target.value)}
                      placeholder="Company"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <span className="text-sm text-muted-foreground">Start Date</span>
                        <Input
                          type="date"
                          value={exp.startDate}
                          onChange={(e) => handleUpdateExperience(exp.id, 'startDate', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <span className="text-sm text-muted-foreground">End Date</span>
                        <Input
                          type="date"
                          value={exp.endDate}
                          onChange={(e) => handleUpdateExperience(exp.id, 'endDate', e.target.value)}
                        />
                      </div>
                    </div>
                    <Textarea
                      value={exp.description}
                      onChange={(e) => handleUpdateExperience(exp.id, 'description', e.target.value)}
                      placeholder="Description"
                      className="min-h-[100px]"
                    />
                  </>
                ) : (
                  <div className="space-y-2">
                    {/* Adding headings for each field */}
                    <div>
                      <h4 className="font-semibold">Company:</h4>
                      <div className="text-muted-foreground">{exp.company}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Dates:</h4>
                      <div className="text-sm text-muted-foreground">
                        {exp.startDate} - {exp.endDate || 'Present'}
                      </div>
                    </div>
                    {exp.description && (
                      <div>
                        <h4 className="font-semibold">Description:</h4>
                        <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No entries yet
          </div>
        )}

        {/* Add New Experience Form */}
        {isEditing && (
          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">Add New Experience</h3>
            <div className="space-y-4">
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
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">Start Date</span>
                  <Input
                    type="date"
                    value={newExperience.startDate}
                    onChange={(e) => setNewExperience(prev => ({ ...prev, startDate: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">End Date</span>
                  <Input
                    type="date"
                    value={newExperience.endDate}
                    onChange={(e) => setNewExperience(prev => ({ ...prev, endDate: e.target.value }))}
                  />
                </div>
              </div>
              <Textarea
                value={newExperience.description}
                onChange={(e) => setNewExperience(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Description"
                className="min-h-[100px]"
              />
              <Button onClick={handleAddExperience} className="w-full">
                Add Experience
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}