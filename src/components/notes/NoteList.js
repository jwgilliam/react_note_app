import './NoteList.css'
import Note from './Note'
import { noteContext } from './NoteProvider'
import { useContext } from 'react'

export default function NoteList() {
  const { notes } = useContext(noteContext)
  return (

    <div className='noteList'>

      {notes.map((note) => {
        return <Note note={note.noteText} key={note.id} />
      })}
    </div>
  )
}