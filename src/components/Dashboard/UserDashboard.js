import React from 'react';
import Layout from '../Layout';
import {isAuthenticated} from '../../utils/auth';



const UserDashboard=()=>{

    //const {user:{token}}=isAuthenticated();
    return (
        <Layout title='Dashboard' description='User Dashboard' className="container">
            <div className="card mb-5">
                <h3 className="card-header">User Profile</h3>
                <ul classname="list-group">
                    <li className="list-group-item">username</li>
                    <li className="list-group-item">email</li>
                    <li className="list-group-item">roles</li>
                </ul>
            </div>

            <div className="card mb-">
                <h3 className="card-header">Orders History</h3>
                <ul className="list-group">
                      <li className="list-group-item">username</li>
                    
                </ul>

            </div>

        </Layout>
    )
}
export default UserDashboard;