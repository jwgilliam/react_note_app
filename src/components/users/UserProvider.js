import { useState, useEffect, createContext } from "react"


export const UserContext = createContext()

export function UserProvider(props) {

  const [users, setUsers] = useState()

  useEffect(() => {
    getUsers()
  }, [])

  const loginUser = () => {

  }

  const getUsers = () => {
    return fetch("http://localhost:8088/users")
      .then((response) => response.json())
      .then((response) => setUsers(response))
  }

  return (
    <UserContext.Provider value={{ users, loginUser, getUsers }}>{props.children}</UserContext.Provider>
  )
}