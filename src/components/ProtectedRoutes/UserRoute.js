import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';


/**
 * It has the same API as <Route />.
It renders a <Route /> and passes all the props through to it.
It checks if the user is authenticated. If they are, it renders the “component” prop. If not, it redirects the user to /login.
 * @param {*} param0 
 */

const UserRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated() && isAuthenticated().role===0 
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)
export default UserRoute;