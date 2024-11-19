'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil, Save, X, Info } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Slider } from "@/components/ui/slider"

// Interface for expectations data structure
interface Expectations {
  hourlyRate: number
  availability: string
  workPreference: string
  rightToWork: string
  securityClearance: string
}

interface ExpectationsProps {
  data: Expectations
  onUpdate: (data: Expectations) => Promise<void>
}

export default function Expectations({ data, onUpdate }: ExpectationsProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState<Expectations>(data)

  const handleChange = (field: keyof Expectations, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onUpdate(formData)
    setIsEditing(false)
  }

  return (
    <div className="space-y-8">
      {/* Expectations Section */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">Expectations</h2>
            <p className="text-sm text-muted-foreground">Define your preferences and expectations.</p>
          </div>
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

        <div className="space-y-8">
          {/* Work Preference */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="font-medium">Work Preference:</Label>
              {isEditing ? (
                <Select
                  value={formData.workPreference}
                  onValueChange={(value) => handleChange('workPreference', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select preference" />
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
                  {formData.workPreference}
                </span>
              )}
            </div>
            <div className="text-sm text-muted-foreground">
              Current: <strong>{formData.workPreference || "Not set"}</strong>
            </div>
          </div>

          {/* Availability */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="font-medium">Availability:</Label>
              {isEditing ? (
                <Select
                  value={formData.availability}
                  onValueChange={(value) => handleChange('availability', value)}
                 
                >
                  <SelectTrigger>
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
            <div className="text-sm text-muted-foreground">
              Current: <strong>{formData.availability || "Not set"}</strong>
            </div>
          </div>

          {/* Hourly Rate */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="font-medium">Hourly Rate:</Label>
              {isEditing ? (
                <Slider
                  value={[formData.hourlyRate]}
                  onValueChange={(value) => handleChange('hourlyRate', value[0])}
                  min={10}
                  max={100}
                  step={1}
                  className="w-full max-w-xs"
                />
              ) : (
                <span className="bg-gray-50 rounded-full px-4 py-2 text-sm">
                  {formData.hourlyRate} USD/hour
                </span>
              )}
            </div>
            <div className="text-sm text-muted-foreground">
              Current: <strong>{formData.hourlyRate} USD/hour</strong>
            </div>
          </div>

          {/* Right to Work */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="font-medium">Right to Work:</Label>
              {isEditing ? (
                <Input
                  value={formData.rightToWork}
                  onChange={(e) => handleChange('rightToWork', e.target.value)}
                  className="w-full max-w-xs"
                  placeholder="e.g., Citizen, Work Permit"
                />
              ) : (
                <span className="bg-gray-50 rounded-full px-4 py-2 text-sm">
                  {formData.rightToWork || "Not set"}
                </span>
              )}
            </div>
            <div className="text-sm text-muted-foreground">
              Current: <strong>{formData.rightToWork || "Not set"}</strong>
            </div>
          </div>

          {/* Security Clearance */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="font-medium">Security Clearance:</Label>
              {isEditing ? (
                <Input
                  value={formData.securityClearance}
                  onChange={(e) => handleChange('securityClearance', e.target.value)}
                  className="w-full max-w-xs"
                  placeholder="e.g., None, Confidential, Top Secret"
                />
              ) : (
                <span className="bg-gray-50 rounded-full px-4 py-2 text-sm">
                  {formData.securityClearance || "Not set"}
                </span>
              )}
            </div>
            <div className="text-sm text-muted-foreground">
              Current: <strong>{formData.securityClearance || "Not set"}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-700">
        <Info className="h-4 w-4 inline mr-2" />
        Employers prefer candidates who specify clear preferences.
      </div>
    </div>
  )
}
