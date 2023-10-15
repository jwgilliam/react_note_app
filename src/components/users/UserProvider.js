import { useState, useEffect, createContext } from "react"


export const UserContext = createContext()

export function UserProvider(props) {

  const [users, setUsers] = useState()
  const [user, setUser] = useState()

  useEffect(() => {
    getUsers()
  }, [])

  const loginUser = (user) => {
    setUser(user)
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