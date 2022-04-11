import Header from "./Components/Header/Header";
import "./App.css";
import { useState } from "react";
import EditPage from "./Components/Edit/EditPage";
import { useSelector } from "react-redux";
import Footer from "./Components/Footer/Footer";
import MakePost from "./Components/Posts/MakePost";
import Posts from "./Components/Posts/Posts";

function App() {
  const [edit, setEdit] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  return (
    <div className="App">
      {edit ? (
        <EditPage setEdit={setEdit} />
      ) : !edit && !openPost ? (
        <>
          <Header setEdit={setEdit} />
          <div className="post-container">
            <Posts />
          </div>
          <Footer openPost={openPost} setOpenPost={setOpenPost} />
        </>
      ) : (
        <>
          <Header setEdit={setEdit} />
          <MakePost setOpenPost={setOpenPost} />
        </>
      )}
      {pending && <p className="loading">Loading...</p>}
      {!edit && error && <p className="error">Error when fetch data ! </p>}
    </div>
  );
}

export default App;
