import React from 'react'
import { ScrollToHashElement } from "./ScrollToHashElement"

import { UilAngleRightB } from '@iconscout/react-unicons'

import { UilFacebookF } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilWhatsapp } from '@iconscout/react-unicons'

import { Link } from 'react-router-dom';
import "./styles/Footer.css";

export const Footer = () => {

  return (
    <>
    <ScrollToHashElement />
      <footer className='footer-container'>
        <div className="info-container">

          <div className="media-container">
            <h4>Nuestras redes sociales</h4>
              <p>¡Síguenos para enterarte de más!</p>
                <div className="media-icons-container">                
                  <a href="https://www.facebook.com/coconutfash" target="_blank" rel="noopener noreferrer">
                      <div className="fb-icon-container">
                        <UilFacebookF className="footer-icon" size="26" color="currentColor" />
                      </div>
                  </a>                                        
                  <a href="https://www.instagram.com/coconutfashion_store" target="_blank" rel="noopener noreferrer">
                    <div className="ig-icon-container">
                      <UilInstagram className="footer-icon" size="26" color="currentColor" />
                    </div>
                  </a>                
                  <a href="https://wa.me/50230094052?text=Hola%20quiero%20más%20información" target="_blank" rel="noopener noreferrer">
                      <div className="wa-icon-container">
                        <UilWhatsapp className="footer-icon" size="26" color="currentColor" />
                      </div>
                  </a>
                </div>
          </div>

          <div className="policies-container">
            <h4>Políticas y condiciones</h4>
            <ul className="policy-links">
              <li className="policy-item">
                <Link to = "/shipments#shipments-policies">
                  Políticas de envíos<UilAngleRightB className="policy-icon" size="18" color="currentColor" />
                </Link>              
              </li>
              <li className="policy-item">
                <Link to = "/shipments#purchasing-policies">
                  Políticas de compras<UilAngleRightB className="policy-icon" size="18" color="currentColor" />
                </Link>
              </li>
              <li className="policy-item">
                <Link to = "/shipments#store-policies">
                  Políticas de tienda<UilAngleRightB className="policy-icon" size="18" color="currentColor" />
                </Link>              
              </li>            
            </ul>
          </div>

          <div className="about-us-container">
            <h4>Acerca de nosotros</h4>
            <ul>
              <li>®️ Producto 100% original</li>
              <li>✈️ Mercadería Importada</li>
              <li>📦 Venta por Mayor y Menor</li>
            </ul>
          </div>
      
        </div>

        <div className='copyright-container'>          
          <Link to = '/' className="copyright-link">                            
            <img src="/img/coconut-fashion-title-footer.png" alt="coconut-fashion-name"></img>
            <span>© 2024</span>          
          </Link>
            <span className="copyright-divider-line">|</span>
            <p className="credits-text">Desarrollado por 
              <span className="developer-text"> Ernesto Villatoro</span>
            </p>
            
        </div>
      </footer>
    </>
  )
}