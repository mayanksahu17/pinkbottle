import { UploadButton } from "@/utils/uploadthing";
import { Camera } from "lucide-react";

interface ChangePhotoButtonProps {
  endpoint: string;
  onUploadBegin?: (res: any) => void;
  onClientUploadComplete?: (res: any) => void;
  onUploadError?: (error: Error) => void;
  disabled?: boolean;
}

export default function ChangePhotoButton({
  endpoint,
  onClientUploadComplete,
  onUploadError,
  disabled
}: ChangePhotoButtonProps) {
  return (
    <div className="flex items-center gap-2">
      <UploadButton
        endpoint='profilePictureUploader'
        onClientUploadComplete={(res) => {
          if (onClientUploadComplete) onClientUploadComplete(res);
        }}
        onUploadError={(error: Error) => {
          if (onUploadError) onUploadError(error);
        }}
        appearance={{
          button:
            "px-3 py-2 text-black bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
          allowedContent: "hidden"
        }}
        content={{
          button({ ready }) {
            return (
              <>
                <Camera className="w-3 h-3 mr-1" />
                {ready ? "Change Photo" : "Loading..."}
              </>
            );
          }
        }}
        disabled={disabled}
      />
    </div>
  );
}