import { auth, currentUser } from "@clerk/nextjs";
import React from "react";

import { DashboardPage } from "@/components/dashboard-page";
export default function Dashboard() {
    return (
      <main>
        <DashboardPage /> {/* Correct component usage */}
      </main>
    );
  }


// export default async function DashboardPage(){
//     const { userId } = auth();
//     const user = await currentUser();

//     if(!userId || !user){
//         return(
// <div className="bg-white min-h-screen flex items-center justify-center">
//         You are not logged in
//       </div>
//         ) 
//     }
//     return (
//         <div className='flex items-center justify-center flex-col gap-10 bg-white min-h-screen w-full text-black'>
//   <h1 className='text-4xl font-bold'>Welcome</h1>
//   <ul className='list-none mt-10'>
//     <li className='mb-2 border border-gray-400 p-2 rounded'>
//       <span className='font-semibold'>First Name:</span> {user.firstName}
//     </li>
//     <li className='mb-2 border border-gray-400 p-2 rounded'>
//       <span className='font-semibold'>Last Name:</span> {user.lastName}
//     </li>
//     <li className='mb-2 border border-gray-400 p-2 rounded'>
//       <span className='font-semibold'>Email:</span> {user.emailAddresses[0].emailAddress}
//     </li>
//   </ul>
// </div>
//       );
// }