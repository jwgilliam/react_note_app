import './NoteForm.css';
import { useContext, useEffect } from 'react';
import { noteContext } from './NoteProvider';

export default function NoteForm() {

  const { addNote, selectedNote, editNote } = useContext(noteContext)

  useEffect(() => {
    selectedNote ? document.querySelector(".form_input").value = selectedNote.noteText : document.querySelector(".form_input").value = ""
  }, [selectedNote])

  const submitHandler = (event) => {
    event.preventDefault();

    if (selectedNote) {
      console.log(selectedNote)
      return
    }

    const newNote = {
      noteText: document.querySelector(".form_input").value

    }

    addNote(newNote).then(clearForm)

  }

  const clearForm = () => {
    document.querySelector(".form_input").value = ""
  }
  return (
    <form onSubmit={submitHandler}>
      <input type="hidden" />
      <input type="text" className="form_input" />
      <button className="form_button" >Submit</button>
    </form>
  )
};