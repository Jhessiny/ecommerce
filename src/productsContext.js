import { useState, createContext } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState(null);
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
