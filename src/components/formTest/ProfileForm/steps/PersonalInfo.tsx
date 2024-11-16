import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { createUploadthing, type FileRouter } from "uploadthing/next";
import UploadPhotoButton from '@/components/Buttons/upload-button';

export default function PersonalInfo({ form }) {
  const { register, setValue, formState: { errors } } = form;
  const [profilePhotoUrl, setProfilePhotoUrl] = useState<string | null>(null); // State for profile photo URL
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false); // State for upload success notification

  return (
    <div className="space-y-4">
      {/* Profile Photo Section */}
      <div>
        <Label>Profile Photo</Label>
        <UploadPhotoButton
          onClientUploadComplete={(res) => {
            if (res?.[0]) {
              setValue('profilePhoto', res[0].url); // Save the uploaded URL in form state
              setProfilePhotoUrl(res[0].url); // Set the profile photo URL to show preview
              setUploadSuccess(true); // Display upload success notification
            }
          }}
          onUploadError={(error: Error) => {
            console.error(error);
            setUploadSuccess(false); // Hide the success notification if there's an error
          }}
        />
        {/* Photo Preview Section */}
        {profilePhotoUrl && (
          <div className="mt-2">
            <img
              src={profilePhotoUrl}
              alt="Profile Photo Preview"
              className="w-32 h-32 object-cover rounded-full border-2 border-gray-300"
            />
          </div>
        )}
        {/* Upload Success Notification */}
        {uploadSuccess && (
          <p className="text-green-500 text-sm mt-2">Photo uploaded successfully!</p>
        )}
      </div>

      {/* Full Name Field */}
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          {...register('fullName', {
            required: 'Full name is required',
            pattern: {
              value: /^[a-zA-Z\s]+$/, // Regex to allow only letters and spaces
              message: 'Full name can only contain letters and spaces'
            }
          })}
        />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
      </div>

      {/* Email Field with Enhanced Regex */}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Updated regex for email validation
              message: 'Please enter a valid email (e.g., user@example.com)'
            }
          })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Location Field */}
      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          {...register('location', {
            required: 'Location is required',
            pattern: {
              value: /^[a-zA-Z\s]+$/, // Regex to allow letters and spaces only
              message: 'Location can only contain letters and spaces'
            }
          })}
          list="locations"
        />
        <datalist id="locations">
          <option value="New York" />
          <option value="California" />
          <option value="Seattle" />
          <option value="Boston" />
          <option value="Chicago" />
        </datalist>
        {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
      </div>

      {/* Phone Number Field */}
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10}$/, // Regex for a 10-digit phone number
              message: 'Please enter a valid 10-digit phone number'
            }
          })}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>
    </div>
  );
}
