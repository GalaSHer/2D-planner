import React from "react";
import { useDispatch } from "react-redux";
import { addObject } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleAddObject = (type) => {
    const newObject = {
      id: uuidv4(),
      type,
      position: { x: 50, y: 50 },
    };
    dispatch(addObject(newObject));
  };

  return (
    <div className="sidebar">
      <h3 className="sidebarTitle">Объекты</h3>
      <button className="button" onClick={() => handleAddObject("table")}>Добавить стол</button>
      <button className="button" onClick={() => handleAddObject("chair")}>Добавить стул</button>
      <button className="button" onClick={() => handleAddObject("partition")}>Добавить перегородку</button>
    </div>
  );
};

export default Sidebar;