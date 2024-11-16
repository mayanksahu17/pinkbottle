'use client'

import { useState, KeyboardEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Pencil, Save, X, Plus, Info } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Skill {
  name: string
  level: string
}

interface Role {
  name: string
}

interface RolesSkillsData {
  roles: Role[] // Array of roles
  skills: Skill[] // Array of skills
}

interface RolesSkillsProps {
  data: RolesSkillsData
  onUpdate: (data: RolesSkillsData) => Promise<void>
}

export default function RolesSkills({ data, onUpdate }: RolesSkillsProps) {
  const [isEditing, setIsEditing] = useState(false)

  // Ensure roles and skills arrays are always initialized
  const [formData, setFormData] = useState<RolesSkillsData>({
    roles: data.roles || [], // Default to an empty array if data.roles is undefined
    skills: data.skills || [] // Default to an empty array if data.skills is undefined
  })

  const [newSkill, setNewSkill] = useState<Skill>({ name: '', level: '' })
  const [newRole, setNewRole] = useState<string>('')

  const handleChange = (field: keyof RolesSkillsData, value: string | Role[]) => {
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

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newSkill.name && newSkill.level) {
      e.preventDefault()
      handleAddSkill()
    }
  }

  const handleRemoveSkill = (index: number) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }))
  }

  const handleAddRole = () => {
    if (newRole.trim() !== '') {
      setFormData(prev => ({
        ...prev,
        roles: [...prev.roles, { name: newRole }]
      }))
      setNewRole('')
    }
  }

  const handleRemoveRole = (index: number) => {
    setFormData(prev => ({
      ...prev,
      roles: prev.roles.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onUpdate(formData)
    setIsEditing(false)
  }

  return (
    <div className="space-y-8">
      {/* Roles Section */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">Desired Roles</h2>
            <p className="text-sm text-muted-foreground">You can choose multiple roles.</p>
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

        <div className="space-y-4">
          {/* Displaying roles */}
          <div className="flex flex-wrap gap-2">
            {formData.roles && formData.roles.map((role, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-full px-4 py-2 text-sm flex items-center gap-2"
              >
                <span>{role.name}</span>
                {isEditing && (
                  <button
                    onClick={() => handleRemoveRole(index)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Editing roles */}
          {isEditing && (
            <div className="flex items-center gap-2">
              <Input
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                placeholder="Add a new role"
                className="max-w-xs"
              />
              <Button variant="outline" size="icon" onClick={handleAddRole}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
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

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {formData.skills && formData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-full px-4 py-2 text-sm flex items-center gap-2"
                >
                  <span>{skill.name} - {skill.level}</span>
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
                  onKeyPress={handleKeyPress}
                  placeholder="Add a new skill"
                  className="max-w-xs"
                />
                <Select
                  value={newSkill.level}
                  onValueChange={(value) => setNewSkill(prev => ({ ...prev, level: value }))}
                >
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue placeholder="Skill level" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
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
