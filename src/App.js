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
import AdminDashboard from './components/Dashboard/Admin';
import UserDashboard from './components/Dashboard/User';
import AdminRoute from './components/ProtectedRoutes/AdminRoute';
import UserRoute from './components/ProtectedRoutes/UserRoute';





function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/register' component={RegisterPage}/>
        <Route exact path='/login' component={LoginPage}/>
        <AdminRoute exact path='/admin/dashboard' component={AdminDashboard}/>
        <UserRoute exact path='/user/dashboard' component={UserDashboard}/>
       
        <Route  component={NotFoundPage}/>
      </Switch>
      </div>
      
    </Router>
  );
}

export default App;
