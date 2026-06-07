import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    '/about-assets/nature_clouds.jpg',
    '/about-assets/nature3.jpg',
    '/about-assets/nature4.jpg',
    '/about-assets/nature5.jpg',
    '/about-assets/nature6.jpg',
    '/about-assets/dog1.webp',
    '/about-assets/nature7.jpg',
    '/about-assets/nature8.jpg'
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
            The Architecture of a Journey.
          </h2>

          <div className="font-body font-light text-[14px] md:text-[16px] text-paper/80 leading-relaxed">
            
            {/* Chapter 1 */}
            <div className="flex flex-col md:flex-row gap-8 mb-16 items-center">
              <div className="flex-1">
                <h3 className="font-display text-xl text-paper mb-6 border-b border-white/20 pb-2 inline-block">The Rhythm of the Hills</h3>
                <p>
                  My story begins in the clouds. I was born and raised in <strong>Chamba</strong>, a quiet, mist-covered town nestled deep within the towering peaks of Tehri Garhwal. Growing up there didn't just give me a hometown; it gave me a rhythm. When you are raised surrounded by the vast, immovable silence of the Himalayas, you learn the value of patience, of deep focus, and of seeing the beauty in small, organic details. For a long time, the mountains were my entire world.
                </p>
              </div>
              <div 
                className="w-full md:w-[280px] shrink-0 rounded-xl overflow-hidden border border-white/10 relative group shadow-2xl cursor-pointer"
                onClick={() => setSelectedImage('/about-assets/ajeet1.jpg')}
              >
                <img src="/about-assets/ajeet1.jpg" alt="Ajeet in the mountains" className="w-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-body text-xs tracking-widest uppercase bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">View</span>
                </div>
              </div>
            </div>
            
            {/* Chapter 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 mb-16 items-center">
              <div className="flex-1">
                <h3 className="font-display text-xl text-paper mb-6 border-b border-white/20 pb-2 inline-block">The City and the Awakening</h3>
                <p className="mb-4">
                  But the mountains, for all their wisdom, often demand that you leave them to grow. The pursuit of better education and broader horizons eventually pulled me away from the quiet altitudes and down into the bustling city of Dehradun for my schooling. It was a culture shock—a sudden shift from the slow, deliberate pace of the hills to a fast-paced environment that demanded rapid adaptability. Yet, it was within this urban rush that my curiosity found a new anchor: technology. I became fascinated by the digital realm, by the idea that you could build entire worlds using nothing but logic and keystrokes.
                </p>
                <p>
                  That curiosity remained just an abstraction until I met <strong>Sarvesh Bhaiya</strong>. Every developer has a genesis—a moment or a mentor who pulls back the curtain on how things are truly built. For me, Sarvesh Bhaiya was that guide. He didn't just teach me syntax; he brought me into the trenches of real-world web development. Working alongside him on <em>ConnectE</em> was my first taste of production-level engineering. I remember the sheer awe of contributing to a platform that living, breathing people were actually using. He taught me how to read complex codebases, how to navigate the inevitable frustrations of debugging, and most importantly, how to take pride in the craft. Under his wing, my raw fascination was refined into an obsession with frontend architecture.
                </p>
              </div>
              <div 
                className="w-full md:w-[280px] shrink-0 rounded-xl overflow-hidden border border-white/10 relative group shadow-2xl cursor-pointer"
                onClick={() => setSelectedImage('/about-assets/ajeet2.jpg')}
              >
                <img src="/about-assets/ajeet2.jpg" alt="Ajeet in the city" className="w-full object-cover aspect-square hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-body text-xs tracking-widest uppercase bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">View</span>
                </div>
              </div>
            </div>

            {/* Chapters 3 & 4 Combined with Photo */}
            <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
              <div className="flex-1">
                <h3 className="font-display text-xl text-paper mb-6 border-b border-white/20 pb-2 inline-block">Forging a Digital Philosophy</h3>
                <p className="mb-8">
                  As my skills sharpened, so did my vision. I began to realize that the web didn't have to be merely functional—it could be tactile, immersive, and beautiful. I started pouring my energy into crafting high-end digital experiences, merging engineering precision with creative direction. This philosophy culminated in projects like the <em>AJR Smart Technology</em> platform, where I learned to architect systems that don't just work flawlessly under the hood, but feel distinctly premium and intuitive to the touch.
                </p>

                <h3 className="font-display text-xl text-paper mb-6 border-b border-white/20 pb-2 inline-block">Returning to the Source</h3>
                <p className="mb-4">
                  Life, much like good design, often comes full circle. Today, I have returned to the hills. I am currently pursuing my engineering degree at <strong>THDC IHET in B.Puram</strong>. There is a profound poetry in sitting at a desk surrounded by the ancient, silent peaks of my childhood, while writing modern code that powers businesses across the globe. Returning to the mountains has allowed me to balance the intense, high-speed demands of software development with the profound peace of my hometown. 
                </p>
                <p>
                  I am a developer who believes in the intersection of art and logic. I build with the rigorous precision of an engineer, but always with the quiet soul, the patience, and the aesthetic reverence of someone raised by the mountains.
                </p>
              </div>
              <div 
                className="w-full md:w-[280px] shrink-0 rounded-xl overflow-hidden border border-white/10 relative group shadow-2xl cursor-pointer"
                onClick={() => setSelectedImage('/about-assets/ajeet3.jpg')}
              >
                <img src="/about-assets/ajeet3.jpg" alt="Ajeet coding" className="w-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-body text-xs tracking-widest uppercase bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">View</span>
                </div>
              </div>
            </div>
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
