import React from 'react';
import MountainRange from '../doodles/MountainRange';
import PineTree from '../doodles/PineTree';
import Wildflower from '../doodles/Wildflower';

const Hero = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden w-full">
      {/* Background Doodles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <MountainRange className="absolute bottom-0 right-0 w-[44vw] opacity-[0.14] translate-x-[8%]" />
        
        <PineTree className="absolute bottom-0 left-[16px] w-[40px] scale-[0.7] origin-bottom opacity-[0.13]" />
        <PineTree className="absolute bottom-0 left-[44px] w-[40px] scale-[0.9] origin-bottom opacity-[0.13]" />
        <PineTree className="absolute bottom-0 left-[68px] w-[40px] scale-[1.1] origin-bottom opacity-[0.13]" />
        
        <Wildflower className="absolute top-[12%] right-[8%] w-[28px] opacity-[0.11]" />
      </div>

      {/* Text Content */}
      <div className="absolute z-10 top-[38%] left-[24px] md:left-[52px]">
        <div className="font-body font-light text-xs tracking-[0.18em] uppercase text-muted">
          frontend &middot; design &middot; creative
        </div>
        
        <h1 className="font-display font-bold text-[42px] md:text-[68px] leading-none text-ink mt-3">
          [HANDLE]
        </h1>
        
        <p className="font-display italic text-xl text-sage mt-4 max-w-[480px] leading-relaxed">
          I build things the way mountains form —<br />
          slowly, precisely, with intention.
        </p>
        
        <div className="flex mt-8 gap-x-8 font-body font-light text-sm text-muted">
          <a 
            href="#work" 
            onClick={(e) => handleSmoothScroll(e, '#work')}
            className="hover:text-ink hover:underline transition-colors"
          >
            See my work ↓
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="hover:text-ink hover:underline transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
