import React, { Component } from "react";
import { socialData } from "./socialData";
import { linkData } from "./linkData";
import { items } from "./productData";

const ProductContext = React.createContext();
//Provider, Consumer
class ProductProvider extends Component {
  state = {
    sideBarOpen: false,
    cartOpen: false,
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    cart: [],
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true,
    links: linkData,
    socialIcons: socialData
  };
  handleSideBar = () => {
    this.setState({ sideBarOpen: !this.state.sideBarOpen });
  };
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };
  closeCart = () => {
    this.setState({ cartOpen: false });
  };
  openCart = () => {
    this.setState({ cartOpen: true });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSideBar: this.handleSideBar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
