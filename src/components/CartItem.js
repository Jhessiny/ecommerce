const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__img"></div>
      <div className="cart-item__info-controls">
        <div className="cart-item__info">
          <p className="cart-item__info__name">Item name</p>
          <div className="cart-item__info__bottom">
            <p>Quantity 4</p>
            <p>R$ 123,00</p>
          </div>
        </div>
        <div className="cart-item_controls">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
