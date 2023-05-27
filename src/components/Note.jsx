import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";

function Note(props) {
  const [color, setColor] = useState(props.selectedColor);

  function changeColor(event) {
    setColor(event.target.value);
  }

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note" style={{ backgroundColor: color }}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
       <Fab onClick={handleClick}>
            <DeleteIcon />
        </Fab>
          
      <div>
      <select value={color} onChange={changeColor} className="notesection">
        <option value="" disabled hidden>
        Color
        </option>
        <option value="#E21818">Red</option>
        <option value="#B3FFAE">Green</option>
        <option value="#30A2FF">Blue</option>
        </select>
      </div>
    </div>
  );
}

export default Note;
