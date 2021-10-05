import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import CharacterDetail from './components/CharacterDetail';
import Characters from './components/Characters';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="header">
          <Link to="/characters"><h4>The Marvel Characters</h4></Link>
        </div>
        <Switch>
          <Route exact path='/characters' component={Characters}>
            <div>
                <Characters/>
            </div>
          </Route>
          <Route exact path="/characters/:characterId" component={CharacterDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;