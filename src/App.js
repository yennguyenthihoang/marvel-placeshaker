import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Characters from './components/Characters';
import CharacterDetail from './components/CharacterDetail';

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
        <Route exact path='/characters' component={Characters}/>
        <Route exact path='/characters/characterId' component={CharacterDetail}/>
      </div>
    </Router>
  );
}

export default App;