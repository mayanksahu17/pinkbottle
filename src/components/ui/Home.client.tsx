"use client"
import { Button } from "@/components/ui/button"
import React, { SVGProps, useEffect, useState } from 'react';
import { UserButton, auth, useUser } from "@clerk/nextjs"
import Link from "next/link"
import styles from '../Button.module.css';
import { Swiper, SwiperSlide, useSwiperSlide} from 'swiper/react';
import 'swiper/css';
import { ContactModal } from '../../components/contactModal';


type WindowSize = {
  width: number | undefined;
};

// Custom hook to check window width
const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    // Set the size initially on client-side
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const HomePage = () => {
    const { isSignedIn, user } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { width } = useWindowSize();
    const isMobile = width !== undefined && width < 768;
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const testimonials = [
    {
      imgSrc: '/Whatsappone.jpeg',
      // caption: 'A quick highlight from testimonial 1...',
    },
    {
      imgSrc: '/Whatsapptwo.jpeg',
      // caption: 'A quick highlight from testimonial 2...',
    },
    // Add more testimonials as needed
  ];
    return (
        <div className="min-h-screen text-black" style={{ backgroundColor: '#FAF6F6' }}>
        <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <Link href="/">
  <img
    alt="Your Logo"
    className="cursor-pointer h-8 md:h-10 transform scale-110 ml-4 md:ml-6" // Adjusted with margin-left classes
    src="/Jobify.png"
    style={{ transform: 'scale(1.9)' }} // Scaling up by 180%
  />
</Link>

      {/* Hamburger Icon for Mobile */}
      <button className="md:hidden text-gray-600 focus:outline-none" onClick={toggleMenu}>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6">
          {isMenuOpen ? (
          
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
        
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Items */}
      <div className={`fixed inset-x-0 top-16 z-10 bg-white p-4 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
      <nav className="flex flex-col space-y-2 bg-white p-4">
  <Link href="/about" passHref>
    <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">About Us</span>
  </Link>
  <Link href="/works" passHref>
    <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">How it works</span>
  </Link>
  <Link href="/pricing" passHref>
    <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">Pricing</span>
  </Link>
  <Link href="/" passHref>
    <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">Try the Copilot Free</span>
  </Link>
  {user ? (
    <div className="flex flex-col space-y-2">
      <Link href="/dashboard" passHref>
        <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">Dashboard</span>
      </Link>
      {/* Assumed 'UserButton' is a styled component you have */}
      <div className="pt-2">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  ) : (
    <div className="flex flex-col space-y-2">
      <Link href="/sign-in" passHref>
        <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">Login</span>
      </Link>
      <Link href="/sign-up" passHref>
        <span className="text-sm font-medium text-gray-700 hover:text-green-500 cursor-pointer block py-2">Sign Up</span>
      </Link>
    </div>
  )}
</nav>


      </div>

      {/* Desktop Menu and Auth Links */}
      <div className="hidden md:flex md:items-center md:justify-between md:flex-grow">
        {/* Desktop Menu Links */}
        <nav className="hidden md:flex md:items-center md:justify-center md:flex-grow">
  <Link href="/about" passHref>
    <span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer mx-2">About Us</span>
  </Link>
  <Link href="/works" passHref>
    <span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer mx-2">How it works</span>
  </Link>
  <Link href="/pricing" passHref>
    <span className="text-sm font-medium text-gray-500 hover:text-green-600 cursor-pointer mx-2">Pricing</span>
  </Link>
  <Link href="/" passHref>
    <span className="text-sm bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 cursor-pointer mx-2">Try the Copilot Free</span>
  </Link>
</nav>
        {/* Desktop Auth Links */}
        {/* ... */}
        <div>
          {user ? (
            <div className="flex gap-4 items-center">
              <Link href="/dashboard" passHref>
  <span className="text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:border-green-500 rounded-md py-2 px-4 cursor-pointer shadow-sm hover:shadow transition-all duration-150 ease-in-out transform hover:-translate-y-0.5">
    Dashboard
  </span>
</Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="space-x-4">
              <Link href="/sign-in" passHref><span className="text-sm cursor-pointer">Login</span></Link>
              <Link href="/sign-up" passHref><span className="text-sm cursor-pointer">Sign Up</span></Link>
            </div>
          )}
        </div>
      </div>
    </header>
      <main>
        <section className="bg-white py-24"> {/* Increased padding for more space */}
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> {/* Wider container and larger gap */}
            <div>
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4 font-sans font-light md:font-logo">Save 100+ hours of grunt work</div>
              <h1 className="text-5xl font-bold mb-8 text-gray-800">Stop Wasting Time Applying to Jobs</h1> {/* Larger heading */}
              <p className="text-xl mb-8 text-gray-600">
                We build a human-assisted AI that applies to jobs on your behalf. You can focus on networking and interview Prep.
              </p>
              <div className="mt-10 flex">
              <button className="inline-flex mr-4 items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800">
    Explore Platform
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="md:ml-1 h-5 w-5 text-gray-400  animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="-ml-3 h-5 w-5 animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
</button>
<a href="#" onClick={toggleModal} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12">
                <span className="absolute animate-pulse bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-primary p-1.5 text-xs"></span>
                Talk to founder<span className="group-hover:animate-bounce ml-2">👋</span>
            </a>

        </div>
            </div>
            <img
              alt="Person using laptop"
              className="rounded-lg shadow-xl"
              src="/HomeBanner.jpg"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </section>

        <div className="max-w-sm md:max-w-6xl mx-auto py-6 my-8 sm:my-0 md:pt-8">
  <div className="text-center">
    <h2 className="font-logo text-lg md:text-3xl mb-2">Trusted by folks from</h2>
  </div>
  <div className="flex justify-center md:justify-start overflow-x-auto">
    <ul className="flex items-center space-x-4 md:space-x-6 justify-center">
      {/* Increase the base size for better visibility on mobile */}
      <li><img className="w-48 md:w-48 lg:w-48" src="CalState.jpeg" alt="Cal State"/></li>
      <li><img className="w-48 md:w-48 lg:w-48" src="BostonUniversity.gif" alt="Boston University"/></li>
      <li><img className="w-48 md:w-48 lg:w-48" src="RIT.png" alt="NYIT"/></li>
      <li><img className="w-48 md:w-48 lg:w-48" src="Clarksonlogo.png" alt="Clarkson University"/></li>
      <li><img className="w-48 md:w-48 lg:w-48" src="Bridgeport.png" alt="Bridgeport University"/></li>
      <li><img className="w-48 md:w-48 lg:w-48" src="StevensLogo.png" alt="Stevens Institute"/></li>
      <li><img className="w-48 md:w-48 lg:w-48" src="TexasLogo.png" alt="Texas A&M"/></li>
      <li><img className="w-48 md:w-48 lg:w-48" src="DrexelLogo.png" alt="Drexel University"/></li>
      <li><img className="w-48 md:w-48 lg:w-48" src="NortheasternLogo.png" alt="Northeastern University"/></li>
      <li><img className="w-48 md:w-48 lg:w-48" src="KentState.png" alt="Michigan State"/></li>
      <li><img className="w-48 md:w-48 lg:w-48" src="Pacelogo.png" alt="Pace University"/></li>
    </ul>
  </div>
</div>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 ">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 lg:col-span-8 pr-30">
            <div style={{ position: 'relative', paddingBottom: '62.57242178447277%', height: 0 }}>
            <iframe
  src="https://www.loom.com/embed/fc7716dd8976465f8ec74778994b498e?sid=1c5f25c4-ae83-45db-b037-caa4f0533ea3"
  frameBorder="0"
  allowFullScreen
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }}
></iframe>

                    </div>
</div>
      <div className="md:col-span-5 lg:col-span-4">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="rounded-full h-8 w-8 flex items-center justify-center border-2 border-green-500 text-green-500 mr-2">1</div>
                    <h3 className="text-lg font-semibold">Get Started</h3>
                  </div>
                  <p className="text-sm">
                    Sign up and hop on an onboarding call to meet your dedicated Career Assistant.
                  </p>
                </div>
                <br />
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="rounded-full h-8 w-8 flex items-center justify-center border-2 border-green-500 text-green-500 mr-2">2</div>
                    <h3 className="text-lg font-semibold">Your Assistant will apply to jobs</h3>
                  </div>
                  <p className="text-sm">
                    Your Assistant will manually apply to delegated jobs on your behalf and will communicate updates daily on WhatsApp.
                  </p>
                </div>
                <br />
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="rounded-full h-8 w-8 flex items-center justify-center border-2 border-green-500 text-green-500 mr-2">3</div>
                    <h3 className="text-lg font-semibold">Get 5X more interviews</h3>
                  </div>
                  <p className="text-sm">
                    You get more interviews thus higher chances of landing in a full time role. It is just a numbers game.
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                <button className="inline-flex mr-4 items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800">
    Explore Platform
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="md:ml-1 h-5 w-5 text-gray-400  animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="-ml-3 h-5 w-5 animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
</button>
<a href="#" onClick={toggleModal} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12">
                <span className="absolute animate-pulse bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-primary p-1.5 text-xs"></span>
                Talk to founder<span className="group-hover:animate-bounce ml-2">👋</span>
            </a>


                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f8fa] py-16">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-gray-800 mb-12">We got you covered!</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
      <div>
        <ul className="text-lg text-gray-700 space-y-4">
          {[
            'Networking and Interview Prep',
            'Dedicated human assistant',
            'Diverse Workgroup',
            'Virtual One-on-One sessions',
            'Customizable Plans',
            'Purpose Built AI Tools',
            'Open Consultation sessions'
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <svg className="text-green-500 w-6 h-6 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 01.083 1.32l-7 8a1 1 0 01-1.4.083l-4-4a1 1 0 011.32-1.497l3.293 3.293 6.293-7.213a1 1 0 011.41-.086z" clipRule="evenodd" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex">
        <button className="inline-flex mr-4 items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800">
    Explore Platform
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="md:ml-1 h-5 w-5 text-gray-400  animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="-ml-3 h-5 w-5 animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
</button>
<a href="#" onClick={toggleModal} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12">
                <span className="absolute animate-pulse bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-primary p-1.5 text-xs"></span>
                Talk to founder<span className="group-hover:animate-bounce ml-2">👋</span>
            </a>

        </div>
      </div>
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-full h-full bg-cover bg-center rounded-lg shadow-xl" style={{ backgroundImage: 'url("/wegot.webp")', height: '30rem' }}>
          {/* Content left for image */}
        </div>
      </div>
    </div>
  </div>
</section>

            <section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our results speak for themselves.</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      <div>
        <span className="text-6xl font-bold text-black-400">93%</span>
        <p className="text-xl mt-4 text-gray-700">of our clients land an interview within the first month</p>
      </div>
      <div>
        <span className="text-6xl font-bold text-black-400">40x</span>
        <p className="text-xl mt-4 text-gray-700">more interviews with Scale than applying on your own</p>
      </div>
      <div>
        <span className="text-6xl font-bold text-black-400">200x</span>
        <p className="text-xl mt-4 text-gray-700">more efficient than the traditional job search</p>
      </div>
    </div>
  </div>
</section>



<section className="bg-gray-100 py-20">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Wingmen you can trust</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Repeat this card for each person */}
      <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out">
        <div className="p-6 text-center">
          <div className="w-28 h-28 mx-auto mb-6 bg-gradient-to-r from-green-400 to-blue-600 rounded-full overflow-hidden border-4 border-white">
            <img
              alt="Anshul Jain"
              className="w-full h-full object-cover object-center"
              src="/Mark.jpeg" // Replace with the path to the person's image
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Mark Benliyan</h3>
          <p className="text-gray-600">SDE at Figma | EX - Netflix, NASA</p>
          <p className="text-gray-500 mt-4">"It is personally gratifying to see Jobify helping landing in their full time after a long hustle"</p>
        </div>
      </div>
      {/* ... other cards ... */}
      <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out">
        <div className="p-6 text-center">
          <div className="w-28 h-28 mx-auto mb-6 bg-gradient-to-r from-green-400 to-blue-600 rounded-full overflow-hidden border-4 border-white">
            <img
              alt="Anshul Jain"
              className="w-full h-full object-cover object-center"
              src="/Harnoor.jpeg" 
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Harnoor Singh</h3>
          <p className="text-gray-600">SDE - Microsoft | Youtuber - 1.11 M Subscriber</p>
          <p className="text-gray-500 mt-4">"It is personally gratifying to see my clients landing in their full time after a long hustle"</p>
        </div>
      </div>
      <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out">
        <div className="p-6 text-center">
          <div className="w-28 h-28 mx-auto mb-6 bg-gradient-to-r from-green-400 to-blue-600 rounded-full overflow-hidden border-4 border-white">
            <img
              alt="Anshul Jain"
              className="w-full h-full object-cover object-center"
              src="/Sarena.jpeg" 
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Sarena Tseng</h3>
          <p className="text-gray-600">Career Strategist</p>
          <p className="text-gray-500 mt-4">"It is personally gratifying to see my clients landing in their full time after a long hustle"</p>
        </div>
      </div>
      <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out">
        <div className="p-6 text-center">
          <div className="w-28 h-28 mx-auto mb-6 bg-gradient-to-r from-green-400 to-blue-600 rounded-full overflow-hidden border-4 border-white">
            <img
              alt="Anshul Jain"
              className="w-full h-full object-cover object-center"
              src="/Rishi.jpeg" 
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Rishi Jain</h3>
          <p className="text-gray-600">Founder & CEO - Digital Scholar</p>
          <p className="text-gray-500 mt-4">"It is personally gratifying to see my clients landing in their full time after a long hustle"</p>
        </div>
      </div>
    </div>
  </div>
</section>

        <section className="bg-[#f7f8fa] py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our vetting process</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-8">
                {/* <!-- Pair 1 --> */}
                <div className="flex items-center">
                <div className="w-100 h-100 bg-gray-200 overflow-hidden mr-4">
  <img
    src="/vettingone.webp" 
    alt="Description for image 1"
    className=".Sprite w-full h-full"
  />
</div>
                  <div>
                    <h3 className="text-xl font-semibold">34% off pass</h3>
                    <p>Every candidate goes through a video interview and is tested for interpersonal skills and English fluency.</p>
                  </div>
                </div>
                {/* <!-- Pair 2 --> */}
                <div className="flex items-center">
                <div className="w-100 h-100 bg-gray-200 overflow-hidden mr-4">
  <img
    src="/vettingtwo.webp" 
    alt="Description for image 1"
    className=".Sprite w-full h-full"
  />
</div>
                  <div>
                    <h3 className="text-xl font-semibold">12% off pass</h3>
                    <p>Selected candidates are examined on their analytical capabilities by conducting two proctored tests.</p>
                  </div>
                </div>
                {/* <!-- Pair 3 --> */}
                <div className="flex items-center">
                <div className="w-100 h-100 bg-gray-200 overflow-hidden mr-4">
  <img
    src="/vettingthree.webp" 
    alt="Description for image 1"
    className=".Sprite w-full h-full"
  />
</div>
                  <div>
                    <h3 className="text-xl font-semibold">2% off pass</h3>
                    <p>On clearing the exam, each of these candidates will be given to complete 25 mock job applications to fill and draft email and LinkedIn responses to particular situations.</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                {/* <!-- Right side content --> */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Video Interview</h3>
                    <p className="mb-4">
                      Every candidate goes through a video interview to ensure they possess
                      the skills and are a cultural fit.
                    </p>
                    <button className="inline-flex mr-4 items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800">
    Explore Platform
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="md:ml-1 h-5 w-5 text-gray-400  animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="-ml-3 h-5 w-5 animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
</button>
<a href="#" onClick={toggleModal} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12">
                <span className="absolute animate-pulse bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-primary p-1.5 text-xs"></span>
                Talk to founder<span className="group-hover:animate-bounce ml-2">👋</span>
            </a>



                  </div>
                  {/* <!-- Add additional content here if needed --> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">We Bring Real Impact 🫶</h2>
        {isMobile ? (
          <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="text-center mb-4">
                  <figure className="relative inline-block" style={{ width: '60%' }}>
                    <img
                      src={testimonial.imgSrc}
                      alt={`Testimonial ${index + 1}`}
                      className="rounded-lg shadow-lg mx-auto"
                      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                    {/* <figcaption className="mt-2 text-sm">{testimonial.caption}</figcaption> */}
                  </figure>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div className="group" key={index}>
                <div className="text-center mb-4">
                <figure className="relative inline-block" style={{ width: '70%' }}>
                    <img
                      src={testimonial.imgSrc}
                      alt={`Testimonial ${index + 1}`}
                      className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mx-auto"
                      style={{ width: '80%', height: 'auto', objectFit: 'cover' }}
                    />
                    {/* <figcaption className="mt-2 text-sm">{testimonial.caption}</figcaption> */}
                  </figure>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Questions? Here's a few of the common ones.</h2>
            <div className="divide-y divide-gray-300">
              <details className="group py-4">
                <summary className="text-lg font-medium cursor-pointer flex justify-between items-center">
                  What is the success rate?
                  <span className="ml-2 text-gray-400 group-open:text-black group-open:rotate-180 transition-transform duration-300">{'\u2935'}</span>
                </summary>
                <p className="mt-4 leading-relaxed">
                  We have a high success rate due to our vetting process and the quality of candidates we accept into our program.
                </p>
              </details>
              <details className="group py-4">
                <summary className="text-lg font-medium cursor-pointer flex justify-between items-center">
                  How many recruiter calls will I get?
                  <span className="ml-2 text-gray-400 group-open:text-black group-open:rotate-180 transition-transform duration-300">{'\u2935'}</span>
                </summary>
                <p className="mt-4 leading-relaxed">
                  The number of recruiter calls varies depending on your skills, experience, and the job market.
                </p>
              </details>
              <details className="group py-4">
                <summary className="text-lg font-medium cursor-pointer flex justify-between items-center">
                  How is this useful to me?
                  <span className="ml-2 text-gray-400 group-open:text-black group-open:rotate-180 transition-transform duration-300">{'\u2935'}</span>
                </summary>
                <p className="mt-4 leading-relaxed">
                  Our service helps you get more interviews and job offers without the hassle of applying to jobs manually.
                </p>
              </details>
              {/* Repeat the structure above for additional questions */}
            </div>
          </div>
        </section>
        <section className="bg-white py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Have more? Let's catch up over a call</h2>
            <p className="mb-6">
              We understand that you might have questions that are specific to your situation.
              Pick a slot to talk to our founder. Happy to help you out :)
            </p>
            <a href="#" onClick={toggleModal} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12">
                <span className="absolute animate-pulse bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-primary p-1.5 text-xs"></span>
                Talk to founder<span className="group-hover:animate-bounce ml-2">👋</span>
            </a>

          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Many kickass investors believe in our mission.</h2>
            <p className="mb-12 text-center">All of them are top of their game in Careers and Immigration. Here are a couple of them.</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
              <img
  alt="Investor 1"
  src="/Mark.jpeg"
  className="w-64 h-64 md:w-64 md:h-64 rounded-full inline-block"
  style={{ border: '3px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
/>

                <h3 className="text-lg font-semibold mt-4">Mark Benliyan | Software Engineer</h3>
                <div className="flex justify-center space-x-2 mt-2">
                <a className="text-gray-400 hover:text-gray-500" href="#">
                  <LinkedinIcon className="h-6 w-6" />
                </a>
                <a className="text-gray-400 hover:text-gray-500" href="#">
                  <InstagramIcon className="h-6 w-6" />
                </a>
                </div>
              </div>
              
        
              <div className="text-center">
                <img
                  alt="Investor 1"
                  src="/Rishi.jpeg"
                  className="w-64 h-64 md:w-64 md:h-64 rounded-full inline-block"
                  style={{ border: '3px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                />
                <h3 className="text-lg font-semibold mt-4">Rishi Jain | Founder (Digital Scholar)</h3>
                <div className="flex justify-center space-x-2 mt-2">
                <a className="text-gray-400 hover:text-gray-500" href="#">
                  <LinkedinIcon className="h-6 w-6" />
                </a>
                <a className="text-gray-400 hover:text-gray-500" href="#">
                  <InstagramIcon className="h-6 w-6" />
                </a>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f8fa] py-16">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 leading-snug">
      Why are we doing this?
    </h2>
    <p className="text-gray-800 text-lg mb-6">
      The current US job market is incredibly challenging. Job search has become one of the most stressful phases in our lives, especially for recent graduates or those affected by layoffs. We believe it doesn't have to be this way.
    </p>
    <p className="text-gray-800 text-lg mb-6">
      Proper networking and applying to countless jobs seem like the only paths to employment, but the repetitive process and low success rates can be disheartening. We're here to introduce a smarter approach.
    </p>
    <p className="text-gray-800 text-lg mb-8">
      While we can't overhaul the system, we can revamp how we navigate it. Our platform streamlines the job application process, making your job search more effective and significantly less stressful.
    </p>
    <div className="inline-block mb-8">
      <p className="text-gray-600 italic">— Anshul Jain</p>
      <p className="text-gray-600">Co-Founder & Clarkson University Grad</p>
    </div>
    <div className="mt-10 flex">
    <button className="inline-flex mr-4 items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800">
    Explore Platform
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="md:ml-1 h-5 w-5 text-gray-400  animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="-ml-3 h-5 w-5 animate-pulse">
        <path d="m9 18 6-6-6-6"></path>
    </svg>
</button>
<a href="#" onClick={toggleModal} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12">
                <span className="absolute animate-pulse bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-primary p-1.5 text-xs"></span>
                Talk to founder<span className="group-hover:animate-bounce ml-2">👋</span>
            </a>

        </div>
  </div>
</section>

{isOpen && <ContactModal onClose={toggleModal} />}

      </main>
      <footer className="bg-[#12083b]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-white">
                Made with <HeartIcon className="text-white inline" /> by Anshul Jain{""}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a className="text-base text-white hover:text-gray-900" href="#">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white hover:text-gray-900" href="#">
                      Wall of Love
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white hover:text-gray-900" href="#">
                      Join as an Affiliate
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Resources</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a className="text-base text-white hover:text-gray-900" href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-white hover:text-gray-900" href="#">
                      AI copilot
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Follow Us On:</h3>
              <div className="mt-4 flex space-x-6">
                <a className="text-gray-400 hover:text-gray-500" href="#">
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a className="text-gray-400 hover:text-gray-500" href="#">
                  <LinkedinIcon className="h-6 w-6" />
                </a>
                {/* <a className="text-gray-400 hover:text-gray-500" href="#">
                  <TwitterIcon className="h-6 w-6" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default HomePage;

function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
  
  function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    )
  }
  
  function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }