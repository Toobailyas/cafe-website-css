import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-info">
        <h1 className="contact-title">Contact Us</h1>
        <h2 className="contact-email">Email: tooba@cafe.com</h2>
        <h2 className="contact-location-title">Location of our Cafe</h2>
        <h3 className="contact-location">Quaidabad</h3>
        <p className="contact-address">Karachi, Karachi City, Sindh</p>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28961.45464162458!2d67.20476321854356!3d24.857638637552572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb330c0490e9f33%3A0x45a3872e23b47123!2sQuaidabad%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731174855526!5m2!1sen!2s"
          width="910"
          height="300"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
