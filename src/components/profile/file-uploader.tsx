'use client';

import { useCallback, Dispatch, SetStateAction } from 'react';
import { useDropzone } from '@uploadthing/react/hooks';
import { generateClientDropzoneAccept } from 'uploadthing/client';

import { Button } from '@/components/ui/button';
import { convertFileToUrl } from '@/lib/utils';

type FileUploaderProps = {
  loading: boolean;
  imageUrl: string;
  files: any[];
  error: boolean;
  name: string;
  id: string;
};

export function FileUploader({
  loading,
  error,
  imageUrl,
  files,
  name,
  id,
}: FileUploaderProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Call the parent component's handler for file change
    parentHandleFileChange(id, acceptedFiles); // This function should be defined and passed from the parent component
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(['pdf', 'msword']),
    maxFiles: 1,
    maxSize: 2097152,
  });

  return (
    <div className="flex-1">
      <div
        {...getRootProps()}
        className="flex items-center p-6 bg-[#f2faf5] h-48 justify-center cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50"
      >
        <input {...getInputProps()} className="cursor-pointer" />
        {imageUrl ? (
          <div className="flex h-full w-full flex-1 justify-center ">
            <img
              src={
                files && files.length > 0 && files[0].type === 'application/pdf'
                  ? 'assets/icons/pdf.svg'
                  : imageUrl
              }
              alt="image"
              width={250}
              height={250}
              className="w-full object-contain object-center"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center text-gray-500">
            <img
              src="/assets/icons/resume.svg"
              width={77}
              height={77}
              className="object-contain"
              alt="file upload"
            />
            <p className="mt-4 font-semibold">Only PDF</p>
            <Button
              type="button"
              className="rounded-full border-2 mt-4 border-[#16A34A]"
            >
              {name}
            </Button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 items-center text-black">
        {imageUrl && files && <p className="">{files[0]?.path}</p>}
        {error && (
          <p className="text-red-600 text-xs">
            Please select a valid format. Make sure the file is below 2MB
          </p>
        )}
        {imageUrl && files && (
          <Button
            type="button"
            className="text-white bg-[#16A34A] hover:bg-[#318b52]"
          >
            {'Upload'}
          </Button>
        )}
      </div>
    </div>
  );
}

function parentHandleFileChange(id: string, acceptedFiles: File[]) {
  throw new Error('Function not implemented.');
}
