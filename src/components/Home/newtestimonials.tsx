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

const getStarColor = (index: number, stars: number) => {
  return index < stars ? "#00b300" : "#d9d9d9";
};

const getStarBoxStyle = (index: number, stars: number) => {
  return {
    width: "20px",
    height: "20px",
    backgroundColor: getStarColor(index, stars),
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
};

export default function Testimonials() {
  const [currentTestimonials, setCurrentTestimonials] = useState(
    testimonials.slice(0, 3)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonials((prev) => {
        const startIndex = testimonials.indexOf(prev[0]);
        let nextIndex = startIndex + 3;
        if (nextIndex >= testimonials.length) {
          nextIndex = 0;
        }
        return testimonials.slice(nextIndex, nextIndex + 3);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentTestimonials.map((testimonial, index) => (
            <div key={index} className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.image} alt={testimonial.author} />
                  <AvatarFallback className="bg-gray-100 text-gray-600">
                    {testimonial.author[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="flex gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} style={getStarBoxStyle(i, testimonial.stars)}>
                        <FaStar className="text-white" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>

              <p className="text-base leading-relaxed mb-6 text-gray-700">
                {testimonial.quote}
              </p>

              <div className="flex items-center justify-between pt-4">
                <div>
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
                <div className="text-sm text-gray-500">{testimonial.website}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}