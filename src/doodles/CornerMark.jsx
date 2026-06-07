

const CornerMark = ({ stroke = "#1C1C1E", className, style }) => (
  <svg 
    viewBox="0 0 20 20" 
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
    <path d="M 5 15 L 5 5 L 15 5" />
  </svg>
);

export default CornerMark;
