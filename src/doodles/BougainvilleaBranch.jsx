

const BougainvilleaBranch = ({ className = '', style }) => {
  return (
    <svg 
      className={className} 
      style={style}
      viewBox="0 0 150 300" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Tangled Vines */}
      <path d="M 75 300 Q 120 200, 60 150 T 80 0" stroke="#3E2723" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 75 300 Q 40 220, 90 180 T 60 20" stroke="#4E342E" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 60 150 Q 20 120, 30 80" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 90 180 Q 140 140, 110 90" stroke="#4E342E" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Papery Magenta Bracts (Flowers) */}
      <g fill="#E91E63" fillOpacity="0.85" stroke="#C2185B" strokeWidth="1" strokeLinejoin="round">
        {/* Cluster 1 (Bottom) */}
        <path d="M 75 280 L 85 270 L 75 260 L 65 270 Z" />
        <path d="M 85 275 L 95 265 L 85 255 L 75 265 Z" />
        <path d="M 65 275 L 75 265 L 65 255 L 55 265 Z" />
        <path d="M 75 290 L 82 280 L 75 270 L 68 280 Z" />
        
        {/* Cluster 2 (Middle Left) */}
        <path d="M 50 160 L 62 150 L 50 140 L 38 150 Z" />
        <path d="M 38 155 L 48 145 L 38 135 L 28 145 Z" />
        <path d="M 45 140 L 55 130 L 45 120 L 35 130 Z" />
        <path d="M 60 145 L 70 135 L 60 125 L 50 135 Z" />

        {/* Cluster 3 (Middle Right) */}
        <path d="M 100 170 L 115 160 L 100 150 L 85 160 Z" />
        <path d="M 115 165 L 125 155 L 115 145 L 105 155 Z" />
        <path d="M 110 180 L 120 170 L 110 160 L 100 170 Z" />
        
        {/* Cluster 4 (Top Left Branch) */}
        <path d="M 30 90 L 40 80 L 30 70 L 20 80 Z" />
        <path d="M 20 85 L 30 75 L 20 65 L 10 75 Z" />
        
        {/* Cluster 5 (Top Right Branch) */}
        <path d="M 120 100 L 132 90 L 120 80 L 108 90 Z" />
        <path d="M 108 95 L 118 85 L 108 75 L 98 85 Z" />
        <path d="M 115 110 L 125 100 L 115 90 L 105 100 Z" />

        {/* Cluster 6 (Top Center) */}
        <path d="M 70 40 L 80 30 L 70 20 L 60 30 Z" />
        <path d="M 80 35 L 90 25 L 80 15 L 70 25 Z" />
        <path d="M 60 35 L 70 25 L 60 15 L 50 25 Z" />
        <path d="M 75 50 L 85 40 L 75 30 L 65 40 Z" />
        <path d="M 85 45 L 95 35 L 85 25 L 75 35 Z" />
      </g>

      {/* Tiny White Internal Flowers */}
      <g fill="#FAFAF8">
        <circle cx="75" cy="270" r="1.5" />
        <circle cx="85" cy="265" r="1.5" />
        <circle cx="50" cy="150" r="1.5" />
        <circle cx="100" cy="160" r="1.5" />
        <circle cx="115" cy="155" r="1.5" />
        <circle cx="70" cy="30" r="1.5" />
        <circle cx="80" cy="25" r="1.5" />
      </g>

      {/* Green Leaves */}
      <g fill="#4CAF50" fillOpacity="0.6">
        <path d="M 75 240 Q 90 230, 85 220 Q 70 230, 75 240 Z" />
        <path d="M 60 200 Q 40 190, 45 180 Q 65 190, 60 200 Z" />
        <path d="M 90 130 Q 110 120, 105 110 Q 85 120, 90 130 Z" />
        <path d="M 70 80 Q 50 70, 55 60 Q 75 70, 70 80 Z" />
      </g>
    </svg>
  );
};

export default BougainvilleaBranch;
