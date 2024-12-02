"use client";
import React, { useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      quote: "\"This is the survival kit I wish I had when I was starting out building apps.\"",
      author: "Shagun Sodhani",
      role: "Founder of SavvyCal",
      image: "/Shagun.jpg"
    },
    {
      stars: 5,
      quote: "\"This book is fantastic for engineers learning how to design.\"",
      author: "Riya Patel",
      role: "Founder of Clearbit",
      image: "/Riya_Patel.png"
    },
    {
      stars: 5,
      quote: "\"This book Refactoring UI is a no-brainer for anyone in the web industry.\"",
      author: "Anjali Chakradhar",
      role: "Co-founder of Transistor",
      image: "/Anjali.png"
    },
    {
      stars: 4,
      quote: "\"A must-read for anyone looking to improve their design skills.\"",
      author: "Amit Sharma",
      role: "Product Designer at Facebook",
      image: "/Amit_Sharma.jpg"
    },
    {
      stars: 5,
      quote: "\"An essential resource for developers and designers alike.\"",
      author: "Priya Singh",
      role: "UX Designer at Google",
      image: "/Priya_Singh.jpg"
    },
    {
      stars: 4,
      quote: "\"This book has transformed the way I approach UI design.\"",
      author: "Rahul Verma",
      role: "Frontend Engineer at Amazon",
      image: "/Rahul_Verma.jpg"
    }
  ];

  // State to control the currently displayed testimonials
  const [currentTestimonials, setCurrentTestimonials] = useState(testimonials.slice(0, 3));
  
  // Effect to rotate the testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonials((prev) => {
        const startIndex = testimonials.indexOf(prev[0]);
        let nextIndex = startIndex + 3;

        // Handle wrapping around if nextIndex exceeds the array length
        if (nextIndex >= testimonials.length) {
          nextIndex = 0;
        }

        return testimonials.slice(nextIndex, nextIndex + 3);
      });
    }, 3000); // Adjust the interval time to 3 seconds
    
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []); // Empty dependency array, runs only once when the component mounts

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {currentTestimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Render stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15l-5.293 3.104 1.423-6.279L0 6.577l6.364-.545L10 0l3.636 5.987 6.364.545-4.13 5.248 1.423 6.279L10 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="text-black text-xl md:text-2xl mb-8 font-normal leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Author Details */}
              <div className="mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <div className="text-black font-medium">{testimonial.author}</div>
                <div className="text-gray-400 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
