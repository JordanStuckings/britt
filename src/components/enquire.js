import React from "react";

import "./enquire.css";

const Enquire = () => (
  <section id="contact" className="enquire">
    <form
      action="https://app.99inbound.com/api/e/CY4nNhln"
      method="POST"
      target="_blank"
    >
      <div style={{ position: "absolute", left: "-5000px" }}>
        <input
          type="checkbox"
          name="wind_up_sunshine_matte_dishwasher"
          value="1"
          tabindex="-1"
          autocomplete="no"
        />
      </div>
      <ul className="list">
        <li className="item">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            tabindex="-2"
          />
        </li>
        <li className="item">
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            tabindex="-3"
          />
        </li>
        <li className="item">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            tabindex="-4"
          />
        </li>
        <li className="item">
          <button>Enquire Now</button>
        </li>
      </ul>
    </form>
  </section>
);

export default Enquire;
