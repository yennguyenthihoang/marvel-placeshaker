import React from 'react';
import {BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom';
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
      <Switch>
        <Route exact path='/characters' component={Characters}/>
        <Route exact path="/characters/:characterId" component={CharacterDetail} />
      </Switch>
      
    </Router>
  );
}

export default App;