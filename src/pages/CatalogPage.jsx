import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { UilFilterSlash } from "@iconscout/react-unicons";
import "./styles/CatalogPage.css";
import { ProductGrid } from "../components/ProductGrid";
import { getAllProducts } from "../lib/get-all-products";
import { getAllSizes } from "../lib/get-all-sizes";
import { getAllCategories } from "../lib/get-all-categories";
import { SelectAnt } from "../components/SelectAnt";

export const CatalogPage = () => {
  const [sizes, setSizes] = useState([]);
  const [categories, setCategories] = useState([]);

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedSize, setSelectedSize] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const [selectedGender, setSelectedGender] = useState(undefined);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const categoryFromURL = searchParams.get("category");
    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL);
    }
  }, [searchParams]);


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

  const sizeOptions = [...sizes.map((size) => ({ value: size, label: size }))];

  const categoryOptions = [
    ...categories.map((cat) => ({
      value: cat.title,
      label: cat.title,
    })),
  ];

  const genderOptions = [
    { value: "Unisex", label: "Unisex" },
    { value: "Hombre", label: "Hombre" },
    { value: "Mujer", label: "Mujer" },
    { value: "Niño", label: "Niño" },
    { value: "Niña", label: "Niña" },  
  ];

  return (
    <div className="catalog-page-container">
      <h2 className="catalog-page-title">Nuestros Productos</h2>

      <div className="filters-container">
        <div className="sizes-filter-container">
          <label>Tallas</label>
          <SelectAnt
            placeholder="Selecciona una talla"
            options={sizeOptions}
            value={selectedSize}
            onChange={(value) => setSelectedSize(value)}
          />
        </div>

        <div className="categories-filter-container">
          <label>Categorías</label>
          <SelectAnt
            placeholder="Selecciona una categoría"
            options={categoryOptions}
            value={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>

        <div className="gender-filter-container">
          <label>Género</label>
          <SelectAnt
            placeholder="Selecciona un género"
            options={genderOptions}
            value={selectedGender}
            onChange={setSelectedGender}
          />
        </div>

        {(selectedSize || selectedCategory || selectedGender) && (
          <div className="delete-filters-container">
            <button
              className="delete-filters-btn"
              onClick={() => {
                setSelectedCategory(undefined);
                setSelectedSize(undefined);
                setSelectedGender(undefined);
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
