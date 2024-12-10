import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    stars: 5,
    quote: "Connecting talent with opportunities makes my day.",
    author: "Radhika Gupta",
    role: "Freshman at IIT Indore",
    image: "/Radhika.png",
    company: "TechRecruit India",
    website: "techrecruit.in",
  },
  {
    stars: 5,
    quote: "Every successful placement brings immense joy!",
    author: "Anjali Singh",
    role: "Senior at KIIT",
    image: "/Anjali.png",
    company: "CareerBridge",
    website: "careerbridge.co.in",
  },
  {
    stars: 5,
    quote: "Helping clients achieve their goals is my passion!",
    author: "Deepesh Gupta",
    role: "Sophomore at Jawaharlal Nehru University",
    image: "/Depeesh.png",
    company: "JobConnect",
    website: "jobconnect.com",
  },
  {
    stars: 4,
    quote: "Seeing clients thrive in their careers is the best reward.",
    author: "Yash Jaiswal",
    role: "Junior at IIT Indore",
    image: "/Anil.jpg",
    company: "TalentSpot",
    website: "talentspot.in",
  },
  {
    stars: 5,
    quote: "Ensuring client satisfaction is my top priority.",
    author: "Shagun J",
    role: "Sophomore at Vellore Institute of Technology",
    image: "/Shagun.jpg",
    company: "SkillMatch",
    website: "skillmatch.co.in",
  },
  {
    stars: 4,
    quote: "Each success story inspires me to do more.",
    author: "Kuldeep Vyas",
    role: "Senior at KIIT",
    image: "/Kuldeep.jpeg",
    company: "CareerLaunch",
    website: "careerlaunch.in",
  },
];

const getRandomTestimonial = () => {
  return testimonials[Math.floor(Math.random() * testimonials.length)];
};

export default function Testimonials() {
  const [currentTestimonials, setCurrentTestimonials] = useState([
    getRandomTestimonial(),
    getRandomTestimonial(),
    getRandomTestimonial(),
  ]);
  
  useEffect(() => {
    const intervals = currentTestimonials.map((_, idx) =>
      setInterval(() => {
        setCurrentTestimonials((prev) => {
          const updated = [...prev];
          const randomIndex = Math.floor(Math.random() * testimonials.length);
          updated[idx] = testimonials[randomIndex];
          return updated;
        });
      }, Math.random() * 2000 + 3000) // Random interval between 3-5 seconds
    );
  
    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);
  

  return (
    <section className="py-16">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8"
            >
              {/* Star Ratings */}
              <div className="flex justify-center mb-4 space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-6 w-6 ${
                      i < testimonial.stars ? "text-amber-400" : "text-gray-300"
                    }`}
                    aria-label={i < testimonial.stars ? "Filled star" : "Empty star"}
                  />
                ))}
              </div>
              {/* Quote */}
              <p className="text-lg text-center italic text-gray-700 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author Details */}
              <div className="flex items-center justify-center mt-6 space-x-4">
                <Avatar className="h-14 w-14">
                  <AvatarImage
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="rounded-full"
                  />
                  <AvatarFallback className="bg-gray-100 text-gray-600">
                    {testimonial.author[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>

              {/* Company and Website */}
              <div className="mt-4 text-sm text-center text-gray-500">
                {testimonial.company}
                {testimonial.website && (
                  <span>
                    {" "}
                    ·{" "}
                    <a
                      href={`https://${testimonial.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {testimonial.website}
                    </a>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
