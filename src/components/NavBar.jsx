import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./styles/NavBar.css";
import { UilEstate, UilShoppingBag, UilTagAlt, UilBox, UilPhone } from "@iconscout/react-unicons";

export const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`nav-bar ${visible ? "visible" : "hidden"}`}>
      <ul className="nav-links">
        <li className="nav-item">
          <NavLink to = '/'>
            <UilEstate className="nav-icon" size="18" color="currentColor" />Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to = '/catalog'>
            <UilShoppingBag className="nav-icon" size="18" color="currentColor" />Catálogo
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to = '/offers'>
            <UilTagAlt className="nav-icon" size="18" color="currentColor" />Ofertas
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to = '/shipments'>
            <UilBox className="nav-icon" size="18" color="currentColor" />Envíos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to = '/contact-us'>
            <UilPhone className="nav-icon" size="18" color="currentColor" />Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
