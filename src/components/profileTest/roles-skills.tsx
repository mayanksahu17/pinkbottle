/*'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pencil, Save, X, Plus, Trash } from 'lucide-react'

interface Skill {
  name: string
  level: string
}

interface RolesSkillsData {
  primaryRole: string
  skills: Skill[]
}

interface RolesSkillsProps {
  data: RolesSkillsData
  onUpdate: (data: RolesSkillsData) => Promise<void>
}

export default function RolesSkills({ data, onUpdate }: RolesSkillsProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState<RolesSkillsData>(data)
  const [newSkill, setNewSkill] = useState<Skill>({ name: '', level: '' })

  const handleChange = (field: keyof RolesSkillsData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSkillChange = (index: number, field: keyof Skill, value: string) => {
    const updatedSkills = [...formData.skills]
    updatedSkills[index] = { ...updatedSkills[index], [field]: value }
    setFormData(prev => ({ ...prev, skills: updatedSkills }))
  }

  const handleAddSkill = () => {
    if (newSkill.name && newSkill.level) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill]
      }))
      setNewSkill({ name: '', level: '' })
    }
  }

  const handleRemoveSkill = (index: number) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onUpdate(formData)
    setIsEditing(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Roles and Skills
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
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="primaryRole">Primary Role</Label>
            <Input
              id="primaryRole"
              value={formData.primaryRole}
              onChange={(e) => handleChange('primaryRole', e.target.value)}
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-2">
            <Label>Skills</Label>
            {formData.skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  value={skill.name}
                  onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                  disabled={!isEditing}
                  placeholder="Skill name"
                />
                <Select
                  value={skill.level}
                  onValueChange={(value) => handleSkillChange(index, 'level', value)}
                  disabled={!isEditing}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Skill level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                    <SelectItem value="Expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
                {isEditing && (
                  <Button variant="ghost" size="icon" onClick={() => handleRemoveSkill(index)}>
                    <Trash className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            {isEditing && (
              <div className="flex items-center gap-2 mt-2">
                <Input
                  value={newSkill.name}
                  onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="New skill name"
                />
                <Select
                  value={newSkill.level}
                  onValueChange={(value) => setNewSkill(prev => ({ ...prev, level: value }))}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Skill level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                    <SelectItem value="Expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="ghost" size="icon" onClick={handleAddSkill}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
} */

  'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil, Save, X, Plus, Trash, Info } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Skill {
  name: string
  level: string
}

interface RolesSkillsData {
  primaryRole: string
  skills: Skill[]
}

interface RolesSkillsProps {
  data: RolesSkillsData
  onUpdate: (data: RolesSkillsData) => Promise<void>
}

export default function RolesSkills({ data, onUpdate }: RolesSkillsProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState<RolesSkillsData>(data)
  const [newSkill, setNewSkill] = useState<Skill>({ name: '', level: '' })

  // Keep existing handlers
  const handleChange = (field: keyof RolesSkillsData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSkillChange = (index: number, field: keyof Skill, value: string) => {
    const updatedSkills = [...formData.skills]
    updatedSkills[index] = { ...updatedSkills[index], [field]: value }
    setFormData(prev => ({ ...prev, skills: updatedSkills }))
  }

  const handleAddSkill = () => {
    if (newSkill.name && newSkill.level) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill]
      }))
      setNewSkill({ name: '', level: '' })
    }
  }

  const handleRemoveSkill = (index: number) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onUpdate(formData)
    setIsEditing(false)
  }

  return (
    <div className="space-y-8">
      {/* Desired Roles Section */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">Desired Roles & Work Experience</h2>
            <p className="text-sm text-muted-foreground">You can choose up to 10 desired roles.</p>
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

        <div className="flex flex-wrap gap-2 mt-4">
          <div className="bg-gray-50 rounded-full px-4 py-2 text-sm">
            {formData.primaryRole} (0-1 years)
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-blue-700">
            <Info className="h-4 w-4" />
            <p>Add work experience skills to the 'Experience' section to demonstrate their commercial use to companies.</p>
          </div>
          <Button variant="outline" className="text-blue-700 border-blue-200 hover:bg-blue-100">
            Go to Experience
          </Button>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Your Skills</h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add your technical and professional skills</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          {isEditing && (
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

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-full px-4 py-2 text-sm flex items-center gap-2"
                >
                  <span>{skill.name}</span>
                  {isEditing && (
                    <button onClick={() => handleRemoveSkill(index)} className="text-gray-400 hover:text-gray-600">
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {isEditing && (
              <div className="flex items-center gap-2">
                <Input
                  value={newSkill.name}
                  onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Add a new skill"
                  className="max-w-xs"
                />
                <Select
                  value={newSkill.level}
                  onValueChange={(value) => setNewSkill(prev => ({ ...prev, level: value }))}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Skill level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                    <SelectItem value="Expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon" onClick={handleAddSkill}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-700">
            <Info className="h-4 w-4 inline mr-2" />
            Go to the 'Experience' section to change or remove these skills
          </div>
        </div>
      </div>
    </div>
  )
}