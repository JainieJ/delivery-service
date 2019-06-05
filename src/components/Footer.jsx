import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";

const Footer = () => {
  return (
    <ProductConsumer>
      {value => {
        const { socialIcons } = value;
        return (
          <FooterWrapper className="py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center">
                  <p className="text-capitalize">
                    copyright &copy; tech store {new Date().getFullYear()} all
                    rights reserved
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {socialIcons.map(item => (
                    <a
                      href={item.url}
                      key={item.id}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background: var(--mainDarkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--mainBlue);
  }
`;
