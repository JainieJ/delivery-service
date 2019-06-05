import React from "react";
import Title from "./../Title";

const Contact = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="contact us" />
            <form
              className="mt-5"
              action="https://formspree.io/berseneva.evgeniya@gmail.com"
              method="POST"
            >
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
              <div className="form-group mt-3">
                <input
                  type="submit"
                  className="form-control bg-primary text-white"
                  value="Send"
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
