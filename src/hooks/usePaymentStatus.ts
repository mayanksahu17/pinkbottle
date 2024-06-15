"use server"
import { getStudentById } from '@/lib/actions/users/user.actions';
import { auth } from '@clerk/nextjs';

const usePaymentStatus = async () => {
    const { sessionClaims } = auth();
    // const id = sessionClaims?.userID as string;
    const id = (sessionClaims?.userID || sessionClaims?.sub) as string;
    console.log("Called from usePaymentStatus", sessionClaims);
    const user = await getStudentById(id);
    const paymentStatus = user?.data?.payment?.status;
    console.log("paymentStatus from hook",paymentStatus);
    return paymentStatus;
}

export default usePaymentStatus
