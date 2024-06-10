import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className='h-96 mt-24'>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Envision & Achieve a Dynamic Lifestyle
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          "To help men envision and achieve a more dynamic, inspirational, attractive, and confident lifestyle. From how they look to how they feel & live to inspire a better life."
        </p>
        <div className="mt-8">
          <a href="#learn-more" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
