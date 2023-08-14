import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header/index.jsx";
import { ProductCard } from "./ProductCard/index.jsx";
export const ProductList = ({
  productList,
  addToCart,
  openCartModal,
  removeItemFromCart,
}) => {
  const [filteredProducts, setFilteredProducts] = useState(productList);

  const filterProducts = (searchValue) => {
    const filtered = productList.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  useEffect(() => {
    setFilteredProducts(productList);
  }, [productList]);

  return (
    <div className="container">
      <Header openCartModal={openCartModal} filterProducts={filterProducts} />
      <ul className="cardUl">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </div>
  );
};

