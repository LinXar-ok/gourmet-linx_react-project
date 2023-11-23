import React from "react";
import { SubHeading } from "../../../components";
import images from "../../../constants/images";
import { BsInstagram, BsFacebook, BsTiktok } from "react-icons/bs";
import "./FindUs.css";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <div
          className="p__opensans app__findUs"
          style={{ paddingBottom: "1rem" }}
        >
          <BsFacebook
            className="app__findUs-icon"
            style={{ marginRight: "1rem" }}
          />
          <p className="p__opensans">Gourmet_linx-Official</p>
        </div>
        <div
          className="p__opensans app__findUs"
          style={{ paddingBottom: "1rem" }}
        >
          <BsInstagram
            className="app__findUs-icon"
            style={{ marginRight: "1rem" }}
          />
          <p className="p__opensans">Gourmet_linx-Official</p>
        </div>
        <div
          className="p__opensans app__findUs"
          style={{ paddingBottom: "1rem" }}
        >
          <BsTiktok
            className="app__findUs-icon"
            style={{ marginRight: "1rem" }}
          />
          <p className="p__opensans">Gourmet_linx-Official</p>
        </div>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          working Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00am - 12:00am</p>
        <p className="p__opensans">Sat - Sun: 10:00am - 1:00am</p>
      </div>

      <button className="custom__button" style={{ marginTop: "2rem" }}>
        View More
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
