import { ProductCard } from "../styles/ProductCard";

const Product = () => {
  return (
    <ProductCard>
      <div className="product-card__img"></div>
      <div className="product-card__info">
        <p className="product-card__info__title">Product Name</p>
        <p>
          R$ 30,00 <span>- 2 left</span>
        </p>
      </div>
      <div className="product-card__button">Buy</div>
    </ProductCard>
  );
};

export default Product;
