import React from 'react'
import { Link } from 'react-router-dom';
import "./styles/Footer.css";

export const Footer = () => {
  return (
    <footer className='footer'>
      <p>Síguenos en nuestras redes</p>
      <div className="media-container">        
        <a href="https://www.facebook.com/coconutfash" target="_blank" rel="noopener noreferrer">
            <img src=".\src\assets\icons\facebook-icon.png" alt="facebook-icon" />
        </a>        
        <a href="https://www.instagram.com/coconutfashion_store" target="_blank" rel="noopener noreferrer">
          <img src=".\src\assets\icons\instagram-icon.png" alt="instagram-icon" />
        </a>
        <a href="https://www.instagram.com/coconutfashion_store" target="_blank" rel="noopener noreferrer">
          <img src=".\src\assets\icons\whatsapp-icon.png" alt="whatsapp-icon" />
        </a>
      </div>
        <div className='copyright-container'>          
        <Link to = '/' className="copyright-link">
          <span className="coconut-footer">Coconut </span>
          <span className="fashion-footer">Fashion </span> 
          <span className="copyright-footer">© 2024</span>
          </Link>
        </div>      
    </footer>
  )
}