import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import mainPage from './components/mainPage';
import practicePage from './components/practicePage';
import testPage from './components/testPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/practice">
            <practicePage />
          </Route>
          <Route path="/test">
            <testPage />
          </Route>
          <Route path="/">
            <mainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
