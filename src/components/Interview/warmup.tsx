import React from 'react';

const Warmup = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-8">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center py-6 rounded-t-xl">
          <h2 className="text-2xl font-bold tracking-wide">Google Interview Warmup</h2>
          <p className="text-sm font-light">Prepare for your next big interview with confidence</p>
        </div>
        <iframe
          src="https://grow.google/certificates/interview-warmup/" // Adjust the URL as necessary
          title="Google Interview Warmup"
          className="w-full h-[75vh] min-h-[400px] border-t border-gray-300"
          frameBorder="0"
          allow="camera; microphone"
        >
          Sorry, your browser does not support inline frames.
        </iframe>
        <div className="bg-gray-100 text-gray-700 text-center py-4 rounded-b-xl">
          <p className="text-sm">Powered by <a href="https://grow.google" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:underline">Google Grow</a></p>
        </div>
      </div>
    </div>
  );
};

export default Warmup;
