import React from "react";
import images from "../../../constants/images";
import { Link } from "react-router-dom";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to gourmet Linx, where exceptional culinary experiences and
          extraordinary services meet. We are more than just a mobile
          restaurant; we are a team of dedicated professionals passionate about
          providing you with an unforgettable dining journey.
        </p>
        <button type="button" className="custom__button">
          <Link to="/aboutUs">Know More</Link>
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Mission</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          At gourmet Linx, our mission is to bring the restaurant experience
          right to your doorstep. From our carefully curated menu of
          mouthwatering dishes to our personalized services, we believe in
          surpassing your expectations and creating moments of pure gastronomic
          delight.
        </p>
        <button type="button" className="custom__button">
          <Link to="/aboutUs">Know More</Link>
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
