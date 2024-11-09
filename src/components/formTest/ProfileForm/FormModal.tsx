import React from 'react';
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import MultiStepForm from './MultiStepForm';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormModal({ isOpen, onClose }: FormModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* Background Overlay with blur */}
      <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40" />

      {/* Centered Modal Content */}
       {/* Centered Modal Content */}
  <DialogContent
    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-lg w-full max-h-screen overflow-y-auto bg-white shadow-lg rounded-lg p-6 z-50"
  >
    <MultiStepForm onClose={onClose} />
  </DialogContent>
</Dialog>
  );
}
