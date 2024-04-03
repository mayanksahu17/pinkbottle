import { UserButton, auth, currentUser } from "@clerk/nextjs";
import Link from "next/link";

export async function Works() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        You are not logged in
      </div>
    )
  }
  return (
    <><div className="min-h-screen text-black" style={{ backgroundColor: '#FAF6F6' }}>
      <header className="flex items-center justify-between p-4 border-b border-gray-200">

        <img
          alt="Scale.jobs Logo"
          className="h-10"
          src="/Clarksonlogo.png"
          style={{ aspectRatio: "120/40", objectFit: "cover" }} />
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
          <a href="/trial" className="text-sm bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700">
            Try the Copilot Free
          </a>
        </nav>
        <div>
          {userId ? (
            <div className="flex gap-4 items-center">
              <Link href="/dashboard" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 py-2 md:text-lg md:font-light px-4 md:px-6 md:glow-btn rounded-xl md:h-12 shiny-button border border-gray-800">Dashboard</Link>
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
      <><section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-500 px-3 py-1 text-sm dark:bg-black-800 opacity-30">How It Works</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">Your Job Search Journey</h2>
              <p className="max-w-[800px] mx-auto text-gray-500 md:text-xl lg:text-lg xl:text-xl dark:text-gray-400">
                Find your dream job with our easy-to-use platform. Here's a step-by-step guide to help you navigate the
                application process and land the perfect position.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 max-w-xs sm:max-w-4xl lg:max-w-5xl">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700 text-black">
                1
              </div>
              <div className="grid gap-1 text-center">
                <h3 className="text-lg font-bold text-black">Create Account</h3>
                <p className="text-sm text-gray-800 dark:text-gray-400">
                  Begin your journey by create your account and find the opportunities that match your skills and interests.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700 text-black">
                2
              </div>
              <div className="grid gap-1 text-center">
                <h3 className="text-lg font-bold text-black">Complete Payment</h3>
                <p className="text-sm text-gray-800 dark:text-gray-400">
                  Secure Your Access: Finalize your registration by completing your payment. This step ensures full access to all the features and resources available, tailored to enhance your job search and application process.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700 text-black">
                3
              </div>
              <div className="grid gap-1 text-center">
                <h3 className="text-lg font-bold text-black">Build Profile</h3>
                <p className="text-sm text-gray-800 dark:text-gray-400">
                  Craft a comprehensive profile highlighting your skills, experience, and aspirations. This is your opportunity to stand out to potential employers and find matches that resonate with your career goals.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700 text-black">
                4
              </div>
              <div className="grid gap-1 text-center">
                <h3 className="text-lg font-bold text-black">Job Assistant</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Utilize our Job Assistant to effortlessly search and filter opportunities that align with your expertise and interests. This tool is designed to simplify your search and connect you with your ideal job.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700 text-black">
                5
              </div>
              <div className="grid gap-1 text-center">
                <h3 className="text-lg font-bold text-black">Interviews</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  As your applications catch attention, prepare for interviews with potential employers. Our platform will notify you of interview requests and provide the necessary details to ensure you’re fully prepared.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700 text-black">
                6
              </div>
              <div className="grid gap-1 text-center">
                <h3 className="text-lg font-bold text-black">Get Prepared for Interview</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Leverage our comprehensive resources to ace your interviews. From tips on answering common questions to advice on making a lasting impression, we’ve got you covered to ensure you’re prepared and confident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className="text-gray-600 body-font bg-[#f7f8fa]">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font text-center text-gray-900 mb-12">Testimonials</h1>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                  <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="block w-10 h-10 text-blue-500 mb-4">
                      <path d="M6.176 18H8V9.619C5.979 10.057 4.427 11.125 3.344 12.813 2.261 14.501 1.82 16.126 1.82 17.688c0 1.125.207 2.08.621 2.813.414.734 1.098 1.101 2.05 1.101 1.035 0 1.832-.353 2.387-1.062.553-.707.898-1.699 1.034-2.973l1.364.176c-.184 1.619-.68 2.943-1.49 3.973C9.07 23.846 7.863 24.5 6.5 24.5c-1.57 0-2.832-.457-3.787-1.371-.953-.914-1.431-2.098-1.431-3.55 0-1.836.473-3.652 1.42-5.45.947-1.797 2.395-3.176 4.344-4.137V18zm10 0h1.824V9.619c-2.021.438-3.573 1.506-4.656 3.194-.983 1.688-1.424 3.313-1.424 4.875 0 1.125.207 2.08.621 2.813.414.734 1.098 1.101 2.05 1.101 1.035 0 1.832-.353 2.387-1.062.555-.707.898-1.699 1.034-2.973l1.364.176c-.184 1.619-.68 2.943-1.49 3.973-.812 1.028-2.019 1.682-3.382 1.682-1.57 0-2.832-.457-3.787-1.371-.953-.914-1.431-2.098-1.431-3.55 0-1.836.473-3.652 1.42-5.45.947-1.797 2.395-3.176 4.344-4.137V18z" />
                    </svg>
                  </div>
                  <p className="leading-relaxed mb-6 text-gray-600">The process was straightforward and efficient. I found my current job using this platform, and I couldn't be happier!</p>
                  <div className="flex items-center">
                    <div className="flex-grow">
                      <span className="title-font font-medium text-gray-900">Jane Doe</span>
                      <p className="text-gray-500 text-sm">UI Designer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                  <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="block w-10 h-10 text-blue-500 mb-4">
                      <path d="M6.176 18H8V9.619C5.979 10.057 4.427 11.125 3.344 12.813 2.261 14.501 1.82 16.126 1.82 17.688c0 1.125.207 2.08.621 2.813.414.734 1.098 1.101 2.05 1.101 1.035 0 1.832-.353 2.387-1.062.553-.707.898-1.699 1.034-2.973l1.364.176c-.184 1.619-.68 2.943-1.49 3.973C9.07 23.846 7.863 24.5 6.5 24.5c-1.57 0-2.832-.457-3.787-1.371-.953-.914-1.431-2.098-1.431-3.55 0-1.836.473-3.652 1.42-5.45.947-1.797 2.395-3.176 4.344-4.137V18zm10 0h1.824V9.619c-2.021.438-3.573 1.506-4.656 3.194-.983 1.688-1.424 3.313-1.424 4.875 0 1.125.207 2.08.621 2.813.414.734 1.098 1.101 2.05 1.101 1.035 0 1.832-.353 2.387-1.062.555-.707.898-1.699 1.034-2.973l1.364.176c-.184 1.619-.68 2.943-1.49 3.973-.812 1.028-2.019 1.682-3.382 1.682-1.57 0-2.832-.457-3.787-1.371-.953-.914-1.431-2.098-1.431-3.55 0-1.836.473-3.652 1.42-5.45.947-1.797 2.395-3.176 4.344-4.137V18z" />
                    </svg>
                  </div>
                  <p className="leading-relaxed mb-6 text-gray-600">The process was straightforward and efficient. I found my current job using this platform, and I couldn't be happier!</p>
                  <div className="flex items-center">
                    <div className="flex-grow">
                      <span className="title-font font-medium text-gray-900">Jane Doe</span>
                      <p className="text-gray-500 text-sm">UI Designer</p>
                    </div>
                  </div>
                </div>
              </div>
              

              {/* Additional testimonials would follow the pattern of the first */}
            </div>
          </div>
        </section></>
    </div><footer className="custom-footer-bg text-black-400 py-12 bg-[#f2faf4]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left text-black">
          <div>
            <img
              alt="Scale.jobs Logo"
              className="mx-auto md:mx-0 h-12 mb-4"
              src="/Clarksonlogo.png"
              style={{ aspectRatio: "120/40", objectFit: "contain" }} />
            <p className="text-sm">Made with ❤️ by Anshul. We are hiring!</p>
          </div>
          <div className="flex flex-col md:flex-row justify-around">
            <div>
              <h3 className="font-semibold mb-4 text-black">Company</h3>
              <ul className="space-y-2">
                <li><a className="hover:text-white" href="#">About Us</a></li>
                <li><a className="hover:text-white" href="#">Blog</a></li>
                <li><a className="hover:text-white" href="#">Jobs</a></li>
                <li><a className="hover:text-white" href="#">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className=" font-semibold mb-4 text-black">Resources</h3>
              <ul className="space-y-2">
                <li><a className="hover:text-white" href="#">Help Center</a></li>
                <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-white" href="#">Terms</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              {/* Replace with actual SVG icons */}
              <a href="#" className="hover:text-white">FB</a>
              <a href="#" className="hover:text-white">TW</a>
              <a href="#" className="hover:text-white">LI</a>
            </div>
          </div>
        </div>
      </footer></>
  
  )
}
