import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { UilLinkedin, UilWhatsapp, UilInstagram } from '@iconscout/react-unicons'
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
        <Modal title="¿Tienes algún proyecto en mente? ¡Contáctame!" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} getContainer={false} >
          <div className="modal-header">
            <img className="modal-cover" src="/img/cover-modal2.webp" alt="cover_image"/>
            <img className="modal-dev-picture" src="/img/developer.jpg" alt="Ernesto_Villatoro_picture"/>
            <h2 className="modal-developer-name">Ernesto Villatoro</h2>
          </div>          
          <ul className="dev-social-media">
            <li>
              <a href="https://wa.me/50233347867?text=Hola%20tengo%20un%20proyecto%20en%20mente." target="_blank" rel="noopener noreferrer">
                <div className="modal-wa-icon-container">
                  <UilWhatsapp className="footer-icon" size="26" color="currentColor" /> &nbsp;Whatsapp
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ernesto-alfonso-villatoro-navas-583834326" target="_blank" rel="noopener noreferrer">
                <div className="modal-in-icon-container">
                  <UilLinkedin className="footer-icon" size="26" color="currentColor" /> &nbsp;Linkedin
                </div>
              </a>                                  
            </li>
            <li>
              <a href="https://www.instagram.com/eav_navas10" target="_blank" rel="noopener noreferrer">
                <div className="modal-ig-icon-container">
                  <UilInstagram className="footer-icon" size="26" color="currentColor" /> &nbsp;Instagram
                </div>
              </a>
            </li>
          </ul>
        </Modal>
      </>
    );
}
