import React from "react";
import Input from "../InputField/Input";
import { useState } from "react";
import "./post.css";
const MakePost = () => {
  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add some description");
  const tags = [];
  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save">Post</p>
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
      <div className="makepost-tags"></div>
    </section>
  );
};

export default MakePost;
