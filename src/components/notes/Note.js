import "./Note.css"
import { noteContext } from "./NoteProvider"
import { useContext } from "react"

export default function Note(props) {
  const { deleteNote } = useContext(noteContext)

  const deleteHandler = () => {
    deleteNote(props.note)
    // console.log(props.note)
  }

  return (
    <div className="note_card">
      <p>{props.note.noteText}</p>
      <button className="delete_note" onClick={deleteHandler}>Delete</button>
    </div>
  )

}

