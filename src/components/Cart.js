import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../productsContext";
import { CartAside } from "../styles/Aside";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(ProductsContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [subTotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [discount, setDiscount] = useState(0);

  const increaseItem = (id) => {
    const newCartItems = [...cartItems];
    let increasedItem = cartItems.filter((item) => item.id === id);
    increasedItem[0].amount += 1;
    setCartItems(newCartItems);
    const total = cartItems.reduce((a, c) => a + c.price * c.amount, 0);
    setSubtotal(total);
    calcShipping();
    setTotalPrice(subTotal + shipping);
  };

  const decreaseItem = (id) => {
    let newCartItems = [...cartItems];
    let decreasedItem = newCartItems.filter((item) => item.id === id);
    if (decreasedItem[0].amount === 1) {
      newCartItems = newCartItems.filter((item) => item.id !== id);
    } else {
      decreasedItem[0].amount -= 1;
    }
    setCartItems(newCartItems);
    const total = cartItems.reduce((a, c) => a + c.price * c.amount, 0);
    setSubtotal(total);
    calcShipping();
    setTotalPrice(subTotal + shipping);
  };

  const calcShipping = () => {
    if (subTotal > 400) {
      setShipping(0);
    } else {
      let weight = cartItems.reduce((a, c) => a + c.amount, 0);
      if (weight <= 10) {
        setShipping(30);
      } else {
        let additionalShippingPrice = 7 * Math.floor((weight - 10) / 5);
        setShipping(30 + additionalShippingPrice);
      }
    }
  };

  useEffect(() => {
    const total = cartItems.reduce((a, c) => a + c.price * c.amount, 0);
    setSubtotal(total);
    calcShipping();
    setTotalPrice(subTotal + shipping);
  }, [cartItems]);

  return (
    <CartAside>
      <div className="cart">
        <div className="cart__header">
          <h2>Shopping Cart</h2>
        </div>
        <div className="cart__body">
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              increaseItem={increaseItem}
              decreaseItem={decreaseItem}
            />
          ))}
          <form action="">
            <input type="text" placeholder="Discount code" />
            <button>Apply</button>
          </form>
          <div className="cart__summary">
            <div className="cart__summary__item">
              <p>Subtotal</p>
              <p>R$ {subTotal.toFixed(2)}</p>
            </div>
            <div className="cart__summary__item">
              <p>Shipping</p>
              <p>R$ {shipping.toFixed(2)}</p>
            </div>
            <div className="cart__summary__item">
              <p>Discount</p>
              <p>R$ {discount.toFixed(2)}</p>
            </div>
            <div className="cart__summary__item cart__summary__item__total">
              <p>Total</p>
              <p>R$ {totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      <button className="cart__checkout__button">Checkout</button>
    </CartAside>
  );
};

export default Cart;
