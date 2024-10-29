import { Label } from "@/components/ui/label";
import { UploadButton } from "@/utils/uploadthing";
import { UseFormReturn } from 'react-hook-form';
import { FormData } from "../types";

interface CV {
  form: UseFormReturn<FormData>;
}

export default function CV({ form }: CV) {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="resume">Resume/CV</Label>
        <UploadButton
          endpoint="cvUploader" // Update to match your backend endpoint
          onClientUploadComplete={(res) => {
            if (res?.[0]) {
              form.setValue("resume", res[0].url);
            }
          }}
          onUploadError={(error: Error) => {
            console.error("Upload error:", error);
          }}
        />
        <p className="text-sm text-gray-500 mt-2">
          Accepted formats: <strong>PDF, DOC, DOCX</strong>. Max file size: <strong>10MB</strong>
        </p>
      </div>
    </div>
  );
}
