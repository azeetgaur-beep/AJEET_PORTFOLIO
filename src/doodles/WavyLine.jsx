

const WavyLine = ({ stroke = "#1C1C1E", className, style }) => (
  <svg 
    viewBox="0 0 300 10" 
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
    <path d="M 0 5 Q 25 1, 50 5 T 100 5 T 150 5 T 200 5 T 250 5 T 300 5" />
  </svg>
);

export default WavyLine;
