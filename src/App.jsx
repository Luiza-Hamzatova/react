import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import React from "react";
import Products from "./components/products/products";

const App = () => {
  return (
    <div className="main">
      <Header />
      <Products/>
      <Footer />
    </div>
  );
};

export default App;
