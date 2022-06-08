import React, { useContext } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { NoteContext } from "./App";

function Note(props) {
  const { handleOpen } = useContext(NoteContext);

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div style={{ left: "50px" }}>
        <button onClick={handleClick}>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </button>
        <button onClick={() => handleOpen(props.id)}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </button>
      </div>
    </div>
  );
}

export default Note;
