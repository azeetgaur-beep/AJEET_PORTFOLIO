
import { motion } from 'framer-motion';

const DynamicCharacter = ({ pose }) => {
  // Poses: 'climbing', 'gliding', 'landing', 'walking', 'sitting', 'sipping', 'typing'
  // Character fundamentally faces LEFT. (x=0 is the front, x=50 is the back).

  const poses = {
    climbing: {
      head: { x: -5, y: -5 },
      torso: "M 25,20 C 30,30 30,40 25,45", // arched back away from wall
      armL: ["M 25,25 Q 15,10 5,15", "M 25,25 Q 15,25 5,30"], // reaching up/down the wall
      armR: ["M 25,25 Q 15,25 5,30", "M 25,25 Q 15,10 5,15"],
      legL: ["M 25,45 Q 20,40 10,50", "M 25,45 Q 15,55 5,60"], // climbing steps
      legR: ["M 25,45 Q 15,55 5,60", "M 25,45 Q 20,40 10,50"],
      parachute: { opacity: 0, scale: 0 }
    },
    gliding: {
      head: { x: 0, y: 0 },
      torso: "M 25,20 C 25,30 25,40 25,45", // straight body
      armL: "M 25,25 Q 15,10 5,0", // holding parachute line
      armR: "M 25,25 Q 35,10 45,0", // holding parachute line
      legL: "M 25,45 Q 20,50 15,60", // dangling freely
      legR: "M 25,45 Q 30,50 35,60", 
      parachute: { opacity: 1, scale: 1 }
    },
    landing: {
      head: { x: -2, y: 5 },
      torso: "M 25,25 C 25,35 25,45 25,50", // crouching low
      armL: "M 25,30 Q 15,30 5,20", // arms out for balance
      armR: "M 25,30 Q 35,30 45,20",
      legL: "M 25,50 Q 15,55 10,65", // knees bent
      legR: "M 25,50 Q 35,55 40,65",
      parachute: { opacity: 0, scale: 0.5 } // collapsing
    },
    walking: {
      head: { x: 0, y: 0 },
      torso: "M 25,20 C 25,30 25,40 25,45",
      armL: [
        "M 25,25 Q 15,35 10,45",
        "M 25,25 Q 25,35 25,45",
        "M 25,25 Q 35,35 40,45",
        "M 25,25 Q 25,35 25,45",
        "M 25,25 Q 15,35 10,45"
      ], 
      armR: [
        "M 25,25 Q 35,35 40,45",
        "M 25,25 Q 25,35 25,45",
        "M 25,25 Q 15,35 10,45",
        "M 25,25 Q 25,35 25,45",
        "M 25,25 Q 35,35 40,45"
      ], 
      legL: [
        "M 25,45 Q 15,55 5,65", 
        "M 25,45 Q 25,55 25,65", 
        "M 25,45 Q 35,55 45,65", 
        "M 25,45 Q 35,50 25,60", 
        "M 25,45 Q 15,55 5,65"
      ],
      legR: [
        "M 25,45 Q 35,55 45,65", 
        "M 25,45 Q 35,50 25,60", 
        "M 25,45 Q 15,55 5,65", 
        "M 25,45 Q 25,55 25,65", 
        "M 25,45 Q 35,55 45,65"
      ],
      parachute: { opacity: 0, scale: 0 }
    },
    pulling: {
      head: { x: -1, y: 1 },
      torso: "M 25,20 C 25,30 25,40 25,45",
      armL: "M 25,25 Q 15,30 0,32", // Reaching out to grab chair
      armR: "M 25,25 Q 15,30 0,32",
      legL: "M 25,45 Q 20,55 15,65", // Standing firmly
      legR: "M 25,45 Q 30,55 35,65",
      parachute: { opacity: 0, scale: 0 }
    },
    sitting: {
      head: { x: 0, y: 0 },
      torso: "M 25,20 C 25,30 25,40 25,45", 
      armL: "M 25,25 Q 15,35 5,30", // resting on lap
      armR: "M 25,25 Q 15,35 5,30",
      legL: "M 25,45 Q 15,45 15,65", // knees bent forward
      legR: "M 25,45 Q 15,45 15,65",
      parachute: { opacity: 0, scale: 0 }
    },
    reaching: {
      head: { x: -2, y: 2 }, // looking down at desk
      torso: "M 25,20 C 25,30 25,40 25,45", 
      armL: "M 25,25 Q 15,35 5,30", // resting
      armR: "M 25,25 Q 15,30 8,30", // Relaxed reach to the mug on the raised desk
      legL: "M 25,45 Q 15,45 15,65",
      legR: "M 25,45 Q 15,45 15,65",
      parachute: { opacity: 0, scale: 0 }
    },
    sipping: {
      head: { x: 0, y: 0 },
      torso: "M 25,20 C 25,30 25,40 25,45", 
      armL: "M 25,25 Q 15,35 5,30", // resting
      armR: "M 25,25 Q 25,20 20,18", // holding mug at face
      legL: "M 25,45 Q 15,45 15,65",
      legR: "M 25,45 Q 15,45 15,65",
      parachute: { opacity: 0, scale: 0 }
    },
    typing: {
      head: { x: -2, y: 1 }, 
      torso: "M 25,20 C 28,30 28,40 25,45", // slightly hunched over laptop
      armL: ["M 25,25 Q 15,30 8,35", "M 25,25 Q 15,35 10,34"], // Relaxed, short typing arms
      armR: ["M 25,25 Q 15,35 10,34", "M 25,25 Q 15,30 8,35"],
      legL: "M 25,45 Q 15,45 15,65",
      legR: "M 25,45 Q 15,45 15,65",
      parachute: { opacity: 0, scale: 0 }
    }
  };

  const current = poses[pose] || poses.walking;
  const animTransition = pose === 'walking' ? { duration: 1.0, repeat: Infinity, ease: 'linear' } : pose === 'typing' ? { duration: 0.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' } : { duration: 0.5, ease: 'easeInOut' };

  const getAnimConfig = (pathData) => ({
      animate: { d: pathData },
      transition: Array.isArray(pathData) ? animTransition : { duration: 0.5, ease: 'easeInOut' }
  });

  return (
    <g 
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Parachute Canopy */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={current.parachute}
        transition={{ duration: 0.4 }}
        style={{ originX: '25px', originY: '0px' }}
      >
        {/* Parachute Arc */}
        <path d="M -15,0 Q 25,-40 65,0" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
        {/* Parachute Lines */}
        <path d="M -15,0 L 5,0 M 65,0 L 45,0" strokeWidth="1" />
      </motion.g>

      {/* Head (Solid Fill) */}
      <motion.circle 
        cx="25" cy="15" r="6" 
        fill="currentColor"
        strokeWidth="0"
        animate={current.head}
        transition={Array.isArray(current.head.y) ? animTransition : { duration: 0.5, ease: 'easeInOut' }}
      />

      {/* Torso */}
      <motion.path {...getAnimConfig(current.torso)} />
      
      {/* Back Leg & Arm (rendered first so they are behind) */}
      <motion.path {...getAnimConfig(current.legL)} strokeOpacity={0.3} />
      <motion.path {...getAnimConfig(current.armL)} strokeOpacity={0.3} />

      {/* Front Leg & Arm */}
      <motion.path {...getAnimConfig(current.legR)} />
      <motion.path {...getAnimConfig(current.armR)} />
    </g>
  );
};

export default DynamicCharacter;
