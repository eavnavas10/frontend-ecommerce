import React, { useEffect, useState } from "react";
import { UilFilterSlash } from "@iconscout/react-unicons";
import "./styles/CatalogPage.css";
import { ProductGrid } from "../components/ProductGrid";
import { getAllProducts } from "../lib/get-all-products";
import { getAllSizes } from "../lib/get-all-sizes";
import { getAllCategories } from "../lib/get-all-categories";

export const CatalogPage = () => {
  const [sizes, setSizes] = useState([]);
  const [categories, setCategories] = useState([]);

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const [filterbtn, setfilterbtn] = useState("");

  useEffect(() => {
    getAllSizes().then(setSizes);
    getAllCategories().then(setCategories);
    getAllProducts().then((products) => {
      setAllProducts(products);
      setFilteredProducts(products);
    });
  }, []);

  useEffect(() => {
    let result = allProducts;

    if (selectedSize) {
      result = result.filter((product) => product.sizes.includes(selectedSize));
    }

    if (selectedCategory) {
      result = result.filter((product) =>
        product.category.includes(selectedCategory)
      );
    }

    if (selectedGender) {
      result = result.filter((product) =>
        product.gender.includes(selectedGender)
      );
    }

    setFilteredProducts(result);
  }, [selectedSize, selectedCategory, selectedGender, allProducts]);

  return (
    <div className="catalog-page-container">
      <h2 className="catalog-page-title">Nuestros Productos</h2>

      <div className="filters-container">
        <div className="sizes-filter-container">
          <label>Tallas </label>
          <select
            name="tallas"
            id="sizes"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">Todas</option>
            {sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="categories-filter-container">
          <label>Categorías </label>
          <select
            name="categorias"
            id="categories"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Todas</option>
            {categories.map((category, index) => (
              <option key={index} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        <div className="gender-filter-container">
          <label>Género </label>
          <select
            name="genero"
            id="gender"
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="Unisex">Unisex</option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
            <option value="Niño">Niño</option>
            <option value="Niña">Niña</option>
          </select>
        </div>

        {(selectedSize || selectedCategory || selectedGender) && (
          <div className="delete-filters-container">
            <button
              className="delete-filters-btn"
              onClick={() => {
                setSelectedCategory("");
                setSelectedSize("");
                setSelectedGender("");
              }}
            >
              Eliminar filtros
              <UilFilterSlash size="20" color="currentColor" />
            </button>
          </div>
        )}
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
};
