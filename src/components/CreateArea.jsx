import React, { useState } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Fab from "@material-ui/core/Fab";
import { Slide } from "@mui/material";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd({ ...note, color: selectedColor });
    setNote({
      title: "",
      content: ""
    });
    
    setSelectedColor("");
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  function handleColorChange(event) {
    setSelectedColor(event.target.value);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Note ..."
          rows={isExpanded ? 3 : 1}
        />

        {isExpanded && (
          <div>
            <select value={selectedColor} onChange={handleColorChange}>
              <option value="" disabled hidden>
                Select a color
            </option>
            <option value="#E21818">Red</option>
            <option value="#B3FFAE">Green</option>
            <option value="#30A2FF">Blue</option>
            </select>
          </div>
        )}

        <Slide in={isExpanded} direction="down">
          <Fab onClick={submitNote}>
            <AddOutlinedIcon />
          </Fab>
          </Slide>
      </form>
    </div>
  );
}

export default CreateArea;
