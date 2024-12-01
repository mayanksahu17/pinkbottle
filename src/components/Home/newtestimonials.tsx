"use client";
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
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-black text-xl md:text-2xl mb-8 font-normal leading-relaxed">
                {testimonial.quote}
              </p>
              
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
  )
}
