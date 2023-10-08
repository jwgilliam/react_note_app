import "./Note.css"
import { noteContext } from "./NoteProvider"
import { useContext } from "react"

export default function Note(props) {
  const { deleteNote, setSelectedNote } = useContext(noteContext)

  const deleteHandler = () => {
    deleteNote(props.note)
    // console.log(props.note)
  }

  const editHandler = () => {
    setSelectedNote(props.note)
  }

  return (
    <div className="note_card">
      <p>{props.note.noteText}</p>
      <button className="delete_note" onClick={deleteHandler}>Delete</button>
      <button className="edit_note" onClick={editHandler}>Edit</button>
    </div>
  )

}

