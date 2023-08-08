import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

export const Header = ({ openCartModal }) => {
   const [value, setValue] = useState("");
   const [cartItemCount, setCartItemCount] = useState(0);
   return (
      <header className="headerContent">
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div className="header" >
            <button onClick={openCartModal}>
               <MdShoppingCart size={21} />
               <span> {cartItemCount}</span>
            </button>
            <form>
               <input placeholder="Digitar Pesquisa"
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}

               />
               <button type="submit" className="submitBtn">
                  <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};
