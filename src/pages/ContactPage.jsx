import React, { Component } from "react";
import Hero from "./../components/Hero";
import contactBcg from "../img/images/contactBcg.jpeg";
import Contact from "./../components/ContactPage/Contact";

class ContactPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Hero img={contactBcg} />
        <Contact />
      </>
    );
  }
}

export default ContactPage;
