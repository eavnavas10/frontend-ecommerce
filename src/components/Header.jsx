import "./styles/Header.css";
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HamburguerButton } from './HamburguerButton';
import { UilSearch } from '@iconscout/react-unicons';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`header-container ${isOpen ? 'open' : ''}`} id="header-id"> 
      <div className="hamburguer-btn-container">
        <HamburguerButton setIsOpen={setIsOpen} />
      </div>

      <div className="logo-container">
        <NavLink to = '/' className='logo-link'>
          <img src='./src/assets/img/coconut-logo-icon-nobg.png' alt="Coconut Fashion logo" className="logo-img" />
          <div className="title-container">
            <span className="coconut">Coconut</span>
            <span className="fashion">Fashion</span>
          </div>
        </NavLink>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Buscar..." className="search-input" />
        <button className="search-button">
          <UilSearch className='search-icon' color="currentColor" />
        </button>
      </div>
    </header>
  );
};
