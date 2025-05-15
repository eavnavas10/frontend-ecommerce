import React from 'react'
import "./styles/ShipmentsPage.css"

export const ShipmentsPage = () => {
  return (
    <div className="shipments-page-container">
      <h2 className="shipments-page-title">Información sobre envíos</h2>

      <div className="shipments-page-content">
        <p>Aquí encontrarás algunas de las preguntas más frecuentes que recibimos sobre nuestros métodos, tiempos y costos de envío.</p>

        <ul>
          
          <li>
            <h3>🌍 ¿A qué lugares realizan envíos?</h3>
            <p>Realizamos envíos a todos los departamentos Guatemala</p>
          </li>

          <li>
            <h3>💸 ¿El precio del envío está incluido en el producto?</h3>
            <p>El precio del producto no incluye el envío, que cuesta Q35.00 como mínimo, dependiendo de tu ubicación.</p>
          </li>

          <li>
            <h3>⏱ ¿Cuánto tarda en llegar mi pedido?</h3>
            <p>En Retalhuleu realizamos entregas de forma INMEDIATA, los tiempos de entrega a otros departamentos son entre 3-5 días hábiles.</p>
          </li>

          <li>
            <h3>🚚 ¿Cómo se envían los productos?</h3>
            <p>Todos los envíos los trabajamos con cargo expreso</p>
          </li>

        </ul>
      </div>



    </div>
  )
}
