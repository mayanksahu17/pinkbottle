import React from 'react';
import { Button } from "../ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScheduleCall: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onScheduleCall }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full relative">
        <div className="flex items-center mb-6">
          <div className="flex-shrink-0">
          <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
            <img
              src="HiredEasy.png"  // Replace this with the actual image URL
              alt="Profile"
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-semibold text-gray-800">Application Submitted</h3>
          </div>
        </div>
        <p className="text-gray-600 mb-6">
          Thank you for submitting your application. Please schedule a call to proceed with the next steps.
        </p>
        <Button
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors hover:bg-blue-700"
          onClick={onScheduleCall}
        >
          Schedule a Call
        </Button>
        <Button
          className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-medium mt-4 transition-colors hover:bg-gray-300"
          onClick={onClose}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
