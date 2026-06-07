

const MountainRange = ({ stroke = "#1C1C1E", className, style }) => (
  <svg 
    viewBox="0 0 400 100" 
    fill="none" 
    stroke={stroke} 
    strokeWidth="1" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
    style={style}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Faint background ridge */}
    <path d="M 20 80 L 80 40 L 150 70 L 220 30 L 290 60 L 380 45" strokeOpacity="0.5" />
    <path d="M 10 95 Q 40 70, 70 35 Q 100 60, 130 95" />
    <path d="M 90 95 Q 130 50, 160 25 Q 190 60, 220 95" />
    <path d="M 170 95 Q 230 40, 270 15 Q 320 60, 360 95" />
  </svg>
);

export default MountainRange;
