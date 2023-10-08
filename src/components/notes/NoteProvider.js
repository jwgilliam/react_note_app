import { useState, useEffect, createContext } from "react"

export const noteContext = createContext()


export function NoteProvider(props) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes()
    console.log("getting notes")
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

  const deleteNotes = (note) => {
    return fetch(`http://localhost:8088/notes/${note.id}`, {
      method: "Delete",
    })
      .then(getNotes)
  }

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNotes }}>{props.children}</noteContext.Provider>
  )


}