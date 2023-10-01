import logo from './logo.svg';
import './App.css';
import Note from './components/notes/Note';
import NoteList from './components/notes/NoteList';
import NoteForm from './components/notes/NoteForm';
import { NoteProvider } from './components/notes/NoteProvider';

function App() {
  return (
    <NoteProvider>
      <NoteList />
      <NoteForm />

    </NoteProvider>
  );
}

export default App;
