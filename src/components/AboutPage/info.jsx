import React from "react";
import Title from "../Title";
import aboutBcg from "../../img/images/aboutBcg.jpeg";

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              alt="about section"
              className="img-fluid img-thumbnail"
              style={{ background: "var(--mainDarkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              perspiciatis exercitationem vero eos eligendi illum sed animi
              eveniet magnam minus!
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              perspiciatis exercitationem vero eos eligendi illum sed animi
              eveniet magnam minus!
            </p>
            <button className="main-link mt-3" type="button">
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
