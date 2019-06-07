import React from "react";
import { ProductConsumer } from "../../context/context";

const CartTotal = () => {
  return (
    <ProductConsumer>
      {value => {
        const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
        return (
          <div className="container">
            <div className="row">
              <div className="col text-title text-center my-4">
                <button
                  className="btn btn-outline-danger text-capitalize mb-4"
                  onClick={clearCart}
                >
                  clear cart
                </button>
                <h3 className="my-2">subtotal: ${cartSubTotal}</h3>
                <h3 className="my-2">tax: ${cartTax}</h3>
                <h3 className="my-2">total: ${cartTotal}</h3>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default CartTotal;
