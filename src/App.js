import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyle } from "./globalStyle";
import Hero from "./components/Hero"
import Products from "./components/Products"
import { productsData } from "./components/Products/data"

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="La nostra selezione" data={productsData}/>
    </Router>
  );
}

export default App;
