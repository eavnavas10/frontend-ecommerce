import React from 'react';
import "./styles/SideMenu.css";
import { NavLink } from "react-router-dom";
import { UilEstate, UilShoppingBag, UilTagAlt, UilBox, UilPhone, UilFileCheckAlt } from "@iconscout/react-unicons";

export const SideMenu = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {/* Fondo oscuro */}
      {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

      {/* Menú lateral */}
      <div className={`side-menu ${isOpen ? 'visible' : ''}`}>
        <nav className="side-nav-container">
          <ul className="side-nav-list">
            <li className="side-nav-item">
              <NavLink to="/" onClick={toggleMenu}>
                <UilEstate className='side-nav-icon' size="18" color="currentColor" />Inicio
              </NavLink>
            </li>          
            <li className="side-nav-item">
              <NavLink to="/catalog" onClick={toggleMenu}>
                <UilShoppingBag className='side-nav-icon' size="18" color="currentColor" />Catálogo
              </NavLink>
            </li>
            <li className="side-nav-item">
              <NavLink to="/offers" onClick={toggleMenu}>
                <UilTagAlt className='-side-nav-icon' size="18" color="currentColor" />Ofertas
              </NavLink>
            </li>
            <li className="side-nav-item">
              <NavLink to="/shipments" onClick={toggleMenu}>
                <UilBox className='side-nav-icon' size="18" color="currentColor" />Envíos
              </NavLink>
            </li>
            <li className="side-nav-item">
              <NavLink to="/contact-us" onClick={toggleMenu}>
                <UilPhone className='side-nav-icon' size="18" color="currentColor" />Contacto
              </NavLink>
            </li>
            <li className="side-nav-item">
              <NavLink to="/policies" onClick={toggleMenu}>
                <UilFileCheckAlt className='side-nav-icon' size="18" color="currentColor" />Políticas
              </NavLink>
            </li>              
          </ul>
        </nav>
      </div>
    </>
  );
};
