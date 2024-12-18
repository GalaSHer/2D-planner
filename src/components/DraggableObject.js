import React from "react";
import Draggable from "react-draggable";
import { useDispatch } from "react-redux";
import { updatePosition, deleteObject } from "../redux/actions";

const DraggableObject = ({ object }) => {
  const dispatch = useDispatch();

  const handleStop = (e, data) => {
    dispatch(updatePosition(object.id, { x: data.x, y: data.y }));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteObject(object.id));
  };

  return (
    <Draggable defaultPosition={object.position} onStop={handleStop} bounds="parent"  cancel=".delete-button">
      <div className={`object ${object.type}`}>
        {object.type === "table" ? <img src="/images/table.jpg" alt="table" />
          : object.type === "chair" ? <img src="/images/chair.png" alt="chair" />
          : <img src="/images/partition.png" alt="partition" />}
        <button className="delete-button" onMouseDown={handleDelete}>x</button>
      </div>
    </Draggable>
  );
};

export default DraggableObject;
