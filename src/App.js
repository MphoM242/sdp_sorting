import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import mainPage from './components/mainPage';
import practicePage from './components/practicePage';
import testPage from './components/testPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/practice" component={practicePage} />
        <Route path="/test" component={testPage} />
        <Route path="/" component={mainPage} />
      </Switch>
    </Router>
  );
}

export default App;
