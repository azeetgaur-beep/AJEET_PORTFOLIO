import React from 'react';

const Nav = () => {
  return (
    <nav className="max-w-[1080px] mx-auto px-6 md:px-[52px] py-8 flex justify-between items-center">
      <div className="font-display italic font-bold text-2xl">AJX</div>
      <div className="flex gap-6 text-sm uppercase tracking-widest font-light">
        <a href="#work" className="hover:text-sage transition-colors">Work</a>
        <a href="#contact" className="hover:text-sage transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;
