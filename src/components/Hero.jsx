// HeroSection.js
import React from 'react';
import Header from './Header';


const HeroSection = () => {
  return (
    <>
      <Header />
      <section id='home' className="min-h-[90vh] bg-[#05386B] text-white py-16 lg:py-24 px-8 lg:px-16 flex items-center justify-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
          <div className=" lg:mr-10">
            <h3 className='lg:text-xl font-bold mb-4'>Hey, I'm</h3>
            <h1 className=" text-4xl lg:text-8xl font-bold mb-4">Binita <span className='block text-[#5CDB95]'>Shrestha</span></h1>
            <p className="text-lg lg:text-xl mb-8">Frontend Developer passionate about crafting web experiences.</p>
            <a href="#contact" className="bg-white text-[#05386B] px-6 py-3 rounded-full text-lg lg:text-xl font-semibold hover:bg-gray-300 transition duration-300">Get Connected</a>
          </div>
          <div className=" mt-8 lg:mt-0">
            <img src='/portfolio.png' alt="Binita Shrestha" className="w-full h-auto mx-auto lg:mx-0" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
