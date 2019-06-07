import React from "react";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = () => {
  return (
    <>
      <CartColumns />
      <CartList />
      <CartTotals />
    </>
  );
};

export default Cart;
