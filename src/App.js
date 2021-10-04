import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
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
      </div>
    </Router>
  );
}

export default App;