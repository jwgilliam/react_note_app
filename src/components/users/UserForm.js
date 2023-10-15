import "./UserForm.css"
import { useContext } from "react"
import { UserContext } from "./UserProvider"

export default function UserForm() {

  const { users, loginUser } = useContext(UserContext)

  const loginHandler = (event) => {
    event.preventDefault()
    let formData = getFormData()
    const foundUser = users.find(registeredUser => registeredUser.userName === formData.userName && registeredUser.password === formData.password)
    if (foundUser) {
      loginUser(foundUser)
    }
    console.log(foundUser)
  }

  const getFormData = () => {
    const form = {
      userName: document.querySelector(".user_name").value,
      password: document.querySelector(".user_password").value
    }
    return form
  }
  return (
    <form className="user_login" onSubmit={loginHandler}>
      <input type="hidden"></input>
      <input className="user_name" type="text" placeholder="user name" required></input>
      <input className="user_password" type="password" placeholder="password" required></input>
      <button className="login_button">Login</button>
    </form>
  )
}