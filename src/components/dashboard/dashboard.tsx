// "use client";
// import { Button } from "@/components/ui/button";
// import { UserButton, auth, useUser } from "@clerk/nextjs";
// import React, { useState } from "react";
// import { CiLock } from "react-icons/ci";
// import DashboardMain from "./dashboard-main";
// import Warmup from "../Interview/warmup";
// import Resume from "../profile/resume";
// import JobsMain from "../jobs/jobs-main";
// import { Jobs } from "@/lib/database/models/User/types";
// import { redirect, useRouter } from "next/navigation";
// import Navbar from "../navbar/navbar";

// const DashboardPage = ({ isPaidUser, jobs, firstName , resume, cover}: { isPaidUser: boolean, jobs:Jobs[], firstName:string , resume:string, cover: string}) => {
//   const {user} = useUser();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isAsideMenuOpen, setIsAsideMenuOpen] = useState(false);
//   const [currentTab, setCurrentTab] = useState<'dashboard'|'jobs'|'call'|'profile'|'interview'>('dashboard');
//   const router = useRouter();
//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//     if (!isMenuOpen) setIsAsideMenuOpen(false);
//   };
//   const toggleAsideMenu = () => {
//     setIsAsideMenuOpen(!isAsideMenuOpen);
//     if (!isAsideMenuOpen) setIsMenuOpen(false);
//   };

//   return (
//     <div
//       className="min-h-screen text-black"
//       style={{ backgroundColor: "#FAF6F6" }}
//     >
//       <Navbar />
//       <div className="flex">
//         <div className="relative z-5 md:hidden">
//           <button
//             className="text-gray-600 focus:outline-none absolute top-0 left-0 mt-4 ml-4"
//             onClick={toggleAsideMenu}
//           >
//             <svg viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
//               {/* Only show the hamburger icon if the aside menu is not open */}
//               {!isAsideMenuOpen && (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Aside Menu */}
//         <aside
//           className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#f7f7f7] p-4 transform transition-transform duration-300 ease-in-out h-screen ${
//             isAsideMenuOpen ? "translate-x-0" : "-translate-x-full"
//           } md:relative md:translate-x-0 md:block shadow-xl`}
//         >
//           {/* Close Icon inside menu for mobile */}
//           {isAsideMenuOpen && (
//             <button
//               className="text-gray-600 focus:outline-none absolute top-0 right-0 mt-4 mr-4"
//               onClick={toggleAsideMenu}
//             >
//               <svg
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="w-8 h-8"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           )}
//           <nav className="mt-16 flex flex-col space-y-1">
//             {/* Your menu items here */}

//               <Button
//                 className={`justify-start text-sm text-black ${currentTab === 'dashboard'&&'bg-gray-200'}`}
//                 variant="ghost"
//                 onClick={()=> setCurrentTab('dashboard')}
//               >
//                 Dashboard
//               </Button>
//               <Button
//                 className={`justify-start text-sm text-black ${currentTab === 'call'&&'bg-gray-200'}`}
//                 variant="ghost"
//                 onClick={()=> {
//                   router.push("https://apply.neetocal.com/meeting-with-nikhil-jain")

//                 }}

//               >
//                 Call with Founders
//               </Button>
//               <Button
//                 className={`justify-start text-sm text-black ${currentTab === 'call'&&'bg-gray-200'}`}
//                 variant="ghost"
//                 onClick={()=> {
//                   setCurrentTab('interview')}}>
//                 Interview Warmup
//               </Button>
//             <div className="flex items-center">
//               <Button
//                 disabled={!isPaidUser}
//                 className={`justify-start w-full disabled:cursor-not-allowed flex items-center text-sm text-black ${currentTab === 'jobs'&&'bg-gray-200'}`}
//                 variant="ghost"
//                 onClick={()=> setCurrentTab('jobs')}

