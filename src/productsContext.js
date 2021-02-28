import { useState, createContext } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <ProductsContext.Provider
        value={{
          products,
          setProducts,
          cartItems,
          setCartItems,
        }}
      >
        {props.children}
      </ProductsContext.Provider>
      ;
    </div>
  );
};
