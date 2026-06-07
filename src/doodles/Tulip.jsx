

const Tulip = ({ className = '', stroke = 'currentColor' }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem */}
      <path d="M12 22C12 18 10 16 10 12" stroke={stroke} strokeWidth="1" strokeLinecap="round"/>
      {/* Leaf */}
      <path d="M11 18C8 17 6 14 7 10C8 12 10 14 11 18Z" stroke={stroke} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Flower petals */}
      <path d="M7 12C7 6 9 3 12 3C15 3 17 6 17 12C15 12 13.5 10 12 8C10.5 10 9 12 7 12Z" stroke={stroke} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Tulip;
