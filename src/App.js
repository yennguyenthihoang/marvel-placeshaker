import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import CharacterDetail from './components/CharacterDetail';
import Characters from './components/Characters';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="header">
          <h4>The Marvel Characters</h4>
        </div>
        <div>
            <Characters/>
        </div>
      </div>
      <Route exact path='/characters' component={Characters}/>
      <Route exact path="/characters/:characterId" component={CharacterDetail} />
    </Router>
  );
}

export default App;