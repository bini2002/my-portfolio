import React from 'react';
import { FaCoffee, FaBook, FaHiking, FaMusic, FaBookReader, FaGamepad } from 'react-icons/fa';


const AboutMe = () => {
  return (
    <section id='about' className="min-h-screen bg-green-100 py-16 lg:py-20 px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-12 items-center justify-between">
          <div className="w-[600px] flex items-center justify-end lg:pl-8 lg:order-1">
            <img src="/myimage.jpg" alt="Binita Shrestha" className="h-[500px] rounded-lg" />
          </div>
          <div className="w-2/3 flex flex-col gap-y-4 lg:pr-8 lg:order-2">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 ">About Me</h2>
          <div className='flex flex-col gap-y-2'>
            <h3 className="text-xl font-bold text-orange-700">Frontend Developer</h3>
            <p className="text-base lg:text-lg ">
            I'm Binita Shrestha, a passionate self-taught frontend developer dedicated to crafting engaging, user-centric web experiences. My commitment to learning and exploring new technologies empowers me to specialize in HTML, CSS, JavaScript, and React.            </p>
            <p className='font-semibold'>Outside of coding, I enjoy:</p>

            <div className='grid grid-cols-2 lg:grid-cols-3 mt-4 '>
            <div className="text-sm font-semibold mb-4 flex items-center">
              <span className="mr-2">
                <FaCoffee />
              </span>
              Exploring new coffee shops
            </div>
            <div className="text-sm font-semibold mb-4 flex items-center">
              <span className="mr-2">
                <FaBook />
              </span>
              Reading fiction
            </div>
            <div className="text-sm font-semibold mb-4 flex items-center">
              <span className="mr-2">
                <FaHiking />
              </span>
              Hiking in the great outdoors
            </div>
            <div className="text-sm font-semibold mb-4 flex items-center">
              <span className="mr-2">
                <FaMusic />
              </span>
              Singing
            </div>
            <div className="text-sm font-semibold flex items-center">
              <span className="mr-2">
                <FaBookReader />
              </span>
              Reading
            </div>
            <div className="text-sm font-semibold flex items-center">
              <span className="mr-2">
                <FaGamepad />
              </span>
              Video Games
            </div>
            </div>
            
            </div>
            <div className="mt-6">
              <button className="bg-[#05386B] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
