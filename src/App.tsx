import "./App.css";
import Products from "./components/products";
import HeaderComp from "./components/header";
import { ThemeContext, black } from "./contextApi/ThemeContext";
import { useContext } from "react";


function App() {
  const { light, toggle, setToggle } = useContext(ThemeContext);

  return (
    <div className="App">
      <div style={toggle ? black : light}>Emin</div>
      <button onClick={() => setToggle?.((value) => !value)}>
        Change Color
      </button>
      <HeaderComp />
      <Products />
    </div>
  );
}

export default App;


