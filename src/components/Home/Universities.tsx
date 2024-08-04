import React, {useState} from 'react';
import Marquee from 'react-fast-marquee';

const Universities = () => {
  return (
    <section className="bg-[#faf8f2] py-32 my-8 sm:my-0 md:pt-16">
      <div className="max-w-sm md:max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Trusted by 25+ Universities Students and 600+ got a Job
          </h2>
          <p className="mt-8 text-gray-600 text-sm">
            We've worked with several thousand fellows and counting. Read their
            stories{' '}
            <a href="Wall" className="text-blue-600">
              here
            </a>
            .
          </p>
        </div>
        <div className="flex justify-center md:justify-start overflow-x-auto">
          <Marquee autoFill={true}>
            {/* Increase the base size for better visibility on mobile */}
            <img
              className="w-36 md:w-36 lg:w-36 p-4"
              src="CalState.jpeg"
              alt="Cal State"
              loading="lazy"
            />
            <img
              className="w-40 md:w-48 lg:w-56 p-4"
              src="UF.png"
              alt="University of Florida"
              loading="lazy"
            />
            <img
              className="w-36 md:w-36 lg:w-36 p-4"
              src="BostonUniversity.gif"
              alt="Boston University"
              loading="lazy"
            />
            <img
              className="w-40 md:w-48 lg:w-56 p-4"
              src="USSA.png"
              alt="University of South Alabama"
              loading="lazy"
            />
            <img
              className="w-52 md:w-56 lg:w-62 p-4"
              src="RIT.png"
              alt="NYIT"
            />
            <img
              className="w-40 md:w-48 lg:w-56 p-4"
              src="ASU.png"
              alt="Arizon State University"
              loading="lazy"
            />
            <img
              className="w-40 md:w-48 lg:w-56 p-4"
              src="Bridgeport.png"
              alt="Bridgeport University"
              loading="lazy"
            />
            <img
              className="w-40 md:w-48 lg:w-56 p-4"
              src="Clarksonlogo.png"
              alt="Clarkson University"
              loading="lazy"
            />
            <img
              className="w-40 md:w-48 lg:w-56 p-4"
              src="Auburn.png"
              alt="Auburn University"
              loading="lazy"
            />
            <img
              className="w-36 md:w-36 lg:w-36 p-4"
              src="StevensLogo.png"
              alt="Stevens Institute"
              loading="lazy"
            />
            <img
              className="w-40 md:w-48 lg:w-56 p-4"
              src="TexasLogo.png"
              alt="Texas A&M"
              loading="lazy"
            />
            <img
              className="w-40 md:w-48 lg:w-56 p-4"
              src="DrexelLogo.png"
              alt="Drexel University"
              loading="lazy"
            />
            <img
              className="w-40 md:w-48 lg:w-56 p-4"
              src="OSU.png"
              alt="Orlando State University"
              loading="lazy"
            />
            <img
              className="w-40 md:w-48 lg:w-56 p-4"
              src="NortheasternLogo.png"
              alt="Northeastern University"
              loading="lazy"
            />
            <img
              className="w-40 md:w-48 lg:w-56 p-4"
              src="KentState.png"
              alt="Michigan State"
              loading="lazy"
            />
            <img
              className="w-40 md:w-48 lg:w-56 p-4"
              src="Pacelogo.png"
              alt="Pace University"
              loading="lazy"
            />
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Universities;