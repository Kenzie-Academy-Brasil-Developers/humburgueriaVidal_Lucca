import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, removeItemFromCart }) => {
   const handleDelete = () => {
      removeItemFromCart(product.id);
   };

   return (
      <li>
         <div className="content">
            <img src={product.img} alt={product.name} className="imgModal" />
            <h3 className="nameModal">{product.name}</h3>
         </div>
         <button
            aria-label="delete"
            title="Remover item"
            onClick={handleDelete}
            className="itemRemove"
         >
            <MdDelete size={21} />
         </button>
      </li>
   );
};


