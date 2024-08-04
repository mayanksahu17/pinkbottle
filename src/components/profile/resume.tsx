'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth, useUser } from '@clerk/nextjs';
import { useUploadThing } from '../../lib/uploadthing';
import { updateStudent } from '../../lib/actions/users/user.actions';
import { FileUploader } from './file-uploader';
import { convertFileToUrl } from '@/lib/utils';

const Resume = ({ resume, cover }: { resume?: string; cover?: string }) => {
  const { isSignedIn, user } = useUser();
  const [filesResume, setFilesResume] = useState<File[]>([]);
  const [filesCover, setFilesCover] = useState<File[]>([]);
  const [imageUrlResume, setImageUrlResume] = useState('');
  const [imageUrlCover, setImageUrlCover] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const { startUpload } = useUploadThing('mediaPost');
  const [errorResume, setErrorResume] = useState<boolean>(false);
  const [errorCover, setErrorCover] = useState<boolean>(false);
  const { userId } = useAuth();
  const [uploadedResume, setUploadedResume] = useState<string>(
    !resume ? '/dashboard' : resume
  );
  const [uploadedCover, setUploadedCover] = useState<string>(
    !cover ? '/dashboard' : cover
  );
  // Handle file upload
  console.log(cover);

  const handleFileUpload = async (id: 'coverLetter' | 'resume') => {
    setLoading(true);
    let uploadedFile;
    if (id === 'coverLetter') {
      if (filesCover.length > 0) {
        const uploadedFiles = await startUpload(filesCover);
        if (!uploadedFiles) {
          console.log('Error while uploading coverletter');
          alert('Error while uploading coverletter');
          setLoading(false);
          return;
        }
        uploadedFile = uploadedFiles[0].url;
      }
    }
    if (id === 'resume') {
      if (filesResume.length > 0) {
        const uploadedFiles = await startUpload(filesResume);
        if (!uploadedFiles) {
          console.log('Error while uploading resume');
          alert('Error while uploading resume');
          setLoading(false);
          return;
        }
        uploadedFile = uploadedFiles[0].url;
      }
    }
    if (uploadedFile) {
      try {
        const res = await updateStudent({
          id: userId!,
          updateDetails: { [id]: uploadedFile },
        });
        console.log(res);
        if (res.success) {
          id === 'resume'
            ? setUploadedResume(uploadedFile)
            : setUploadedCover(uploadedFile);
          alert(`${id} uploaded`);
          setLoading(false);
        }
      } catch (error: any) {
        console.log(error);
        if (id === 'resume') setErrorResume(true);
        if (id === 'coverLetter') setErrorCover(true);
        setLoading(false);
      }
    }
    setLoading(false);
  };
  
  const handleFileChange = (id: 'coverLetter' | 'resume', files: File[]) => {
    if (id === 'resume') {
      setFilesResume(files);
      const imgUrl = convertFileToUrl(files[0]);
      setImageUrlResume(imgUrl);
    } else {
      setFilesCover(files);
      const imgUrl = convertFileToUrl(files[0]);
      setImageUrlCover(imgUrl);
    }
  };
  
  return (
    <main className="flex-1 ml-8">
      <div className="flex justify-center items-start pt-16 min-h-screen ">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-xl font-bold text-gray-900">
                {user ? user.firstName : 'Guest'}
              </div>
              <div className="text-gray-500">Resume</div>
            </div>
            <div>
              <span className="p-2 rounded-full bg-gray-200 text-gray-500">
                &#128203;
              </span>
            </div>
          </div>

          <div className="mb-4 p-4 bg-gray-100 rounded-md flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">&#128187;</span>
              <span className="text-gray-700 text-sm">164 keywords</span>
            </div>
            <span className="text-gray-700 text-sm">Wed Mar 13 2024</span>
          </div>

          <div className="flex space-x-2 mb-4">
            <button className="flex-1 text-sm bg-gray-200 text-gray-700 py-2 px-4 rounded-md">
              Keywords
            </button>
            <Link className="flex-1" href={uploadedResume}>
              <button
                disabled={loading}
                className="disabled:bg-[#55c47d] w-full text-sm bg-green-600 text-white disabled:cursor-not-allowed py-2 px-4 rounded-md"
              >
                Open Resume
              </button>
            </Link>
            <Link className="flex-1" href={uploadedCover}>
              <button
                disabled={loading}
                className="disabled:bg-[#55c47d] w-full text-sm bg-green-600 text-white disabled:cursor-not-allowed py-2 px-4 rounded-md"
              >
                Open Cover Letter
              </button>
            </Link>
          </div>

          <div className="flex justify-center items-center gap-2">
            <FileUploader
              error={errorResume}
              loading={loading}
              files={filesResume}
              imageUrl={imageUrlResume}
              name={'Upload Resume'}
              id="resume"
            />
            <FileUploader
              error={errorCover}
              loading={loading}
              files={filesCover}
              imageUrl={imageUrlCover}
              name="Upload Cover letter"
              id="coverLetter"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
