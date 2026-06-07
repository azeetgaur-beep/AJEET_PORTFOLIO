import React from 'react';
import { projects } from '../data/projects';
import WavyLine from '../doodles/WavyLine';
import PineTree from '../doodles/PineTree';
import CornerMark from '../doodles/CornerMark';

const Work = () => {
  return (
    <section id="work" className="pt-[120px] pb-[80px]">
      {/* Section Header */}
      <div>
        <WavyLine className="w-[120px] opacity-30 mb-[48px]" />
        <div className="font-body font-light text-xs tracking-[0.18em] uppercase text-muted">
          Work
          <PineTree className="relative inline-block w-[18px] opacity-20 ml-[12px] align-middle" />
        </div>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col gap-[72px] mt-[48px]">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="relative p-[36px] border border-[#E8E4DC]"
          >
            {/* Corner Marks */}
            <CornerMark 
              className="absolute top-[12px] left-[12px] opacity-40 w-[20px]" 
              stroke="#C4A882" 
            />
            <CornerMark 
              className="absolute bottom-[12px] right-[12px] opacity-40 w-[20px] rotate-180" 
              stroke="#C4A882" 
            />

            {/* Image Area */}
            <div className="bg-surface h-[220px] flex items-center justify-center mb-[28px]">
              <WavyLine className="w-[140px] opacity-20" />
            </div>

            {/* Below Image */}
            <h3 className="font-display text-[28px] text-ink">
              {project.title}
            </h3>
            
            <div className="font-body font-light text-xs text-muted mt-2">
              {project.year} &middot; {project.tags.join(' \u00B7 ')}
            </div>
            
            <p className="font-body font-light text-[14px] text-muted mt-3 leading-relaxed max-w-lg">
              {project.description}
            </p>
            
            <a 
              href={project.link} 
              className="font-body font-light text-xs text-muted mt-5 inline-block hover:text-ink hover:underline transition-colors"
            >
              View project &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
