import React from 'react'
import "./styles/PoliciesPage.css"

export const PoliciesPage = () => {

  const policiesArray = [
  {
    id: "shipments-policies",
    title: "📦 Políticas de Envío",
    className: "shipments-policies",
    items: [
      {
        subtitle: "Medios de pago",
        content: [
        "Por motivos de seguridad, únicamente aceptamos transferencias bancarias o depósitos previos como forma de pago. \
         Esta medida fue implementada debido a situaciones anteriores con entregas no concretadas \
         Puedes revisar en nuestras redes sociales o página web la satisfacción y respaldo de nuestros clientes."
        ]
      },
      {
        subtitle: "Verificación de productos antes del envío",
        content: [
          "Todos los productos se revisan cuidadosamente antes de ser enviados. \
          En caso de retiro en tienda, se recomienda verificar los artículos al momento de la entrega, ya que no se aceptan cambios ni devoluciones."
        ]
      }
    ]
  },
  {
    id: "purchasing-policies",
    title: "🛒 Políticas de Compra y Apartado",
    className: "purchasing-policies",
    items: [
      {
        subtitle: "Apartado de productos",
        content: [
          "Para apartar un artículo, se requiere un depósito del 50% del valor del mismo. \
          Si el producto no es retirado en la fecha acordada, se aplicará un cargo adicional de Q25 por cada semana de retraso."
        ]
      },
      {
        subtitle: "Cambios y devoluciones",
        content: [
          "Por políticas internas, no realizamos cambios ni devoluciones. \
          Todos los productos se entregan en perfectas condiciones y se recomienda revisarlos en tienda o durante la recepción."
        ]
      },
      {
        subtitle: "Demostración de productos a domicilio",
        content: [
          "No se realizan demostraciones de productos fuera de la tienda sin compromiso de compra. \
          En caso excepcional, si se desea ver productos a domicilio, se cobrará un monto de Q20 en concepto de transporte. \
          Este monto podrá exonerarse únicamente si se concreta una compra durante la visita."
        ]
      },
      {
        subtitle: "Créditos",
        content: ["No se otorgan créditos. Todas las compras deben ser canceladas al contado."]
      },
      {
        subtitle: "Precios y métodos de pago",
        content: [
          "Nuestros precios son accesibles. \
          Al realizar pagos con tarjeta, te solicitamos informarnos previamente, ya que las plataformas aplican altas comisiones que podrían afectar el precio final. \
          Agradecemos tu apoyo para mantener precios justos para todos."
        ]
      },
      {
        subtitle: "Descuentos para mayoristas",
        content: [
          "Se otorgan descuentos especiales a compras mayoristas, siempre que haya una constancia en la frecuencia de compra."
        ]
      }
    ]
  },
  {
    id: "store-policies",
    title: "🏬 Políticas en Tienda",
    className: "store-policies",
    items: [
      {
        subtitle: "Pruebas de ropa",
        content: [
          "Se permite probarse la ropa con responsabilidad.",
          "Evitar manchar las prendas con sudor u otros residuos.",
          "No forzar las prendas; si se estiran o pierden etiquetas, deberán ser adquiridas."
        ]
      },
      {
        subtitle: "Prueba de calzado",
        content: [
          "No se permite caminar con los zapatos dentro de la tienda para evitar desgaste.",
          "Para calzado blanco, se proporcionarán calcetas de prueba.",
          "Consulta con el personal antes de probarte los zapatos para asegurar su conservación."
        ]
      }
    ]
  }
];

  return (
    <>
      <div className="policies-page-container">
        <h2 className="policies-page-title">Nuestras Políticas</h2>
        <p className="policies-page-first-paragraph">
          En Coconut Fashion agradecemos tu preferencia y confianza. A continuación, te compartimos nuestras políticas para brindarte un servicio claro, justo y responsable:
        </p>

        <div className="policies-page-items-container">
          {policiesArray.map((policy) => (
            <section key={policy.id} className={policy.className}>
              <h2 id={policy.id}>{policy.title}</h2>
              <ol className="policies-page-list">
                {policy.items.map((item, idx) => (
                  <li className="policies-page-item" key={idx}>
                    <h3 className="policies-page-item-subtitle">{item.subtitle}</h3>
                    {item.content.map((paragraph, i) => <p key={i} className="policies-page-item-paragraph">{paragraph}</p>)}
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>

        <p className="policies-page-last-paragraph">Si tienes alguna duda o consulta adicional, no dudes en contactarnos. ¡Estamos para ayudarte! 💖</p>
      </div>
    </>
  )
}
