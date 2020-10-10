import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

//Components
import Header from './components/Header/Header';

//Pages
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import NotFoundPage from './components/NotFoundPage';




function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/register' component={RegisterPage}/>
        <Route exact path='/login' component={LoginPage}/>
        <Route  component={NotFoundPage}/>
      </Switch>
      </div>
      
    </Router>
  );
}

export default App;
