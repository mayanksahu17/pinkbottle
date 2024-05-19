"use client";
import { Button } from "@/components/ui/button";
import React, { SVGProps, useEffect, useState } from "react";
import { UserButton, auth, useUser } from "@clerk/nextjs";
import Link from "next/link";
import styles from "../Button.module.css";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import Marquee from "react-fast-marquee";
import { ContactModal } from "../contactModal";
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

type WindowSize = {
  width: number | undefined;
};

// Custom hook to check window width
const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    // Set the size initially on client-side
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Walloflove = () => {
    const { width } = useWindowSize();
    const isMobile = width !== undefined && width < 768;
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);


  const testimonials = [
    {
      imgSrc: "/Whatsappone.jpeg",
      // caption: 'A quick highlight from testimonial 1...',
    },
    {
      imgSrc: "/Whatsapptwo.jpeg",
      // caption: 'A quick highlight from testimonial 2...',
    },
    {
      imgSrc: "/Whatsappone.jpeg",
      // caption: 'A quick highlight from testimonial 1...',
    },
    {
      imgSrc: "/Whatsapptwo.jpeg",
      // caption: 'A quick highlight from testimonial 2...',
    },
    // Add more testimonials as needed
  ];
  return (
    <div
      className="min-h-screen text-black"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <Navbar />
      <main>

      <div className="bg-white py-12">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
    Our clients <span className="text-red-500">❤️</span> us
  </h2>
  <div className="flex flex-wrap justify-center gap-8 px-4">
    <div className="max-w-sm w-full md:w-1/3">
      <img className="w-32 md:w-32 lg:w-32 p-4" src="corelogic.svg" alt="Corelogic.svg" />
      <div className="flex items-center space-x-4 mb-4">
        <img src="/Shubhang_Mall.jpeg?height=40&width=40" alt="Anshul Jain" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">Shubhang Mall</h3>
          <p className="text-sm text-gray-500">Software Engineer, USA</p>
        </div>
      </div>
      <p className="text-gray-600">
      After months of job hunting with no success, I was feeling defeated. I had applied to countless positions but hadn't received any positive responses. Then I discovered HiredEasy. They revamped my resume, crafted tailored cover letters, and handled the application process for me. Within a few weeks, I had two job offers. Their service was a game-changer, helping me secure a fantastic full-time job that meets my financial needs and offers career growth opportunities.
      </p>
    </div>
    <div className="max-w-sm w-full md:w-1/3">
      <img className="w-32 md:w-32 lg:w-32 p-4" src="clear_street.svg" alt="Company Logo" />
      <div className="flex items-center space-x-4 mb-4">
        <img src="/trevor_jones.jpeg?height=50&width=50" alt="Nikhil Jain" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">Trevor Jones</h3>
          <p className="text-sm text-gray-500">Backend Software Engineer, USA</p>
        </div>
      </div>
      <p className="text-gray-600">
        As I work full time and could not spare much time for applying jobs. Applying each job is such a painful
        process sometimes it takes more than 15 minutes for one application. I got tired and demotivated after a
        week of applying by myself. I heard of 'Hirelynow.com' where they apply for your jobs online. Team did a great
        help in applying jobs and always available to talk. They followed my priority in applying jobs as well.
      </p>
    </div>
    <div className="max-w-sm w-full md:w-1/3">
      <img className="w-32 md:w-32 lg:w-32 p-4" src="microsoft.png" alt="Company Logo" />
      <div className="flex items-center space-x-4 mb-4">
        <img src="/sakshi_mehra.jpeg?height=40&width=40" alt="Sakashi Mehra" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">Sakshi Mehra</h3>
          <p className="text-sm text-gray-500">Software Engineer, USA</p>
        </div>
      </div>
      <p className="text-gray-600">
      After graduating from UB, I was searching for a job that could sponsor my H1B visa. The process was overwhelming and challenging. Then I found HiredEasy. They helped me streamline my job search and provided referrals. Thanks to their support, I received an offer from Microsoft. Their assistance made all the difference.
      </p>
    </div>
    <div className="max-w-sm w-full md:w-1/3">
      <img className="w-32 md:w-32 lg:w-32 p-4" src="wex.svg" alt="Company Logo" />
      <div className="flex items-center space-x-4 mb-4">
        <img src="/Anshul.jpeg?height=40&width=40" alt="Anshul Jain" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">Anshul</h3>
          <p className="text-sm text-gray-500">Software Engineer, USA</p>
        </div>
      </div>
      <p className="text-gray-600">
      I was looking for an internship and applied to over 300 positions on my own, but nothing worked out. Then I found HiredEasy. They updated my resume, wrote cover letters, and applied for jobs for me. Soon, I received two offer letters. Investing in their service was worth it because I got a great internship that covers both my student loan and living expenses.
      </p>
    </div>
    <div className="max-w-sm w-full md:w-1/3">
      <img className="w-32 md:w-32 lg:w-32 p-4" src="spglobal.svg" alt="Company Logo" />
      <div className="flex items-center space-x-4 mb-4">
        <img src="/bhavesh.jpeg?height=40&width=40" alt="Axel Fratoni" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">Bhavesh Kewalramani</h3>
          <p className="text-sm text-gray-500">Dealer Relations Associate, Canada</p>
        </div>
      </div>
      <p className="text-gray-600">
      When I moved from India to Canada, I quickly realized that the job market operated very differently. Navigating the job search process was confusing, and applying to positions felt overwhelming. Just when I was about to give up, I discovered Hirelynow.com. They guided me through the entire process and helped me target the right opportunities. With their support, I secured a great job. thanks to the time they saved me.
      </p>
    </div>
    <div className="max-w-sm w-full md:w-1/3">
      <img className="w-32 md:w-32 lg:w-32 p-4" src="microsoft.png" alt="Company Logo" />
      <div className="flex items-center space-x-4 mb-4">
        <img src="/axel_fratoni.jpeg?height=40&width=40" alt="Axel Fratoni" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">Axel Fratoni</h3>
          <p className="text-sm text-gray-500">Software Developer II, USA</p>
        </div>
      </div>
      <p className="text-gray-600">
      Due to my demanding job, I didn't have the time to apply for new positions. HiredEasy's assistance was invaluable. They helped me filter opportunities and made sure to match my preferences. Their support allowed me to focus on my career while they handled the job search process.
      </p>
    </div>
    <div className="max-w-sm w-full md:w-1/3">
      <img className="w-32 md:w-32 lg:w-32 p-4" src="FIS.png" alt="Company Logo" />
      <div className="flex items-center space-x-4 mb-4">
        <img src="/Gaurav.png?height=40&width=40" alt="Gaurav Jain" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">Gaurav Jain</h3>
          <p className="text-sm text-gray-500">Consultant, Canada</p>
        </div>
      </div>
      <p className="text-gray-600">
      The current job market in Canada is tough, especially with the ongoing recession. I needed to switch jobs to get my visa sponsored, but my full-time job left me with no time to job hunt. That's when I discovered HiredEasy. They took over the application process for me and provided invaluable support. Thanks to their help, I was able to secure a job that sponsors my visa.
      </p>
    </div>
    <div className="max-w-sm w-full md:w-1/3">
      <img className="w-32 md:w-32 lg:w-32 p-4" src="servicenow.svg" alt="Company Logo" />
      <div className="flex items-center space-x-4 mb-4">
        <img src="/Eswar.jpeg?height=40&width=40" alt="Eswar Ramani" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">Eswar Ramani</h3>
          <p className="text-sm text-gray-500">Consultant, USA</p>
        </div>
      </div>
      <p className="text-gray-600">
      When I graduated, the recession had just started, making the job market incredibly tough. Balancing my job search with the challenging economic climate was overwhelming. That's when I found HiredEasy. They created custom resumes and cover letters for me, tailored to each job I applied for. Their help was invaluable and made a huge difference. Thanks to HiredEasy, I managed to secure a job even during the recession.
      </p>
    </div>
    
  </div>
</div>

      </main>
      <Footer />

    </div>
        
      );
};

export default Walloflove;
