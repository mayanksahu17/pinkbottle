import React from 'react';

const Warmup = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 p-4">
      {/* Adjust the max width class to a larger value or use full width */}
      <div className="w-full max-w-7xl px-2 py-4 bg-white shadow-lg border border-gray-300 rounded-lg overflow-hidden">
        <iframe
          src="https://grow.google/certificates/interview-warmup/" // Adjust the URL as necessary
          title="Google Interview Warmup"
          style={{ width: '100%', height: '75vh', minHeight: '400px' }}
          frameBorder="0"
          allow="camera; microphone"
        >
          Sorry, your browser does not support inline frames.
        </iframe>
      </div>
    </div>
  );
};

export default Warmup;
