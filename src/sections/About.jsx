import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EducationTimeline from '../components/EducationTimeline';

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    '/about-assets/nature_clouds.webp',
    '/about-assets/nature3.webp',
    '/about-assets/nature4.webp',
    '/about-assets/nature5.webp',
    '/about-assets/nature6.webp',
    '/about-assets/dog1.webp',
    '/about-assets/nature7.webp',
    '/about-assets/nature8.webp'
  ];

  return (
    <section id="about" className="pt-[120px] pb-[40px] scroll-mt-[80px]">
      <div className="max-w-[800px] mx-auto relative z-10">

        {/* Header */}
        <div className="font-body font-light text-xs tracking-[0.18em] uppercase text-paper/70 mb-[36px]">
          About Me
        </div>

        {/* Glassmorphism Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative p-[24px] md:p-[48px] border border-white/10 bg-black/40 backdrop-blur-md rounded-xl"
        >
          <h2 className="font-display italic text-[32px] md:text-[40px] text-paper leading-tight mb-[32px]">
            My Journey So Far.
          </h2>

          <div className="font-body font-light text-[14px] md:text-[16px] text-paper/80 leading-relaxed">
            
            {/* Chapter 1 */}
            <div className="flex flex-col md:flex-row gap-8 mb-16 items-center">
              <div className="flex-1">
                <h3 className="font-display text-xl text-paper mb-6 border-b border-white/20 pb-2 inline-block">The Rhythm of the Hills</h3>
                <p>
                  I grew up in <strong>Chamba</strong>, a quiet town in the Himalayas. The mountains taught me patience and the value of deep focus—traits that seamlessly translated into my love for programming. For a long time, this peaceful environment was my entire world, giving me the space to cultivate a genuine curiosity for how things work.
                </p>
              </div>
              <div 
                className="w-full md:w-[280px] shrink-0 rounded-xl overflow-hidden border border-white/10 relative group shadow-2xl cursor-pointer"
                onClick={() => setSelectedImage('/about-assets/ajeet1.webp')}
              >
                <img src="/about-assets/ajeet1.webp" alt="Ajeet in the mountains" loading="lazy" className="w-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-body text-xs tracking-widest uppercase bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">View</span>
                </div>
              </div>
            </div>
            
            {/* Chapter 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 mb-16 items-center">
              <div className="flex-1">
                <h3 className="font-display text-xl text-paper mb-6 border-b border-white/20 pb-2 inline-block">Discovering Code</h3>
                <p className="mb-4">
                  Moving to Dehradun for my schooling opened up a new world. The transition from a slow-paced hill town to a bustling city was a culture shock, but it sparked my fascination with technology. The idea that I could build interactive experiences using just logic and keystrokes captivated me.
                </p>
                <p>
                  This curiosity turned into a tangible pursuit when I met <strong>Sarvesh Bhaiya</strong>, a mentor who introduced me to real-world web development. Working on <em>ConnectE</em> with him was my first exposure to a production codebase. I learned how to read complex code, debug effectively, and take pride in building things people actually use.
                </p>
              </div>
              <div 
                className="w-full md:w-[280px] shrink-0 rounded-xl overflow-hidden border border-white/10 relative group shadow-2xl cursor-pointer"
                onClick={() => setSelectedImage('/about-assets/ajeet2.webp')}
              >
                <img src="/about-assets/ajeet2.webp" alt="Ajeet in the city" loading="lazy" className="w-full object-cover aspect-square hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-body text-xs tracking-widest uppercase bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">View</span>
                </div>
              </div>
            </div>

            {/* Chapters 3 & 4 Combined with Photo */}
            <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
              <div className="flex-1">
                <h3 className="font-display text-xl text-paper mb-6 border-b border-white/20 pb-2 inline-block">Learning by Building</h3>
                <p className="mb-8">
                  As I dove deeper into frontend engineering, I realized that good software isn't just functional—it should be intuitive and well-crafted. I started focusing on building seamless user interfaces and robust applications. This hands-on approach led to projects like the <em>AJR Smart Technology</em> platform, where I learned how to piece together frontend frameworks, APIs, and responsive design to solve real business problems.
                </p>

                <h3 className="font-display text-xl text-paper mb-6 border-b border-white/20 pb-2 inline-block">The Path Forward</h3>
                <p className="mb-4">
                  Today, I'm a 2nd-year student pursuing my B.Tech in Computer Science at <strong>THDC IHET in B.Puram</strong>. I'm actively looking for software engineering and frontend internships where I can contribute to impactful projects, learn from experienced teams, and continue growing as a developer.
                </p>
                <p>
                  I build with the precision of an engineer and the curiosity of a student, always striving to write clean, maintainable code.
                </p>
              </div>
              <div 
                className="w-full md:w-[280px] shrink-0 rounded-xl overflow-hidden border border-white/10 relative group shadow-2xl cursor-pointer"
                onClick={() => setSelectedImage('/about-assets/ajeet3.webp')}
              >
                <img src="/about-assets/ajeet3.webp" alt="Ajeet coding" loading="lazy" className="w-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-body text-xs tracking-widest uppercase bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">View</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="mt-16 pt-12 border-t border-white/10 relative">
            <EducationTimeline />
          </div>

          {/* Photography Section Placeholder */}
          <div className="mt-16 pt-12 border-t border-white/10 relative">
            <h3 className="font-display italic text-2xl text-paper mb-6 border-b border-white/20 pb-2 inline-block">Through My Lens</h3>
            <p className="font-body font-light text-[14px] text-paper/70 leading-relaxed mb-8">
              When I'm not writing code or obsessing over UI micro-animations, you'll usually find me observing the world around me. I have a profound love for capturing random, forgotten places and the ever-changing canvas of the skies above the Himalayas.
            </p>
            
            {/* Beautiful Masonry Gallery */}
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {photos.map((src, idx) => (
                <div 
                  key={idx} 
                  className="break-inside-avoid rounded-xl overflow-hidden border border-white/10 relative group cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                >
                  <img 
                    src={src} 
                    alt="Photography" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white font-body text-xs tracking-widest uppercase bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">View</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default" 
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
