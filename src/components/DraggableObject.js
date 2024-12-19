import React from "react";
import Draggable from "react-draggable";
import { useDispatch } from "react-redux";
import { updatePosition, deleteObject } from "../redux/actions";
import tableImage from "../images/table.jpg";
import chairImage from "../images/chair.png";
import partitionImage from "../images/partition.png";

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
        {object.type === "table" ? <img src={tableImage} alt="table" />
          : object.type === "chair" ? <img src={chairImage} alt="chair" />
          : <img src={partitionImage} alt="partition" />}
        <button className="delete-button" onMouseDown={handleDelete}>x</button>
      </div>
    </Draggable>
  );
};

export default DraggableObject;
