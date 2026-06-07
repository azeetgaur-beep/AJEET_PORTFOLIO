import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { LuArrowLeft, LuExternalLink, LuX } from 'react-icons/lu';
import { projects } from '../data/projects';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

const cleanProps = (props) => {
  const rest = { ...props };
  delete rest.node;
  return rest;
};

const CaseStudy = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(null);

  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const WebkitMaskImage = useMotionTemplate`radial-gradient(400px circle at ${springX}px 0px, black, transparent)`;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedImage]);

  if (!project) {
    return <Navigate to="/work" />;
  }

  return (
    <div className="pt-[100px] pb-[80px] min-h-screen">
      <div className="max-w-[1080px] mx-auto px-6 md:px-[52px]">
        {/* Navigation */}
        <div className="flex items-center gap-6 mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 font-body font-light text-xs tracking-widest text-paper/60 hover:text-paper uppercase transition-colors"
          >
            <LuArrowLeft size={16} /> Home
          </Link>
          <span className="text-white/20">/</span>
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 font-body font-light text-xs tracking-widest text-paper/60 hover:text-paper uppercase transition-colors"
          >
            Work
          </Link>
        </div>

        {/* Header & Content Wrapped in Glass */}
        <div 
          onMouseMove={handleMouseMove}
          className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl relative z-10"
        >
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16 border-b border-white/10 pb-12"
          >
            <h1 className="font-display text-4xl md:text-[64px] text-paper leading-tight mb-6 break-words hyphens-auto">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-4 font-body font-light text-sm text-paper/70">
                <span className="text-paper">{project.year}</span>
                <span className="opacity-50">&bull;</span>
                {project.tags.join(" • ")}
              </div>
              {project.link !== "#" && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-body font-light text-xs tracking-widest uppercase text-paper transition-all"
                >
                  Visit Live Site <LuExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>

          {/* Markdown Content */}
          <div className="font-body font-light text-paper/90 max-w-[800px] mx-auto prose prose-invert prose-p:leading-relaxed prose-a:text-dust hover:prose-a:text-paper prose-headings:font-display prose-headings:text-paper">
            {project.content ? (
              <ReactMarkdown
                components={{
                  h1: (props) => <h1 className="text-4xl mb-6 font-display text-paper break-words hyphens-auto" {...cleanProps(props)} />,
                  h2: (props) => <h2 className="text-3xl mt-12 mb-6 font-display text-paper border-b border-white/10 pb-2 break-words hyphens-auto" {...cleanProps(props)} />,
                  h3: (props) => <h3 className="text-2xl mt-8 mb-4 font-display text-paper break-words hyphens-auto" {...cleanProps(props)} />,
                  p: (props) => <p className="mb-6 text-[16px] text-paper/90 leading-relaxed drop-shadow-md" {...cleanProps(props)} />,
                  ul: (props) => <ul className="list-disc pl-6 mb-6 space-y-2 text-[16px] text-paper/90 drop-shadow-md" {...cleanProps(props)} />,
                  ol: (props) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-[16px] text-paper/90 drop-shadow-md" {...cleanProps(props)} />,
                  li: (props) => <li className="pl-2" {...cleanProps(props)} />,
                  a: (props) => <a className="text-dust hover:text-paper transition-colors underline underline-offset-4" target="_blank" rel="noreferrer" {...cleanProps(props)} />,
                  strong: (props) => <strong className="font-medium text-paper" {...cleanProps(props)} />,
                  hr: (props) => <hr className="my-12 border-white/10" {...cleanProps(props)} />,
                  table: (props) => <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse" {...cleanProps(props)} /></div>,
                  th: (props) => <th className="border-b border-white/20 py-4 px-4 font-medium text-paper text-sm uppercase tracking-wider" {...cleanProps(props)} />,
                  td: (props) => <td className="border-b border-white/10 py-4 px-4 text-[14px]" {...cleanProps(props)} />,
                  code: (props) => {
                    const { inline, ...rest } = props;
                    delete rest.node;
                    return inline ? (
                      <code className="bg-white/10 px-1.5 py-0.5 rounded text-[13px] font-mono text-sage" {...rest} />
                    ) : (
                      <code className="block bg-black/60 p-6 rounded-xl font-mono text-[13px] text-paper/90 overflow-x-auto border border-white/5 mb-6 shadow-inner" {...rest} />
                    );
                  },
                  pre: (props) => <pre className="bg-transparent m-0 p-0" {...cleanProps(props)} />
                }}
              >
                {project.content}
              </ReactMarkdown>
            ) : (
              <p>Detailed case study coming soon.</p>
            )}
          </div>

        {/* Image Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-24 pt-16 relative">
            {/* Glowing Top Border Effect */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
            <motion.div 
              className="absolute top-0 left-0 w-full h-[1px] bg-paper opacity-80" 
              style={{ WebkitMaskImage, maskImage: WebkitMaskImage }} 
            />
            <motion.div 
              className="absolute top-0 left-0 w-full h-[10px] bg-paper opacity-30 blur-[12px]" 
              style={{ WebkitMaskImage, maskImage: WebkitMaskImage }} 
            />
            <h2 className="font-display text-3xl text-paper mb-12 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((imgSrc, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (idx % 2) * 0.2 }}
                  className="rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl group cursor-zoom-in relative"
                  onClick={() => setSelectedImage(imgSrc)}
                >
                  <img 
                    src={imgSrc} 
                    alt={`${project.title} screenshot ${idx + 1}`} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                     <span className="font-display tracking-widest uppercase text-xs text-white border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm shadow-xl">View Fullscreen</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
              onClick={() => setSelectedImage(null)}
            >
              <LuX size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Fullscreen preview" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaseStudy;
