import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pencil, Save, X } from 'lucide-react'

interface DiversityInclusionData {
  gender?: string
  ethnicity?: string
  disability?: string
  veteranStatus?: string
}

interface DiversityInclusionProps {
  data: DiversityInclusionData
  onUpdate: (data: DiversityInclusionData) => Promise<void>
}

export default function DiversityInclusion({ data, onUpdate }: DiversityInclusionProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState<DiversityInclusionData>(data || {})

  const handleChange = (field: keyof DiversityInclusionData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await onUpdate(formData)
      setIsEditing(false)
    } catch (error) {
      console.error('Error updating diversity and inclusion data:', error)
    }
  }

  const renderField = (label: string, value: string | undefined, field: keyof DiversityInclusionData) => (
    <div className="space-y-2">
      <Label htmlFor={field}>{label}</Label>
      {isEditing ? (
        <Select
          value={formData[field]}
          onValueChange={(value) => handleChange(field, value)}
        >
          <SelectTrigger id={field}>
            <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
          </SelectTrigger>
          <SelectContent className="bg-white shadow-lg rounded-md">
            {getOptionsForField(field)}
          </SelectContent>
        </Select>
      ) : (
        <p className="text-sm text-gray-600">{value || 'Not specified'}</p>
      )}
    </div>
  )

  const getOptionsForField = (field: keyof DiversityInclusionData) => {
    const itemClass = "bg-white text-gray-800"
    switch (field) {
      case 'gender':
        return [
          <SelectItem className={itemClass} key="male" value="male">Male</SelectItem>,
          <SelectItem className={itemClass} key="female" value="female">Female</SelectItem>,
          <SelectItem className={itemClass} key="non-binary" value="non-binary">Non-binary</SelectItem>,
          <SelectItem className={itemClass} key="other" value="other">Other</SelectItem>,
          <SelectItem className={itemClass} key="prefer-not-to-say" value="prefer-not-to-say">Prefer not to say</SelectItem>
        ]
      case 'ethnicity':
        return [
          <SelectItem className={itemClass} key="asian" value="asian">Asian</SelectItem>,
          <SelectItem className={itemClass} key="black" value="black">Black</SelectItem>,
          <SelectItem className={itemClass} key="hispanic" value="hispanic">Hispanic</SelectItem>,
          <SelectItem className={itemClass} key="white" value="white">White</SelectItem>,
          <SelectItem className={itemClass} key="mixed" value="mixed">Mixed</SelectItem>,
          <SelectItem className={itemClass} key="other" value="other">Other</SelectItem>,
          <SelectItem className={itemClass} key="prefer-not-to-say" value="prefer-not-to-say">Prefer not to say</SelectItem>
        ]
      case 'disability':
      case 'veteranStatus':
        return [
          <SelectItem className={itemClass} key="yes" value="yes">Yes</SelectItem>,
          <SelectItem className={itemClass} key="no" value="no">No</SelectItem>,
          <SelectItem className={itemClass} key="prefer-not-to-say" value="prefer-not-to-say">Prefer not to say</SelectItem>
        ]
      default:
        return []
    }
  }

  return (
    <Card>
      <CardHeader className="p-4 border-b border-gray-200 flex justify-between items-start">
        <div>
          <CardTitle>Diversity & Inclusion</CardTitle>
          <p className="text-gray-500 mt-2 text-sm">
            This section includes an optional survey on your diversity and inclusion information. Skipping it will still contribute to your profile strength.
          </p>
        </div>
        {!isEditing ? (
          <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)} aria-label="Edit">
            <Pencil className="h-4 w-4" />
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button variant="default" size="icon" onClick={() => setIsEditing(false)} aria-label="Cancel">
              <X className="h-4 w-4" />
            </Button>
            <Button variant="default" size="icon" onClick={handleSubmit} aria-label="Save">
              <Save className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardHeader>

      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          {renderField('Gender identity', formData.gender, 'gender')}
          {renderField('Ethnicity', formData.ethnicity, 'ethnicity')}
          {renderField('Disability', formData.disability, 'disability')}
          {renderField('Veteran Status', formData.veteranStatus, 'veteranStatus')}
        </form>
      </CardContent>
    </Card>
  )
}
