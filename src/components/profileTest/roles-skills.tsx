import { useFieldArray, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X, Plus } from 'lucide-react';
import { useState } from 'react';

interface Skill {
  name: string;
  level: string;
}

export interface FormValues {
  profiles: {
    rolesSkills: {
      roles: string[];
      skills: {
        name: string;
        level: string;
      }[];
      title: string;
    };
  }[];
}


const skillSuggestions = [
  "JavaScript", "React", "Node.js", "Python", "Java", "TypeScript", "AWS",
  "Docker", "Kubernetes", "SQL", "MongoDB", "GraphQL",
];

const roleSuggestions = [
  "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "DevOps Engineer", "Data Scientist", "UI/UX Designer", "Product Manager",
];

export default function RolesSkills({
  form,
  profileIndex,
}: {
  form: UseFormReturn<FormValues>;
  profileIndex: number;
}) {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = form;

  const [roleInput, setRoleInput] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [skillLevel, setSkillLevel] = useState("Beginner");

  const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({
    control,
    name: `profiles.${profileIndex}.rolesSkills.skills`,
  });

  const roles = getValues(`profiles.${profileIndex}.rolesSkills.roles`) || [];

  const handleRoleAdd = () => {
    if (roleInput && /^[a-zA-Z\s]+$/.test(roleInput)) {
      const role = roleInput.trim();
      if (!roles.includes(role)) {
        setValue(`profiles.${profileIndex}.rolesSkills.roles`, [...roles, role]);
      }
      setRoleInput("");
    }
  };

  const handleSkillAdd = () => {
    if (skillInput && skillLevel && /^[a-zA-Z0-9.\s\-]+$/.test(skillInput)) {
      appendSkill({ name: skillInput.trim(), level: skillLevel });
      setSkillInput("");
      setSkillLevel("Beginner");
    }
  };

  const removePrimaryRole = (role: string) => {
    setValue(`profiles.${profileIndex}.rolesSkills.roles`, roles.filter((r) => r !== role));
  };

  const handleSkillLevelChange = (level: string) => {
    setSkillLevel(level);
  };

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div>
        <Label htmlFor={`profiles.${profileIndex}.rolesSkills.title`}>Professional Title</Label>
        <Input
          id={`profiles.${profileIndex}.rolesSkills.title`}
          {...form.register(`profiles.${profileIndex}.rolesSkills.title`, {
            required: "Professional title is required",
          })}
          placeholder="e.g. Senior Frontend Developer"
        />
        {errors.profiles?.[profileIndex]?.rolesSkills?.title && (
          <span className="text-sm text-red-500">
            {errors.profiles[profileIndex].rolesSkills.title.message}
          </span>
        )}
      </div>

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
            <Button type="button" variant="outline" onClick={handleRoleAdd}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <datalist id="roles">
            {roleSuggestions.map((role) => (
              <option key={role} value={role} />
            ))}
          </datalist>
        </div>

        <div className="mt-4">
          <Label>Selected Roles</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {roles.map((role) => (
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
            <Button type="button" variant="outline" onClick={handleSkillAdd}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <datalist id="skills">
            {skillSuggestions.map((skill) => (
              <option key={skill} value={skill} />
            ))}
          </datalist>
        </div>

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
