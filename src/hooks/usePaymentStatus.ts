"use server"
import { getStudentById } from '@/lib/actions/users/user.actions';
import { auth } from '@clerk/nextjs';

const usePaymentStatus = async () => {
    const { sessionClaims } = auth();
    const id = sessionClaims?.userID as string;
    const user = await getStudentById(id);
    const paymentStatus = user?.data?.payment?.status;
    return paymentStatus
}

export default usePaymentStatus
