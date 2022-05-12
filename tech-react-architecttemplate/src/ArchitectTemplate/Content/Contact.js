import React from "react";

function Contact() {
  return (
    <>
      {/* Contact Section */}
      <div className="w3-container w3-padding-32" id="contact">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          Contact
        </h3>
        <p>Lets get in touch and talk about your next project.</p>
        <form action="/action_page.php" target="_blank">
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="Name"
            required=""
            name="Name"
          />
          <input
            className="w3-input w3-section w3-border"
            type="text"
            placeholder="Email"
            required=""
            name="Email"
          />
          <input
            className="w3-input w3-section w3-border"
            type="text"
            placeholder="Subject"
            required=""
            name="Subject"
          />
          <input
            className="w3-input w3-section w3-border"
            type="text"
            placeholder="Comment"
            required=""
            name="Comment"
          />
          <button className="w3-button w3-black w3-section" type="submit">
            <i className="fa fa-paper-plane" /> SEND MESSAGE
          </button>
        </form>
      </div>
      {/* Image of location/map */}
      <div className="w3-container">
        <img
          src="https://www.w3schools.com//w3images/map.jpg"
          className="w3-image"
          style={{ width: "100%" }}
        />
      </div>
      {/* End page content */}
    </>
  );
}

export default Contact;
