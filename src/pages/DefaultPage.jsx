import React, { Component } from "react";
import defaultBcg from "../img/images/defaultBcg.jpeg";
import { Link } from "react-router-dom";
import Hero from "./../components/Hero";

class DefaultPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Hero img={defaultBcg} title="404" max="true">
          <h2 className="text-uppercase">page not found</h2>
          <Link to="/" className="main-link" style={{ margin: "2rem" }}>
            return home
          </Link>
        </Hero>
      </>
    );
  }
}

export default DefaultPage;
