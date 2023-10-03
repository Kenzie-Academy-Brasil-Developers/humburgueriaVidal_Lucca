import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";

export const CartModal = ({ cartList, isOpen, onClose, setCartList }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   if (!isOpen) {
      return null;
   }

   const deleteAllItems = () => {
      setCartList([]);
   };

   return (
      <div role="dialog" className="modal">
         <div className="modal-header">
            <div className="shop">
               <h2 className="shopCart" >Carrinho de compras</h2>
            </div>
            <button aria-label="close" title="Fechar" onClick={onClose} className="closeModal" >
               <MdClose size={21} />
            </button>
         </div>
         <div className="modal-content">
            <ul>
               {cartList.map((product) => (
                  <CartItemCard key={product.id} product={product} />
               ))}
            </ul>
         </div>
         <div className="modal-footer">
            <div className="total">
               <span className="" >Total</span>
               <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
            <button onClick={deleteAllItems} className="deleteNodal" >Remover todos  </button>
         </div>
      </div>
   );
};
