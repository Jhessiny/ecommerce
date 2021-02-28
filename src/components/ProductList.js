import Product from "./Product";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

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
    console.log(products);
  }, []);

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
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
