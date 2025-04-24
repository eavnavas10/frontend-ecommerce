import React, { useState } from 'react';
import "./styles/HamburguerButton.css";

export const HamburguerButton = ({ isOpen, toggleMenu }) => {
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleClick = () => {
    if (!hasInteracted) setHasInteracted(true);
    toggleMenu();
  };

  return (
    <button 
      className={`hamburger-button ${isOpen ? 'open' : ''} ${hasInteracted ? 'animate' : ''}`} 
      onClick={handleClick}
      aria-label="Toggle menu"
    >
      <svg 
        viewBox="0 0 60 40" 
        width="40" 
        height="30"
        className="hamburger-icon"
      >
        <g stroke="#FFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <path className="top-line" d="M10,5 L50,5 Z"></path>
          <path className="middle-line" d="M10,20 L50,20 Z"></path>
          <path className="bottom-line" d="M10,35 L50,35 Z"></path>
        </g>
      </svg>
    </button>
  );
};
