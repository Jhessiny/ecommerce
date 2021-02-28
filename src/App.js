import { GlobalStyle } from "./styles/global";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div className="container">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
