import React, { Component } from "react";
import productsBcg from "../img/images/productsBcg.jpeg";
import Hero from "./../components/Hero";
import Products from "../components/ProductsPage/Products";

class ProductsPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Hero img={productsBcg} />
        <Products />
      </>
    );
  }
}

export default ProductsPage;
