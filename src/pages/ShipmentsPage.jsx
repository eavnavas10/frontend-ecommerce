import React from 'react'
import "./styles/ShipmentsPage.css"

export const ShipmentsPage = () => {
  return (
    <>
    <div className="shipments-page-container">

        <h2 className="policies-title">Políticas y condiciones</h2>
        <p>En <strong>Coconut Fashion</strong> agradecemos tu preferencia y confianza. A continuación, te compartimos nuestras políticas para brindarte un servicio claro, justo y responsable:</p>

        <div className="policies-page-container">
        <section className="shipments-policies">
        <h2 id="shipments-policies">📦 Políticas de Envío</h2>
        <ol>
          <li>
            <strong>Medios de pago</strong>
            <br/>
            <p>Por motivos de seguridad, únicamente aceptamos <strong>transferencias bancarias o depósitos previos</strong> como forma de pago. Esta medida fue implementada debido a situaciones anteriores con entregas no concretadas.</p>
            <p>Agradecemos tu comprensión y confianza. Puedes revisar en nuestras redes sociales o página web la satisfacción y respaldo de nuestros clientes.</p>
          </li>
          <li>
            <strong>Verificación de productos antes del envío</strong>
            <br/>
            <p>Todos los productos se revisan cuidadosamente antes de ser enviados. En caso de retiro en tienda, se recomienda verificar los artículos al momento de la entrega, ya que <strong>no se aceptan cambios ni devoluciones</strong>.</p>
          </li>
        </ol>
        </section>

        <section className="purchasing-policies">
        <h2 id="purchasing-policies">🛒 Políticas de Compra y Apartado</h2>
        <ol>
          <li>
            <strong>Apartado de productos</strong><br/>
            <p>Para apartar un artículo, se requiere un <strong>depósito del 50%</strong> del valor del mismo.</p>
            <p>Si el producto no es retirado en la fecha acordada, se aplicará un <strong>cargo adicional de Q25 por cada semana de retraso</strong>.</p>
          </li>
          <li>
            <strong>Cambios y devoluciones</strong><br/>
            <p>Por políticas internas, <strong>no realizamos cambios ni devoluciones</strong>. Todos los productos se entregan en perfectas condiciones y se recomienda revisarlos en tienda o durante la recepción.</p>
          </li>
          <li>
            <strong>Demostración de productos a domicilio</strong><br/>
            <p>No se realizan demostraciones de productos fuera de la tienda sin compromiso de compra.</p>
            <p>En caso excepcional, si se desea ver productos a domicilio, se cobrará un <strong>monto de Q20 en concepto de transporte</strong>. Este monto podrá exonerarse únicamente si se concreta una compra durante la visita.</p>
          </li>
          <li>
            <strong>Créditos</strong><br/>
            <p><strong>No se otorgan créditos.</strong> Todas las compras deben ser canceladas al contado.</p>
          </li>
          <li>
            <strong>Precios y métodos de pago</strong><br/>
            <p>Nuestros precios son accesibles. Al realizar pagos con tarjeta, te solicitamos <strong>informarnos previamente</strong>, ya que las plataformas aplican <strong>altas comisiones</strong> que podrían afectar el precio final.</p>
            <p>Agradecemos tu apoyo para mantener precios justos para todos.</p>
          </li>
          <li>
            <strong>Descuentos para mayoristas</strong><br/>
            <p>Se otorgan <strong>descuentos especiales a compras mayoristas</strong>, siempre que haya una <strong>constancia en la frecuencia de compra</strong>.</p>
          </li>
        </ol>
        </section>

        <section className="store-policies">
        <h2 id="store-policies">🏬 Políticas en Tienda</h2>
        <ol>
          <li>
            <strong>Pruebas de ropa</strong><br/>
            <ul>
              <li>Se permite probarse la ropa con responsabilidad.</li>
              <li>Evitar manchar las prendas con sudor u otros residuos.</li>
              <li>No forzar las prendas; si se estiran o pierden etiquetas, <strong>deberán ser adquiridas</strong>.</li>
            </ul>
          </li>
          <li>
            <strong>Prueba de calzado</strong><br/>
            <ul>
              <li>No se permite caminar con los zapatos dentro de la tienda para evitar desgaste.</li>
              <li>Para calzado blanco, se proporcionarán calcetas de prueba.</li>
              <li>Consulta con el personal antes de probarte los zapatos para asegurar su conservación.</li>
            </ul>
          </li>
        </ol>
        </section>
        </div>

          <p>Si tienes alguna duda o consulta adicional, no dudes en contactarnos. ¡Estamos para ayudarte! 💖</p>
      </div>
    </>
  )
}
