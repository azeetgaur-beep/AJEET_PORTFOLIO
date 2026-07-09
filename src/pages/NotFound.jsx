import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  useEffect(() => {
    // Add noindex meta tag on mount
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    
    // Remove it on unmount
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-display text-8xl md:text-9xl text-paper mb-4 opacity-20">404</h1>
        <h2 className="font-display text-2xl md:text-4xl text-paper mb-6">Page Not Found</h2>
        <p className="font-body font-light text-paper/70 max-w-md mx-auto mb-10">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-body font-light text-xs tracking-widest uppercase text-paper transition-all"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
