import "./styles/Header.css";
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HamburguerButton } from './HamburguerButton';
import { UilSearch, UilShoppingCart } from '@iconscout/react-unicons';
import { SideMenu } from "./SideMenu";
import { Badge, Modal, Input, List, Spin } from 'antd';
import { useCart } from '../contexts/CartContext';
import { getAllProducts } from "../lib/get-all-products";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  // Búsqueda usando tu utilidad getAllProducts
  const handleSearch = async (value) => {
    if (!value.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const res = await getAllProducts();
      const filtered = res.products.filter((p) =>
        p.title.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    } catch (err) {
      console.error("Error buscando productos:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="header-container">
      <div className="header-content">
        
        {/* Botón Hamburguesa */}
        <div className="hamburguer-btn-container">
          <HamburguerButton isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
        </div>

        {/* Logo */}
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

        {/* Iconos */}
        <div className="icons-container">
          <NavLink 
            className={({ isActive }) => isActive ? 'shopping-cart-link active' : 'shopping-cart-link'} 
            to='/shopping-cart'
          >
            <Badge style={{ boxShadow: "none" }} count={totalQuantity}>
              <UilShoppingCart className='shopping-cart-icon' color="currentColor" />
            </Badge>
          </NavLink>

          {/* Botón Buscar */}
          <button className="search-button" onClick={() => setSearchOpen(true)}>
            <UilSearch className='search-icon' color="currentColor" />
          </button>
        </div>

        {/* SideMenu */}
        <SideMenu isOpen={isOpen} toggleMenu={handleCloseMenu} />

        {/* Modal de búsqueda */}
        <Modal
          title="Buscar productos"
          open={searchOpen}
          onCancel={() => setSearchOpen(false)}
          footer={null}
          width={600}
        >
          <Input.Search
            placeholder="Escribe para buscar..."
            allowClear
            enterButton
            value={searchValue}
            onChange={(e) => {
              const val = e.target.value;
              setSearchValue(val);
              handleSearch(val);
            }}
            onSearch={handleSearch}
          />

          <div style={{ marginTop: 16 }}>
            {loading ? (
              <Spin />
            ) : (
              <List
                dataSource={results}
                renderItem={(item) => (
                  <List.Item>
                    <NavLink
                      to={`/producto/${item.id}`}
                      onClick={() => setSearchOpen(false)}
                      style={{ display: "flex", alignItems: "center", gap: "10px" }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 6 }}
                      />
                      <div>
                        <div style={{ fontWeight: 600 }}>{item.title}</div>
                        <div style={{ color: "red" }}>Q{item.price}</div>
                      </div>
                    </NavLink>
                  </List.Item>
                )}
              />
            )}
          </div>
        </Modal>
      </div>
    </header>
  );
};
