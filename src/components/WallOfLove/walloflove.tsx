"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Testimonials from "./review";

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  linkedIn: string;
  image: string;
  logo: string;
  content: string;
}

export default function PremiumWallOfLove() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // Fetch testimonials from the API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/testimonials");
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          setTestimonials(data);
        } else {
          console.error("Failed to fetch testimonials");
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8 sm:p-12 md:p-16">
      <Navbar />
      <h1 className="text-[5rem] font-bold text-center text-gray-800 mt-5">
        Our clients <span className="text-red-500 ">❤️</span> us
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Discover how HiredEasy has transformed careers and opened doors to new
        opportunities for professionals across various industries.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5 mx-7">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial._id}
            className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <CardHeader className="p-4 bg-green-50 border-b border-green-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-grow">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border border-green-200"
                  />
                  <div className="ml-3 overflow-hidden">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <p className="text-sm font-medium text-gray-900 truncate cursor-pointer">
                          {testimonial.name}
                        </p>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="flex justify-between space-x-4">
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold">
                              {testimonial.name}
                            </h4>
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
                    <p className="text-xs text-gray-600 truncate">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <a
                  href={testimonial.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-200 mx-2"
                >
                  <LinkedInLogoIcon className="w-5 h-5" />
                </a>
                <img
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className="h-6"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <ScrollArea className="h-48 pr-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {testimonial.content}
                </p>
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
}