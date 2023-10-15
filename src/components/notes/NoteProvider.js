import { useState, useEffect, createContext } from "react"


export const noteContext = createContext()


export function NoteProvider(props) {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState();


  useEffect(() => {
    getNotes()
    // console.log("getting notes")
  }, [])

  const getNotes = () => {
    return fetch("http://localhost:8088/notes")
      .then((response) => response.json())
      .then((response) => setNotes(response))
  }

  const addNote = (note) => {
    return fetch("http://localhost:8088/notes", {
      method: "Post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
    })
      .then(getNotes)
  }

  const deleteNote = (note) => {
    return fetch(`http://localhost:8088/notes/${note.id}`, {
      method: "Delete",
    })
      .then(getNotes)
  }

  const editNote = (note) => {
    return fetch(`http://localhost:8088/notes/${note.id}`, {
      method: "Put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
    })
      .then(getNotes)
  }

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, selectedNote, setSelectedNote }}>{props.children}</noteContext.Provider>
  )


}