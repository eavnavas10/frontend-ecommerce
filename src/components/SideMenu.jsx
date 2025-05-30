import React from 'react';
import { useEffect, useState } from "react";
import "./styles/SideMenu.css";
import { Link, NavLink } from "react-router-dom";
import { CategoryIcon } from './CustomIcons';
import { UilEstate, UilShoppingBag, UilTagAlt, UilBox, UilPhone, UilFileCheckAlt, UilAngleDown } from "@iconscout/react-unicons";
import { getAllCategories } from "../lib/get-all-categories";

export const SideMenu = ({ isOpen, toggleMenu }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

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
            <details>
              <summary>
                <CategoryIcon size={18} color="white" />Categorías
                <span className="icon-wrapper">
                  <UilAngleDown className="side-nav-icon" size="20" color="currentColor" />
                </span>
              </summary>
              {categories.map((category) => (
                <li key={category.id} className="side-nav-item">
                    <Link
                      to={`/catalog?category=${encodeURIComponent(category.title)}`}
                      onClick={toggleMenu}
                    >
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="side-nav-category-icon"
                  />
                  {category.title}
                  </Link>
                </li>
              ))}
            </details>
          </ul>
        </nav>
      </div>
    </>
  );
};