import React, { Component } from "react";
import Cart from "./../components/CartPage/Cart";
import storeBcg from "../img/images/storeBcg.jpeg";
import Hero from "./../components/Hero";

class CartPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Hero img={storeBcg} />
        <Cart />
      </>
    );
  }
}

export default CartPage;
