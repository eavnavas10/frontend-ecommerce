import React from 'react'
import './styles/Aside.css'

export const Aside = () => {
  return (
    <aside className="aside-container">
      <div className="aside-content">
        <h3>Categorías</h3>
        <ul>
          <a href="/camisas" className="item"><li>Camisas</li></a>
          <a href="/zapatos" className="item"><li>Zapatos</li></a>
        </ul>
      </div>
    </aside>
  )
}
