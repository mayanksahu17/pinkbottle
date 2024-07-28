import type { Metadata } from 'next';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'HiredEasy',
  description: 'Simplifying Job Application',
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HiredEasy",
  "url": "https://hiredeasy.com",
  // "logo": "https://hiredeasy.com/logo.png", // Make sure this URL is correct
  "sameAs": [
    "https://www.linkedin.com/company/hiredeasy",
    "https://www.instagram.com/hiredeasy" // Make sure this URL is correct
  ],
  "potentialAction": {
    "@type": "Action",
    "name": "Schedule a Call",
    "target": "https://apply.neetocal.com/meeting-with-nikhil-jain" 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
