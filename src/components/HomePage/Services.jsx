import React, { Component } from "react";
import styled from "styled-components";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";

class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "free shipping",
        text:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, ad?"
      },
      {
        id: 2,
        icon: <FaRedo />,
        title: "30 days return policy",
        text:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, ad?"
      },
      {
        id: 3,
        icon: <FaDollarSign />,
        title: "secured pay",
        text:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, ad?"
      }
    ]
  };
  render() {
    return (
      <ServicesWrapper className="py-5">
        <div className="container">
          <div className="row">
            {this.state.services.map(item => {
              return (
                <div
                  className="col-10 mx-auto my-3 col-sm-6 col-md-4 text-center"
                  key={item.id}
                >
                  <div className="services-icons">{item.icon}</div>
                  <div className="text-capitalize my-3">{item.title}</div>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

export default Services;

const ServicesWrapper = styled.section`
  background: rgba(95, 185, 234, 0.5);
  .services-icons {
    font-size: 2.5rem;
    color: var(--mainBlue);
  }
  p {
    color: var(--mainDarkGrey);
  }
`;
