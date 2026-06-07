import React from 'react';

const Skills = () => {
  const skills = ['React', 'Framer Motion', 'Tailwind CSS', 'Vite', 'UI/UX Design', 'Typography'];
  
  return (
    <section className="py-24 border-t border-muted/20">
      <h2 className="font-display italic text-4xl mb-12 text-dust">Expertise</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <span key={i} className="px-6 py-3 border border-ink/10 rounded-full text-sm tracking-wide bg-surface/50">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
