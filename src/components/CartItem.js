const CartItem = ({ item, increaseItem, decreaseItem }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__img"></div>
      <div className="cart-item__info-controls">
        <div className="cart-item__info">
          <p className="cart-item__info__name">{item.name}</p>
          <div className="cart-item__info__bottom">
            <p>Quantity {item.amount}</p>
            <p>R${(item.price * item.amount).toFixed(2)}</p>
          </div>
        </div>
        <div className="cart-item_controls">
          <button onClick={() => increaseItem(item.id)}>+</button>
          <button onClick={() => decreaseItem(item.id)}>-</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
