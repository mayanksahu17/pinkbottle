import { useFieldArray, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X, Plus } from "lucide-react";
import { useState } from 'react';

// Updated Skill interface to include 'level'
interface Skill {
  name: string;
  level: string;
}

interface FormValues {
  primaryRole: string[];
  skills: Skill[];
}

const skillSuggestions = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "TypeScript",
  "AWS",
  "Docker",
  "Kubernetes",
  "SQL",
  "MongoDB",
  "GraphQL",
];

const roleSuggestions = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "Data Scientist",
  "UI/UX Designer",
  "Product Manager",
];

export default function RolesSkills({ form }: { form: UseFormReturn<FormValues> }) {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = form;

  // Separate state for input values
  const [roleInput, setRoleInput] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [skillLevel, setSkillLevel] = useState("Beginner");

  const { fields: skillFields, append: appendSkill, remove: removeSkill } =
    useFieldArray<FormValues>({
      control,
      name: "skills",
    });

  const primaryRoles = getValues("primaryRole") || [];

  // Handle adding primary roles
  const handleRoleAdd = () => {
    if (roleInput && /^[a-zA-Z\s]+$/.test(roleInput)) {
      const role = roleInput.trim();
      if (!primaryRoles.includes(role)) {
        setValue("primaryRole", [...primaryRoles, role]);
      }
      setRoleInput("");
    }
  };

  // Handle adding skills
  const handleSkillAdd = () => {
    if (skillInput && skillLevel && /^[a-zA-Z0-9.\s\-]+$/.test(skillInput)) {
      appendSkill({ name: skillInput.trim(), level: skillLevel });
      setSkillInput("");
      setSkillLevel("Beginner");
    }
  };

  // Remove a primary role
  const removePrimaryRole = (role: string) => {
    setValue("primaryRole", primaryRoles.filter((r) => r !== role));
  };

  // Handle skill level change
  const handleSkillLevelChange = (level: string) => {
    setSkillLevel(level);
  };

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Primary Roles */}
      <div>
        <Label>Primary Roles</Label>
        <div className="space-y-2">
          <div className="flex gap-2">
            <Input
              value={roleInput}
              onChange={(e) => setRoleInput(e.target.value)}
              placeholder="Add a role"
              list="roles"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleRoleAdd();
                }
              }}
            />
            <Button
              type="button"
              variant="outline"
              onClick={handleRoleAdd}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <datalist id="roles">
            {roleSuggestions.map((role) => (
              <option key={role} value={role} />
            ))}
          </datalist>
        </div>
        {errors.primaryRole && (
          <span className="text-sm text-red-500">
            {errors.primaryRole.message}
          </span>
        )}

        {/* Selected Roles Preview */}
        <div className="mt-4">
          <Label>Selected Roles</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {primaryRoles.map((role) => (
              <Badge key={role} variant="secondary" className="p-2">
                {role}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removePrimaryRole(role)}
                  className="ml-2 h-4 w-4 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <Label>Skills</Label>
        <div className="space-y-2">
          <div className="flex gap-2">
            <Input
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              placeholder="Add a skill"
              list="skills"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSkillAdd();
                }
              }}
            />
            <Button
              type="button"
              variant="outline"
              onClick={handleSkillAdd}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <datalist id="skills">
            {skillSuggestions.map((skill) => (
              <option key={skill} value={skill} />
            ))}
          </datalist>

          {/* Skill Level Selector */}
          <div className="flex gap-2 mt-2">
            <select
              value={skillLevel}
              onChange={(e) => handleSkillLevelChange(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>
        {errors.skills && (
          <span className="text-sm text-red-500">{errors.skills.message}</span>
        )}

        {/* Selected Skills Preview */}
        <div className="mt-4">
          <Label>Selected Skills</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {skillFields.map((field, index) => (
              <Badge key={field.id} variant="secondary" className="p-2">
                {field.name} ({field.level})
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeSkill(index)}
                  className="ml-2 h-4 w-4 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
