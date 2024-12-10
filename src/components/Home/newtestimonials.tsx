import React from "react";

const testimonials = [
  [
    {
      text: "Absolutely revolutionary, a game-changer for our industry. It has streamlined our processes and enhanced our productivity dramatically.",
      author: "Eva Green",
      role: "Operations Director",
    },
    {
      text: "It has saved us countless hours. Highly recommended for anyone looking to enhance their efficiency and productivity.",
      author: "Henry Ford",
      role: "Operations Analyst",
    },
    {
      text: "It helps us achieve what was once thought impossible. The AI's capabilities are groundbreaking.",
      author: "Kathy Adams",
      role: "Innovation Lead",
    },
  ],
  [
    {
      text: "I can't imagine going back to how things were before this AI. It has not only improved my work efficiency but also my daily life.",
      author: "Cathy Lee",
      role: "Product Manager",
    },
    {
      text: "A robust solution that fits perfectly into our workflow. It has enhanced our team's capabilities and allowed us to tackle more complex projects.",
      author: "Frank Moore",
      role: "Project Manager",
    },
    {
      text: "A must-have tool for any professional. It’s revolutionized the way we approach problem-solving and decision-making.",
      author: "Ivy Wilson",
      role: "Business Consultant",
    },
  ],
  [
    {
      text: "It's incredibly intuitive and easy to use. Even those without technical expertise can leverage its power to improve their workflows.",
      author: "Mia Turner",
      role: "Systems Integrator",
    },
    {
      text: "It's the future, now. Adopting this AI has put us years ahead of the competition in terms of operational efficiency and innovation.",
      author: "Samuel Lee",
      role: "Futurist",
    },
    {
      text: "It's like having a superpower! This AI tool has given us the ability to do things we never thought possible.",
      author: "David Wright",
      role: "Research Scientist",
    },
  ],
];

const ScrollingTestimonials = () => {
  return (
    <div className="bg-white py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Loved by people all over the universe
      </h2>
      <p className="text-lg text-center text-gray-500 mb-12">
        Every AI is used by millions of people around the globe. Our APIs have
        fan bases and people fight for us over Twitter.
      </p>

      <div className="grid grid-cols-3 gap-8">
        {testimonials.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="overflow-hidden h-72 relative"
          >
            <div
              className={`flex flex-col absolute ${
                columnIndex % 2 === 0 ? "animate-scroll-up" : "animate-scroll-down"
              }`}
            >
              {/* Duplicate content for seamless scrolling */}
              {column.concat(column).map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 bg-white shadow-md rounded-lg space-y-2 mb-4"
                >
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  <div className="text-sm text-gray-900 font-medium">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingTestimonials;
