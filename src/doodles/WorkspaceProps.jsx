
import { motion } from 'framer-motion';

const WorkspaceProps = ({ chairX = 0 }) => {
  return (
    <g className="workspace-props text-paper" fill="currentColor">
      {/* Desk */}
      <rect x="10" y="68" width="70" height="4" rx="2" />
      <rect x="20" y="72" width="4" height="28" />
      <rect x="65" y="72" width="4" height="28" />

      {/* Modern Ergonomic Office Chair */}
      <motion.g fill="currentColor" className="opacity-80" animate={{ x: chairX }} transition={{ duration: 0.5 }}>
        {/* Backrest */}
        <path d="M 87,55 Q 84,65 87,76 L 85,76 Q 82,65 85,55 Z" />
        {/* Armrest */}
        <path d="M 86,68 L 76,68 L 76,70 L 86,70 Z" fillOpacity="0.5" />
        {/* Seat Cushion */}
        <rect x="72" y="74" width="16" height="4" rx="2" />
        {/* Pneumatic Cylinder */}
        <rect x="80" y="78" width="3" height="15" />
        {/* Base Star/Legs */}
        <path d="M 81.5,93 L 74,97 L 75,98 L 81.5,94.5 L 88,98 L 89,97 Z" />
        {/* Wheels */}
        <circle cx="74" cy="98" r="2" />
        <circle cx="89" cy="98" r="2" />
      </motion.g>

      {/* Profile Laptop (Facing Character) */}
      {/* Laptop Base */}
      <rect x="53" y="65" width="10" height="3" rx="1" />
      {/* Angled Laptop Screen (Slightly tilted) */}
      <path d="M 54,66 L 50,48 L 52,47 L 56,65 Z" fill="currentColor" />

      {/* External Keyboard */}
      <g className="opacity-90">
        <rect x="64" y="66" width="8" height="2" rx="0.5" />
        {/* Keys */}
        <line x1="65" y1="66.5" x2="71" y2="66.5" stroke="var(--color-bg, #0a0a0a)" strokeWidth="0.5" strokeDasharray="0.8 0.5" />
        <line x1="65" y1="67.5" x2="71" y2="67.5" stroke="var(--color-bg, #0a0a0a)" strokeWidth="0.5" strokeDasharray="0.8 0.5" />
      </g>
    </g>
  );
};

export default WorkspaceProps;
