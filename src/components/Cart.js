import { CartAside } from "../styles/Aside";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <CartAside>
      <div className="cart">
        <div className="cart__header">
          <h2>Shopping Cart</h2>
        </div>
        <div className="cart__body">
          <CartItem />
          <CartItem />
          <form action="">
            <input type="text" placeholder="Discount code" />
            <button>Apply</button>
          </form>
          <div className="cart__summary">
            <div className="cart__summary__item">
              <p>Subtotal</p>
              <p>R$ 200,00</p>
            </div>
            <div className="cart__summary__item">
              <p>Shipping</p>
              <p>R$ 200,00</p>
            </div>
            <div className="cart__summary__item">
              <p>Discount</p>
              <p>R$ 200,00</p>
            </div>
            <div className="cart__summary__item cart__summary__item__total">
              <p>Total</p>
              <p>R$ 200,00</p>
            </div>
          </div>
        </div>
      </div>
      <button className="cart__checkout__button">Checkout</button>
    </CartAside>
  );
};

export default Cart;
