import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags, desc, pre }) => (
  <div className="app_menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant direction" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>

      <div className="app__menuitem-dash" />

      <div className="app__menuitem-price">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {price}
        </p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p
        className="p__opensans"
        style={{ color: "#ffff", marginLeft: -35, fontWeight: "bold" }}
      >
        {pre}
      </p>
      {Array.isArray(tags) ? (
        tags.map((tag, index) => (
          <p key={index} className="p__opensans" style={{ color: "#AAA" }}>
            {tag}
          </p>
        ))
      ) : (
        <p className="p__opensans" style={{ color: "#AAA" }}>
          {tags}
        </p>
      )}
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: "#AAA" }}>
        {desc}
      </p>
    </div>
  </div>
);

export default MenuItem;
