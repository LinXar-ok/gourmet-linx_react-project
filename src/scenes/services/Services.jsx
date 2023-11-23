import React from "react";
import { MenuItem, SubHeading } from "../../components";
import { data } from "../../constants";
import "./services.css";
import images from "../../constants/images";

const Services = () => (
  <div className="app__bg" id="menu">
    <div className="app__wrapper section__padding">
      {/*  */}
      <div className="app__wrapper_info">
        <SubHeading title="Menu That Fits Your Palette" />
        <h1 className="headtext__cormorant">Menu & Services</h1>
        <p className="p__opensans">
          Welcome to Gourmet Linx, where culinary excellence meets convenience.
          Our specially curated menu offers a tantalizing array of flavors to
          satisfy your cravings. From gourmet classics to innovative culinary
          creations, our dishes are crafted with the freshest ingredients.
        </p>
      </div>
      {/*  */}
      <div className="app__wrapper_img">
        <img src={images.ingredient} alt="header img" />
      </div>
      {/*  */}
    </div>
    {/*  */}

    <div className="service service__padding">
      <div className="app__wrapper">
        <div className="service-menu_menus service__wrapper_info flex__center">
          <p className="service-menu_heading">Specially For You.</p>
          <div className="service_menu_items">
            {data.menus.map((menu, index) => (
              <MenuItem
                key={menu.title + index}
                title={menu.title}
                desc={menu.desc}
              />
            ))}
          </div>
        </div>
        <div className="app__wrapper_img service__wrapper_img-reverse service__wrapper_img">
          <img src={images.ingredient} alt="header img" />
        </div>
      </div>

      <div className="app__wrapper">
        <div className="service-menu_services flex__center">
          <p className="service-menu_heading">Other Services</p>
          <div className="service_menu_items">
            {data.services.map((service, index) => (
              <MenuItem
                key={service.title + index}
                title={service.title}
                desc={service.desc}
              />
            ))}
          </div>
        </div>
        <div className="app__wrapper_img">
          <div className="service__wrap-img">
            <img src={images.set2} alt="header img" />
            <img src={images.set3} alt="header img" />
            <img src={images.set4} alt="header img" />
            <img src={images.set1} alt="header img" />
          </div>
        </div>
      </div>

      <div className="p__opensans">
        At Gourmet Linx, we take pride in delivering exceptional service and
        unforgettable dining experiences. Let us cater to your culinary desires
        and bring the luxury of fine dining to the comfort of your own home.
        Contact us to book your extraordinary dining experience or
      </div>
    </div>

    {/* <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        <Link to="menu_services">View More</Link>
      </button>
    </div> */}
  </div>
);

export default Services;
