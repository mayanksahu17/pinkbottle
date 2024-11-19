import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import UploadPhotoButton from '@/components/Buttons/upload-button';

interface PersonalInfoProps {
  form: UseFormReturn<any>;
  profileIndex: number;
}

export default function PersonalInfo({ form, profileIndex }: PersonalInfoProps) {
  const { register, setValue, formState: { errors } } = form;
  const [profilePhotoUrl, setProfilePhotoUrl] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      {/* Profile Photo Section */}
      <div>
        <Label>Profile Photo</Label>
        <UploadPhotoButton
          onClientUploadComplete={(res) => {
            if (res?.[0]) {
              setValue(`profiles.${profileIndex}.personalInfo.profilePhoto`, res[0].url);
              setProfilePhotoUrl(res[0].url);
              setUploadSuccess(true);
            }
          }}
          onUploadError={(error: Error) => {
            console.error(error);
            setUploadSuccess(false);
          }}
        />
        {profilePhotoUrl && (
          <div className="mt-2">
            <img
              src={profilePhotoUrl}
              alt="Profile Photo Preview"
              className="w-32 h-32 object-cover rounded-full border-2 border-gray-300"
            />
          </div>
        )}
        {uploadSuccess && (
          <p className="text-green-500 text-sm mt-2">Photo uploaded successfully!</p>
        )}
      </div>

      {/* Full Name Field */}
      <div>
        <Label htmlFor={`profiles.${profileIndex}.personalInfo.fullName`}>Full Name</Label>
        <Input
          id={`profiles.${profileIndex}.personalInfo.fullName`}
          {...register(`profiles.${profileIndex}.personalInfo.fullName`, {
            required: 'Full name is required',
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: 'Full name can only contain letters and spaces'
            }
          })}
        />
        {errors.profiles?.[profileIndex]?.personalInfo?.fullName && (
          <p className="text-red-500 text-sm">{errors.profiles[profileIndex].personalInfo.fullName.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <Label htmlFor={`profiles.${profileIndex}.personalInfo.email`}>Email</Label>
        <Input
          id={`profiles.${profileIndex}.personalInfo.email`}
          type="email"
          {...register(`profiles.${profileIndex}.personalInfo.email`, {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Please enter a valid email (e.g., user@example.com)'
            }
          })}
        />
        {errors.profiles?.[profileIndex]?.personalInfo?.email && (
          <p className="text-red-500 text-sm">{errors.profiles[profileIndex].personalInfo.email.message}</p>
        )}
      </div>

      {/* Location Field */}
      <div>
        <Label htmlFor={`profiles.${profileIndex}.personalInfo.location`}>Location</Label>
        <Input
          id={`profiles.${profileIndex}.personalInfo.location`}
          {...register(`profiles.${profileIndex}.personalInfo.location`, {
            required: 'Location is required',
            pattern: {
              value: /^[a-zA-Z\s]+$/,
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
        {errors.profiles?.[profileIndex]?.personalInfo?.location && (
          <p className="text-red-500 text-sm">{errors.profiles[profileIndex].personalInfo.location.message}</p>
        )}
      </div>

      {/* Phone Number Field */}
      <div>
        <Label htmlFor={`profiles.${profileIndex}.personalInfo.phone`}>Phone Number</Label>
        <Input
          id={`profiles.${profileIndex}.personalInfo.phone`}
          {...register(`profiles.${profileIndex}.personalInfo.phone`, {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Please enter a valid 10-digit phone number'
            }
          })}
        />
        {errors.profiles?.[profileIndex]?.personalInfo?.phone && (
          <p className="text-red-500 text-sm">{errors.profiles[profileIndex].personalInfo.phone.message}</p>
        )}
      </div>
    </div>
  );
}