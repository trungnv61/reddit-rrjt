import React from "react";
import "./footer.css";
const Footer = ({ openPost, setOpenPost }) => {
  return (
    <footer>
      <div className="footer-title" onClick={() => setOpenPost(!openPost)}>
        {openPost ? "x" : "+"}
      </div>
    </footer>
  );
};

export default Footer;
