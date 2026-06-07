import React from 'react';
import { projects } from '../data/projects';

const Work = () => {
  return (
    <section id="work" className="py-24 border-t border-muted/20">
      <h2 className="font-display italic text-4xl mb-12 text-dust">Selected Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="aspect-[4/3] bg-surface overflow-hidden rounded-sm relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-surface to-muted/20 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-medium">{project.title}</h3>
              <p className="text-muted mt-2 font-light">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
