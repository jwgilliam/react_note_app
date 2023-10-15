export default function UserFormComponent() {
  return (
    <form className="user_login">
      <input className="user_name" type="text" placeholder="user name" required></input>
      <input className="user_password" type="password" placeholder="password" required></input>
      <button className="login_button">Login</button>
    </form>
  )
}