import Product from "./Product";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../productsContext";

const ProductList = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const [isFetching, setIsFetching] = useState(false);
  const { cartItems, setCartItems } = useContext(ProductsContext);

  const fetchProducts = () => {
    setIsFetching(true);
    axios
      .get("https://shielded-wildwood-82973.herokuapp.com/products.json")
      .then((data) => {
        if (data) {
          setProducts(data.data.products);
        } else {
          setProducts(null);
        }
      })
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addItemToCart = (id) => {
    const newItems = [...cartItems];
    const addedProduct = products.filter((item) => item.id == id);
    let alreadyExists = false;
    newItems.forEach((item) => {
      if (item.id === id) {
        item.amount += 1;
        alreadyExists = true;
      }
    });
    if (!alreadyExists) {
      let newItem = { ...addedProduct[0], amount: 1 };
      newItems.push(newItem);
    }
    setCartItems(newItems);
  };

  return (
    <div className="products-list">
      {!products && isFetching ? (
        <p>Loading</p>
      ) : !products && !isFetching ? (
        <p>
          Sorry! Cannot get the products from server! Try again in a few
          minutes.
        </p>
      ) : products.length < 1 ? (
        <p>No products available.</p>
      ) : (
        products.map((product, index) => (
          <Product
            key={"product-" + index}
            name={product.name}
            price={product.price}
            available={product.available}
            addItemToCart={addItemToCart}
            id={product.id}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
