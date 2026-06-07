

const PineTree = ({ stroke = "#1C1C1E", className, style }) => (
  <svg 
    viewBox="0 0 40 65" 
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
    <path d="M 20 5 L 14 18 C 16 16, 20 15, 20 15 C 20 15, 23 16, 26 19 L 20 10" />
    <path d="M 20 12 L 11 30 C 15 25, 20 23, 20 23 C 20 23, 24 25, 28 31 L 20 17" />
    <path d="M 20 23 L 8 42 C 13 37, 20 34, 20 34 C 20 34, 26 36, 32 41 L 20 28" />
    <path d="M 20 34 L 6 55 C 13 48, 20 45, 20 45 C 20 45, 28 48, 36 53 L 20 39" />
    <path d="M 20 45 L 20 62" />
  </svg>
);

export default PineTree;
