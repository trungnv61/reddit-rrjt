import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../InputField/Input";
import { updatedUserTheme } from "../../redux/apiRequests";
import { updatedUser } from "../../redux/apiRequests";
import "./edit.css";
const EditPage = ({ setEdit }) => {
  const avaUrl = [
    "    https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    "  https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d        ",
    "   https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c       ",
    "    https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38       ",
    "   https://i.redd.it/7ipyf6pvqac61.png       ",
    "    https://i.redd.it/ksmb0m02ppy51.png       ",
    "      https://i.redd.it/mozfkrjpoa261.png     ",
    "        https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7   ",
    "       https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990    ",
  ];

  const user = useSelector((state) => state.user);
  const userTheme = useSelector((state) => state.userTheme);
  const dispatch = useDispatch();

  // Five input = Five useState
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState(userTheme.themeBackgroundColor);
  const [url, setUrl] = useState(user.avaUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const updateUser = {
      name: name,
      age: age,
      about: about,
      avaUrl: url,
    };
    updatedUser(updateUser, dispatch);
    const updateThemes = {
      themeBackgroundColor: theme,
    };
    updatedUserTheme(updateThemes, dispatch);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="edit-container">
          <button className="close">SAVE</button>
          <div className="edit-profile">Edit profile</div>
          <div className="input-container">
            <Input label="Display name" data={user.name} setData={setName} />
            <Input label="Age" data={user.age} setData={setAge} />
            <Input
              label="About"
              data={user.about}
              setData={setAbout}
              inputType="textarea"
              classStyle="input-about"
            />
          </div>
          <label>Profile Picture</label>
          <div className="input-image-container">
            {avaUrl.map((url, index) => (
              <img
                onClick={(e) => setUrl(e.target.src)}
                src={url}
                key={index}
                className="input-image"
                alt=""
              />
            ))}
          </div>
          <div className="theme-container">
            <label>Theme</label>
            <input
              type="color"
              className="theme-color"
              onChange={(e) => setTheme(e.target.value)}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default EditPage;
