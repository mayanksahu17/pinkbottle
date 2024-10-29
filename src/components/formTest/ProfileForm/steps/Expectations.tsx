import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Expectations({ form }) {
  const { register } = form;

  const availabilityOptions = [
    'Full-time', 'Part-time', 'Contract', 'Freelance'
  ];

  const rateRanges = [
    '$30-50/hour', '$50-80/hour', '$80-100/hour', '$100-150/hour', '$150+/hour'
  ];

  const workPreferences = [
    'Remote', 'Hybrid', 'On-site', 'Flexible'
  ];

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="hourlyRate">Expected Hourly Rate</Label>
        <Input 
          id="hourlyRate" 
          {...register('hourlyRate')} 
          list="rates"
        />
        <datalist id="rates">
          {rateRanges.map((rate) => (
            <option key={rate} value={rate} />
          ))}
        </datalist>
      </div>

      <div>
        <Label htmlFor="availability">Availability</Label>
        <Input 
          id="availability" 
          {...register('availability')} 
          list="availability"
        />
        <datalist id="availability">
          {availabilityOptions.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
      </div>

      <div>
        <Label>Work Preferences</Label>
        <div className="grid grid-cols-2 gap-2">
          {workPreferences.map((preference) => (
            <label key={preference} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={preference}
                {...register('workPreference')}
                className="rounded border-gray-300"
              />
              <span>{preference}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}