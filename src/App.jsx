import { useState, useLayoutEffect } from "react";
import "./App.css";
import NavBar from "../components/header";
import Footer from "../components/footer";

import Headerdisplay from "../components/headerdisplay";
import CardContainer from "../components/cardcontainer";


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useLayoutEffect(() => {
    fetch("http://localhost:5173/products.json")
      .then((response) => response.json())
      .then((result) => {
        if (result.data.length > 0) {
          setProducts(result.data);
        }
      })
      .catch((error) => console.log(error));
    return () => {};
  }, []);

  function handleAddToCart(data = {}) {
    let cartCopy = [...cart];
    cartCopy.push(data);    
    setCart(cartCopy); 
  }
  

  return (
    <div>
      <NavBar quantity={cart.length} />
      
      
      <Headerdisplay />
      <CardContainer
        products={products}
        handleAddToCart={handleAddToCart}
        cart={cart}
      />
      <Footer />
    </div>
  );
}

export default App;
