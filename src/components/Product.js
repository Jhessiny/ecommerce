import { ProductCard } from "../styles/ProductCard";

const Product = ({ name, price, available }) => {
  return (
    <ProductCard>
      <div className="product-card__img"></div>
      <div className="product-card__info">
        <p className="product-card__info__title">{name}</p>
        <p>
          R$ {price} <span>- {available} left</span>
        </p>
      </div>
      <div className="product-card__button">Buy</div>
    </ProductCard>
  );
};

export default Product;
