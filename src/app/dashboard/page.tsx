import DashboardPage from "@/components/dashboard/dashboard";
import usePaymentStatus from "@/hooks/usePaymentStatus";
import { getStudentById } from "@/lib/actions/users/user.actions";
import { auth, currentUser } from "@clerk/nextjs";
import React from "react";

export default async function Dashboard() {
    const paymentStatus = await usePaymentStatus();
    console.log("paymentStatus", paymentStatus);
    const isPaidUser = paymentStatus === 'Paid' ? true : false    
    const user = await currentUser();
    const { sessionClaims } = auth();
    const userID = (sessionClaims?.userID || sessionClaims?.sub) as string;
    console.log("called from dashboardPage", sessionClaims);
    const res = await getStudentById(userID);
    const jobs = res?.data?.jobs;
    const resume = res?.data?.resume;
    const cover = res?.data?.coverLetter;
    
    return (
      <main>
        <DashboardPage cover={cover} resume={resume} firstName={user?.firstName!} jobs={jobs} isPaidUser={isPaidUser} /> {/* Correct component usage */}
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