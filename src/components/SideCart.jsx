import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";
import { Link } from "react-router-dom";

const SideCart = () => {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart, cartTotal } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
              {cart.map(item => {
                return (
                  <li key={item.id} className="cart-item mb-4">
                    <img
                      src={`../${item.image}`}
                      alt="product in cart"
                      width="35px"
                    />
                    <div className="mt-3">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-title text-capitalize">
                        amount: {item.count}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize main-text">
              cart total: ${cartTotal}
            </h4>
            <div className="my-5 text-center">
              <Link to="/cart" className="main-link">
                cart page
              </Link>
            </div>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
};

export default SideCart;

const CartWrapper = styled.div`
  position: fixed;
  top: 61px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-left: 3px solid var(--mainBlue);
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0;
  }
  .cart-item {
    list-style-type: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
