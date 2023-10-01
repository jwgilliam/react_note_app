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
  return (
    <noteContext.Provider value={{ notes }}>{props.children}</noteContext.Provider>
  )


}