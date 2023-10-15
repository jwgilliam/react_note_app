import './App.css';
import NoteList from './components/notes/NoteList';
import NoteForm from './components/notes/NoteForm';
import { NoteProvider } from './components/notes/NoteProvider';
import UserForm from './components/users/UserForm';
import { UserProvider } from './components/users/UserProvider';

function App() {
  return (
    <NoteProvider>
      <UserProvider>
        <UserForm />
        <NoteList />
        <NoteForm />
      </UserProvider>
    </NoteProvider>
  );
}

export default App;
