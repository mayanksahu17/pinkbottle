"use server"
import { getStudentById } from '@/lib/actions/users/user.actions';
import { auth } from '@clerk/nextjs';

const usePaymentStatus = async () => {
    const { sessionClaims } = auth();
    const id = sessionClaims?.userID as string;
    console.log("I am session claim", sessionClaims);
    const user = await getStudentById(id);
    const paymentStatus = user?.data?.payment?.status;
    console.log("paymentStatus from hook",paymentStatus);
    return paymentStatus;
}

export default usePaymentStatus
