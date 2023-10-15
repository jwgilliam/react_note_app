import "./UserForm.css"
import { useContext } from "react"
import { UserContext } from "./UserProvider"
import { useState } from "react"

export default function UserForm() {

  const [isSignup, setIsSignup] = useState(false)

  const { users, loginUser } = useContext(UserContext)

  const loginHandler = (event) => {
    event.preventDefault()
    let formData = getFormData()
    const foundUser = users.find(registeredUser => registeredUser.userName === formData.userName && registeredUser.password === formData.password)
    if (foundUser) {
      loginUser(foundUser)
      clearForm()
    }

    // console.log(foundUser)
  }

  const registrationHandler = () => {
    setIsSignup(true)
  }

  const clearForm = () => {
    document.querySelector(".user_name").value = ""
    document.querySelector(".user_password").value = ""
  }

  const getFormData = () => {
    const form = {
      userName: document.querySelector(".user_name").value,
      password: document.querySelector(".user_password").value
    }
    return form
  }
  return (
    <>
      <form className="user_login" onSubmit={loginHandler}>
        <input type="hidden"></input>
        <input className="user_name" type="text" placeholder="user name" required></input>
        <input className="user_password" type="password" placeholder="password" required></input>
        {isSignup ? <input type="email" className="user_email" required placeholder="e-mail"></input> : null}
        <button className="login_button">Login</button>
      </form>
      <button className="register_button" onClick={registrationHandler}>Sign Up!</button>
    </>
  )
}