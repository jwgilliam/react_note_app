import './App.css';
import NoteList from './components/notes/NoteList';
import NoteForm from './components/notes/NoteForm';
import { NoteProvider } from './components/notes/NoteProvider';
import UserFormComponent from './components/users/UserForm';

function App() {
  return (
    <NoteProvider>
      <UserFormComponent />
      <NoteList />
      <NoteForm />

    </NoteProvider>
  );
}

export default App;
