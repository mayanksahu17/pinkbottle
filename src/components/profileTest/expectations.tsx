'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pencil, Save, X } from 'lucide-react'

// Interface for expectations data structure
interface Expectations {
  hourlyRate: string;
  availability: string;
  workPreference: string;
}

// Component props interface
interface ExpectationsProps {
  id: string;
  initialData: Expectations;
  onUpdate: (data: Expectations) => void;
}

export default function Expectations({ id, initialData, onUpdate }: ExpectationsProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState<Expectations>(initialData)

  // Handles changes to form data fields
  const handleChange = (field: keyof Expectations, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  // Handles form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onUpdate(formData)
    setIsEditing(false)
  }

  // Component layout
  return (
    <div className="space-y-8">
      {/* Basic Information Header */}
      <div>
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Basic</h1>
          <p className="text-muted-foreground">
            This is the information you shared when you joined HiredEasy.
          </p>
        </div>

        <div className="space-y-6">
          {/* Location Preferences Section */}
          <InfoSection
            title="Location Preferences"
            label="Work Type"
            field="workPreference"
            options={[
              { value: 'remote', label: 'Remote Only' },
              { value: 'hybrid', label: 'Hybrid' },
              { value: 'onsite', label: 'On-site' },
              { value: 'flexible', label: 'Flexible' },
            ]}
            formData={formData}
            isEditing={isEditing}
            handleChange={handleChange}
            setIsEditing={setIsEditing}
            handleSubmit={handleSubmit}
          />

          {/* Contract Type Section */}
          <InfoSection
            title="Contract Type"
            label="Availability"
            field="availability"
            options={[
              { value: 'full-time', label: 'Full Time' },
              { value: 'part-time', label: 'Part Time' },
              { value: 'contract', label: 'Contract' },
              { value: 'freelance', label: 'Freelance' },
            ]}
            formData={formData}
            isEditing={isEditing}
            handleChange={handleChange}
            setIsEditing={setIsEditing}
            handleSubmit={handleSubmit}
          />

          {/* Salary Expectations Section */}
          <div className="bg-white rounded-lg p-6">
            <SectionHeader
              title="Salary Expectations"
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              handleSubmit={handleSubmit}
            />
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

// Reusable Section Header component
const SectionHeader = ({ title, isEditing, setIsEditing, handleSubmit }: any) => (
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-lg font-semibold">{title}</h2>
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
)

// Reusable Info Section for dropdown fields
const InfoSection = ({
  title,
  label,
  field,
  options,
  formData,
  isEditing,
  handleChange,
  setIsEditing,
  handleSubmit,
}: any) => (
  <div className="bg-white rounded-lg p-6">
    <SectionHeader
      title={title}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      handleSubmit={handleSubmit}
    />
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="font-medium">{label}:</Label>
        {isEditing ? (
          <Select
            value={formData[field]}
            onValueChange={(value) => handleChange(field, value)}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option: any) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : (
          <span className="bg-gray-50 rounded-full px-4 py-2 text-sm">
            {formData[field]}
          </span>
        )}
      </div>
    </div>
  </div>
)
