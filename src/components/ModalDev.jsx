import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { UilLinkedinAlt, UilWhatsapp, UilInstagram } from '@iconscout/react-unicons'
import "./styles/ModalDev.css"

export const ModalDev = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
      <>
        <span className="developer-text" onClick={showModal}>
          Ernesto Villatoro
        </span>
        <Modal title="¿Tienes algún proyecto en mente? ¡Contáctame!" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} >
          <img className="dev-picture" src="/img/developer.jpg" alt="Ernesto_Villatoro_picture"/>
          <ul className="dev-social-media">
            <li>
              <a href="https://wa.me/50233347867?text=Hola%20tengo%20un%20proyecto%20en%20mente." target="_blank" rel="noopener noreferrer">
                <div className="wa-icon-container">
                  <UilWhatsapp className="footer-icon" size="26" color="currentColor" />
                </div>
              </a>
            </li>
            <li>                    
              <a href="https://www.instagram.com/eav_navas10" target="_blank" rel="noopener noreferrer">
                <div className="ig-icon-container">
                  <UilInstagram className="footer-icon" size="26" color="currentColor" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ernesto-alfonso-villatoro-navas-583834326" target="_blank" rel="noopener noreferrer">
                  <div className="in-icon-container">
                    <UilLinkedinAlt className="footer-icon" size="26" color="white" />
                  </div>
                </a>
            </li>
          </ul>
        </Modal>
      </>
    );
}
