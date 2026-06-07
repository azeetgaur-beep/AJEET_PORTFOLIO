
import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <div className="w-full flex justify-center py-[20px] md:py-[40px] relative z-10 pointer-events-none">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-[70%] max-w-[600px] h-[1px] relative"
      >
        {/* Core Line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        
        {/* Soft Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-[4px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[12px]" />
      </motion.div>
    </div>
  );
};

export default SectionDivider;
