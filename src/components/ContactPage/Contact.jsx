import React from "react";
import Title from "./../Title";

const Contact = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="contact us" />
            <form className="mt-5">
              {/* first */}
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="john smith"
                />
              </div>
              {/* email */}
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="mail@gmail.com"
                />
              </div>
              {/* subject */}
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="subject"
                />
              </div>
              {/* text area */}
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows="10"
                  placeholder="hey there"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
