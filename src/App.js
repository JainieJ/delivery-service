import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProducts from "./pages/SingleProducts";
import CartPage from "./pages/CartPage";
import DefaultPage from "./pages/DefaultPage";
import "./App.css";

function App() {
  return (
    <>
      {/* navbar, side, cart */}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/products/:id" exact component={SingleProducts} />
        <Route path="/cart" component={CartPage} />
        <Route component={DefaultPage} />
      </Switch>
    </>
  );
}

export default App;
