import React, { useEffect, useState } from "react";
import { ProductGrid } from "../components/ProductGrid";
import { getOffers } from "../lib/get-offers";
import { PaginationAnt } from "../components/PaginationAnt";
import "./styles/OffersPage.css";

export const OffersPage = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  useEffect(() => {
    const fetchProducts = async () => {
      const { products, pagination } = await getOffers({
        page: currentPage,
        pageSize: itemsPerPage,
      });

      setProducts(products);
      setTotalProducts(pagination?.total || 0);
    };

    fetchProducts();
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [currentPage]);

  return (
    <div className="offers-page-container">
      <h2 className="offers-page-title">¡Conoce nuestras ofertas!</h2>
      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <p className="no-products-message">
          No hay productos en oferta por el momento.
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
