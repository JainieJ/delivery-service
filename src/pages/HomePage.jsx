import React, { Component } from "react";
import { ProductConsumer } from "../context/context";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {value => {
          console.log(value);
          return <h1>hello from homepgae</h1>;
        }}
      </ProductConsumer>
    );
  }
}

export default HomePage;
