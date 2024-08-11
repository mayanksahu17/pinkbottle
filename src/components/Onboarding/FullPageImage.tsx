const BannerWithText = () => {
    return (
      <div className="relative w-full h-auto mt-4">
        <img
          src="OnboardingBanner.jpg" // Replace with your actual image path
          alt="Background Image"
          className="object-cover w-full h-auto"
          style={{
            minHeight: '300px',
          }}
        />
        <style jsx>{`
          @media (max-width: 640px) {
            img {
              filter: blur(4px); /* Adjust the blur intensity */
            }
          }
  
          @media (min-width: 641px) {
            img {
              filter: none;
            }
          }
        `}</style>
        <div className="absolute inset-0 top-8 flex flex-col items-center text-center text-black px-4 mt-10 sm:mt-20">
          <h2 className="text-xl sm:text-xl md:text-xl lg:text-xl font-bold mb-2">
            We've helped 600+ fellows of all sorts of backgrounds land great jobs
          </h2>
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-4">
            <div className="bg-white p-1 rounded-lg shadow-lg text-sm sm:text-base md:text-lg">
                <p className="font-bold">$83,307</p>
                <p>average junior base salary</p>
            </div>
            <div className="bg-white p-1 rounded-lg shadow-lg text-sm sm:text-base md:text-lg">
                <p className="font-bold">$134,973</p>
                <p>average mid-level base salary</p>
            </div>
            <div className="bg-white p-1 rounded-lg shadow-lg text-sm sm:text-base md:text-lg">
                <p className="font-bold">$199,896</p>
                <p>average senior base salary</p>
            </div>
        </div>
          {/* <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-md md:text-lg font-semibold">
            Pricing
          </button> */}
        </div>
      </div>
    );
  };
  
  export default BannerWithText;
  