

const Bougainvillea = ({ className = '', stroke = 'currentColor' }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Vine */}
      <path d="M4 28C10 24 14 18 16 10C18 6 22 4 28 4" stroke={stroke} strokeWidth="1" strokeLinecap="round"/>
      {/* Signature Bracts / Leaves */}
      <path d="M12 22C9 20 8 16 10 14C12 16 14 18 12 22Z" stroke={stroke} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 16C15 14 14 10 16 8C18 10 20 12 18 16Z" stroke={stroke} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 12C19 10 18 6 20 4C22 6 24 8 22 12Z" stroke={stroke} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Tiny internal flowers */}
      <circle cx="11" cy="18" r="1" fill={stroke}/>
      <circle cx="17" cy="12" r="1" fill={stroke}/>
      <circle cx="21" cy="8" r="1" fill={stroke}/>
    </svg>
  );
};

export default Bougainvillea;
