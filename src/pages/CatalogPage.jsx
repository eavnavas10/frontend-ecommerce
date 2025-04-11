import React from 'react'
import './styles/CatalogPage.css'
import { ProductGrid } from '../components/ProductGrid'

export const CatalogPage = () => {
  return (
    <div>
      <h2 className="section-title">Nuestros Productos</h2>
      <ProductGrid />
    </div>
  )
}
