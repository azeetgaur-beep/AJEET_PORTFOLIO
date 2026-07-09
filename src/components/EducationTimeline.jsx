
import { useState } from 'react';
import { motion } from 'framer-motion';
import { LuMapPin, LuCalendar, LuGraduationCap, LuBookOpen, LuExternalLink } from 'react-icons/lu';

const educationData = [
  {
    id: 1,
    institution: "Carmel School",
    period: "Class 1st – 7th",
    role: "Primary & Middle School Education",
    address: "Jamthiyal Gaon, Chamba, Tehri Garhwal, Uttarakhand",
    domain: "https://carmelchamba.org/index.html",
    logoPath: "/logos/carmel.svg",
    icon: LuBookOpen,
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: 2,
    institution: "St. Thomas' College",
    period: "Class 8th – 12th (Graduated 2024)",
    role: "High School & Intermediate",
    address: "2, Cross Road, Dehradun, Uttarakhand",
    domain: "https://www.stthomascollege.in/",
    logoPath: "/logos/stthomas_upscaled.png",
    icon: LuBookOpen,
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: 3,
    institution: "THDC IHET",
    period: "2024 – Present",
    role: "B.Tech in Computer Science & Eng. (2nd Year)",
    address: "Bhagirathipuram, B.Puram, Tehri Garhwal",
    domain: "https://thdcihet.ac.in/",
    logoPath: "/logos/thdc.png",
    icon: LuGraduationCap,
    color: "from-orange-400 to-red-500",
  }
];

const EducationTimeline = () => {
  const [logoErrors, setLogoErrors] = useState({});
  return (
    <div className="mt-24 relative max-w-[800px] mx-auto z-10">
      <div className="text-center mb-16">
        <h3 className="font-display italic text-[32px] md:text-[40px] text-paper mb-4">
          The Academic Journey
        </h3>
        <p className="font-body font-light text-paper/60 text-sm tracking-widest uppercase">
          From the mountains to the city, and back again.
        </p>
      </div>
      
      <div className="relative border-l-2 border-white/10 ml-6 md:ml-12 space-y-16 pb-8">
        {educationData.map((edu, idx) => {
          const Icon = edu.icon;
          return (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, type: "spring", stiffness: 70 }}
              className="relative pl-10 md:pl-16 group"
            >
              {/* Interactive Timeline Node */}
              <div className="absolute -left-[21px] top-4 w-[40px] h-[40px] bg-[#0a0a0a] border-2 border-white/20 rounded-full flex items-center justify-center z-10 group-hover:border-white/60 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-110">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${edu.color} group-hover:scale-[1.8] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500`} />
              </div>

              {/* Neomorphic Content Card */}
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl hover:bg-black/60 transition-colors duration-500 group-hover:border-white/30 relative overflow-hidden">
                {/* Dynamic Glow Effect behind card */}
                <div className={`absolute -right-24 -top-24 w-64 h-64 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-700 pointer-events-none rounded-full`} />

                <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                  {/* Logo using Local Extracted PNGs / SVGs */}
                  <a href={edu.domain} target="_blank" rel="noreferrer" className="w-20 h-20 rounded-2xl bg-white hover:bg-white/90 border border-white/20 flex-shrink-0 flex items-center justify-center overflow-hidden p-2 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500 cursor-pointer group/link">
                    {!logoErrors[edu.id] ? (
                      <img 
                        src={edu.logoPath} 
                        alt={`${edu.institution} logo`}
                        loading="lazy"
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover/link:scale-110"
                        onError={() => {
                          setLogoErrors(prev => ({ ...prev, [edu.id]: true }));
                        }}
                      />
                    ) : (
                      <Icon size={32} className="text-black/30 transition-colors duration-500 group-hover/link:text-black/60" />
                    )}
                  </a>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                      <h4 className="font-display text-2xl md:text-3xl text-paper tracking-wide">{edu.institution}</h4>
                      <a 
                        href={edu.domain} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-body font-light text-[10px] tracking-widest uppercase text-paper/70 hover:text-paper transition-all"
                      >
                        Website <LuExternalLink size={12} />
                      </a>
                    </div>
                    <p className="font-body font-medium text-dust text-[15px] mb-6 flex items-center gap-2 tracking-wide uppercase">
                      <LuGraduationCap size={18} /> {edu.role}
                    </p>
                    
                    <div className="space-y-3 font-body font-light text-[14px] text-paper/70">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                           <LuCalendar size={14} className="text-paper/60" />
                        </div>
                        <span className="tracking-wide">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                           <LuMapPin size={14} className="text-paper/60" />
                        </div>
                        <span className="leading-relaxed">{edu.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationTimeline;
