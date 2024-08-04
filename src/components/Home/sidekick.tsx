import React from 'react';

const Sidekick = () => {
  return (
    <section className="bg-white py-32 bg-[#faf8f2]">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-center text-4xl font-bold text-gray-800 mb-2"
          style={{ fontFamily: 'Josefin Sans, sans-serif' }}
        >
          Assistants you can trust
        </h2>
        <p
          className="text-center mb-10 text-gray-500"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          We assemble top-tier talent to support you during the pivotal moments of your journey as your trusted aides.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { name: 'Deepesh Gupta', school: 'Sophomore at Jawaharlal Nehru University', rating: '4.8', reviews: '43', applications: '5560', paragraph: 'Helping clients achieve their goals is my passion!', image: 'Depeesh.png' },
            { name: 'Anjali Singh', school: 'Senior at KIIT', rating: '4.7', reviews: '37', applications: '3150', paragraph: 'Every successful placement brings immense joy!', image: 'Anjali.png' },
            { name: 'Yash Jaiswal', school: 'Junior at IIT Indore', rating: '4.9', reviews: '52', applications: '4890', paragraph: 'Seeing clients thrive in their careers is the best reward.', image: 'Anil.jpg' },
            { name: 'Radhika Gupta', school: 'Freshman at IIT Indore', rating: '4.6', reviews: '29', applications: '2340', paragraph: 'Connecting talent with opportunities makes my day.', image: 'Radhika.png' },
            { name: 'Chirag Thakur', school: 'Senior at SVVV', rating: '4.8', reviews: '44', applications: '1980', paragraph: 'Guiding clients to their dream jobs is my mission.', image: 'Chirag.png' },
            { name: 'Aradhy Agrawal', school: 'Senior at IIT SVVV', rating: '4.7', reviews: '39', applications: '5760', paragraph: 'Helping people succeed professionally is what I strive for.', image: 'Siddharth.png' },
            { name: 'Kuldeep Vyas', school: 'Senior at KIIT', rating: '4.9', reviews: '50', applications: '4250', paragraph: 'Each success story inspires me to do more.', image: 'Kuldeep.jpeg' },
            { name: 'Shagun J', school: 'Sophomore at Vellore Institute of Technology', rating: '4.8', reviews: '48', applications: '3050', paragraph: 'Ensuring client satisfaction is my top priority.', image: 'Shagun.jpg' }
          ].map((assistant, index) => (
            <div key={index} className={`bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:translate-y-[-10px] duration-500 ease-in-out w-full sm:w-72 mx-auto border border-green-500 flex flex-col justify-between h-96 ${index >= 4 ? 'hidden sm:block' : ''}`}>
              <div className="p-4 text-center flex-grow">
                <div className="w-20 h-20 mx-auto mb-2 rounded-full overflow-hidden border-4 border-white">
                  <img
                    alt={assistant.name}
                    className="w-full h-full object-cover object-center"
                    src={assistant.image}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {assistant.name}
                </h3>
                <p className="text-sm text-gray-400 mb-1">
                  {assistant.school}
                </p>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-lg font-semibold text-gray-800 ml-1">
                    {assistant.rating} rating
                  </span>
                  <span className="text-gray-500 ml-2">({assistant.reviews} reviews)</span>
                </div>
                <p className="text-sm text-gray-400 mb-1">
                  {assistant.applications}+ applications&nbsp; 🚀 
                </p>
                <p
                  className="text-gray-500 mt-1 text-sm italic"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {assistant.paragraph}
                </p>
              </div>
              <div className="text-center p-2 mt-auto">
                <hr className="border-gray-300 my-2 w-3/4 mx-auto" />
                <a
                  href="onboarding"
                  className="text-lg font-semibold text-gray-800"
                >
                  Hire Your Assistant
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sidekick;
