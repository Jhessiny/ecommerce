import { GlobalStyle } from "./styles/global";
import ProductList from "./components/ProductList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <div className="container">
        <main>
          <ProductList />
        </main>
      </div>
    </div>
  );
}

export default App;
