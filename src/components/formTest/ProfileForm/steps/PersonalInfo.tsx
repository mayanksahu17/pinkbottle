import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createUploadthing, type FileRouter } from "uploadthing/next";
import UploadPhotoButton from '@/components/Buttons/upload-button';

export default function PersonalInfo({ form }) {
  const { register, setValue } = form;

  return (
    <div className="space-y-4">
      <div>
        <Label>Profile Photo</Label>
        <UploadPhotoButton
          onClientUploadComplete={(res) => {
            if (res?.[0]) {
              setValue('profilePhoto', res[0].url);
            }
          }}
          onUploadError={(error: Error) => {
            console.error(error);
          }}
        />
      </div>

      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" {...register('fullName')} />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register('email')} />
      </div>

      <div>
        <Label htmlFor="location">Location</Label>
        <Input 
          id="location" 
          {...register('location')} 
          list="locations"
        />
        <datalist id="locations">
          <option value="New York" />
          <option value="California" />
          <option value="Seattle" />
          <option value="Boston" />
          <option value="Chicago" />
        </datalist>
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" {...register('phone')} />
      </div>
    </div>
  );
}