import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AddNote from './components/AddNote'
import Notes from './components/Notes'
import NoteContext, { NoteProvider } from './components/NoteContext'
function App() {
  return (
    <div className = "main">
    <NoteProvider>
      <Router>
      <h1>Jay's iLog</h1>
      <div className = "nav">
            <ul class = "menu">
              <li>
                <Link to="/add">Add A Note</Link>
              </li>
              <li>
                <Link to="/view">View Notes</Link>
              </li>
            </ul>
            </div>
           <div className="App">
            <Switch>
              <Route exact path='/add' component={AddNote}></Route>
              <Route exact path='/view' component={Notes}></Route>
            </Switch>
          </div>
       </Router>
    </NoteProvider>
    </div>
  );
}

export default App;
