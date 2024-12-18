import React from "react";
import { useSelector } from "react-redux";
import DraggableObject from "./DraggableObject";

const Board = () => {
  const objects = useSelector((state) => state.objects);
  
  return (
    <div className="board">
      <h2 className="boardTitle">Карта заведения</h2>
      {objects.map((object) => (
        <DraggableObject key={object.id} object={object} />
      ))}
    </div>
  );
};

export default Board;