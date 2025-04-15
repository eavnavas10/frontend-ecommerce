import React from 'react'
import "./styles/OffersPage.css"
import { ProductGrid } from '../components/ProductGrid'
import { getOffers } from '../lib/get-offers';

export const OffersPage = () => {

  return (
    <div className="offers-page-container">
      <h2 className="offers-page-title">¡Conoce nuestras ofertas!</h2>
      <ProductGrid fetchProducts={getOffers} />
    </div>
  )
}
