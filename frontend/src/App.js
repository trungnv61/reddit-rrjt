import Header from "./Components/Header/Header";
import "./App.css";
import { useState } from "react";
import EditPage from "./Components/Edit/EditPage";

function App() {
  const [edit, setEdit] = useState(false);
  return (
    <div className="App">
      {edit ? <EditPage /> : <Header setEdit={setEdit} />}
    </div>
  );
}

export default App;
