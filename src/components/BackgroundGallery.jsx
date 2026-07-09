
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundGallery = () => {
  const { scrollY } = useScroll();
  
  // The video stays fully visible until scrollY 400, then fades out by 800 (when Work section starts)
  const videoOpacity = useTransform(scrollY, [400, 800], [1, 0]);
  
  // The image fades in as the video fades out
  const imageOpacity = useTransform(scrollY, [400, 800], [0, 1]);

  return (
    <div className="fixed inset-0 w-full h-full -z-20 bg-black overflow-hidden pointer-events-none">
      {/* 1. Hero Video Layer */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ opacity: videoOpacity }}
      >
        <video 
          src="/mountain-town-night-view.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover filter contrast-125 saturate-110 brightness-90"
        />
      </motion.div>

      {/* 2. Portfolio Image Layer */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ opacity: imageOpacity }}
      >
        <img 
          src="/mountain-town-dusk-silhouette.jpeg" 
          alt="Mountain Town Silhouette"
          width="1920"
          height="1080"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* 3. Universal Vignette / Dark Overlay to ensure high-contrast readable text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
    </div>
  );
};

export default BackgroundGallery;
