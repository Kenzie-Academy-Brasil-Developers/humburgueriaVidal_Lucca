import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, addToCart, openCartModal, removeItemFromCart }) => {
   return (
      <div className="container">
         <ul className="cardList">
            {productList.map((product) => (
               <ProductCard key={product.id} product={product} addToCart={addToCart} openCartModal={openCartModal} removeItemFromCart={removeItemFromCart} />
            ))}
         </ul>
      </div>
   );
};

