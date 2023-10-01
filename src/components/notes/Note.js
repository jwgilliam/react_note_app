import "./Note.css"

export default function Note(props) {
  return (
    <div className="note_card">
      <p>{props.note}</p>
    </div>
  )
}