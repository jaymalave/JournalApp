import './App.css';
import AddNote from './components/AddNote'
import Notes from './components/Notes'
import NoteContext, { NoteProvider } from './components/NoteContext'
function App() {
  return (
    <NoteProvider>
    <div className="App">
     <h1>Jay's iLog</h1>
     <AddNote/>
     <Notes/>
    </div>
    </NoteProvider>
  );
}

export default App;
