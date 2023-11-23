import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../../constants/images";

import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const handleClick = (path, section) => {
    // setActiveSection(section);
    if (pathname !== "/") {
      navigate("/");
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.linx} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          {" "}
          <a href="#home" onClick={() => handleClick("/", "home")}>
            Home
          </a>
        </li>
        <li className="p__opensans">
          {" "}
          <a href="#about" onClick={() => handleClick("/", "about")}>
            About
          </a>
        </li>
        <li className="p__opensans">
          {" "}
          <a href="#menu" onClick={() => handleClick("/", "menu")}>
            Menu
          </a>
        </li>
        <li className="p__opensans">
          {" "}
          <a href="#awards" onClick={() => handleClick("/", "awards")}>
            Awards
          </a>
        </li>
        <li className="p__opensans">
          {" "}
          <a href="#contact" onClick={() => handleClick("/", "contact")}>
            Contact
          </a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Appointment
        </a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={35}
          style={{ marginBottom: "20" }}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={30}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul
              className="app__navbar-smallscreen_links"
              onClick={() => setToggleMenu(false)}
            >
              <li className="p__opensans">
                {" "}
                <a href="#home" onClick={() => handleClick("/", "home")}>
                  Home
                </a>
              </li>
              <li className="p__opensans">
                {" "}
                <a href="#about" onClick={() => handleClick("/", "about")}>
                  About
                </a>
              </li>
              <li className="p__opensans">
                {" "}
                <a href="#menu" onClick={() => handleClick("/", "menu")}>
                  Menu
                </a>
              </li>
              <li className="p__opensans">
                {" "}
                <a href="#awards" onClick={() => handleClick("/", "awards")}>
                  Awards
                </a>
              </li>
              <li className="p__opensans">
                {" "}
                <a href="#contact" onClick={() => handleClick("/", "contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
