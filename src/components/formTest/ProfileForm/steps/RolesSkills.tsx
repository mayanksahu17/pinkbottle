import { useFieldArray, UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X, Plus } from 'lucide-react';

// Define Skill type
interface Skill {
  name: string;
  level: string;
}

// Define FormValues type, including primaryRole and skills
interface FormValues {
  primaryRole: string;
  skills: Skill[];
}

const skillSuggestions = [
  'JavaScript', 'React', 'Node.js', 'Python', 'Java', 'TypeScript',
  'AWS', 'Docker', 'Kubernetes', 'SQL', 'MongoDB', 'GraphQL'
];

const roleSuggestions = [
  'Frontend Developer', 'Backend Developer', 'Full Stack Developer',
  'DevOps Engineer', 'Data Scientist', 'UI/UX Designer', 'Product Manager'
];

export default function RolesSkills({ form }: { form: UseFormReturn<FormValues> }) {
  const { register, control, setValue } = form;

  // Correctly typed useFieldArray using FormValues
  const { fields, append, remove } = useFieldArray<FormValues>({
    control,
    name: "skills"
  });

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="primaryRole">Primary Role</Label>
        <Input 
          id="primaryRole" 
          {...register('primaryRole')} 
          list="roles"
        />
        <datalist id="roles">
          {roleSuggestions.map((role) => (
            <option key={role} value={role} />
          ))}
        </datalist>
      </div>

      <div>
        <Label>Skills</Label>
        <div className="space-y-2">
          <div className="flex gap-2">
            <Input
              placeholder="Add a skill"
              list="skills"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  const input = e.target as HTMLInputElement;
                  append({ name: input.value, level: 'Beginner' });
                  input.value = '';
                }
              }}
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                const input = document.querySelector('input[placeholder="Add a skill"]') as HTMLInputElement;
                if (input.value) {
                  append({ name: input.value, level: 'Beginner' });
                  input.value = '';
                }
              }}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <datalist id="skills">
            {skillSuggestions.map((skill) => (
              <option key={skill} value={skill} />
            ))}
          </datalist>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {fields.map((field, index) => (
            <Badge key={field.id} variant="secondary" className="p-2">
              {field.name}
              <Select
                value={field.level}
                onValueChange={(value) => {
                  setValue(`skills.${index}.level`, value);
                }}
              >
                <SelectTrigger className="w-[100px] ml-2">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                  <SelectItem value="Expert">Expert</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => remove(index)}
                className="ml-2 h-4 w-4 p-0"
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
