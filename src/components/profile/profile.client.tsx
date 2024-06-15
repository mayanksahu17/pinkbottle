import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "../navbar/navbar";
import Resume from "./resume";
import ProfileSidebar from "./sidebar";
import { getStudentById } from "@/lib/actions/users/user.actions";
import { auth } from "@clerk/nextjs";
import usePaymentStatus from "@/hooks/usePaymentStatus";

const Profile = async () => {
  const paymentStatus = await usePaymentStatus();
  const {sessionClaims} = auth();
  const userId = (sessionClaims?.userID || sessionClaims?.sub) as string;
  const user = await getStudentById(userId);
  const {data} = user;
  
  if (paymentStatus === 'Unpaid' || !paymentStatus) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-[20rem]">
          <div className="text-black">
            <p className="text-2xl font-semibold tracking-tighter">You have to be our pro member to explore this section.</p>
            <Link href="/pricing"><Button className="bg-[#2d9c56] hover:bg-[#15803D] text-white mt-3">Explore Pricing</Button></Link>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="flex">
          <ProfileSidebar />
          <Resume resume={data.resume} />
        </div>
      </div>
    );
};

export default Profile;
