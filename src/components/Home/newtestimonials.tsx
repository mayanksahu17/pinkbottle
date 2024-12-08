"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from 'lucide-react'

const testimonials = [
  {
    stars: 5,
    quote: "Connecting talent with opportunities makes my day.",
    author: "Radhika Gupta",
    role: "Freshman at IIT Indorel",
    image: "/Radhika.png",
    company: "TechRecruit India",
    website: "techrecruit.in"
  },
  {
    stars: 5,
    quote: "Every successful placement brings immense joy!",
    author: "Anjali Singh",
    role: "Senior at KIIT",
    image: "/Anjali.png",
    company: "CareerBridge",
    website: "careerbridge.co.in"
  },
  {
    stars: 5,
    quote: "Helping clients achieve their goals is my passion!",
    author: "Deepesh Gupta",
    role: "Sophomore at Jawaharlal Nehru University",
    image: "/Depeesh.png",
    company: "JobConnect",
    website: "jobconnect.com"
  },
  {
    stars: 4,
    quote: "Seeing clients thrive in their careers is the best reward.",
    author: "Yash Jaiswal",
    role: "Junior at IIT Indore",
    image: "/Anil.jpg",
    company: "TalentSpot",
    website: "talentspot.in"
  },
  {
    stars: 5,
    quote: "Ensuring client satisfaction is my top priority.",
    author: "Shagun J",
    role: "Sophomore at Vellore Institute of Technology",
    image: "/Shagun.jpg",
    company: "SkillMatch",
    website: "skillmatch.co.in"
  },
  {
    stars: 4,
    quote: "Each success story inspires me to do more.",
    author: "Kuldeep Vyas",
    role: "Senior at KIIT",
    image: "/Kuldeep.jpeg",
    company: "CareerLaunch",
    website: "careerlaunch.in"
  }
]

const getStarColor = (rating: number) => {
  switch(rating) {
    case 1:
      return "#FF424D" // Red
    case 2:
      return "#FF6B3D" // Light Orange
    case 3:
      return "#FFAA45" // Orange
    case 4:
    case 5:
      return "#00B67A" // Green
    default:
      return "#DCDCE6" // Gray
  }
}

export default function Testimonials() {
  const [currentTestimonials, setCurrentTestimonials] = useState(testimonials.slice(0, 3))
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonials((prev) => {
        const startIndex = testimonials.indexOf(prev[0])
        let nextIndex = startIndex + 3
        if (nextIndex >= testimonials.length) {
          nextIndex = 0
        }
        return testimonials.slice(nextIndex, nextIndex + 3)
      })
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentTestimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback className="bg-gray-100 text-gray-600">
                      {testimonial.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="flex gap-0.5 mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5"
                          style={{
                            fill: i < testimonial.stars ? getStarColor(testimonial.stars) : '#DCDCE6',
                            stroke: 'none'
                          }}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                <p className="text-base/relaxed mb-6 text-gray-700">
                  {testimonial.quote}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.website}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

