
import { SiReact, SiTypescript, SiFigma, SiHtml5, SiNodedotjs, SiJavascript, SiCplusplus, SiGit, SiTailwindcss } from 'react-icons/si';
import { LuLayoutTemplate, LuVideo, LuCamera, LuLightbulb } from 'react-icons/lu';

const Skills = () => {
  const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" }, 
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }, 
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }, 
    { name: "C++", icon: SiCplusplus, color: "#00599C" }, 
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }, 
    { name: "HTML & CSS", icon: SiHtml5, color: "#E34F26" }, 
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" }, 
    { name: "Git", icon: SiGit, color: "#F05032" }, 
    { name: "Figma", icon: SiFigma, color: "#F24E1E" }, 
    { name: "UI Design", icon: LuLayoutTemplate, color: "#A8C7FA" }, 
    { name: "Problem Solving", icon: LuLightbulb, color: "#E8D5C4" },
    { name: "Motion Design", icon: LuVideo, color: "#D1C7D1" }, 
    { name: "Photography", icon: LuCamera, color: "#A8B4A5" }
  ];

  const fontSizes = [13, 14, 15];
  const rotations = [-2, -1, 0, 1, 2];

  return (
    <section className="pt-[80px] pb-[80px]">
      <div className="max-w-[680px] relative z-10">
        
        {/* Header */}
        <h2 className="font-body font-light text-xs tracking-[0.18em] uppercase text-paper/70 mb-10">
          Skills, Languages & Apps
        </h2>

        {skills.map((skill, index) => {
          const fontSize = fontSizes[index % 3];
          const color = index % 4 === 0 ? '#7C9E7A' : '#FAFAF8';
          const rotation = rotations[index % 5];

          const skillElement = (
            <span
              key={skill.name}
              className="font-body font-light inline-flex items-center gap-2 border-b border-transparent transition-colors duration-200 ease-in-out hover:border-dust"
              style={{
                fontSize: `${fontSize}px`,
                color: color,
                transform: `rotate(${rotation}deg)`,
                margin: '10px 18px',
              }}
            >
              {skill.icon && <skill.icon style={{ color: skill.color, fontSize: `${fontSize * 1.5}px` }} />}
              {skill.name}
            </span>
          );

          return skillElement;
        })}
      </div>
    </section>
  );
};

export default Skills;
