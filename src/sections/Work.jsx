
import { Link } from 'react-router-dom';
import ProjectImageCarousel from '../components/ProjectImageCarousel';
import { projects } from '../data/projects';
import { SiReact, SiFigma, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { LuLayoutTemplate } from 'react-icons/lu';

const getTagIcon = (tag) => {
  switch (tag.toLowerCase()) {
    case 'react': return <SiReact className="inline-block mr-[6px] text-[#61DAFB] text-[14px]" />;
    case 'next.js': return <SiNextdotjs className="inline-block mr-[6px] text-[#FAFAF8] text-[14px]" />;
    case 'typescript': return <SiTypescript className="inline-block mr-[6px] text-[#3178C6] text-[14px]" />;
    case 'tailwind': return <SiTailwindcss className="inline-block mr-[6px] text-[#38B2AC] text-[14px]" />;
    case 'figma': return <SiFigma className="inline-block mr-[6px] text-[#F24E1E] text-[14px]" />;
    case 'ui design': return <LuLayoutTemplate className="inline-block mr-[6px] text-[#A8C7FA] text-[14px]" />;
    default: return null;
  }
};

const Work = () => {

  return (
    <section id="work" className="pt-[120px] pb-[80px] scroll-mt-[80px]">
      {/* Section Header */}
      <div className="relative z-10 mb-12">
        <div className="font-body font-light text-xs tracking-[0.18em] uppercase text-paper/70">
          Work
        </div>
      </div>


      {/* Project Cards */}
      <div className="flex flex-col gap-[72px] mt-[48px] relative z-10">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="relative p-[20px] md:p-[36px] border border-white/10 bg-black/40 backdrop-blur-md rounded-xl"
          >

            {/* Image Area */}
            <Link 
              to={`/case-study/${project.id}`}
              className="block bg-black/20 rounded-lg aspect-[16/10] w-full flex items-center justify-center mb-[28px] border border-white/5 overflow-hidden group/image cursor-pointer relative"
            >
              {project.gallery && project.gallery.length > 0 ? (
                <ProjectImageCarousel images={project.gallery} title={project.title} />
              ) : project.image ? (
                <>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center z-10 backdrop-blur-[2px]">
                    <div className="transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-500 ease-out flex items-center gap-3 bg-white/10 border border-white/20 px-6 py-3 rounded-full backdrop-blur-md shadow-2xl">
                      <span className="font-display text-paper uppercase tracking-[0.2em] text-[13px]">View Case Study</span>
                      <svg className="w-4 h-4 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </div>
                </>
              ) : (
                <div className="font-display tracking-[0.2em] text-paper/40 uppercase text-xs">No Image Available</div>
              )}
            </Link>

            {/* Below Image */}
            <Link 
              to={`/case-study/${project.id}`}
              className="font-display text-[28px] text-paper cursor-pointer hover:text-dust transition-colors inline-block"
            >
              {project.title}
            </Link>
            
            <div className="font-body font-light text-xs text-paper/70 mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>{project.year}</span>
              <span>&middot;</span>
              <div className="flex flex-wrap items-center">
                {project.tags.map((tag, i) => (
                  <span key={tag} className="flex items-center">
                    {getTagIcon(tag)}
                    {tag}
                    {i < project.tags.length - 1 ? <span className="mx-2">&middot;</span> : ''}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="font-body font-light text-[14px] text-paper/80 mt-3 leading-relaxed max-w-lg">
              {project.description}
            </p>
            
            <Link 
              to={`/case-study/${project.id}`}
              className="font-body font-light text-xs text-dust mt-5 inline-block hover:text-paper hover:underline transition-colors"
            >
              View project &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
