import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import NoteContext, { NoteProvider } from "./components/NoteContext";
function App() {
  return (
    <div className="main">
      <NoteProvider>
        <h1>Jay's iLog</h1>
        <AddNote/>
        <Notes/>
      </NoteProvider>
    </div>
  );
}

export default App;
