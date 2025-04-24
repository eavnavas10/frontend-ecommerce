import "./styles/Header.css";
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HamburguerButton } from './HamburguerButton';
import { UilSearch, UilHeartAlt, UilShoppingCart } from '@iconscout/react-unicons';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header-container"> 
      <div className="hamburguer-btn-container">
        <HamburguerButton isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
      </div>

      <div className="logo-container">
        <NavLink to='/' className='logo-link'>
          <div className="icon-logo-container">
            <img src="/img/coconut-fashion-icon-nobg.png" alt="Coconut Fashion logo" className="logo-img" />
          </div>          
          <div className="title-container">
            <img src="/img/coconut-fashion-title-header.png" alt="Coconut Fashion Title" className="title-img" />
          </div>
        </NavLink>
      </div>

      <div className="icons-container">
        <NavLink className={({ isActive }) => isActive ? 'favorite-link active' : 'favorite-link'} to='/favorite'>
          <UilHeartAlt className='favorite-icon' color="currentColor" />
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? 'shopping-cart-link active' : 'shopping-cart-link'} to='/shopping-cart'>
          <UilShoppingCart className='shopping-cart-icon' color="currentColor" />
        </NavLink>
        <button className="search-button">
          <UilSearch className='search-icon' color="currentColor" />
        </button>
      </div>

      {/* Fondo oscuro */}
      {isOpen && <div className="menu-overlay" onClick={handleCloseMenu}></div>}

      {/* Menú lateral */}
        <div className={`side-menu ${isOpen ? 'visible' : ''}`}>
          <nav className="side-nav">
            <NavLink to="/" onClick={handleCloseMenu}>Inicio</NavLink>
            <NavLink to="/catalog" onClick={handleCloseMenu}>Catálogo</NavLink>
            <NavLink to="/offers" onClick={handleCloseMenu}>Ofertas</NavLink>
            <NavLink to="/shipments" onClick={handleCloseMenu}>Envíos</NavLink>
            <NavLink to="/contact-us" onClick={handleCloseMenu}>Contacto</NavLink>
            <NavLink to="/policies" onClick={handleCloseMenu}>Políticas</NavLink>
          </nav>
        </div>
    </header>
  );
};
