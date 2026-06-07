import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center pt-20 pb-32">
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight">
        Crafting digital <br />
        <span className="italic text-sage">experiences</span> with <br />
        purpose & precision.
      </h1>
      <p className="mt-8 text-lg text-muted max-w-xl font-light">
        A passionate designer and developer focused on creating clean, functional, and aesthetically pleasing solutions.
      </p>
    </section>
  );
};

export default Hero;
