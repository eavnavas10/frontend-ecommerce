import React, { useEffect, useState } from 'react';
import "./styles/OffersPage.css";
import { ProductGrid } from '../components/ProductGrid';
import { getOffers } from '../lib/get-offers';

export const OffersPage = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      const data = await getOffers();
      setOffers(data || []);
    };

    fetchOffers();
  }, []);

  return (
    <div className="offers-page-container">
      <h2 className="offers-page-title">¡Conoce nuestras ofertas!</h2>
      <ProductGrid products={offers} />
    </div>
  );
};
