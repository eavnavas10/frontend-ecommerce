import React from 'react';
import "./styles/ContactPage.css";

import { UilFacebookF } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilWhatsapp } from '@iconscout/react-unicons'
import { UilEnvelope } from '@iconscout/react-unicons'

export const ContactPage = () => {
  return (
    <>
    <div className="contact-page-container">
      <h2 className="contact-page-title">Contacta con nosotros</h2>
      <div className="contact-page-items-container">

        <div className="contact-page-item">          
          <a href="https://wa.me/50230094052?text=Hola%20quiero%20más%20información" target="_blank" rel="noopener noreferrer">
              <div className="wa-icon-container">
                <UilWhatsapp className="footer-icon" size="26" color="currentColor" />                
              </div>
            <h3 className="contact-page-media-name">Whatsapp Vendedora</h3>
          </a>
        </div>

        <div className="contact-page-item">
          <a href="https://chat.whatsapp.com/LRN12JbUG4FH6gmTIkvLER" target="_blank" rel="noopener noreferrer">
              <div className="wa-icon-container">
                <UilWhatsapp className="footer-icon" size="26" color="currentColor" />                
              </div>
            <h3 className="contact-page-media-name">Whatsapp Grupo</h3>
          </a>
        </div>
        <div className="contact-page-item">
          <a href="https://www.facebook.com/coconutfash" target="_blank" rel="noopener noreferrer">
              <div className="fb-icon-container">
                <UilFacebookF className="footer-icon" size="26" color="currentColor" />
              </div>
              <h3 className="contact-page-media-name">Facebook</h3>
          </a>
        </div>
        <div className="contact-page-item">
          <a href="https://www.instagram.com/coconutfashion_store" target="_blank" rel="noopener noreferrer">
            <div className="ig-icon-container">
              <UilInstagram className="footer-icon" size="26" color="currentColor" />
            </div>
            <h3 className="contact-page-media-name">Instagram</h3>
          </a>          
        </div>
        <div className="contact-page-item">
          <a href="mailto:coconutfashion@gmail.com?subject=Etiqueta%20A&body=Hola,%20este%20es%20un%20correo%20con%20etiqueta%20A." target="_blank" rel="noopener noreferrer">
            <div className="ig-icon-container">
              <UilEnvelope className="footer-icon" size="26" color="currentColor" />
            </div>
            <h3 className="contact-page-media-name">Email</h3>
          </a>  
        </div>
      </div>
    </div>
    </>
  )
}