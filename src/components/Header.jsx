import "./styles/Header.css";
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HamburguerButton } from './HamburguerButton';
import { UilSearch, UilHeartAlt, UilShoppingCart, UilEstate } from '@iconscout/react-unicons';
import { SideMenu } from "./SideMenu";
import { Badge } from 'antd';
import { useCart } from '../contexts/CartContext';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <header className="header-container">
      <div className="header-content">
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
          <NavLink className={({ isActive }) => isActive ? 'shopping-cart-link active' : 'shopping-cart-link'} to='/shopping-cart'>
              <Badge style={{boxShadow:"none"}} count={cartItems.length}>
                <UilShoppingCart className='shopping-cart-icon' color="currentColor" />
              </Badge>
          </NavLink>
          <button className="search-button">
            <UilSearch className='search-icon' color="currentColor" />
          </button>
        </div>

        <SideMenu isOpen={isOpen} toggleMenu={handleCloseMenu} />
        
      </div>
    </header>
  );
};
