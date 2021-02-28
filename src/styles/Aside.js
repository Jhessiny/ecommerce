import styled from "styled-components";

export const CartAside = styled.div`
  width: 35%;
  font-size: 1.4rem;
  color: #333;
  .cart {
    background-color: #ddd;
    border-radius: 0.8rem;
    overflow: hidden;

    .cart__header {
      background-color: #aaa;
      font-size: 1.5rem;
      padding: 1rem;
      text-align: center;
    }

    .cart__body {
      padding: 1.2rem 1.2rem 0 1.2rem;
    }

    .cart-item {
      display: flex;
      width: 100%;
      border: 1px solid #bbb;
      border-radius: 0.5rem;
      overflow: hidden;
      margin-bottom: 1rem;

      .cart-item__img {
        width: 8rem;
        height: 6rem;
        background-color: #bbb;
      }
      .cart-item__info {
        width: 90%;
        align-items: stretch;
        padding: 0.5rem;
        * {
          height: 50%;
        }
        .cart-item__info__name {
          font-weight: bold;
        }
      }
      .cart-item__info-controls {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .cart-item_controls {
          display: flex;
          flex-direction: column;
          width: 10%;
          * {
            height: 50%;
            width: 100%;
            border: 1px solid #bbb;
            background-color: transparent;
          }
        }
      }
      .cart-item__info__bottom {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
      }
    }

    form {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0 1.5rem 0;
      input {
        width: 75%;
        border-radius: 0.3rem;
        border: 1px solid #bbb;
        padding-left: 0.5rem;
      }
      button {
        background-color: #444;
        color: #eee;
        padding: 1rem 0.5rem;
        width: 7rem;
        border: none;
        border-radius: 0.5rem;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        &:hover {
          background-color: #222;
        }
      }
    }

    .cart__summary__item {
      border-top: 1px solid #bbb;
      padding: 2rem 0;
      display: flex;
      justify-content: space-between;
    }
    .cart__summary__item__total {
      font-weight: bold;
    }
  }
  .cart__checkout__button {
    width: 100%;
    background-color: #444;
    color: #eee;
    padding: 1.5rem;
    border: none;
    border-radius: 0.5rem;
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-top: 2rem;
    cursor: pointer;
    &:hover {
      background-color: #222;
    }
  }
`;
