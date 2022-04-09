import Header from "./Components/Header/Header";
import "./App.css";
import { useState } from "react";
import EditPage from "./Components/Edit/EditPage";
import { useSelector } from "react-redux";

function App() {
  const [edit, setEdit] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  return (
    <div className="App">
      {edit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit} />}
      {pending && <p className="loading">Loading...</p>}
      {!edit && error && <p className="error">Error when fetch data ! </p>}
    </div>
  );
}

export default App;
