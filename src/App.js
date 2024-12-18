import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";
import { setLayout } from "./redux/actions";
import { saveAs } from "file-saver";

const App = () => {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.objects);

  const handleSave = () => {
    const blob = new Blob([JSON.stringify(layout)], { type: "application/json" });
    saveAs(blob, "layout.json");
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const loadedLayout = JSON.parse(event.target.result);
      dispatch(setLayout(loadedLayout));
    };
    reader.readAsText(file);
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Board />
        <div className="controls">
          <button className="button buttonSave" onClick={handleSave}>Сохранить</button>
          <input className="input" type="file" onChange={handleLoad} />
        </div>
      </div>
    </div>
  );
};

export default App;