import React from "react";

const ContactForm = ({ handleClose }) => {
  return (
    <div class="container">
      <form
        target="_blank"
        action="https://formsubmit.co/bhuvneshsharma9758@gmail.com"
        method="POST"
      >
        <div class="form-group">
          <div class="form-row">
            <div class="col">
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Full Name"
                required
              />
            </div>
          </div>
          <div class="form-row" style={{ marginTop: 16 }}>
            <div class="col">
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <textarea
            placeholder="Your Message"
            class="form-control"
            name="message"
            rows="6"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn btn-lg btn-dark btn-block"
          onClick={handleClose}
          style={{ backgroundColor: "var(--background-color)" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
