import { Label } from "@/components/ui/label";
import { Select,SelectTrigger,SelectValue,SelectContent,SelectItem } from "@/components/ui/select";

export default function DiversityInclusion({ form }) {
  const { register } = form;

  const genderOptions = [
    'Male', 'Female', 'Non-binary', 'Prefer not to say', 'Other'
  ];

  const pronounOptions = [
    'He/Him', 'She/Her', 'They/Them', 'Prefer not to say', 'Other'
  ];

  const ethnicityOptions = [
    'Asian', 'Black', 'Hispanic', 'White', 'Mixed', 'Other', 'Prefer not to say'
  ];

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="gender">Gender</Label>
        <Select onValueChange={(value) => form.setValue('gender', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {genderOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="pronouns">Pronouns</Label>
        <Select onValueChange={(value) => form.setValue('pronouns', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select pronouns" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {pronounOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="ethnicity">Ethnicity</Label>
        <Select onValueChange={(value) => form.setValue('ethnicity', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select ethnicity" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {ethnicityOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}