import React, { Component } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Movies from "./components/Movies";
import "./App.css";
import Login from "./components/Login";
import Notfound from "./components/NotFound";
import Users from "./components/Users";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="/">Movie App</a>
          <ul className="nav navbar-nav mr-auto navbar-right">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/movies'} className="nav-link">Contact</Link></li>
          </ul>
          <ul className="nav navbar-nav  navbar-left">
            <li><Link to={'/dashboard'} className="nav-link"> Dashboard </Link></li>
            <li><Link to={'/logout'} className="nav-link">Logout</Link></li>
          </ul>
        </nav>
        <div className="container mt-5">
          <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/logout' component={Logout} />
              <PrivateRoute path='/' exact component={Movies} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/users/:id" component={Users} />
              <Route component={Notfound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;