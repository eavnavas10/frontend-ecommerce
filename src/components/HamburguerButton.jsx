import React from 'react';
import "./styles/HamburguerButton.css";

export const HamburguerButton = ({ isOpen, toggleMenu }) => {
  return (
      <button 
        className={`hamburger-button ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
      <svg 
        id="hamburger" 
        className="Header__toggle-svg" 
        viewBox="0 0 60 40" 
        width="40" 
        height="30"
      > 
        <g stroke="#FFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <path id="top-line" d="M10,5 L50,5 Z"></path>
          <path id="middle-line" d="M10,20 L50,20 Z"></path>
          <path id="bottom-line" d="M10,35 L50,35 Z"></path>
        </g>
      </svg>
    </button>
  );
};
