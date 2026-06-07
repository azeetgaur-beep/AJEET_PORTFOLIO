import React from 'react';
import Wildflower from '../doodles/Wildflower';

const Skills = () => {
  const skills = [
    "React", "TypeScript", "Figma", "UI Design", 
    "HTML & CSS", "Node.js", "Creative Direction",
    "Motion Design", "Photography", "Antigravity", 
    "Stitch", "Visual Storytelling", "Frontend Architecture"
  ];

  const fontSizes = [13, 14, 15];
  const rotations = [-2, -1, 0, 1, 2];

  return (
    <section className="pt-[80px] pb-[80px]">
      <div className="max-w-[680px]">
        {skills.map((skill, index) => {
          const fontSize = fontSizes[index % 3];
          const color = index % 4 === 0 ? '#7C9E7A' : '#1C1C1E';
          const rotation = rotations[index % 5];

          const skillElement = (
            <span
              key={skill}
              className="font-body font-light inline-block border-b border-transparent transition-colors duration-200 ease-in-out hover:border-dust"
              style={{
                fontSize: `${fontSize}px`,
                color: color,
                transform: `rotate(${rotation}deg)`,
                margin: '10px 18px',
              }}
            >
              {skill}
            </span>
          );

          if (index === 6) {
            return (
              <React.Fragment key={`${skill}-fragment`}>
                {skillElement}
                <div 
                  className="inline-block pointer-events-none align-middle" 
                  style={{ margin: '10px 18px' }}
                >
                  <Wildflower stroke="#7C9E7A" className="w-[22px] opacity-25" />
                </div>
              </React.Fragment>
            );
          }

          return skillElement;
        })}
      </div>
    </section>
  );
};

export default Skills;
