import { Button } from "@/components/ui/button"
import { auth } from "@clerk/nextjs"
import { UserButton } from "@clerk/nextjs/app-beta"
import Link from "next/link"
import { deprecate } from "util"
import styles from './Button.module.css';

export async function UserReviewV2() {
  const { userId } = auth()

  return (
    <div key="1" className="bg-white text-gray-900">
      <header className="flex items-center justify-between p-4 border-b border-gray-200">

        <img
          alt="Scale.jobs Logo"
          className="h-10"
          src="/Clarksonlogo.png"
          style={{ aspectRatio: "120/40", objectFit: "cover" }}
        />
        <nav className="flex gap-4 items-center">
          <a className="text-sm font-medium text-gray-500 hover:text-green-600" href="/about">
            About Us
          </a>
          <a className="text-sm font-medium text-gray-500 hover:text-green-600" href="#">
            How it works
          </a>
          <a className="text-sm font-medium text-gray-500 hover:text-green-600" href="/pricing">
            Pricing
          </a>
          <a href="/chatBox" className="text-sm bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700">
            Try the Copilot Free
          </a>
        </nav>
        <div>
          {userId ? (
            <div className="flex gap-4 items-center">
              <Link href="/dashboard">Dashboard</Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="space-x-4">
              <a href='/sign-in' className="text-sm">
                Login
              </a>
              <a href='/sign-up' className="text-sm">Sign Up</a>
            </div>
          )}
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
<a href="https://apply.neetocal.com/meeting-with-anshul-jain" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12" aria-haspopup="dialog" aria-expanded="false">
  <span className="absolute animate-pulse bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-primary p-1.5 text-xs"></span>
  Talk to founder<span className="group-hover:animate-bounce ml-2">👋</span>
</a>

        </div>
            </div>
            <img
              alt="Person using laptop"
              className="rounded-lg shadow-xl"
              src="/baner.webp"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </section>

    <section className="py-24 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12 text-gray-800">Trusted by folks from</h2>
        <div className={`${styles.scrollerContainer} inline-flex w-full flex-nowrap`}>
          <ul className={`${styles.animateInfiniteScroll} flex items-center justify-center md:justify-start`}>
  <li><img className="w-32 mx-8" src="/Clarksonlogo.png" alt="Logo"/></li>
  <li><img className="w-32 mx-8" src="/usalogo.png" alt="Logo"/></li>
  <li><img className="w-32 mx-8" src="/ohiologo.webp" alt="Logo"/></li>
  <li><img className="w-32 mx-8" src="/bsc.svg" alt="Logo"/></li>
  {/* Repeat the logos again for smooth infinite scroll */}
  <li><img className="w-32 mx-8" src="/Clarksonlogo.png" alt="Logo"/></li>
  <li><img className="w-32 mx-8" src="/usalogo.png" alt="Logo"/></li>
  <li><img className="w-32 mx-8" src="/ohiologo.webp" alt="Logo"/></li>
  <li><img className="w-32 mx-8" src="/bsc.svg" alt="Logo"/></li>
</ul>
      </div>
  </div>
</section>


        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 ">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 lg:col-span-8 pr-30">
            <div style={{ position: 'relative', paddingBottom: '65.0994575045208%', height: 0 }}>
  <iframe 
    src="https://www.loom.com/embed/e666d444912645a08ebaf957573682a4?sid=4eb7374d-c1f0-40b7-b6ae-880111a2d901" 
    frameBorder="0" 
    allowFullScreen
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
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
                  <a href="https://apply.neetocal.com/meeting-with-anshul-jain" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12" aria-haspopup="dialog" aria-expanded="false">
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
<a href="https://apply.neetocal.com/meeting-with-anshul-jain" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12" aria-haspopup="dialog" aria-expanded="false">
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
              src="/placeholder.svg" // Replace with the path to the person's image
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Anshul Jain</h3>
          <p className="text-gray-600">Career Strategist</p>
          <p className="text-gray-500 mt-4">"It is personally gratifying to see my clients landing in their full time after a long hustle"</p>
        </div>
      </div>
      {/* ... other cards ... */}
      <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out">
        <div className="p-6 text-center">
          <div className="w-28 h-28 mx-auto mb-6 bg-gradient-to-r from-green-400 to-blue-600 rounded-full overflow-hidden border-4 border-white">
            <img
              alt="Anshul Jain"
              className="w-full h-full object-cover object-center"
              src="/placeholder.svg" // Replace with the path to the person's image
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Anshul Jain</h3>
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
              src="/placeholder.svg" // Replace with the path to the person's image
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Anshul Jain</h3>
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
              src="/placeholder.svg" // Replace with the path to the person's image
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Anshul Jain</h3>
          <p className="text-gray-600">Career Strategist</p>
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
    src="/vettingone.webp" // Replace with your image path
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
    src="/vettingtwo.webp" // Replace with your image path
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
    src="/vettingthree.webp" // Replace with your image path
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
<a href="https://apply.neetocal.com/meeting-with-anshul-jain" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12" aria-haspopup="dialog" aria-expanded="false">
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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
      {/* Example testimonial card */}
      {Array.from({ length: 4 }).map((_, index) => (
        <div className="group">
          <div className="text-center mb-4">
            <figure className="relative">
              <img
                src={`/testimonial${index + 1}.jpeg`}
                alt={`Testimonial ${index + 1}`}
                className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                style={{ aspectRatio: "250/400", objectFit: "cover" }}
              />
              <figcaption className="mt-2 text-sm">"A quick highlight from the testimonial..."</figcaption>
            </figure>
          </div>
        </div>
      ))}
    </div>
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
            <a href="https://apply.neetocal.com/meeting-with-anshul-jain" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12" aria-haspopup="dialog" aria-expanded="false">
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
  src="/wing2.jpeg"
  className="w-64 h-64 md:w-64 md:h-64 rounded-full inline-block"
  style={{ border: '3px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
/>

                <h3 className="text-lg font-semibold mt-4">Prithesh Jagani (Yudi J)</h3>
                <div className="flex justify-center space-x-2 mt-2">
                  <a href="#" className="text-blue-600">LinkedIn</a>
                  <a href="#" className="text-pink-500">Instagram</a>
                  <a href="#" className="text-red-600">YouTube</a>
                </div>
              </div>
              
        
              <div className="text-center">
                <img
                  alt="Investor 1"
                  src="/wing2.jpeg"
                  className="w-64 h-64 md:w-64 md:h-64 rounded-full inline-block"
                  style={{ border: '3px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                />
                <h3 className="text-lg font-semibold mt-4">Soundarya Balasubramani</h3>
                <div className="flex justify-center space-x-2 mt-2">
  <a href="#" className="text-pink-500 text-2xl">📸</a>
  <a href="#" className="text-blue-600 text-2xl">💼</a> 
  <a href="#" className="text-red-600 text-2xl">▶️</a>
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
<a href="https://apply.neetocal.com/meeting-with-anshul-jain" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-gray-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 relative group md:font-bold px-4 md:px-6 border-2 rounded-xl md:text-md md:h-12" aria-haspopup="dialog" aria-expanded="false">
  <span className="absolute animate-pulse bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-primary p-1.5 text-xs"></span>
  Talk to founder<span className="group-hover:animate-bounce ml-2">👋</span>
</a>

        </div>
  </div>
</section>



      </main>
     <footer className="custom-footer-bg text-black-400 py-12">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
    <div>
      <img
        alt="Scale.jobs Logo"
        className="mx-auto md:mx-0 h-12 mb-4"
        src="/Clarksonlogo.png"
        style={{ aspectRatio: "120/40", objectFit: "contain" }}
      />
      <p className="text-sm">Made with ❤️ by Anshul. We are hiring!</p>
    </div>
    <div className="flex flex-col md:flex-row justify-around">
      <div>
        <h3 className="text-white font-semibold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a className="hover:text-white" href="#">About Us</a></li>
          <li><a className="hover:text-white" href="#">Blog</a></li>
          <li><a className="hover:text-white" href="#">Jobs</a></li>
          <li><a className="hover:text-white" href="#">Press</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-4">Resources</h3>
        <ul className="space-y-2">
          <li><a className="hover:text-white" href="#">Help Center</a></li>
          <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
          <li><a className="hover:text-white" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
    <div>
      <h3 className="text-white font-semibold mb-4">Follow Us</h3>
      <div className="flex justify-center md:justify-start gap-4">
        {/* Replace with actual SVG icons */}
        <a href="#" className="hover:text-white">FB</a>
        <a href="#" className="hover:text-white">TW</a>
        <a href="#" className="hover:text-white">LI</a>
      </div>
    </div>
  </div>
</footer>


    </div>
  )
}
