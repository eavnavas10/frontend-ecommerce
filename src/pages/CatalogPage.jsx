import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { UilFilterSlash } from "@iconscout/react-unicons";
import { getAllProducts } from "../lib/get-all-products";
import { getAllSizes } from "../lib/get-all-sizes";
import { getAllCategories } from "../lib/get-all-categories";
import { ProductGrid } from "../components/ProductGrid";
import { SelectAnt } from "../components/SelectAnt";
import { PaginationAnt } from "../components/PaginationAnt";
import "./styles/CatalogPage.css";

export const CatalogPage = () => {
  const [sizes, setSizes] = useState([]);
  const [categories, setCategories] = useState([]);

  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  const [selectedSize, setSelectedSize] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState(undefined);
  const [selectedGender, setSelectedGender] = useState(undefined);

  const [searchParams] = useSearchParams();
  const [isInitialized, setIsInitialized] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  useEffect(() => {
    getAllSizes().then(setSizes);
    getAllCategories().then(setCategories);
  }, []);

  useEffect(() => {
    const categoryFromURL = searchParams.get("category");
    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL);
    }
    setIsInitialized(true);
  }, [searchParams]);

  useEffect(() => {
    if (!isInitialized) return;

    const fetchProducts = async () => {
      const { products, pagination } = await getAllProducts({
        category: selectedCategory,
        size: selectedSize,
        gender: selectedGender,
        page: currentPage,
        pageSize: itemsPerPage,
      });

      setProducts(products);
      setTotalProducts(pagination?.total || 0);
    };

    fetchProducts();
  }, [
    selectedCategory,
    selectedSize,
    selectedGender,
    currentPage,
    isInitialized,
  ]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [currentPage]);

  const sizeOptions = sizes.map((size) => ({ value: size, label: size }));
  const categoryOptions = categories.map((cat) => ({
    value: cat.title,
    label: cat.title,
  }));
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
            onChange={(value) => {
              setCurrentPage(1);
              setSelectedSize(value);
            }}
          />
        </div>

        <div className="categories-filter-container">
          <label>Categorías</label>
          <SelectAnt
            placeholder="Selecciona una categoría"
            options={categoryOptions}
            value={selectedCategory}
            onChange={(value) => {
              setCurrentPage(1);
              setSelectedCategory(value);
            }}
          />
        </div>

        <div className="gender-filter-container">
          <label>Género</label>
          <SelectAnt
            placeholder="Selecciona un género"
            options={genderOptions}
            value={selectedGender}
            onChange={(value) => {
              setCurrentPage(1);
              setSelectedGender(value);
            }}
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
                setCurrentPage(1);
              }}
            >
              Eliminar filtros
              <UilFilterSlash size="20" color="currentColor" />
            </button>
          </div>
        )}
      </div>

      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <p className="no-products-message">
          No se encontraron productos con los filtros aplicados.
        </p>
      )}

      <PaginationAnt
        className="pagination-control"
        current={currentPage}
        total={totalProducts}
        pageSize={itemsPerPage}
        onChange={(newPage) => setCurrentPage(newPage)}
      />
    </div>
  );
};
