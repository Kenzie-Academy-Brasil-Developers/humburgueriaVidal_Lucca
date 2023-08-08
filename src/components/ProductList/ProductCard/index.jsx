export const ProductCard = ({ product, addToCart }) => {
    return (
        <li className="cardList">
            <div className="imgProduct">
                <img src={product.img} alt={product.name} className="img" />
            </div>
            <div className="productContent">
                <h3 className="productName" >{product.name}</h3>
                <span className="category">{product.category}</span>
                <div className="price">
                    <span>
                        {product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}
                    </span>
                </div>
                <button onClick={() => addToCart(product)} className="add" >Adicionar</button>
            </div>
        </li>
    );
};
