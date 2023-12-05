import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Header = () => {
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='sticky top-0'>
      <header className="bg-[#5CDB95] py-6 px-8 lg:px-16">
        <div className="relative container mx-auto flex justify-between items-center">
          <div className="text-[#05386B] text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('home')}>
            Binita Shrestha
          </div>
          <nav className='bg-[#05386B] absolute top-6 left-72 flex items-center justify-center px-16  py-6 rounded-full'>
            <ul className="flex justify-between space-x-12">
              <li><button className="text-gray-100 hover:bg-[#5CDB95] py-2 px-8 rounded-full" onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button className="text-gray-100 hover:bg-[#5CDB95] py-2 px-8 rounded-full" onClick={() => scrollToSection('about')}>About me</button></li>
              <li><button className="text-gray-100 hover:bg-[#5CDB95] py-2 px-8 rounded-full" onClick={() => scrollToSection('skills')}>Skills</button></li>
              <li><button className="text-gray-100 hover:bg-[#5CDB95] py-2 px-8 rounded-full" onClick={() => scrollToSection('portfolio')}>Portfolio</button></li>
              <li><button className="text-gray-100 hover:bg-[#5CDB95] py-2 px-8 rounded-full" onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </nav>
          <div className='social-medias flex'>
            {/* React Icons */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} className="text-[#05386B]  mx-2" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="text-[#05386B]  mx-2" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="text-[#05386B]  mx-2" />
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </div>
      </header>
      <div className='h-4 bg-[#05386B]'></div>
    </section>
  );
};

export default Header;
