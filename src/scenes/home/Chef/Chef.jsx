import React from "react";
import { images } from "../../../constants";
import { SubHeading } from "../../../components";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="From our chefs" />
      <h1 className="p__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            At gourmet Linx, we believe in the power of food to create memorable
            experiences and nourish both body and soul.
          </p>
        </div>
        <p className="p__opensans">
          With every dish we prepare, we seek to celebrate the freshness of
          ingredients, honor culinary traditions, and ignite a passion for
          exceptional flavors. Our commitment to impeccable quality, creativity,
          and personalized service drives us to ensure that every aspect of your
          dining experience exceeds your expectations. Trust us to take you on a
          gastronomic journey that lingers in your memory long after the last
          bite.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Linux Kex</p>
        <p className="p__opensans">Founder</p>
        <img src={images.signature} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
