
import { SiReact, SiTypescript, SiFigma, SiHtml5, SiNodedotjs } from 'react-icons/si';
import { LuLayoutTemplate, LuWandSparkles, LuVideo, LuCamera, LuRocket, LuScissors, LuBookOpen, LuComponent } from 'react-icons/lu';

const Skills = () => {
  const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" }, 
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }, 
    { name: "Figma", icon: SiFigma, color: "#F24E1E" }, 
    { name: "UI Design", icon: LuLayoutTemplate, color: "#A8C7FA" }, 
    { name: "HTML & CSS", icon: SiHtml5, color: "#E34F26" }, 
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" }, 
    { name: "Creative Direction", icon: LuWandSparkles, color: "#E8D5C4" },
    { name: "Motion Design", icon: LuVideo, color: "#D1C7D1" }, 
    { name: "Photography", icon: LuCamera, color: "#A8B4A5" }, 
    { name: "Antigravity", icon: LuRocket, color: "#FF9800" }, 
    { name: "Stitch", icon: LuScissors, color: "#E0A8E0" }, 
    { name: "Visual Storytelling", icon: LuBookOpen, color: "#A8D1D1" }, 
    { name: "Frontend Architecture", icon: LuComponent, color: "#C7A8D1" }
  ];

  const fontSizes = [13, 14, 15];
  const rotations = [-2, -1, 0, 1, 2];

  return (
    <section className="pt-[80px] pb-[80px]">
      <div className="max-w-[680px] relative z-10">
        
        {/* Header */}
        <div className="font-body font-light text-xs tracking-[0.18em] uppercase text-paper/70 mb-10">
          Skills, Languages & Apps
        </div>

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
