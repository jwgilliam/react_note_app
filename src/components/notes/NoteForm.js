import './NoteForm.css';

export default function NoteForm() {

  const buttonHandler = (event) => {
    event.preventDefault();
    console.log("button clicked")



  }
  return (
    <form>
      <input type="text" className="form_input" />
      <button className="form_button" onClick={buttonHandler}>Submit</button>
    </form>
  )
};