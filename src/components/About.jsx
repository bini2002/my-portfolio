import React from 'react';
import { FaCoffee, FaBook, FaHiking, FaMusic, FaBookReader, FaGamepad, FaDownload } from 'react-icons/fa';



const AboutMe = () => {
  const handleDownload = () => {
    const fileURL = '/BinitaShresthaResume.pdf'; // Replace this with the path to your PDF file

    // Create an anchor element
    const link = document.createElement('a');
    link.href = fileURL;
    link.setAttribute('download', 'BinitaShresthaResume.pdf');
    
    // Append the anchor to the body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
  };
  
  return (
    <section id='about' className="min-h-screen bg-green-100 py-16 lg:py-20 px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-12 lg:items-center lg:justify-between">
          <div className="w-[600px] flex items-center justify-end lg:pl-8 lg:order-1">
            <img src="/myPhoto.jpg" alt="Binita Shrestha" className="hidden lg:block lg:h-[500px] rounded-lg " />
          </div>
          <div className="lg:w-2/3 flex flex-col gap-y-4 lg:pr-8 lg:order-2">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 ">About Me</h2>
          <div className='flex flex-col gap-y-2'>
            <h3 className="text-xl font-bold text-orange-700">Frontend Developer</h3>
            <p className="text-base lg:text-lg text-justify break-words hyphens-auto">
            I'm Binita Shrestha, a passionate self-taught frontend developer dedicated to crafting engaging, user-centric web experiences. My commitment to learning and exploring new technologies empowers me to specialize in HTML, CSS, JavaScript, Reactjs, Nextjs and other frameworks            </p>
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
              <button
              onClick={handleDownload}
              className="bg-[#05386B] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex gap-x-2 items-center w-40  whitespace-nowrap">
                <FaDownload />
            <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
