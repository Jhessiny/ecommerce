import { GlobalStyle } from "./styles/global";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <div className="container">
        <main>
          <ProductList />
          <Cart />
        </main>
      </div>
    </div>
  );
}

export default App;
