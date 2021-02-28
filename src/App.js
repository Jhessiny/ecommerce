import { GlobalStyle } from "./styles/global";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { ProductsProvider } from "./productsContext";

function App() {
  return (
    <ProductsProvider>
      <div className="App">
        <GlobalStyle />
        <Header />
        <div className="container">
          <main>
            <ProductList />
            <Cart cartItems={[]} />
          </main>
        </div>
      </div>
    </ProductsProvider>
  );
}

export default App;
