import React, { Component } from "react";
import { Link } from "react-router-dom";
import singleProductBcg from "../img/images/singleProductBcg.jpeg";
import Hero from "./../components/Hero";
import { ProductConsumer } from "../context/context";

class SingleProducts extends Component {
  state = {};
  render() {
    return (
      <>
        <Hero img={singleProductBcg} title="signle product" />
        <ProductConsumer>
          {value => {
            const { singleProduct, addToCart, loading } = value;
            if (loading) {
              console.log("loading");
              return <h1>product loading..</h1>;
            }
            const {
              company,
              description,
              image,
              price,
              title,
              id
            } = singleProduct;
            return (
              <section className="py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                      <img src={image} alt="product" className="img-fluid" />
                    </div>
                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                      <h5 className="text-title mb-4">model: {title}</h5>
                      <h5 className="text-capitalize text-muted mb-4">
                        company: {company}
                      </h5>
                      <h5 className="main-text text-capitalize">
                        price: ${price}
                      </h5>
                      <p className="mt-3 text-title text-capitalize">
                        some info about the product:
                      </p>
                      <p>{description}</p>
                      <button
                        className="main-link"
                        style={{ margin: "0.75rem" }}
                        type="button"
                        onClick={() => addToCart(id)}
                      >
                        add to cart
                      </button>
                      <Link
                        to="/products"
                        className="main-link"
                        style={{ margin: "0.75rem" }}
                      >
                        back to products
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          }}
        </ProductConsumer>
      </>
    );
  }
}

export default SingleProducts;
