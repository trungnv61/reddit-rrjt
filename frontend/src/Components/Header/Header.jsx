import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="info-container">
          <div className="info-edit">Edit</div>
          <img className="info-ava" src="./redditIcon.png" alt="ava" />
          <div className="info-username">trung</div>
          <div className="info-age">21</div>
          <div className="info-about">I'm a SE student</div>
        </div>
      </header>
    </>
  );
};

export default Header;
