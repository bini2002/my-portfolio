import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#05386B] text-white py-6 px-8 lg:px-16">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} Binita Shrestha. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} className="text-white" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} className="text-white" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className="text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
