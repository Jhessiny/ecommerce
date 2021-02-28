import Product from "./Product";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get("https://shielded-wildwood-82973.herokuapp.com/products.json")
      .then((data) => setProducts(data.data.products));
  };

  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, []);

  return (
    <div className="products-list">
      {products.length < 1 ? (
        <p>
          Sorry! Cannot get the products from server! Try again in a few
          minutes.
        </p>
      ) : (
        products.map((product) => (
          <Product
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
