import React from "react";
import Input from "../InputField/Input";
import { useState } from "react";
import "./post.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";
const MakePost = ({ setOpenPost }) => {
  const [title, setTitle] = useState("Add a title");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [desc, setDesc] = useState("Add some description");
  const tags = ["None", "Quotes", "Mood", "Shitpost", "Tech"];
  const dispatch = useDispatch();
  const handlePost = () => {
    setOpenPost(false);
    const newPost = {
      title: title,
      description: desc,
      tags: selectedIndex,
    };
    dispatch(createPost(newPost));
  };

  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>
          Post
        </p>
      </div>
      <Input
        data={title}
        inputType="textarea"
        setData={setTitle}
        label="Title"
        classStyle="makepost-title"
      />
      <Input
        data={desc}
        inputType="textarea"
        setData={setDesc}
        label="Description"
        classStyle="makepost-desc"
      />
      <label>Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, index) => (
          <button
            key={index}
            className={`${
              selectedIndex === index
                ? `makepost-tags-selected`
                : `makepost-tags-${tag}`
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
};

export default MakePost;
