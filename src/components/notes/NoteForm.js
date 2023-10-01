import './NoteForm.css';
import { useContext } from 'react';
import { noteContext } from './NoteProvider';

export default function NoteForm() {

  const { addNote } = useContext(noteContext)

  const submitHandler = (event) => {
    event.preventDefault();
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