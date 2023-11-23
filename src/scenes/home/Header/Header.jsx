import React from "react";
import images from "../../../constants/images";

import { SubHeading } from "../../../components";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="The new way to dine" />
      <h1 className="app__header-h1">Savor the Taste of Fine Dining.</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Experience the luxury of fine dining from gourmet Linx, where each meal
        is thoughtfully made just for you and your preferences. Place an order
        or have our chefs visit you to make your meal at your home.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
