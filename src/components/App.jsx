import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import EditModal from "./EditModal";

export const NoteContext = React.createContext();

function App() {
  const [notes, setNotes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState();

  const selectedNote = notes.find((note, index) => index === selectedNoteId);

  const noteContextValue = {
    handleNoteSelected: handleNoteSelected,
    handleOpen: handleOpen,
  };

  function handleNoteSelected(id) {
    setSelectedNoteId(id);
  }

  // const handleOpen = (id) => {
  //   handleNoteSelected(id);
  //   setIsOpen(true);
  // };
  function handleOpen(id) {
    handleNoteSelected(id);
    setIsOpen(true);
  }

  const handleClose = () => {
    handleNoteSelected(undefined);
    setIsOpen(false);
  };

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function handleNoteChange(id, note) {
    const newNotes = [...notes];
    const index = newNotes.findIndex((_, index) => index === id);
    newNotes[index] = note;
    setNotes(newNotes);
    console.log(notes);
  }

  return (
    <div>
      <NoteContext.Provider value={noteContextValue}>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              note={noteItem}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
              open={isOpen}
              handleEditClose={handleClose}
              notes={notes}
            />
          );
        })}
        {selectedNote && (
          <EditModal
            id={selectedNoteId}
            open={isOpen}
            handleClose={handleClose}
            handleChange={handleNoteChange}
            note={selectedNote}
          />
        )}

        <Footer />
      </NoteContext.Provider>
    </div>
  );
}

export default App;
