import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';


/**
 * Function to protect adminDashboard
 * 
 * Descructure props:
 * assigncomponent props to "Component"
 * spread props proerty and assign to variable rest
 * 
 * It renders a <Route /> and passes all the props through to it.
 * It checks if the user is authenticated. If they are, it renders the “Component” prop. 
 * If not, it redirects the user to /login.
 */

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated() && isAuthenticated().role===1 
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)
export default AdminRoute;