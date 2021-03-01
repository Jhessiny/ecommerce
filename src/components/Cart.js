import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductsContext } from "../productsContext";
import { CartAside } from "../styles/Aside";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(ProductsContext);
  const { products, setProducts } = useContext(ProductsContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [subTotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [voucher, setVoucher] = useState({});
  const [discountInput, setDiscountInput] = useState("");
  const [discountMessage, setDiscountMessage] = useState("");
  const [isOrdering, setIsOrdering] = useState(false);

  const increaseItem = (id) => {
    const newCartItems = [...cartItems];
    const availableProducts = [...products];
    let decreasedAvailableProduct = availableProducts.filter(
      (item) => item.id === id
    );
    if (decreasedAvailableProduct[0].available <= 0) {
      return;
    }
    decreasedAvailableProduct[0].available -= 1;

    let increasedItem = cartItems.filter((item) => item.id === id);
    increasedItem[0].amount += 1;
    setCartItems(newCartItems);
    setProducts(availableProducts);
    calcPrice();
  };

  const decreaseItem = (id) => {
    let newCartItems = [...cartItems];
    const availableProducts = [...products];
    let decreasedAvailableProduct = availableProducts.filter(
      (item) => item.id === id
    );
    decreasedAvailableProduct[0].available += 1;
    let decreasedItem = newCartItems.filter((item) => item.id === id);
    if (decreasedItem[0].amount === 1) {
      newCartItems = newCartItems.filter((item) => item.id !== id);
    } else {
      decreasedItem[0].amount -= 1;
    }
    setCartItems(newCartItems);
    setProducts(availableProducts);
    calcPrice();
  };

  const calcShipping = () => {
    if (cartItems.length < 1) {
      setShipping(0);
    } else if (voucher.type === "shipping" || subTotal > 400) {
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

  const calcPrice = () => {
    const total = cartItems.reduce((a, c) => a + c.price * c.amount, 0);
    setSubtotal(total);
    console.log(voucher.type);
    if (voucher.type === "percentual") {
      setDiscount((voucher.amount / 100) * total);
      console.log((voucher.amount / 100) * total);
    } else if (voucher.type === "fixed") {
      setDiscount(voucher.amount);
    }
    calcShipping();
    setTotalPrice(subTotal + shipping - discount);
  };

  const verifyDiscountCode = (e) => {
    setDiscountMessage("");
    e.preventDefault();
    console.log("checking code");
    axios
      .get("https://shielded-wildwood-82973.herokuapp.com/vouchers.json")
      .then((data) => {
        const vouchers = data.data.vouchers;
        const voucher = vouchers.filter(
          (voucher) => voucher.code === discountInput
        );
        setVoucher(voucher[0]);
        setDiscountMessage("Voucher applyed successfully.");
        calcPrice();
        console.log(discount);
      })
      .catch((err) => setDiscountMessage(err.message));
  };

  useEffect(() => {
    const total = cartItems.reduce((a, c) => a + c.price * c.amount, 0);
    setSubtotal(total);
    calcShipping();
    calcPrice();
    setTotalPrice(subTotal + shipping - discount);
  }, [cartItems, calcPrice]);

  const checkoutHandler = (e) => {
    e.preventDefault();
    setIsOrdering(true);
  };

  const closeModalCheckout = () => {
    setIsOrdering(false);
  };

  return (
    <>
      {isOrdering && (
        <div className="ordering-modal-background">
          <div className="ordering-modal">
            <button onClick={closeModalCheckout} className="close-modal">
              x
            </button>
            <p>Order sent successfully.</p>
          </div>
        </div>
      )}
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
                available={item.available}
                increaseItem={increaseItem}
                decreaseItem={decreaseItem}
              />
            ))}
            <form action="">
              <input
                type="text"
                placeholder="Discount code"
                value={discountInput}
                onChange={(e) => setDiscountInput(e.target.value)}
              />
              <button onClick={verifyDiscountCode}>Apply</button>
            </form>
            <p className="discount-msg">{discountMessage}</p>
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
        <button
          onClick={checkoutHandler}
          className="cart__checkout__button"
          disabled={cartItems.length < 1}
        >
          Checkout
        </button>
      </CartAside>
    </>
  );
};

export default Cart;
