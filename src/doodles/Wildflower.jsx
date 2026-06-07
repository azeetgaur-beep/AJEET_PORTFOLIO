

const Wildflower = ({ stroke = "#1C1C1E", className, style }) => (
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
    <path d="M 15 15 Q 12 35, 16 55" />
    <path d="M 14 38 Q 6 35, 5 28 Q 12 30, 14 38" />
    <path d="M 15 42 Q 24 40, 26 32 Q 20 34, 15 42" />
    <circle cx="15" cy="12" r="1.5" />
    <path d="M 15 10.5 C 13 4, 17 4, 15 10.5" />
    <path d="M 16.5 12 C 22 8, 24 12, 16.5 12" />
    <path d="M 16 13.5 C 20 19, 16 21, 16 13.5" />
    <path d="M 14 13.5 C 10 20, 6 18, 14 13.5" />
    <path d="M 13.5 12 C 7 11, 9 7, 13.5 12" />
  </svg>
);

export default Wildflower;
