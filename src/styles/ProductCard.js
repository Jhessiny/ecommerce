import styled from "styled-components";

export const ProductCard = styled.div`
  width: 14rem;
  height: 22rem;
  font-size: 1.3rem;
  color: #333;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #ddd;
  position: relative;
  .product-card__img {
    width: 100%auto;
    height: 11rem;
    background-color: #aaa;
  }
  .product-card__info {
    padding: 2rem 1.5rem;
    &__title {
      font-weight: bold;
    }
    p {
      margin-bottom: 0.4rem;
    }
  }
  .product-card__button {
    background-color: #444;
    color: #eee;
    padding: 1rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
