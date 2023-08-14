import React, { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header/index.jsx";
import { ProductList } from "../../components/ProductList";
import { getApi } from "../../services/api";
import { ProductCard } from "../../components/ProductList/ProductCard";

export const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const filterProducts = (searchValue) => {
    const filtered = productList.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const addToCart = (product) => {
    setCartList([...cartList, product]);
  };

  const removeItemFromCart = (productId) => {
    const updatedCart = cartList.filter((product) => product.id !== productId);
    setCartList(updatedCart);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const getProducts = async () => {
    try {
      const { data } = await getApi.get("/products");
      setProductList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <main>
        <div className="container">
          <ProductList
            productList={productList}
            addToCart={addToCart}
            openCartModal={openCartModal}
            removeItemFromCart={removeItemFromCart}
            filterProducts={filterProducts}
          />
        </div>
        <CartModal
          cartList={cartList}
          isOpen={isCartModalOpen}
          onClose={closeCartModal}
          setCartList={setCartList}
        />
      </main>
    </>
  );
};