//               >
//                   Jobs
//               </Button>
//               {!isPaidUser && <CiLock />}
//             </div>
//             <div className="flex items-center">
//               <Button
//                 disabled={!isPaidUser}
//                 className={`justify-start w-full disabled:cursor-not-allowed flex items-center text-sm text-black ${currentTab === 'profile'&&'bg-gray-200'}`}
//                 variant="ghost"
//                 onClick={()=> setCurrentTab('profile')}
//               >
//                 Profile
//               </Button>
//                 {!isPaidUser && <CiLock />}
//             </div>
//             {/* <Button className="justify-start text-sm text-black" variant="ghost">
//             Preferences
//           </Button>
//           <Button className="justify-start text-sm text-black" variant="ghost">
//             Add to chrome
//           </Button> */}
//           </nav>
//         </aside>
//         {currentTab==='dashboard'&&<DashboardMain isPaidUser={isPaidUser} />}
//         {currentTab==='profile'&&<Resume resume={resume} cover={cover} />}
//         {currentTab==='jobs'&&<JobsMain jobs={jobs || []} firstName={firstName} />}
//         {currentTab === 'interview' && <Warmup />}
//       </div>
//     </div>
//   );
// };
// export default DashboardPage;

"use client";
import { Button } from "@/components/ui/button";
import { UserButton, auth, useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import DashboardMain from "./dashboard-main";
import Warmup from "../Interview/warmup";
import Resume from "../profile/resume";
import JobsMain from "../jobs/jobs-main";
import { Jobs } from "@/lib/database/models/User/types";
import { redirect, useRouter } from "next/navigation";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const DashboardPage = ({
  isPaidUser,
  jobs,
  firstName,
  resume,
  cover,
}: {
  isPaidUser: boolean;
  jobs: Jobs[];
  firstName: string;
  resume: string;
  cover: string;
}) => {
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAsideMenuOpen, setIsAsideMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("dashboard");
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (!isMenuOpen) setIsAsideMenuOpen(false);
  };

  const toggleAsideMenu = () => {
    setIsAsideMenuOpen((prev) => !prev);
    if (!isAsideMenuOpen) setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className="min-h-screen text-black"
        style={{ backgroundColor: "#FAF6F6" }}
      >
        <Navbar />
        <div className="flex">
          <div className="relative z-5 md:hidden">
            <button
              className="text-gray-600 focus:outline-none absolute top-0 left-0 mt-4 ml-4"
              onClick={toggleAsideMenu}
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                {!isAsideMenuOpen && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <aside
            className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#f7f7f7] p-4 transform transition-transform duration-300 ease-in-out h-screen ${
              isAsideMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:relative md:translate-x-0 md:block shadow-xl`}
          >
            {isAsideMenuOpen && (
              <button
                className="text-gray-600 focus:outline-none absolute top-0 right-0 mt-4 mr-4"
                onClick={toggleAsideMenu}
              >
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
            <nav className="mt-16 flex flex-col space-y-1">
              <Button
                className={`justify-start text-sm text-black ${
                  currentTab === "dashboard" && "bg-gray-200"
                }`}
                variant="ghost"
                onClick={() => setCurrentTab("dashboard")}
              >
                Dashboard
              </Button>
              <Button
                className={`justify-start text-sm text-black ${
                  currentTab === "call" && "bg-gray-200"
                }`}
                variant="ghost"
                onClick={() =>
                  router.push(
                    "https://apply.neetocal.com/meeting-with-nikhil-jain"
                  )
                }
              >
                Call with Founders
              </Button>
              <Button
                className={`justify-start text-sm text-black ${
                  currentTab === "interview" && "bg-gray-200"
                }`}
                variant="ghost"
                onClick={() => setCurrentTab("interview")}
              >
                Interview Warmup
              </Button>
              <div className="flex items-center">
                <Button
                  disabled={!isPaidUser}
                  className={`justify-start w-full disabled:cursor-not-allowed flex items-center text-sm text-black ${
                    currentTab === "jobs" && "bg-gray-200"
                  }`}
                  variant="ghost"
                  onClick={() => setCurrentTab("jobs")}
                >
                  Jobs
                </Button>
                {!isPaidUser && <CiLock />}
              </div>
              <div className="flex items-center">
                <Button
                  disabled={!isPaidUser}
                  className={`justify-start w-full disabled:cursor-not-allowed flex items-center text-sm text-black ${
                    currentTab === "profile" && "bg-gray-200"
                  }`}
                  variant="ghost"
                  onClick={() => setCurrentTab("profile")}
                >
                  Profile
                </Button>
                {!isPaidUser && <CiLock />}
              </div>
            </nav>
          </aside>
          {currentTab === "dashboard" && (
            <DashboardMain isPaidUser={isPaidUser} />
          )}
          {currentTab === "profile" && <Resume resume={resume} cover={cover} />}
          {currentTab === "jobs" && (
            <JobsMain jobs={jobs || []} firstName={firstName} />
          )}
          {currentTab === "interview" && <Warmup />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
