import Header from "./Components/Header/Header";
import "./App.css";
import { useState } from "react";
import EditPage from "./Components/Edit/EditPage";
import { useSelector } from "react-redux";
import Footer from "./Components/Footer/Footer";
import MakePost from "./Components/Posts/MakePost";

function App() {
  const [edit, setEdit] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  return (
    <div className="App">
      {edit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit} />}
      {pending && <p className="loading">Loading...</p>}
      {!edit && error && <p className="error">Error when fetch data ! </p>}
      <Footer openPost={openPost} setOpenPost={setOpenPost} />
      {openPost && <MakePost />}
    </div>
  );
}

export default App;
