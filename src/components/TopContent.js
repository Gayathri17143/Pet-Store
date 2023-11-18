import React from "react";
// import { Link } from "react-scroll";
import "./TopContent.css";
const TopContent = () => {
  return (
    <div className="topContent">
      <div className="topContent_0">
        <div className="experience__info">
          <h1>
            From Furry Friends<br></br> to Family Members
          </h1>

          <a href="www.google.com">
            <button className="topContent__downloadButton">SHOP NOW</button>
          </a>
          {/* <Link to="projects" smooth={true} duration={500}>
          <button className="topContent__workButton">SHOP NOW</button>
        </Link> */}
        </div>
      </div>
    </div>
  );
};

export default TopContent;
