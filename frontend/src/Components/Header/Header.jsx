import React from "react";
import { useSelector } from "react-redux";
import "./header.css";

const Header = ({ setEdit }) => {
  const handleEdit = () => {
    setEdit(true);
  };
  const user = useSelector((state) => state.user);
  const userTheme = useSelector((state) => state.userTheme);
  return (
    <>
      <header
        style={{
          backgroundColor: `${userTheme.themeBackgroundColor}`,
          backgroundImage: `linear-gradient(180deg,${userTheme.themeBackgroundColor} , 2%,${userTheme.themeBackgroundColor}, 65%, #181818 100%)`,
        }}
      >
        <div className="info-container">
          <div className="info-edit" onClick={handleEdit}>
            Edit
          </div>
          <img className="info-ava" src={user.avaUrl} alt="ava" />
          <div className="info-username">{user.name}</div>
          <div className="info-age">{user.age}</div>
          <div className="info-about">{user.about}</div>
        </div>
      </header>
    </>
  );
};

export default Header;
