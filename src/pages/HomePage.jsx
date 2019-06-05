import React, { Component } from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <>
        <Hero title="awesome gadgets" max="true">
          <Link to="/products">our products</Link>
        </Hero>
      </>
    );
  }
}

export default HomePage;
