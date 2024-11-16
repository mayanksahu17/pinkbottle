import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

export default function Expectations({ form }) {
  const { register, setValue, formState: { errors }, watch } = form;

  const availabilityOptions = [
    "Full-time",
    "Part-time",
    "Contract",
    "Freelance",
  ];

  const rateRanges = [
    "$30-50/hour",
    "$50-80/hour",
    "$80-100/hour",
    "$100-150/hour",
    "$150+/hour",
  ];

  const workPreferences = ["Remote", "Hybrid", "On-site", "Flexible"];

  // Watch form fields for changes
  const formData = watch();

  // Automatically trigger save when form data changes
  useEffect(() => {
    const saveFormData = () => {
      // Here, you can send 'formData' to your backend API to save in the database
      console.log("Saving form data:", formData);
      // Example: make an API request to save form data
      // api.saveExpectations(formData);
    };

    // Trigger the save function whenever the form data changes
    saveFormData();

  }, [formData]); // This effect runs every time formData changes

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Expected Hourly Rate */}
      <div className="flex flex-col">
        <Label htmlFor="hourlyRate" className="mb-2">Expected Hourly Rate</Label>
        <Input
          id="hourlyRate"
          {...register("hourlyRate", {
            required: "Hourly rate is required",
            pattern: {
              value: /^\$\d{2,3}-\d{2,3}\/hour$|^\$\d{2,3}\+\/hour$/,
              message: "Please enter a valid hourly rate (e.g., $50-80/hour)",
            },
          })}
          list="rates"
          className="w-full"
        />
        <datalist id="rates">
          {rateRanges.map((rate) => (
            <option key={rate} value={rate} />
          ))}
        </datalist>
        {errors.hourlyRate && (
          <span className="text-sm text-red-500 mt-1">
            {errors.hourlyRate.message}
          </span>
        )}
      </div>

      {/* Availability */}
      <div className="flex flex-col">
        <Label htmlFor="availability" className="mb-2">Availability</Label>
        <select
          id="availability"
          {...register("availability", {
            required: "Availability is required",
          })}
          className="w-full rounded border-gray-300 p-2"
        >
          <option value="" disabled>
            Select availability
          </option>
          {availabilityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.availability && (
          <span className="text-sm text-red-500 mt-1">
            {errors.availability.message}
          </span>
        )}
      </div>

      {/* Work Preferences */}
      <div>
        <Label className="mb-2">Work Preferences</Label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {workPreferences.map((preference) => (
            <label
              key={preference}
              className="flex items-center space-x-2"
            >
              <input
                type="checkbox"
                value={preference}
                {...register("workPreference")}
                className="rounded border-gray-300"
              />
              <span>{preference}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Right to Work */}
      <div className="flex flex-col">
        <Label htmlFor="rightToWork" className="mb-2">Right to Work</Label>
        <Input
          id="rightToWork"
          {...register("rightToWork", {
            required: "Right to work information is required",
            pattern: {
              value: /^[\w\s-]+$/,
              message: "Please enter a valid visa or authorization status",
            },
          })}
          placeholder="e.g., Citizen, Work Permit, H1-B"
          className="w-full"
        />
        {errors.rightToWork && (
          <span className="text-sm text-red-500 mt-1">
            {errors.rightToWork.message}
          </span>
        )}
      </div>

      {/* Security Clearance */}
      <div className="flex flex-col">
        <Label htmlFor="securityClearance" className="mb-2">Security Clearance</Label>
        <Input
          id="securityClearance"
          {...register("securityClearance", {
            required: "Security clearance is required",
            pattern: {
              value: /^[\w\s]+$/,
              message: "Please enter a valid security clearance level",
            },
          })}
          placeholder="e.g., None, Confidential, Top Secret"
          className="w-full"
        />
        {errors.securityClearance && (
          <span className="text-sm text-red-500 mt-1">
            {errors.securityClearance.message}
          </span>
        )}
      </div>
    </div>
  );
}
