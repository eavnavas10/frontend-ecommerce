import "./styles/Header.css";
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HamburguerButton } from './HamburguerButton';
import { UilSearch } from '@iconscout/react-unicons';
import { UilHeartAlt } from '@iconscout/react-unicons'
import { UilShoppingCart } from '@iconscout/react-unicons'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`header-container ${isOpen ? 'open' : ''}`} id="header-id"> 
      <div className="hamburguer-btn-container">
        <HamburguerButton setIsOpen={setIsOpen} />
      </div>

      <div className="logo-container">
        <NavLink to = '/' className='logo-link'>
          <img src='../public/img/NEW coconut-logo-icon-nobg.png' alt="Coconut Fashion logo" className="logo-img" />
          <div className="title-container">
            <span className="coconut">Coconut</span>
            <span className="fashion">Fashion</span>
          </div>
        </NavLink>
      </div>

      <div className="icons-container">
        <NavLink className={({ isActive }) => isActive ? 'fav-link active' : 'fav-link'} to = '/favorite'>
          <UilHeartAlt className='fav-icon' color="currentColor" />
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? 'shopping-cart-link active' : 'shopping-cart-link'} to = '/shopping-cart'>
          <UilShoppingCart className='shopping-cart-icon' color="currentColor" />
        </NavLink>
        <button className="search-button">
          <UilSearch className='search-icon' color="currentColor" />
        </button>
      </div>


    </header>
  );
};
