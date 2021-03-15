import { ProductCard } from "../styles/ProductCard";

const Product = ({ name, price, available, addItemToCart, id }) => {
  return (
    <ProductCard>
      <div className="product-card__img"></div>
      <div className="product-card__info">
        <p className="product-card__info__title">{name}</p>
        {available > 0 ? (
          <p>
            R$ {price} <span>- {available} left</span>
          </p>
        ) : (
          <p>Out of stock.</p>
        )}
      </div>
      <button
        name="buy"
        onClick={() => addItemToCart(id)}
        className="product-card__button"
        disabled={available < 1}
      >
        Buy
      </button>
    </ProductCard>
  );
};

export default Product;
