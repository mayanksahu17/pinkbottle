import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadButton } from '@/utils/uploadthing';

export default function PersonalInfo({ form }) {
  const { register } = form;

  return (
    <div className="space-y-4">
      <div>
        <Label>Profile Photo</Label>
        <UploadButton
          endpoint="profilePictureUploader"
          onClientUploadComplete={(res) => {
            if (res?.[0]) {
              form.setValue('profilePhoto', res[0].url);
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
          <option value="London" />
          <option value="Berlin" />
          <option value="Tokyo" />
          <option value="Singapore" />
        </datalist>
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" {...register('phone')} />
      </div>
    </div>
  );
}