import React, { Component } from "react";
import aboutBcg from "../img/images/aboutBcg.jpeg";
import Hero from "./../components/Hero";
import Info from "../components/AboutPage/info";

class AboutPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Hero img={aboutBcg} />
        <Info />
      </>
    );
  }
}

export default AboutPage;
