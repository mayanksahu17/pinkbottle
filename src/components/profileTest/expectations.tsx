'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pencil, Save, X } from 'lucide-react'

interface Expectations {
  hourlyRate: string;
  availability: string;
  workPreference: string;
}

interface ExpectationsProps {
  id: string;
  initialData: Expectations;
  onUpdate: (data: Expectations) => void;
}

export default function Expectations({ id, initialData, onUpdate }: ExpectationsProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState<Expectations>(initialData)

  const handleChange = (field: keyof Expectations, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onUpdate(formData)
    setIsEditing(false)
  }

  return (
    <div className="space-y-8">
      {/* Basic Information Section */}
      <div>
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Basic</h1>
          <p className="text-muted-foreground">
            This is the information you shared when you joined hackajob.
          </p>
        </div>

        <div className="space-y-6">
          {/* Work Preference Section */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Location Preferences</h2>
              {!isEditing ? (
                <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
                  <Pencil className="h-4 w-4" />
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => setIsEditing(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={handleSubmit}>
                    <Save className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="font-medium">Work Type:</Label>
                {isEditing ? (
                  <Select
                    value={formData.workPreference}
                    onValueChange={(value) => handleChange('workPreference', value)}
                  >
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select work preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote Only</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="onsite">On-site</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <span className="bg-gray-50 rounded-full px-4 py-2 text-sm">
                    {formData.workPreference === 'remote' ? 'Yes (fully remote)' : formData.workPreference}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Contract Type Section */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Contract Type</h2>
              {!isEditing ? (
                <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
                  <Pencil className="h-4 w-4" />
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => setIsEditing(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={handleSubmit}>
                    <Save className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="font-medium">Availability:</Label>
                {isEditing ? (
                  <Select
                    value={formData.availability}
                    onValueChange={(value) => handleChange('availability', value)}
                  >
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full Time</SelectItem>
                      <SelectItem value="part-time">Part Time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <span className="bg-gray-50 rounded-full px-4 py-2 text-sm">
                    {formData.availability}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Salary Expectations Section */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Salary Expectations</h2>
              {!isEditing ? (
                <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
                  <Pencil className="h-4 w-4" />
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => setIsEditing(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={handleSubmit}>
                    <Save className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="font-medium">Hourly Rate:</Label>
                {isEditing ? (
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={formData.hourlyRate}
                      onChange={(e) => handleChange('hourlyRate', e.target.value)}
                      className="w-[200px]"
                    />
                    <span className="text-sm text-muted-foreground">USD</span>
                  </div>
                ) : (
                  <span className="bg-gray-50 rounded-full px-4 py-2 text-sm">
                    {formData.hourlyRate} USD/hour
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}