import DashboardPage from '../../components/dashboard/dashboard';
import usePaymentStatus from '../../hooks/usePaymentStatus';
import { getStudentById } from '../../lib/actions/users/user.actions';
import { auth, currentUser } from '@clerk/nextjs';
import React from 'react';

export default async function Dashboard() {
  const paymentStatus = await usePaymentStatus();
  // console.log('paymentStatus', paymentStatus);
  const isPaidUser = paymentStatus === 'Paid' ? true : true; //false
  const user = await currentUser();
  const { sessionClaims } = auth();
  const userID = (sessionClaims?.userID || sessionClaims?.sub) as string;
  // console.log('called from dashboardPage', sessionClaims);
  const res = await getStudentById(userID);
  const jobs = res?.data?.jobs;
  const resume = res?.data?.resume;
  const cover = res?.data?.coverLetter;

  return (
    <main>
      <DashboardPage
        cover={cover}
        resume={resume}
        firstName={user?.firstName!}
        jobs={jobs}
        isPaidUser={isPaidUser}
      />{' '}
      {/* Correct component usage */}
    </main>
  );
}
