"use client"

import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LinkedInLogoIcon } from "@radix-ui/react-icons"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import Testimonials from './review'

const testimonials = [
  {
    name: "Vartika P",
    role: "Software Engineer, USA",
    company: "Visa",
    linkedIn: "https://www.linkedin.com/in/vartikajai/",
    image: "/vartika.png",
    logo: "Visa.png",
    content: "After months of job hunting with no success, I was feeling defeated. I had applied to countless positions but hadn't received any positive responses. Then I discovered HiredEasy. They revamped my resume, crafted tailored cover letters, and handled the application process for me. Within a few weeks, I had two job offers. Their service was a game-changer, helping me secure a fantastic full-time job that meets my financial needs and offers career growth opportunities."
  },
  {
    name: "Yogalakshmi V",
    role: "Backend Software Engineer Intern, USA",
    company: "SGS",
    linkedIn: "https://www.linkedin.com/in/vyoag/",
    image: "/yoag.png",
    logo: "sgs.png",
    content: "I had a tough time finding an internship this summer and was really worried as the end of summer got closer. Despite my efforts, I just couldn't secure anything. Then I found HireEasy, and they helped me out a lot. Within 10 days of working with them, I got an internship. I'm so grateful for their support. Thank you, HireEasy, for turning things around for me."
  },
  {
    name: "Siddharth J",
    role: "Software Engineer, USA",
    company: "Meta",
    linkedIn: "https://www.linkedin.com/in/siddharth-j-795020208/",
    image: "/nannu.png",
    logo: "Meta.png",
    content: "After not getting a PPO from AMD, I fell into a deep depression. I wasted a year, and my OPT was about to expire and I was ready to go back to India. My situation seemed hopeless. 🛫 Hiredeasy helped me in filtering and applying applications using referrals and cold emails. I received 4 offer from all the tech companies."
  },
  {
    name: "Anshul J",
    role: "Software Engineer, USA",
    company: "WEX",
    linkedIn: "https://www.linkedin.com/in/zanshul/",
    image: "/Anshul.jpeg",
    logo: "wex.svg",
    content: "I was looking for an internship and applied to over 300 positions on my own, but nothing worked out. Then I found HiredEasy. They updated my resume, wrote cover letters, and applied for jobs for me. Soon, I received two offer letters. Investing in their service was worth it because I got a great internship that covers both my student loan and living expenses."
  },
  {
    name: "Sagar Soni",
    role: "Business Intelligence Engineer, USA",
    company: "EMS Pro",
    linkedIn: "https://www.linkedin.com/in/sagarsoni2611/",
    image: "/Sagar.jpeg",
    logo: "EMS.png",
    content: "I have known Hiredeasy for a long time, and they have helped me secure two positions. Initially, I joined Capital One, and after a year, I transitioned to EMS Pro with their support. I truly appreciate and admire the work they do. Their dedication and expertise in job placement are unparalleled, and I am incredibly grateful for their assistance in advancing my career."
  },
  {
    name: "Gaurav Gupta",
    role: "Consultant, Canada",
    company: "FIS",
    linkedIn: "",
    image: "/Gaurav.png",
    logo: "FIS.png",
    content: "The current job market in Canada is tough, especially with the ongoing recession. I needed to switch jobs to get my visa sponsored, but my full-time job left me with no time to job hunt. That's when I discovered HiredEasy. They took over the application process for me and provided invaluable support. Thanks to their help, I was able to secure a job that sponsors my visa."
  },
];

export default function PremiumWallOfLove() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 sm:p-12 md:p-16">
      <Navbar/>
      <h1 className="text-[5rem] font-bold text-center text-gray-800 mt-5">
        Our clients <span className="text-red-500 ">❤️</span> us
      </h1> 
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Discover how HiredEasy has transformed careers and opened doors to new opportunities for professionals across various industries.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5 mx-7">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
            <CardHeader className="p-4 bg-green-50 border-b border-green-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-grow">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full border border-green-200" />
                  <div className="ml-3 overflow-hidden">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <p className="text-sm font-medium text-gray-900 truncate cursor-pointer">{testimonial.name}</p>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="flex justify-between space-x-4">
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold">{testimonial.name}</h4>
                            <p className="text-sm">{testimonial.role}</p>
                            <div className="flex items-center pt-2">
                              <span className="text-xs text-muted-foreground">
                                Hired at {testimonial.company}
                              </span>
                            </div>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                    <p className="text-xs text-gray-600 truncate">{testimonial.role}</p>
                  </div>
                </div>
                <a href={testimonial.linkedIn} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors duration-200 mx-2">
                  <LinkedInLogoIcon className="w-5 h-5" />
                </a>
                <img src={testimonial.logo} alt={testimonial.company} className="h-6" />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <ScrollArea className="h-48 pr-4">
                <p className="text-sm text-gray-700 leading-relaxed">{testimonial.content}</p>
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

