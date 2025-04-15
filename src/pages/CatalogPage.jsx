import React, { useEffect, useState } from 'react';
import './styles/CatalogPage.css';
import { ProductGrid } from '../components/ProductGrid';
import { getAllProducts } from '../lib/get-all-products';
import { getAllSizes } from '../lib/get-all-sizes';

export const CatalogPage = () => {
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    getAllSizes().then((data) => {
      setSizes(data);
    });
  }, []);

  return (
    <div className="catalog-page-container">
      <h2 className="catalog-page-title">Nuestros Productos</h2>

        <div className="filters-container">
          <div className="sizes-filter-container">
            <label>Tallas </label>
            <select name="tallas" id="sizes">
              <option value="">Todas</option>
              {sizes.map((size, index) => (
                <option key={index} value={size}>{size}</option>
              ))}
            </select>
          </div>

          <div className="categories-filter-container">
            <label>Categorías </label>
            <select name="categorias" id="categories">
              <option value="">Todas</option>
            </select>
          </div>

          <div className="gender-filter-container">            
            <datalist id="gender">
              <option value="Todos"></option>
              <option value="Hombre"></option>
              <option value="Mujer"></option>
              <option value="Niño"></option>
              <option value="Niña"></option>
            </datalist>
            <label>Género </label>
            <input list="gender" name="gender"/>
          </div>
        </div>

      <ProductGrid fetchProducts={getAllProducts} />
    </div>
  );
};
