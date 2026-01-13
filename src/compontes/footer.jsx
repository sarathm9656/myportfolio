
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-6 w-full">
      <div className="flex flex-col justify-center items-center gap-2 text-sm md:text-base font-mono">
        <p className="hover:text-green-500 transition-colors cursor-default">
          Created by Sarath M.
        </p>
        <p>
          &copy; {currentYear} All rights reserved. <span className="text-red-500">❤️</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
