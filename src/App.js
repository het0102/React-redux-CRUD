import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import InputSection from './components/InputSection';
import NotesSection from './components/NotesSection';
import NoteDetail from './NoteDetail'
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <div className="container">
      <Router>
        <Switch>
          <Route path="/noteDetails/:id" component={NoteDetail} />
        </Switch>
      </Router>

        <h1>My Notes</h1>
        <InputSection />
        <div className="line"></div>
        <NotesSection />
      </div>
    </Provider>    
  );
}

export default App;
