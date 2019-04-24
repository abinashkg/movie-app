import React from 'react'
import { Route, Link } from 'react-router-dom';
import Posts from './Post';

class Dashboard extends React.Component {
  render() {
    return (
        <div>
        <h1>Dashboard</h1>
        <ul className="ml-auto">
            <li><Link to={'/users/Abinash'} className="nav-link"> User Profile Informations </Link></li>
            <li><Link to={'/posts'} className="nav-link">User Posts</Link></li>
        </ul>
        <Route path="/posts" component={Posts} />
      </div>
    )
  }
}

export default Dashboard