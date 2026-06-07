

const Sunflower = ({ stroke = "#1C1C1E", className, style }) => {
  // Generate 12 petals radiating from the center (15, 15)
  const petals = Array.from({ length: 12 }).map((_, i) => (
    <path 
      key={i}
      d="M 15 11 C 12.5 5, 17.5 5, 15 11" 
      transform={`rotate(${i * 30}, 15, 15)`}
    />
  ));

  return (
    <svg 
      viewBox="0 0 30 58" 
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
      {/* Stem */}
      <path d="M 15 15 Q 12 35, 16 55" stroke="#7C9E7A" strokeWidth="1.5" />
      
      {/* Leaves */}
      <path d="M 14 38 Q 6 35, 5 28 Q 12 30, 14 38" fill="#7C9E7A" fillOpacity="0.2" stroke="#7C9E7A" />
      <path d="M 15 42 Q 24 40, 26 32 Q 20 34, 15 42" fill="#7C9E7A" fillOpacity="0.2" stroke="#7C9E7A" />
      
      {/* Petals */}
      <g stroke="#F1E05A" strokeWidth="1.5" fill="#F1E05A" fillOpacity="0.2">
        {petals}
      </g>
      
      {/* Sunflower Center */}
      <circle cx="15" cy="15" r="4" fill="#3E2723" stroke="#5D4037" strokeWidth="1" />
      <path d="M 13 13 L 17 17 M 17 13 L 13 17 M 15 12 L 15 18 M 12 15 L 18 15" stroke="#5D4037" strokeWidth="0.5" />
    </svg>
  );
};

export default Sunflower;
