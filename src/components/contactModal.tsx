import Image from 'next/image'; // Importing Image component for handling images

interface ModalProps {
  onClose: () => void;
}

export const ContactModal: React.FC<ModalProps> = ({ onClose }) => {
  const handleCloseClick = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevents the default button click behavior
    onClose(); // Calls the onClose prop function
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl w-full mx-4">
        <div className="flex items-center justify-between mb-6">
          {/* Image and name 1 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/Nikhil.jpeg"
                alt="Nikhil Jain"
                width={200}
                height={200}
              />
            </div>
            <span className="text-lg font-semibold">Nikhil Jain</span>
          </div>
          {/* Button 1 */}
          <a
            href="https://apply.neetocal.com/meeting-with-nikhil-jain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12"
          >
            <span className="absolute animate-pulse bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-primary p-1.5 text-xs"></span>
            Talk to Nikhil
            <span className="group-hover:animate-bounce ml-2">👋</span>
          </a>
        </div>
        <div className="flex items-center justify-between">
          {/* Image and name 2 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/Gauravnew.png"
                alt="Gaurav Jain"
                width={200}
                height={200}
              />
            </div>
            <span className="text-lg font-semibold">Gaurav Jain</span>
          </div>
          {/* Button 2 */}
          <a
            href="https://apply.neetocal.com/meeting-with-nikhil-jain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12"
          >
            <span className="absolute animate-pulse bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-primary p-1.5 text-xs"></span>
            Talk to Gaurav
            <span className="group-hover:animate-bounce ml-2">👋</span>
          </a>
        </div>
        <div
          onClick={() => onClose()}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleCloseClick(e);
          }}
          role="button"
          tabIndex={0}
          className="mt-8 text-center bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 block mx-auto cursor-pointer"
        >
          Close
        </div>
      </div>
    </div>
  );
};
