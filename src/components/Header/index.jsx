import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

export const Header = ({ openCartModal, filterProducts, cartList }) => {
  const [value, setValue] = useState("");



  const handleSearch = (e) => {
    e.preventDefault();
    filterProducts(value);
  };

  return (
    <header className="headerContent">
      <img src={Logo} alt="Logo Kenzie Burguer" />
      <div className="header">
        <button onClick={openCartModal} className="cart">
          <MdShoppingCart size={21} />
          <span> {cartList.length}</span>
        </button>
        <form onSubmit={handleSearch}>
          <input
            placeholder="Digitar Pesquisa"
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