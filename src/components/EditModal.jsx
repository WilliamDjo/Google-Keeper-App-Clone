import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
// import Input from "./formElements/Input";
// import Textarea from "./formElements/Textarea";

function EditModal(props) {
  const { open, handleClose, title, content, handleChange, id, note } = props;

  // const [note, setNote] = useState({
  //   title: title,
  //   content: content
  // });

  console.log(title, content);
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <form className="create-note editModal">
          <input
            style={{ fontWeight: "bolder" }}
            // name="title"
            onChange={(e) =>
              handleChange(id, { ...note, ...{ title: e.target.value } })
            }
            // value={title}
            value={note.title}
            placeholder="title"
            // autoFocus
          />
          <textarea
            style={{ fontWeight: "lighter" }}
            // onClick={expand}
            name="content"
            onChange={(e) =>
              handleChange(id, {
                ...note,
                ...{ content: e.target.value },
              })
            }
            value={note.content}
            placeholder="Take a note..."
            rows={3}
          />

          <Fab onClick={handleClose}>
            <CloseIcon />
          </Fab>
        </form>
      </Modal>
    </>
  );
}

export default EditModal;
