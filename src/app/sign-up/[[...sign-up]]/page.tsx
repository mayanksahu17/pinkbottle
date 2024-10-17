"use client";
import { SignUp, useSignUp } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function Page() {
  const { isLoaded, signUp } = useSignUp();

  useEffect(() => {
    if (isLoaded && signUp && signUp.status === 'complete') {
      const handleSignUpComplete = async () => {
        try {
          // Call your webhook or backend API route to handle additional processes
          const response = await fetch('/api/webhooks/users', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: signUp.createdUserId }), // Valid Clerk property
          });

          if (!response.ok) {
            throw new Error('Failed to call the webhook route');
          }

          // Send additional email after sign-up
          const emailResponse = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: signUp.emailAddress, // Email from sign-up data
              name: signUp.username || 'User', // Full name or a placeholder
            }),
          });

          if (!emailResponse.ok) {
            throw new Error('Failed to send email');
          }

          console.log('Email sent successfully');
        } catch (error) {
          console.error('Error during sign-up completion:', error);
        }
      };

      handleSignUpComplete();
    }
  }, [isLoaded, signUp]);

  return (
    <div className="flex items-center justify-center flex-col gap-10 bg-white min-h-screen w-full">
      <SignUp
        afterSignUpUrl="/dashboard"
        afterSignInUrl="/dashboard"
        redirectUrl="/"
      />
    </div>
  );
}
