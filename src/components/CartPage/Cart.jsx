import React from "react";
import CartColumns from "./CartColumns";
import Title from "../../components/Title";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = ({ history }) => {
  return (
    <section className="py-5">
      {/* title */}
      <div className="container">
        <Title title="cart items" center="true" />
      </div>
      {/* cart contents */}
      <CartColumns />
      <CartList />
      <CartTotals history={history} />
    </section>
  );
};

export default Cart;
