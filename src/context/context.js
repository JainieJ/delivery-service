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
    loading: false,
    links: linkData,
    socialIcons: socialData
  };
  componentDidMount() {
    //getting products from contentful

    this.setProducts(items);
  }
  setProducts = products => {
    //converting to readable array
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });
    //filter be featured
    let featuredProducts = storeProducts.filter(item => item.featured);
    console.log(featuredProducts);
    //setting state
    this.setState({
      storeProducts,
      featuredProducts,
      filteredProducts: storeProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false
    });
  };
  getStorageCart = () => {
    return [];
  };
  getStorageProduct = () => {
    return {};
  };
  getTotals = () => {};
  addTotals = () => {};
  syncStorage = () => {};
  addToCart = id => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    this.setState(
      () => {
        return { cart: tempCart };
      },
      () => {
        this.addTotals();
        this.syncStorage();
        this.openCart();
      }
    );
  };
  setSingleProduct = id => {
    console.log("set signle product", id);
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
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
