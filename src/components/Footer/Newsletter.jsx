import React, { useState } from "react";

import "./Newsletter.css";
import SubHeading from "../SubHeading/SubHeading";

const Newsletter = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      mobileNumber,
      emailSubject,
      message,
    };
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Contact Us" />
        <h1 className="headtext__cormorant">
          Book An Appointment/Make An order
        </h1>
        <p className="p__opensans">We reply in less than 5 minutes!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <form onSubmit={handleSubmit}>
          <div className="contact_center">
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            <input
              name="email"
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              name="mobileNumber"
              type="number"
              placeholder="Mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />

            <input
              name="emailSubject"
              type="text"
              placeholder="Email Subject"
              value={emailSubject}
              onChange={(e) => setEmailSubject(e.target.value)}
              required
            />

            <textarea
              name="message"
              rows="10"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit" className="custom__button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Newsletter;
